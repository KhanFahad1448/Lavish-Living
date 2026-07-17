import {
  FolderKanban,
  Star,
  MessageSquare,
  Bell,
  PlusCircle,
  FolderOpen,
  ClipboardList,
} from "lucide-react";

import { useAdmin } from "../../context/AdminContext";

export default function DashboardStats() {
  const {
    projects,
    inquiries,
    loading,
  } = useAdmin();

  const stats = {
    projects: projects.length,
    featured: projects.filter((p) => p.featured).length,
    inquiries: inquiries.length,
    newInquiries: inquiries.filter(
      (i) => i.status === "new"
    ).length,
  };

  const cards = [
    {
      title: "Projects",
      value: stats.projects,
      icon: FolderKanban,
    },
    {
      title: "Inquiries",
      value: stats.inquiries,
      icon: MessageSquare,
    },
    {
      title: "Featured",
      value: stats.featured,
      icon: Star,
    },
    {
      title: "New Leads",
      value: stats.newInquiries,
      icon: Bell,
    },
  ];

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-4xl text-emerald-deep">
        Dashboard
      </h1>

      <p className="mt-3 text-ink/60">
        Welcome back to Lavish Living Admin Panel.
      </p>

      {/* Statistics */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm uppercase tracking-wide text-ink/50">
                    {card.title}
                  </p>

                  <h2 className="mt-3 font-display text-5xl text-emerald-deep">
                    {card.value}
                  </h2>

                </div>

                <div className="rounded-full bg-emerald-50 p-4">
                  <Icon
                    size={28}
                    className="text-emerald-deep"
                  />
                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* Recent Data */}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* Recent Projects */}

        <div className="rounded-2xl bg-white p-6 shadow-soft">

          <h2 className="font-display text-2xl text-emerald-deep">
            Recent Projects
          </h2>

          <div className="mt-6 space-y-4">

            {projects.length === 0 ? (
              <p>No projects found.</p>
            ) : (
              projects.slice(0, 5).map((project) => (
                <div
                  key={project._id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div>

                    <p className="font-semibold">
                      {project.title}
                    </p>

                    <p className="text-sm text-ink/60">
                      {project.category}
                    </p>

                  </div>

                  {project.featured && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                      Featured
                    </span>
                  )}
                </div>
              ))
            )}

          </div>

        </div>

        {/* Recent Inquiries */}

        <div className="rounded-2xl bg-white p-6 shadow-soft">

          <h2 className="font-display text-2xl text-emerald-deep">
            Recent Inquiries
          </h2>

          <div className="mt-6 space-y-4">

            {inquiries.length === 0 ? (
              <p>No inquiries found.</p>
            ) : (
              inquiries.slice(0, 5).map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div>

                    <p className="font-semibold">
                      {item.name}
                    </p>

                    <p className="text-sm text-ink/60">
                      {item.service || "General Inquiry"}
                    </p>

                  </div>

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                    {item.status}
                  </span>
                </div>
              ))
            )}

          </div>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="mt-10 rounded-2xl bg-white p-6 shadow-soft">

        <h2 className="font-display text-2xl text-emerald-deep">
          Quick Actions
        </h2>

        <div className="mt-6 flex flex-wrap gap-4">

          <button className="btn-primary flex items-center gap-2">
            <PlusCircle size={18} />
            Add Project
          </button>

          <button className="btn-outline flex items-center gap-2">
            <FolderOpen size={18} />
            Manage Projects
          </button>

          <button className="btn-outline flex items-center gap-2">
            <ClipboardList size={18} />
            View Inquiries
          </button>

        </div>

      </div>

    </div>
  );
}