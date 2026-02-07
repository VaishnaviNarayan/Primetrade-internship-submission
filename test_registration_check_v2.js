const mongoose = require('mongoose');
const User = require('./backend/models/User'); // Direct DB check
require('dotenv').config({ path: './.env' }); // Try root first, or adjust based on file list

console.log("🚀 Testing Registration (Direct DB Mode)...");

async function testRegistration() {
    try {
        console.log("   👉 Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("   ✅ Connected!");

        const newUser = {
            name: "Test Register",
            email: "test_reg_" + Math.floor(Math.random() * 100000) + "@example.com",
            password: "password123",
            role: "user"
        };

        console.log("   👉 Creating User:", newUser.email);
        const user = await User.create(newUser);

        console.log("\n✅ SUCCESS: Registration Logic is WORKING!");
        console.log("   - User Created in DB:", user.name);
        console.log("   - ID:", user._id);

        // Cleanup
        await User.deleteOne({ _id: user._id });
        console.log("   - (Cleaned up test user)");

    } catch (error) {
        console.error("\n❌ FAILURE:", error.message);
    } finally {
        await mongoose.disconnect();
        process.exit();
    }
}

testRegistration();
