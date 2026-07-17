import axios from "axios";
import toast from "react-hot-toast";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// ===========================
// REQUEST INTERCEPTOR
// ===========================
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("ll_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ===========================
// RESPONSE INTERCEPTOR
// ===========================
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const url = error.config?.url || "";

    if (
      status === 401 &&
      url.includes("/auth/me")
    ) {
      localStorage.removeItem("ll_token");

      delete api.defaults.headers.common["Authorization"];

      window.location.href = "/auth";
    }

    return Promise.reject(error);
  }
);

export const ADMIN_WHATSAPP =
  import.meta.env.VITE_ADMIN_WHATSAPP || "8085509001";

export default api;