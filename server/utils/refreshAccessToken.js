import verifyRefreshToken from "./verifyRefreshToken.js";
import userModel from '../models/users.js';
import refreshTokenModel from '../models/userrefreshToken.js';
import generateTokens from "./generateTokens.js";
const refreshAccessToken = async(req,res) => {
    try {
        
        const oldRefreshToken = req.cookies.refreshToken;

        // Verify old refresh token 
       const {tokenDetails, error} = await verifyRefreshToken(oldRefreshToken);
      
       if(error){
        res.status(401).send({
            status: "Failed",
            message: "Invalid refresh token"
        });
       }   
       // Find user by tokendetails
        const user = await userModel.findById(tokenDetails._id);

         if(!user){
             res.status(404).send({
                 status: "Failed",
                 message: "User not found"
             })
         }
 
         // Find user id in userrefreshtoken Model
         const userRefreshToken = await refreshTokenModel.findOne({userId: tokenDetails._id});
        
         //  Check token
         if(oldRefreshToken !== userRefreshToken.token){
            res.status(401).send({
                status:"Failed",
                message: "Unauthorized Access"
            })
         }

        //  Generate new Token
        const {accesstoken,refreshtoken} = await generateTokens(user);

        return {
            newAccessToken: accesstoken,
            newRefreshToken: refreshtoken
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "Failed",
            message: "Internal server error"
        });
    }
}

export default refreshAccessToken;