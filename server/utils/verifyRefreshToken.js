import jwt from 'jsonwebtoken';
import refreshTokenModel from '../models/userrefreshToken.js';

const verifyRefreshToken = async (refreshToken) => {
    try {
        // Find the refresh token in the database
        const userRefreshToken = await refreshTokenModel.findOne({ token: refreshToken });
      
        // If token is not found in the database
        if (!userRefreshToken) {
            throw { error: true, message: "Invalid refresh token" };
        }

        // Verify the refresh token
        const tokenDetails = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);
 
        return {
            tokenDetails,
            error: false,
            message: 'Valid refresh token',
        };
    } catch (error) {
        // If any error occurs during verification or token not found, reject with an error
        throw { error: true, message: "Invalid refresh token" };
    }
};

export default verifyRefreshToken;
