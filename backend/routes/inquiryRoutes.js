import express from "express";
import {
  createInquiry,
  getMyInquiries,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from "../controllers/inquiryController.js";

import {
  protect,
  optionalAuth,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// =========================
// Public Routes
// =========================

// Customer submits inquiry
// Guests can submit inquiries.
// Logged-in users will automatically be linked to their account.
router.post(
  "/",
  optionalAuth,
  createInquiry
);

// =========================
// Customer Protected Routes
// =========================

// Logged-in user can view only their own inquiries
router.get(
  "/my",
  protect,
  getMyInquiries
);

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