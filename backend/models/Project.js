import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    // ==========================
    // Before / After Images
    // ==========================

    beforeImage: {
      type: String,
      default: "",
    },

    afterImage: {
      type: String,
      default: "",
    },

    // ==========================
    // Gallery Images
    // ==========================

    images: [
      {
        type: String,
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);