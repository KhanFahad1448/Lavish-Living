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
      <div className="container-luxe py-3 sm:py-4 lg:py-6">
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-[200px_1fr] lg:gap-6">

          {/* Sidebar */}
          <AdminSidebar
            page={page}
            setPage={setPage}
          />

          {/* Main Content */}
          <div>

            {page === "dashboard" && (
              <DashboardStats setPage={setPage} />
            )}

            {page === "projects" && (
              <ProjectManager />
            )}

            {page === "add-project" && (
             <div className="rounded-lg border border-emerald/10 bg-white p-2.5 shadow-soft sm:rounded-xl sm:p-4 lg:p-5">
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