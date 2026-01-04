const mongoose = require("mongoose");

let isConnected = false; // global cache

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB Connection Error:", err.message);
    throw err;
  }
};

module.exports = connectDB;
