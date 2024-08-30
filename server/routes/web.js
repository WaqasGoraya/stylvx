import express from "express";
import authController from "../controllers/authController.js";
import userController from "../controllers/userController.js";
import passport from "passport";
import setAccessTokenRefresh from "../middleware/setAccessTokenAuto.js";
import permissionController from "../controllers/permissionController.js";
import rolesController from "../controllers/rolesController.js";
import categoryController from "../controllers/CategoryController.js";
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


// Permission Routes
router.get('/permissions',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),permissionController.getAllPermissions);
router.post('/permission/add',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),permissionController.addPermission);
router.get('/permission/detail/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),permissionController.permissionDetail);
router.put('/permission/update/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),permissionController.updatePermission);
router.delete('/permission/delete/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),permissionController.deletePermission);
// Roles Routes
router.get('/roles',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),rolesController.allRoles);
router.post('/roles/add',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),rolesController.addRole);
router.get('/roles/detail/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),rolesController.roleDetail);
router.put('/roles/update/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),rolesController.updateRole);
router.delete('/roles/delete/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),rolesController.deleteRole);

// Category Routes
router.get('/category',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),categoryController.getAllCategory);
router.post('/category/add',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),categoryController.addCategory);
router.get('/category/detail/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),categoryController.categoryDetail);
router.put('/category/update/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),categoryController.updateCategory);
router.delete('/category/delete/:id',setAccessTokenRefresh ,passport.authenticate('jwt', { session: false }),categoryController.deleteCategory);

// Products Route

export default router;
