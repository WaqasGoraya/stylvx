import jwt from 'jsonwebtoken';
import refreshTokenModel from '../models/userrefreshToken.js';
const verifyRefreshToken = async(refreshtoken) => {
    try {
        // Find refresh token in db
        const userRefreshToken = await refreshTokenModel.findOne({token: refreshtoken});
        
        // If token not valid
        if(!userRefreshToken){
            throw {error: true, message: 'Invalid Refresh Token'}
        }

        // verify refresh token 
        const tokenDetails = jwt.verify(refreshtoken,process.env.JWT_REFRESH_TOKEN_SECRET);
        
        return {
            error:false,
            message: "Valid refresh token",
            tokenDetails: tokenDetails
        };
    } catch (error) {
        throw {error: true, message: 'Invalid Refresh Token'}
    }
}

export default verifyRefreshToken;