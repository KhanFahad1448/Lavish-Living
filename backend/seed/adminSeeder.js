import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDB from "../config/db.js";
import User from "../models/User.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({
      email: "admin@lavishliving.com",
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("Lavish123", 10);

    await User.create({
      name: "Fahad Akhtar",
      email: "admin@lavishliving.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin account created successfully");
    console.log("--------------------------------");
    console.log("Email: admin@lavishliving.com");
    console.log("Password: Lavish123");
    console.log("--------------------------------");

    process.exit();

  } catch (error) {

    console.error(error);

    process.exit(1);

  }
};

seedAdmin();