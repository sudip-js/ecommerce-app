import Product from "../../modals/productModal.js";
import { errorHandler } from "../../utils/error.js";

export const addProducts = async (req, res, next) => {
    try {
        const { products = [] } = req.body;
        await Product.insertMany(products);
        res
            .status(200)
            .json({ success: true, message: "Products added successfully." });
    } catch (error) {
        return next(errorHandler(500, "Something went wrong!."));
    }
};

export const getAllProducts = async (req, res, next) => {
    try {
        const { page = 1, length = 10, sort = "asc", sort_by = "price", search = '' } = req.body;
        const parsePage = parseInt(page);
        const parseLength = parseInt(length);
        let sortOption = {};
        if (sort === "asc") {
            sortOption = { [sort_by]: 1 };
        } else if (sort === "desc") {
            sortOption = { [sort_by]: -1 };
        }
        const searchQuery = search ? {
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { brand: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ]
        } : {};
        const totalRecords = await Product.countDocuments(searchQuery);
        const totalPages = Math.ceil(totalRecords / parseLength);
        const nextPage = parsePage < totalPages ? parsePage + 1 : null;
        const data = await Product.find(searchQuery)
            .sort(sortOption)
            .skip((parsePage - 1) * parseLength)
            .limit(parseLength);
        res
            .status(200)
            .json({
                success: true,
                message: "All Products",
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






