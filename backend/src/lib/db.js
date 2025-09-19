import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set");

    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("📦 MongoDB Connected:", conn.connection.host);

    // Fix the username index issue automatically
    await fixUsernameIndexIssue();

  } catch (error) {
    console.error("Error connection to MONGODB:", error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};

async function fixUsernameIndexIssue() {
  try {
    const db = mongoose.connection.db;
    const usersCollection = db.collection('users');

    console.log("🔧 Checking for username index issue...");

    // Get all indexes
    const indexes = await usersCollection.indexes();
    const hasUsernameIndex = indexes.some(index => index.name === 'username_1');

    if (hasUsernameIndex) {
      console.log("⚠️  Found problematic username_1 index. Removing...");
      
      try {
        await usersCollection.dropIndex("username_1");
        console.log("✅ Successfully removed username_1 index");
      } catch (dropError) {
        console.log("❌ Error dropping username index:", dropError.message);
      }

      // Also clean up any existing username fields from documents
      try {
        const cleanupResult = await usersCollection.updateMany(
          { username: { $exists: true } },
          { $unset: { username: 1 } }
        );
        
        if (cleanupResult.modifiedCount > 0) {
          console.log(`🧹 Cleaned up username field from ${cleanupResult.modifiedCount} documents`);
        }
      } catch (cleanupError) {
        console.log("⚠️  Cleanup error:", cleanupError.message);
      }
    } else {
      console.log("✅ No username index found - database is clean");
    }

  } catch (error) {
    console.log("⚠️  Error checking/fixing username index:", error.message);
    // Don't crash the app, just log the error
  }
}