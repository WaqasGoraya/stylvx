const TokenCookies = (res,newAccessToken, newRefreshToken) => {

    // Access Token Cookie
    res.cookie('accessToken',newAccessToken,{
        httpOnly: true,
        secure: true,
        maxAge: 15 * 60 * 1000
    });
    
    // Refresh Token Cookie
    res.cookie('refreshToken',newRefreshToken,{
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

}

export default TokenCookies;