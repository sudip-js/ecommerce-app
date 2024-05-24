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
    profilePicture: {
        type: String,
        default:
            'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
}, {
    timestamps: true
});


const User = model('User', userModal);
export default User;