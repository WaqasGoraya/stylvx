import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
import refreshTokenModel from '../models/userrefreshToken.js';

const generateTokens = async (user) => {
    try {
        const payload = {_id: user._id, email: user.email}

        // Access Token
        const accesstoken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, {expiresIn: '60m'});

        // Refresh Token
        const refreshtoken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_SECRET, {expiresIn: '7d'});

        // Find user refresh token and delete if exist already
        const userRefreshToken = await refreshTokenModel.findOneAndDelete({userId: user._id});

        // Save new refresh token
        await new refreshTokenModel({userId: user._id, token: refreshtoken}).save();

        // return data
        // return Promise.resolve({accesstoken,refreshtoken});
        return {
            accesstoken,
            refreshtoken
        }

    } catch (error) {
        console.error('Error in generateTokens:', error);

        // Rethrow the error so the calling function can handle it
        throw new Error('Unable to process your request to generate tokens');
    }
}

export default generateTokens;