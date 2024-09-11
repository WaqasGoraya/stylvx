import jwt from 'jsonwebtoken';

const isTokenExpired = (token) => {
    if (!token) return true;  // If token is missing, consider it expired

    const decodedToken = jwt.decode(token);

    if (!decodedToken || !decodedToken.exp) {
        // If decoding fails or no 'exp' field is present, consider it expired
        return true;
    }

    const currentTime = Date.now() / 1000;  // Get current time in seconds
    return decodedToken.exp < currentTime;  // Check if token expiration time is less than current time
}

export default isTokenExpired;
