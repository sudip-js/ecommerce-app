import { errorHandler } from "../../utils/error.js";
import Cart from "../../modals/cartModal.js";
import Product from "../../modals/productModal.js";

export const addToCart = async (req, res, next) => {
    try {
        const { user_id = '', product_id = '', quantity = 1 } = req.body;
        let data = null;
        if (!user_id || !product_id) return next(errorHandler(422, 'Invalid user or product ID'));
        let cart = await Cart.findOne({ user_id: user_id });
        const productDetails = await Product.findOne({ _id: product_id });

        if (cart) {
            let indexFound = cart.items.findIndex(p => String(p?.product_id) == product_id);
            if (indexFound != -1) {
                console.log({ thumbnail: productDetails?.thumbnail })
                cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
                cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
                cart.items[indexFound].price = productDetails.price;
                cart.items[indexFound].rating = productDetails.rating;
                cart.items[indexFound].title = productDetails.title;
                cart.items[indexFound].description = productDetails.description;
                cart.items[indexFound].brand = productDetails.brand;
                cart.items[indexFound].category = productDetails.category;
                cart.items[indexFound].thumbnail = productDetails.thumbnail;
                cart.sub_total = cart.items.map(item => item.total).reduce((acc, curr) => acc + curr);
                cart.user_id = user_id;
            }
            else if (quantity > 0) {
                cart.items.push({
                    product_id: product_id,
                    quantity: quantity,
                    price: productDetails.price,
                    total: parseInt(productDetails.price * quantity).toFixed(2),
                    rating: productDetails.rating,
                    title: productDetails.title,
                    description: productDetails.description,
                    brand: productDetails.brand,
                    category: productDetails.category,
                    thumbnail: productDetails.thumbnail,
                })
                cart.sub_total = cart.items.map(item => item.total).reduce((acc, curr) => acc + curr);
            }
            else {
                return next(errorHandler(400, 'Invalid Request'))
            }
            data = await cart.save();
        } else {
            const cartData = {
                user_id: user_id,
                items: [{
                    product_id: product_id,
                    quantity: quantity,
                    price: productDetails.price,
                    total: parseInt(productDetails.price * quantity),
                    rating: productDetails.rating,
                    title: productDetails.title,
                    description: productDetails.description,
                    brand: productDetails.brand,
                    category: productDetails.category,
                    thumbnail: productDetails.thumbnail,
                }],
                sub_total: parseInt(productDetails.price * quantity)
            }
            cart = new Cart(cartData);
            data = await cart.save();
        }
        return res.status(200).send({
            code: 200,
            message: "Add to Cart successfully!",
            data
        });
    } catch (error) {
        console.log({ error: error.message })
        return next(errorHandler(500, 'Something went wrong!'))

    }
}
export const removeToCart = (req, res, next) => {
    try {
        return res.status(200).json({ message: "removeToCart" })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong!" })
    }
}
export const decreaseCartQty = (req, res, next) => {
    try {
        return res.status(200).json({ message: "decreaseCartQty" })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong!" })
    }
}