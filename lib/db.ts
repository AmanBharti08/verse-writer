import mongoose from "mongoose";

export default async function dbConnect(): Promise<void> {
    try {
        if (mongoose.connection.readyState >= 1) return;
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log("MongoDB connected");
    } catch (err) {
        console.log("Error connecting to MongoDB", err);
        // console.log(err)
    }
}

