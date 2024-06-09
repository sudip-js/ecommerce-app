import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";

dotenv.config({ path: './src/.env' });
connectDB()

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
// app.use(cors({
//     origin: ['https://ecommerce-app-frontend-woad.vercel.app'],
//     methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
//     credentials: true,
// }));
app.use(cors());

app.use('/api/auth', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/stripe', stripeRoutes);


app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "server is working..."
    })
})

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