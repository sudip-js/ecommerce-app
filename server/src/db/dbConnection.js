import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Database connected successfully.')
    } catch (error) {
        console.log('Failed to connect database!')
    }
}

export default connectDB
