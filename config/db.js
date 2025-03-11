
const mongoose = require('mongoose');

const db = "mongodb+srv://admin:admin12345@cluster0.7avhbos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db)
    console.log(`MongoDB connected Successfully! `);
    
  } catch (error) {
    console.error(`MongooDB not connected: ${error}`);
    
  }
}
module.exports = connectDB;