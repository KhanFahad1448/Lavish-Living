import { useState } from "react";
import { AdminProvider } from "../context/AdminContext";
import AdminReviews from "./AdminReviews";

import { Helmet } from "react-helmet-async";

import AdminSidebar from "../components/admin/AdminSidebar";
import DashboardStats from "../components/admin/DashboardStats";
import InquiryManager from "../components/admin/InquiryManager";
import ProjectManager from "../components/admin/ProjectManager";
import ProjectForm from "../components/admin/ProjectForm";


export default function Admin() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
    <Helmet>

  <title>
    Admin Dashboard | Lavish Living
  </title>

  <meta
    name="robots"
    content="noindex,nofollow,noarchive"
  />

</Helmet>
    <AdminProvider>
    <section className="min-h-[calc(100vh-80px)] bg-cream">
      <div className="container-luxe py-8">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">

          {/* Sidebar */}
          <AdminSidebar
            page={page}
            setPage={setPage}
          />

          {/* Main Content */}
          <div>

            {page === "dashboard" && (
              <DashboardStats />
            )}

            {page === "projects" && (
              <ProjectManager />
            )}

            {page === "add-project" && (
             <div className="rounded-3xl bg-white p-8 shadow-soft">
             <ProjectForm
            onSaved={() => setPage("projects")}
            onClose={() => setPage("projects")}
            />
            </div>
            )}

            {page === "inquiries" && (
              <InquiryManager />
            )}

            {page === "reviews" && (
           <AdminReviews />
            )}

          </div>

        </div>
      </div>
    </section>
    </AdminProvider>
    </>
  );
}