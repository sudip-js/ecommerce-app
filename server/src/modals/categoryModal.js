import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const categoryModal = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Category = model('category', categoryModal);
export default Category;