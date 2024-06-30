import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productModal = new Schema({
    brand: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discounted_price: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    discount_percentage: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    star: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    }

}, {
    timestamps: true
});


const Product = model('Product', productModal);
export default Product;




