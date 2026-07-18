import Review from "../models/Review.js";
// import cloudinary from "../utils/cloudinary.js";

/*
====================================================
Create Review (Public)
====================================================
*/

export const createReview = async (req, res) => {
  try {
    const { name, location, rating, review } = req.body;

   const image = req.file?.path || "";

    const newReview = await Review.create({
      name,
      location,
      rating,
      review,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Review submitted successfully.",
      review: newReview,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to submit review.",
    });
  }
};

/*
====================================================
Public Reviews
====================================================
*/

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      approved: true,
    }).sort({
      featured: -1,
      createdAt: -1,
    });

    res.json({
      success: true,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch reviews.",
    });
  }
};

/*
====================================================
Admin Reviews
====================================================
*/

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch reviews.",
    });
  }
};

/*
====================================================
Approve Review
====================================================
*/

export const approveReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    review.approved = !review.approved;

    await review.save();

    res.json({
      success: true,
      message: "Review updated.",
      review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to update review.",
    });
  }
};

/*
====================================================
Feature Review
====================================================
*/

export const toggleFeatured = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    review.featured = !review.featured;

    await review.save();

    res.json({
      success: true,
      message: "Featured status updated.",
      review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to update review.",
    });
  }
};

/*
====================================================
Update Review
====================================================
*/

export const updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    review.name = req.body.name || review.name;
    review.location = req.body.location || review.location;
    review.rating = req.body.rating || review.rating;
    review.review = req.body.review || review.review;

    if (req.file) {
    review.image = req.file.path;
    }

    await review.save();

    res.json({
      success: true,
      message: "Review updated successfully.",
      review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to update review.",
    });
  }
};

/*
====================================================
Delete Review
====================================================
*/

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    await review.deleteOne();

    res.json({
      success: true,
      message: "Review deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to delete review.",
    });
  }
};