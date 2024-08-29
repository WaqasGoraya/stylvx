import express from "express";
import authController from "../controllers/authController.js";
import userController from "../controllers/userController.js";
import passport from "passport";
import setAccessTokenRefresh from "../middleware/setAccessTokenAuto.js";
const router = express.Router();

// Public Routes
router.post('/register',authController.userRegistration);
router.post('/login',authController.userLogin);
router.post('/refresh-token',authController.getNewAccessToken);
router.post('/reset-password-link', authController.sendResetPasswordEmail);
router.post('/reset-password/:id/:token', authController.userPasswordReset);

// Protected Routes
router.get('/profile', setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }), authController.userProfile);
router.post('/logout', setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }), authController.userLogout);

// User routes
// router.get('/users', userController.getUsers);
// router.get('/user/:id', userController.userDetail);
// router.put('/user/:id', userController.updateUser);
// router.get('/roles', userController.getRoles);
router.get('/users',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),userController.getUsers);
router.get('/user/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),userController.userDetail);
router.put('/user/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),userController.updateUser);
router.get('/roles',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),userController.getRoles);
export default router;
