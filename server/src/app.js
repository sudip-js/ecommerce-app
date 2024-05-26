import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config({ path: './src/.env' });
connectDB()

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/api/auth', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))