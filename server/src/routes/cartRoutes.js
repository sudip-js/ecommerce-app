import express from "express";
import { addToCart, decreaseCartQty, removeToCart } from "../controllers/cart/cartController.js"

const router = express.Router();

router.post('/add', addToCart);
router.post('/remove', removeToCart);
router.post('/decrease-qty', decreaseCartQty);

export default router;





