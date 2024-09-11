import jwt from 'jsonwebtoken';
import refreshTokenModel from '../models/userrefreshToken.js';

const verifyRefreshToken = async (refreshToken) => {
    try {
        // Find the refresh token in the database
        const userRefreshToken = await refreshTokenModel.findOne({ token: refreshToken });

        // If token is not found in the database
        if (!userRefreshToken) {
            return {
                error: true,
                message: 'Refresh token not found in the database'
            };
        }

        // Verify the refresh token
        const tokenDetails = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);

        return {
            error: false,
            message: 'Valid refresh token',
            tokenDetails
        };
    } catch (error) {
        // Differentiate between JWT verification errors and other errors
        if (error.name === 'TokenExpiredError') {
            return {
                error: true,
                message: 'Refresh token expired'
            };
        } else if (error.name === 'JsonWebTokenError') {
            return {
                error: true,
                message: 'Invalid refresh token'
            };
        }

        // Handle other errors such as database issues
        console.error('Error verifying refresh token:', error);
        return {
            error: true,
            message: 'Internal server error'
        };
    }
};

export default verifyRefreshToken;
