import express from "express";

import upload from "../middleware/uploadMiddleware.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

import {
  createReview,
  getReviews,
  getAllReviews,
  approveReview,
  toggleFeatured,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

const router = express.Router();

/*
==========================================
Public Routes
==========================================
*/

// Submit a review
router.post("/", upload.single("image"), createReview);

// Get approved reviews
router.get("/", getReviews);

/*
==========================================
Admin Routes
==========================================
*/

// Get every review
router.get("/admin", protect, adminOnly, getAllReviews);

// Approve / Hide review
router.put("/:id/approve", protect, adminOnly, approveReview);

// Feature / Unfeature review
router.put("/:id/feature", protect, adminOnly, toggleFeatured);

// Edit review
router.put(
  "/:id",
  protect,
  adminOnly,
  upload.single("image"),
  updateReview
);

// Delete review
router.delete("/:id", protect, adminOnly, deleteReview);

export default router;