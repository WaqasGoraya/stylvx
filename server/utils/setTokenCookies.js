const TokenCookies = (res, newAccessToken, newRefreshToken) => {
  // Access Token Cookie
  res.cookie("accessToken", newAccessToken, {
    httpOnly: true,
    // secure: true,
    maxAge: 1 * 60 * 60 * 1000,
  });

  // Refresh Token Cookie
  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    // secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  // Set Cookie for is_auth
  res.cookie("is_auth", true, {
    httpOnly: true,
    // secure: false, // Set to true if using HTTPS
    maxAge: 7 * 24 * 60 * 60 * 1000,
    // sameSite: 'strict', // Adjust according to your requirements
  });
};

export default TokenCookies;
