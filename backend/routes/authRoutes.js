import express from "express";
import {
  signup,
  login,
  getMe,
  updateProfile,
  changePassword,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register
router.post("/signup", signup);

// Login
router.post("/login", login);

// Logged in user
router.get("/me", protect, getMe);

// Update profile
router.put("/update-profile", protect, updateProfile);

// Change password
router.put("/change-password", protect, changePassword);

export default router;