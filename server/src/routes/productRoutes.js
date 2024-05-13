import express from "express";
import { addProductCategories, addProducts, getAllProductCategories, getAllProducts, getCategoryBasedProduct } from "../controllers/product/productController.js"


const router = express.Router();

router.post('/add', addProducts);
router.post('/list', getAllProducts);
router.post('/categories/add', addProductCategories);
router.post('/categories', getAllProductCategories);
router.post('/category/:category_id', getCategoryBasedProduct);

export default router;