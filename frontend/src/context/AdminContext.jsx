import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/api";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Load Projects
  // ==========================
  async function loadProjects() {
    try {
      const { data } = await api.get("/projects");

      setProjects(data.projects || []);
    } catch (error) {
      console.error(error);
    }
  }

  // ==========================
  // Load Inquiries
  // ==========================
  async function loadInquiries() {
    try {
      const { data } = await api.get("/inquiries");

      setInquiries(data.inquiries || []);
    } catch (error) {
      console.error(error);
    }
  }

  // ==========================
  // Refresh Everything
  // ==========================
  async function refreshDashboard() {
    setLoading(true);

    await Promise.all([
      loadProjects(),
      loadInquiries(),
    ]);

    setLoading(false);
  }

  // ==========================
  // Refresh Only Projects
  // ==========================
  async function refreshProjects() {
    await loadProjects();
  }

  // ==========================
  // Refresh Only Inquiries
  // ==========================
  async function refreshInquiries() {
    await loadInquiries();
  }

  useEffect(() => {
    refreshDashboard();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        loading,

        projects,
        setProjects,

        inquiries,
        setInquiries,

        refreshDashboard,
        refreshProjects,
        refreshInquiries,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}