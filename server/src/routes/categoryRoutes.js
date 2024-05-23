import express from "express";
import { addCategories, getAllCategories, getCategoryBasedProduct, getCategoryBasedProducts } from "../controllers/category/categoryController.js"

const router = express.Router();

router.post('/add', addCategories);
router.post('/', getAllCategories);
router.post('/:category_id', getCategoryBasedProducts);
router.post('/:category_id/:product_title', getCategoryBasedProduct);

export default router;


