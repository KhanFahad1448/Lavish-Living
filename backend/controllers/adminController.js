import Inquiry from "../models/Inquiry.js";

// GET all inquiries
export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      items: inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch inquiries",
    });
  }
};

// UPDATE inquiry status
export const updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update inquiry",
    });
  }
};

// DELETE inquiry
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Inquiry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete inquiry",
    });
  }
};