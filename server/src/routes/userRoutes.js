import express from "express";
import { changePassword, forgotPassword, oAuth, resetPassword, signIn, signUp, updateProfile } from "../controllers/authController.js";
import { verifyToken } from "../utils/token.js";

const router = express.Router();

router.post('/sign-in', signIn)
router.post('/sign-up', signUp)
router.post('/google', oAuth)
router.post('/github', oAuth)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', verifyToken, resetPassword)
router.post('/change-password', changePassword);
router.post('/update-profile', verifyToken, updateProfile);

export default router;