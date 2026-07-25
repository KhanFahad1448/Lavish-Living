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
      user: req.user ? req.user._id : null,

      name,
      phone,
      email,
      location,
      service,
      budget,
      projectType,
      message,

      // =====================================
      // Default Timeline
      // =====================================
      timeline: [
        {
          title: "Enquiry Submitted",
          completed: true,
          completedAt: new Date(),
          remark: "Your enquiry has been received successfully.",
        },
        {
          title: "Designer Contacted",
          completed: false,
          completedAt: null,
          remark: "",
        },
        {
          title: "Site Visit Scheduled",
          completed: false,
          completedAt: null,
          remark: "",
        },
        {
          title: "Work Started",
          completed: false,
          completedAt: null,
          remark: "",
        },
        {
          title: "Project Completed",
          completed: false,
          completedAt: null,
          remark: "",
        },
      ],
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
// GET MY INQUIRIES
// =========================
export const getMyInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
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
// GET ALL
// =========================
export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find()
      .populate("user", "name email")
      .sort({
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

    // =====================================
    // Auto Update Timeline
    // =====================================

    if (status === "contacted") {
      inquiry.timeline[1].completed = true;
      inquiry.timeline[1].completedAt = new Date();
      inquiry.timeline[1].remark =
        "Our designer has contacted you.";
    }

    if (status === "converted") {
      inquiry.timeline[1].completed = true;
      inquiry.timeline[1].completedAt =
        inquiry.timeline[1].completedAt || new Date();

      inquiry.timeline[2].completed = true;
      inquiry.timeline[2].completedAt = new Date();
      inquiry.timeline[2].remark =
        "Site visit completed.";

      inquiry.timeline[3].completed = true;
      inquiry.timeline[3].completedAt = new Date();
      inquiry.timeline[3].remark =
        "Interior work has started.";
    }

    if (status === "closed") {
      inquiry.timeline[4].completed = true;
      inquiry.timeline[4].completedAt = new Date();
      inquiry.timeline[4].remark =
        "Project completed successfully.";
    }

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