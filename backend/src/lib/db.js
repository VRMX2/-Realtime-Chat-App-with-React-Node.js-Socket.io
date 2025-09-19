import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log(`📦 MongoDB Connected: ${conn.connection.host}`);
        
		// Handle connection events
        mongoose.connection.on('error', (err) => {
            console.error('❌ MongoDB connection error:', err);
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log('📦 MongoDB disconnected');
        });
        
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};
