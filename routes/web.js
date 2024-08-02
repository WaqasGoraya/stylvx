import express from "express";
import userController from "../controllers/userController.js";
import passport from "passport";
const router = express.Router();

// Public Routes
router.post('/register',userController.userRegistration);
router.post('/login',userController.userLogin);
router.post('/refresh-token',userController.getNewAccessToken);

// Protected Routes
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.userProfile);


export default router;
