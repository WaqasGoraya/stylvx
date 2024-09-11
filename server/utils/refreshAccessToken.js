import verifyRefreshToken from "./verifyRefreshToken.js";
import userModel from '../models/users.js';
import refreshTokenModel from '../models/userrefreshToken.js';
import generateTokens from "./generateTokens.js";

const refreshAccessToken = async (req, res) => {
    try {
        const oldRefreshToken = req.cookies.refreshToken;
        // Verify Refresh Token is valid or not
        const { tokenDetails, error } = await verifyRefreshToken(oldRefreshToken)
    
        if (error) {
          return res.status(401).send({ status: "failed", message: "Invalid refresh token" });
        }
        // Find User based on Refresh Token detail id 
        const user = await userModel.findById(tokenDetails._id)
    
        if (!user) {
          return res.status(404).send({ status: "failed", message: "User not found" });
        }
    
        const userRefreshToken = await refreshTokenModel.findOne({ userId: tokenDetails._id })
       
        if (oldRefreshToken !== userRefreshToken.token) {
          return res.status(401).send({ status: "failed", message: "Unauthorized access" });
        }

        // Generate new tokens
        const { accesstoken, refreshtoken } = await generateTokens(user);
      
        // Optionally: update the user's refresh token in the database (token rotation)
    
        // Return new tokens (you may return in body if necessary)
        return {
            newAccessToken: accesstoken,
            newRefreshToken: refreshtoken
        };
    } catch (error) {
        console.error('Error refreshing access token:', error);

        return res.status(500).send({
            status: "Failed",
            message: "Internal server error"
        });
    }
};

export default refreshAccessToken;
