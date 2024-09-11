import isTokenExpired from "../utils/isTokenExpired.js";
import refreshAccessToken from "../utils/refreshAccessToken.js";
import TokenCookies from "../utils/setTokenCookies.js";

const setAccessTokenRefresh = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;
        const refreshToken = req.cookies.refreshToken;

        // If the access token exists and is valid, continue
        if (accessToken && !isTokenExpired(accessToken)) {
            // Add the access token to the request header and move on
            req.headers['authorization'] = `Bearer ${accessToken}`;
            return next(); // Exit the function
        }

        // If no access token or it is expired, check for refresh token
        if (!refreshToken) {
            // No refresh token found, respond with 401 Unauthorized
            return res.status(401).json({
                status: "Failed",
                message: "Refresh token is missing"
            });
        }

        // If refresh token exists, attempt to refresh the access token
        const { newAccessToken, newRefreshToken } = await refreshAccessToken(req, res);

        if (!newAccessToken || !newRefreshToken) {
            // Refresh token invalid or something went wrong, return error
            return res.status(500).json({
                status: "Failed",
                message: "Unable to refresh access token"
            });
        }

        // Set new tokens in the cookies
        TokenCookies(res, newAccessToken, newRefreshToken);

        // Add the new access token to authorization headers
        req.headers['authorization'] = `Bearer ${newAccessToken}`;

        // Proceed to the next middleware or route handler
        return next(); // Always return to prevent further execution
    } catch (error) {
        console.error('Error adding access token to header auto:', error.message);

        // Catch block: Ensure no further headers are modified after sending a response
        if (!res.headersSent) {  // Check if headers have already been sent
            return res.status(500).json({
                status: "Failed",
                message: "Internal server error"
            });
        }
    }
};

export default setAccessTokenRefresh;
