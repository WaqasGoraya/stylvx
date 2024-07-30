import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router();

// register
router.post('/register',userController.userRegistration);
router.post('/login',userController.userLogin);
export default router;