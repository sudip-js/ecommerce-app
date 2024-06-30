import Category from "../../modals/categoryModal.js";
import Product from "../../modals/productModal.js";
import { errorHandler } from "../../utils/error.js";

export const addCategories = async (req, res, next) => {
    console.log('gere....')
    try {
        const { categories = [] } = req.body;
        console.log({ categories })
        const categoriesArray = categories.map(({ name, thumbnail, discount_percentage }) => ({ name, thumbnail, discount_percentage }))
        await Category.insertMany(categoriesArray);
        res.status(200).json({ success: true, message: 'Category added successfully.' })
    } catch (error) {
        console.log('error=>', error?.message)
        return next(errorHandler(500, "Something went wrong!."));
    }
}

export const fetchCategories = async (req, res, next) => {
    try {
        const data = await Category.find({});
        res.status(200).json({ success: true, message: 'All Categories', data })
    } catch (error) {
        return next(errorHandler(500, "Something went wrong!."));
    }
}

export const fetchCategory = async (req, res, next) => {
    try {
        const { page = 1, length = 10, sort = "asc", sort_by = "price", category_id = '' } = req.body;
        const parsePage = parseInt(page);
        const parseLength = parseInt(length);
        let sortOption = {};
        if (sort === "asc") {
            sortOption = { [sort_by]: 1 };
        } else if (sort === "desc") {
            sortOption = { [sort_by]: -1 };
        }
        const totalRecords = await Product.countDocuments({ category: category_id });
        const totalPages = Math.ceil(totalRecords / parseLength);
        const nextPage = parsePage < totalPages ? parsePage + 1 : null;

        const data = await Product.find({ category: category_id })
            .sort(sortOption)
            .skip((parsePage - 1) * parseLength)
            .limit(parseLength);
        res
            .status(200)
            .json({
                success: true,
                message: `Products in category ${category_id}`,
                data,
                current_page: parsePage,
                total_records: totalRecords,
                next_page: nextPage,
                total_pages: totalPages,
                per_page: parseLength,
            });
    } catch (error) {
        return next(errorHandler(500, "Something went wrong!."));
    }
};

export const fetchCategoryProduct = async (req, res, next) => {
    try {
        const { body: { category_id = '', product_title = '' } = {} } = req || {};
        if (!category_id || !product_title) return next(errorHandler(500, "Category ID or Product Title is required!."));
        const product = await Product.findOne({ category: category_id, title: product_title });
        res
            .status(200)
            .json({
                success: true,
                message: `Success`,
                data: product || [],
            });
    } catch (error) {
        return next(errorHandler(500, "Something went wrong!."));
    }
}



