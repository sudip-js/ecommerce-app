import express from "express";
import { changePassword, forgotPassword, resetPassword, signIn, signUp, updateProfile } from "../controllers/userController.js";
import { verifyToken } from "../utils/createToken.js";

const router = express.Router();


router.post('/sign-in', signIn)
router.post('/sign-up', signUp)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', verifyToken, resetPassword)
router.post('/change-password', changePassword);
router.post('/update-profile', verifyToken, updateProfile);


export default router;