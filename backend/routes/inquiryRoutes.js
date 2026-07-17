
import express from "express";
import {
  createInquiry,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from "../controllers/inquiryController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// =========================
// Public Routes
// =========================

// Customer submits inquiry
router.post("/", createInquiry);

// =========================
// Admin Routes
// =========================

// Get all inquiries
router.get(
  "/",
  protect,
  adminOnly,
  getAllInquiries
);

// Update inquiry status
router.patch(
  "/:id/status",
  protect,
  adminOnly,
  updateInquiryStatus
);

// Delete inquiry
router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteInquiry
);

export default router;

