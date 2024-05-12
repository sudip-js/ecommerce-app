import express from "express";
import { changePassword, forgotPassword, googleAuth, resetPassword, signIn, signUp, updateProfile } from "../controllers/authController.js";
import { verifyToken } from "../utils/createToken.js";

const router = express.Router();


router.post('/sign-in', signIn)
router.post('/sign-up', signUp)
router.post('/google', googleAuth)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', verifyToken, resetPassword)
router.post('/change-password', changePassword);
router.post('/update-profile', verifyToken, updateProfile);


export default router;