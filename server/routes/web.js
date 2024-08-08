import express from "express";
import userController from "../controllers/userController.js";
import passport from "passport";
import setAccessTokenRefresh from "../middleware/setAccessTokenAuto.js";
const router = express.Router();

// Public Routes
router.post('/register',userController.userRegistration);
router.post('/login',userController.userLogin);
router.post('/refresh-token',userController.getNewAccessToken);
router.post('/reset-password-link', userController.sendResetPasswordEmail);
router.post('/reset-password/:id/:token', userController.userPasswordReset);

// Protected Routes
router.get('/profile', setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }), userController.userProfile);
router.post('/logout', setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }), userController.userLogout);


export default router;
