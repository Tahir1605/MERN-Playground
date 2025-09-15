import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database Connection Failed",error.message);
    }
}

export default connectDB