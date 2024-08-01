import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
import refreshTokenModel from '../models/userrefreshToken.js';
import { response } from 'express';

const generateTokens = async (user) => {
    try {
        const payload = {_id: user._id, email: user.email}

        // Access Token
        const accesstoken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, {expiresIn: '15m'});

        // Refresh Token
        const refreshtoken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_SECRET, {expiresIn: '7d'});

        // Find user refresh token and delete if exist already
        const userRefreshToken = await refreshTokenModel.findOneAndDelete({userId: user._id});

        // Save new refresh token
        await new refreshTokenModel({userId: user._id, token: refreshtoken}).save();

        // return data
        return Promise.resolve({accesstoken,refreshtoken});

    } catch (error) {
        console.log(error);
        return response.status(500).json({
            status: "Failed",
            message: "Unable to process your request",
            error: error
        })
    }
}

export default generateTokens;