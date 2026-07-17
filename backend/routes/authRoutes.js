import express from "express";
import {
  signup,
  login,
  getMe,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register
router.post("/signup", signup);

// Login
router.post("/login", login);

// Logged in user
router.get("/me", protect, getMe);

export default router;