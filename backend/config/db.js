import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("================================");
    console.log("Mongo URI:");
    console.log(process.env.MONGO_URI);
    console.log("================================");

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected Successfully");
    console.log("Host:", conn.connection.host);
    console.log("Database:", conn.connection.name);
  } catch (err) {
    console.error("❌ MongoDB Connection Failed");
    console.error(err); // <-- IMPORTANT
    process.exit(1);
  }
};

export default connectDB;