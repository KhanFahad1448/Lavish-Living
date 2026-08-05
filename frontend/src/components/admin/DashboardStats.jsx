import {
  FolderKanban,
  Star,
  MessageSquare,
  PlusCircle,
  FolderOpen,
  ClipboardList,
  Loader2,
} from "lucide-react";

import { useAdmin } from "../../context/AdminContext";

const hexClip =
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

export default function DashboardStats({ setPage }) {
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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10 sm:py-14">
        <Loader2 size={22} className="animate-spin text-brass sm:size-6" />
        <p className="mt-2.5 text-xs text-ink/60 sm:text-sm">
          Loading dashboard...
        </p>
      </div>
    );
  }

  return (
    <div>

      {/* ========================================= */}
      {/* Hero banner — dark, with inline stats */}
      {/* ========================================= */}

      <div className="relative overflow-hidden rounded-xl bg-emerald-deep p-3 text-ivory sm:rounded-2xl sm:p-5 lg:p-6">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,165,96,0.14),transparent_55%)]" />

        <div className="relative">

          <p className="text-[8px] uppercase tracking-[0.16em] text-brass sm:text-[9px] sm:tracking-[0.22em]">
            Admin Panel
          </p>
          <h1 className="mt-1 font-display text-base font-semibold tracking-tight sm:text-lg md:text-xl">
            Welcome back.
          </h1>
          <p className="mt-0.5 text-[11px] text-ivory/65 sm:text-xs">
            Here's what's happening at Lavish Living today.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-white/10 pt-2.5 sm:mt-4 sm:gap-x-6 sm:pt-3.5">

            <StatInline value={stats.projects} label="Projects" />
            <Divider />
            <StatInline value={stats.inquiries} label="Inquiries" />
            <Divider />
            <StatInline value={stats.featured} label="Featured" />
            <Divider />
            <StatInline value={stats.newInquiries} label="New Leads" accent />

          </div>

        </div>

      </div>

      {/* ========================================= */}
      {/* Recent Data */}
      {/* ========================================= */}

      <div className="mt-2.5 grid gap-2.5 sm:mt-4 sm:gap-3 lg:grid-cols-2">

        {/* Recent Projects */}

        <div className="rounded-lg border border-emerald/10 bg-white p-3 sm:rounded-xl sm:p-4">

          <div className="flex items-center justify-between">
            <h2 className="font-display text-xs font-semibold tracking-tight text-emerald-deep sm:text-sm">
              Recent Projects
            </h2>
            <FolderKanban size={12} className="text-brass/50" />
          </div>

          <div className="mt-2 space-y-0.5 sm:mt-3 sm:space-y-1">

            {projects.length === 0 ? (
              <p className="text-[11px] text-ink/50">No projects found.</p>
            ) : (
              projects.slice(0, 5).map((project) => (
                <div
                  key={project._id}
                  className="flex items-center gap-2 rounded-md px-1 py-1 transition hover:bg-cream sm:gap-2.5 sm:px-1.5 sm:py-1.5"
                >
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center bg-brass/10 text-brass sm:h-7 sm:w-7"
                    style={{ clipPath: hexClip }}
                  >
                    <FolderKanban size={11} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-semibold text-emerald-deep sm:text-xs">
                      {project.title}
                    </p>
                    <p className="truncate text-[9px] text-ink/50 sm:text-[10px]">
                      {project.category}
                    </p>
                  </div>

                  {project.featured && (
                    <Star size={11} className="shrink-0 fill-brass text-brass" />
                  )}
                </div>
              ))
            )}

          </div>

        </div>

        {/* Recent Inquiries */}

        <div className="rounded-lg border border-emerald/10 bg-white p-3 sm:rounded-xl sm:p-4">

          <div className="flex items-center justify-between">
            <h2 className="font-display text-xs font-semibold tracking-tight text-emerald-deep sm:text-sm">
              Recent Inquiries
            </h2>
            <MessageSquare size={12} className="text-brass/50" />
          </div>

          <div className="mt-2 space-y-0.5 sm:mt-3 sm:space-y-1">

            {inquiries.length === 0 ? (
              <p className="text-[11px] text-ink/50">No inquiries found.</p>
            ) : (
              inquiries.slice(0, 5).map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-2 rounded-md px-1 py-1 transition hover:bg-cream sm:gap-2.5 sm:px-1.5 sm:py-1.5"
                >
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center bg-brass/10 text-brass sm:h-7 sm:w-7"
                    style={{ clipPath: hexClip }}
                  >
                    <MessageSquare size={11} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-semibold text-emerald-deep sm:text-xs">
                      {item.name}
                    </p>
                    <p className="truncate text-[9px] text-ink/50 sm:text-[10px]">
                      {item.service || "General Inquiry"}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-semibold sm:text-[9px] ${
                      item.status === "new"
                        ? "bg-brass/15 text-brass"
                        : "bg-emerald/10 text-emerald"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))
            )}

          </div>

        </div>

      </div>

      {/* ========================================= */}
      {/* Quick Actions — hexagon icon tray */}
      {/* ========================================= */}

      <div className="mt-2.5 rounded-lg border border-emerald/10 bg-white p-3 sm:mt-4 sm:rounded-xl sm:p-4">

        <h2 className="font-display text-xs font-semibold tracking-tight text-emerald-deep sm:text-sm">
          Quick Actions
        </h2>

        <div className="mt-2.5 flex flex-wrap gap-3 sm:mt-3 sm:gap-5">

          <QuickAction
            icon={PlusCircle}
            label="Add Project"
            onClick={() => setPage?.("add-project")}
          />
          <QuickAction
            icon={FolderOpen}
            label="Manage Projects"
            onClick={() => setPage?.("projects")}
          />
          <QuickAction
            icon={ClipboardList}
            label="View Inquiries"
            onClick={() => setPage?.("inquiries")}
          />

        </div>

      </div>

    </div>
  );
}

function StatInline({ value, label, accent }) {
  return (
    <div>
      <p className={`font-display text-sm font-semibold sm:text-lg ${accent ? "text-brass" : "text-ivory"}`}>
        {value}
      </p>
      <p className="mt-0.5 text-[7px] uppercase tracking-[0.08em] text-ivory/50 sm:text-[8px] sm:tracking-[0.12em]">
        {label}
      </p>
    </div>
  );
}

function Divider() {
  return <span className="h-5 w-px bg-white/10 sm:h-6" />;
}

function QuickAction({ icon: Icon, label, onClick }) {
  return (
    <button type="button" onClick={onClick} className="group flex flex-col items-center gap-1">
      <span
        className="grid h-9 w-9 place-items-center bg-gradient-luxe text-brass shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg sm:h-10 sm:w-10"
        style={{ clipPath: hexClip }}
      >
        <Icon size={14} />
      </span>
      <span className="text-center text-[8px] font-medium leading-tight text-ink/60 transition-colors group-hover:text-brass sm:text-[9px]">
        {label}
      </span>
    </button>
  );
}