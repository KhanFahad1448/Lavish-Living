import express from "express";
import {
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from "../controllers/adminController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// All admin routes require login + admin role
router.use(protect);
router.use(adminOnly);

// GET all inquiries
router.get("/inquiries", getAllInquiries);

// UPDATE inquiry status
router.patch("/inquiries/:id", updateInquiryStatus);

// DELETE inquiry
router.delete("/inquiries/:id", deleteInquiry);

export default router;