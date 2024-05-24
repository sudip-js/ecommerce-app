import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ItemSchema = new Schema(
    {
        product_id: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, "Quantity can not be less then 1."],
        },
        price: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const cartSchema = new Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        items: [ItemSchema],
        sub_total: {
            default: 0,
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

const Cart = model("Cart", cartSchema);
export default Cart;
