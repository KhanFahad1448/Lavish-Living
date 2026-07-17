import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  toggleFeatured,
} from "../controllers/projectController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";
import express from "express";

const router = express.Router();

// Public Route
router.get("/", getProjects);

// Admin Routes
router.post(
  "/",
  protect,
  adminOnly,
  upload.fields([
    {
      name: "images",
      maxCount: 20,
    },
    {
      name: "beforeImage",
      maxCount: 1,
    },
    {
      name: "afterImage",
      maxCount: 1,
    },
  ]),
  createProject
);

router.put(
  "/:id",
  protect,
  adminOnly,
  upload.fields([
    {
      name: "images",
      maxCount: 10,
    },
    {
      name: "beforeImage",
      maxCount: 1,
    },
    {
      name: "afterImage",
      maxCount: 1,
    },
  ]),
  updateProject
);

router.patch(
  "/:id/featured",
  protect,
  adminOnly,
  toggleFeatured
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteProject
);

export default router;