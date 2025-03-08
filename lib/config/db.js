import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const dbConnect = async () => {
    if (!MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in environment variables");
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
};
