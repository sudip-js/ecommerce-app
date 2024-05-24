import express from "express";
import { addToCart, decreaseCartQty, getCart, removeToCart } from "../controllers/cart/cartController.js"

const router = express.Router();

router.post('/add', addToCart);
router.post('/list', getCart);
router.post('/remove', removeToCart);
router.post('/decrease-cart-qty', decreaseCartQty);

export default router;





