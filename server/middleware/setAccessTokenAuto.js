import isTokenExpired from "../utils/isTokenExpired.js";
import refreshAccessToken from "../utils/refreshAccessToken.js";
import TokenCookies from "../utils/setTokenCookies.js";

const setAccessTokenRefresh = async (req,res,next) => {
    try {
        const accesstoken = req.cookies.accessToken;
       
        if(accesstoken || !isTokenExpired(accesstoken)){
            // Set access token to the header
            req.headers['authorization'] = `Bearer ${accesstoken}`;
        }

        if(!accesstoken || isTokenExpired(accesstoken)){
            // get new access token using refresh token
            const refreshtoken = req.cookies.refreshToken;
            if(!refreshtoken){
                throw new Error('Refresh token is missing');
            }
             
            // Get New access token using refresh token
             const {newAccessToken, newRefreshToken} =  await refreshAccessToken(req,res);
           
             // set new access token to cookies
            TokenCookies(res,newAccessToken,newRefreshToken);

            // Add the access token to authorization headers

            req.headers['authorization'] = `Bearer ${newAccessToken}`;
        }
        next();
    } catch (error) {
        console.error('Error adding access token to header:', error.message);
        // Handle the error, such as returning an error response or redirecting to the login page
        res.status(401).json({ error: 'Unauthorized', message: 'Access token is missing or invalid' });
    }
}

export default setAccessTokenRefresh;