
import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL as string)
    } catch (err) {
        console.log("Error connecting to MongoDB");
        console.log(err)
    }
}

export default dbConnect