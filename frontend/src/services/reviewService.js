import api from "../lib/api";

/*
=========================================
PUBLIC
=========================================
*/

// Get all approved reviews
export const getReviews = async () => {
  const { data } = await api.get("/reviews");
  return data.reviews;
};

// Submit a new review
export const createReview = async (formData) => {
  const { data } = await api.post("/reviews", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

/*
=========================================
ADMIN
=========================================
*/

// Get every review
export const getAllReviews = async () => {
  const { data } = await api.get("/reviews/admin");
  return data.reviews;
};

// Approve / Unapprove review
export const approveReview = async (id) => {
  const { data } = await api.put(`/reviews/${id}/approve`);
  return data;
};

// Feature / Unfeature review
export const featureReview = async (id) => {
  const { data } = await api.put(`/reviews/${id}/feature`);
  return data;
};

// Update review
export const updateReview = async (id, formData) => {
  const { data } = await api.put(`/reviews/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

// Delete review
export const deleteReview = async (id) => {
  const { data } = await api.delete(`/reviews/${id}`);
  return data;
};