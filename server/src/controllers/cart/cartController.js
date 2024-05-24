import { errorHandler } from "../../utils/error.js";
import Cart from "../../modals/cartModal.js";
import Product from "../../modals/productModal.js";
import User from "../../modals/userModal.js";
import { isValidObjectId } from "mongoose";

export const addToCart = async (req, res, next) => {
    try {
        const { user_id = '', product_id = '', quantity = 1 } = req.body;
        if (!user_id || !isValidObjectId(user_id)) return next(errorHandler(422, 'Invalid user ID.'));
        if (!product_id || !isValidObjectId(product_id)) return next(errorHandler(422, 'Invalid product.'));

        const user = await User.exists({ _id: user_id });
        const productDetails = await Product.exists({ _id: product_id });

        if (!user) return next(errorHandler(422, 'Invalid user ID.'));
        if (!productDetails) return next(errorHandler(422, 'Invalid product.'));

        const product = await Product.findOne({ _id: product_id });
        let cart = await Cart.findOne({ user_id });

        let response = null;
        if (cart) {
            const itemIndex = cart.items.findIndex((p) => p.product_id == product_id);
            if (itemIndex !== -1) {
                cart.user_id = user_id;
                cart.items[itemIndex].product_id = product_id;
                cart.items[itemIndex].quantity = cart.items[itemIndex].quantity + quantity;
                cart.items[itemIndex].price = product?.price;
                cart.items[itemIndex].total = cart.items[itemIndex].quantity * product.price;
                cart.items[itemIndex].rating = product?.rating;
                cart.items[itemIndex].title = product?.title;
                cart.items[itemIndex].description = product?.description;
                cart.items[itemIndex].brand = product?.brand;
                cart.items[itemIndex].category = product?.category;
                cart.items[itemIndex].thumbnail = product?.thumbnail;
                cart.sub_total = parseInt(cart.items.map(item => parseInt(item?.total)).reduce((acc, next) => acc + next));
            } else {
                cart.user_id = user_id;
                cart.items.push({
                    product_id,
                    quantity,
                    price: product?.price || 0,
                    total: parseInt(product?.price * quantity) || 0,
                    rating: product?.rating || 0,
                    title: product?.title || '',
                    description: product?.description || '',
                    brand: product?.brand || '',
                    category: product?.category || '',
                    thumbnail: product?.thumbnail || '',
                });
                cart.sub_total = parseInt(cart.items.map(item => parseInt(item?.total)).reduce((acc, next) => acc + next));
            }
            response = await cart.save();
        } else {
            const newItem = new Cart({
                user_id,
                items: [{
                    product_id,
                    quantity,
                    price: product?.price || 0,
                    total: parseInt(product?.price * quantity) || 0,
                    rating: product?.rating || 0,
                    title: product?.title || '',
                    description: product?.description || '',
                    brand: product?.brand || '',
                    category: product?.category || '',
                    thumbnail: product?.thumbnail || '',
                }],
                sub_total: parseInt(product?.price * quantity) || 0
            });
            response = await newItem.save();
        }
        return res.status(201).json({
            success: true,
            message: "Product added in cart",
            data: response
        });

    } catch (error) {
        console.error({ err: error?.message });
        return next(errorHandler(500, "Something went wrong!."));
    }
}

export const getCart = async (req, res, next) => {
    try {
        const { user_id = '', } = req.body;
        if (!user_id || !isValidObjectId(user_id)) return next(errorHandler(422, 'Invalid user ID.'));

        const user = await User.exists({ _id: user_id });
        if (!user) {
            return next(errorHandler(422, 'Invalid user ID.'));
        }
        const cart = await Cart.findOne({ user_id: user_id });
        if (!cart) {
            return next(errorHandler(404, 'Cart not found for this user.'));
        }
        return res.status(201).json({
            success: true,
            message: "All cart items.",
            data: cart
        });
    } catch (error) {
        console.error({ err: error?.message });
        return next(errorHandler(500, "Something went wrong!."));
    }
};




export const removeToCart = async (req, res, next) => {
    try {
        const { user_id = '', product_id = '', } = req.body;
        if (!user_id || !isValidObjectId(user_id)) return next(errorHandler(422, 'Invalid user ID.'));
        if (!product_id || !isValidObjectId(product_id)) return next(errorHandler(422, 'Invalid product.'));
        const user = await User.exists({ _id: user_id });
        const productDetails = await Product.exists({ _id: product_id });
        if (!user) return next(errorHandler(422, 'Invalid user ID.'));
        if (!productDetails) return next(errorHandler(422, 'Invalid product.'));
        let cart = await Cart.findOne({ user_id });
        if (!cart) {
            return next(errorHandler(404, 'Cart not found for this user.'));
        }
        const itemIndex = cart.items.findIndex((p) => p.product_id == product_id);
        if (itemIndex > -1) {
            cart.items.splice(itemIndex, 1);
            cart = await cart.save();
            return res.status(200).json({
                success: true,
                message: "Product removed successfully.",
            });
        }
        return res.status(400).json({
            success: true,
            message: "Item does not exist in cart.",
        });
    } catch (error) {
        console.error({ err: error?.message });
        return next(errorHandler(500, "Something went wrong!."));
    }
};





export const decreaseCartQty = async (req, res, next) => {
    try {
        const { user_id = '', product_id = '', } = req.body;
        if (!user_id || !isValidObjectId(user_id)) return next(errorHandler(422, 'Invalid user ID.'));
        if (!product_id || !isValidObjectId(product_id)) return next(errorHandler(422, 'Invalid product.'));
        const user = await User.exists({ _id: user_id });
        const productDetails = await Product.exists({ _id: product_id });
        if (!user) return next(errorHandler(422, 'Invalid user ID.'));
        if (!productDetails) return next(errorHandler(422, 'Invalid product.'));
        let cart = await Cart.findOne({ user_id });
        if (!cart) {
            return next(errorHandler(404, 'Cart not found for this user.'));
        }
        const itemIndex = cart.items.findIndex((p) => p.product_id == product_id);
        if (itemIndex > -1) {
            let productItem = cart.items[itemIndex];
            productItem.total = productItem.total - productItem.price;
            productItem.quantity -= 1;
            cart.items[itemIndex] = productItem;
            cart.sub_total = parseInt(cart.items.map(item => parseInt(item?.total)).reduce((acc, next) => acc + next));
            cart = await cart.save();
            return res.status(200).json({
                success: true,
                message: "Quantity decreased successfully.",
            });
        }
        return res.status(400).json({
            success: true,
            message: "Item does not exist in cart.",
        });
    } catch (error) {
        console.error({ err: error?.message });
        return next(errorHandler(500, "Something went wrong!."));
    }
};
