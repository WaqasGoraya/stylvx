import express from "express";
import authController from "../controllers/authController.js";
import userController from "../controllers/userController.js";
import passport from "passport";
import setAccessTokenRefresh from "../middleware/setAccessTokenAuto.js";
import permissionController from "../controllers/permissionController.js";
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
router.get('/user/detail/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),userController.userDetail);
router.put('/user/update/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),userController.updateUser);
router.delete('/user/delete/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),userController.deleteUser);

// Roles Routes
router.get('/roles',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),userController.getRoles);

// Permission Routes
router.get('/permissions',permissionController.getAllPermissions);
router.post('/permission/add',permissionController.addPemission);
router.get('/permission/detail/:id',permissionController.permissionDetail);
router.put('/permission/update/:id',permissionController.updatePermission);
router.delete('/permission/delete/:id',permissionController.deletePermission);
// Category Routes

// Products Route

export default router;
