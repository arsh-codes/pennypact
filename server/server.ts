import authRouter from "./routes/authRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 4000;
const DB_URL = process.env.MONGO_DATABASE_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;
if (!DB_URL) {
    console.error("❌ MONGO_DATABASE_URL not found in environment variables");
    process.exit(1);
}

// Middleware
app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true,
    })
);

app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRouter);

// Sample root route
app.get("/", (req, res) => {
    res.send("🌟 SpendWise Server is Running");
});

// Connect to MongoDB and start server
mongoose
    .connect(DB_URL)
    .then(() => {
        console.log("✅ Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });
