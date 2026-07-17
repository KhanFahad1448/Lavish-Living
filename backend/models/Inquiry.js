import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    service: {
      type: String,
      default: "",
    },

    budget: {
      type: String,
      default: "",
    },

    projectType: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      default: "",
      maxlength: 2000,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "converted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Inquiry", inquirySchema);