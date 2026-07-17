import Inquiry from "../models/Inquiry.js";

// =========================
// CREATE
// =========================
export const createInquiry = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      location,
      service,
      budget,
      projectType,
      message,
    } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name and phone are required.",
      });
    }

    const inquiry = await Inquiry.create({
      name,
      phone,
      email,
      location,
      service,
      budget,
      projectType,
      message,
    });

    res.status(201).json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================
// GET ALL
// =========================
export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      inquiries,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================
// UPDATE STATUS
// =========================
export const updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatus = [
      "new",
      "contacted",
      "converted",
      "closed",
    ];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }

    inquiry.status = status;

    await inquiry.save();

    res.status(200).json({
      success: true,
      message: "Inquiry status updated successfully",
      inquiry,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================
// DELETE
// =========================
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }

    await inquiry.deleteOne();

    res.json({
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};