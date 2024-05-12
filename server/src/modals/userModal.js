import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const userModal = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
    },
    address: {
        type: String,
    },
    token: {
        type: String,
        default: ''
    },

}, {
    timestamps: true
});


const User = model('user', userModal);
export default User;