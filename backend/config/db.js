const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://gujralnaman08:Namangujral1@cluster0.mxyuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    // Connect to MongoDB
    const connection = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } 
  catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB disconnected. Attempting to reconnect...");
});

module.exports = connectDB;
