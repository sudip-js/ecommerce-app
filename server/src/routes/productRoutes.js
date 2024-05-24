import express from "express";
import { addProducts, getAllProducts } from "../controllers/product/productController.js"

const router = express.Router();

router.post('/add', addProducts);
router.post('/', getAllProducts);

export default router;





