import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const categoryModal = new Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    discount_percentage: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});


const Category = model('Category', categoryModal);
export default Category;