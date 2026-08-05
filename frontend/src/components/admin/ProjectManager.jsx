import { useMemo, useState } from "react";
import { PlusCircle, Search, Filter, SortAsc } from "lucide-react";
import toast from "react-hot-toast";
import { api } from "../../lib/api";

import { useAdmin } from "../../context/AdminContext";

import ProjectCard from "./projects/ProjectCard";
import ProjectDetails from "./projects/ProjectDetails";
import ProjectForm from "./ProjectForm";

export default function ProjectManager({ autoOpenAdd = false }) {
  const { projects, setProjects, loading, refreshProjects } = useAdmin();

  const [viewingProject, setViewingProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [formOpen, setFormOpen] = useState(autoOpenAdd);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [featuredFilter, setFeaturedFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const PROJECTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  async function deleteProject(id) {
    if (!window.confirm("Delete this project?")) return;
    try {
      await api.delete(`/projects/${id}`);
      toast.success("Project deleted");
      refreshProjects();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  }

  async function toggleFeatured(project) {
    try {
      const { data } = await api.patch(`/projects/${project._id}/featured`);
      setProjects((prev) =>
        prev.map((item) =>
          item._id === project._id
            ? { ...item, featured: data.project.featured }
            : item
        )
      );

      if (viewingProject && viewingProject._id === project._id) {
        setViewingProject({
          ...viewingProject,
          featured: data.project.featured,
        });
      }

      toast.success(data.message);
      await refreshProjects();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Couldn't update featured status");
    }
  }

  function openAddForm() {
    setEditingProject(null);
    setFormOpen(true);
  }

  function openEditForm(project) {
    setEditingProject(project);
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setEditingProject(null);
  }

  const categories = [
    "All",
    "Kitchen",
    "Bedroom",
    "Living Room",
    "Bathroom",
    "False Ceiling",
    "Full Home",
    "Office / Commercial",
    "Other",
  ];

  const filteredProjects = useMemo(() => {
    let list = [...projects];

    if (search.trim()) {
      const term = search.toLowerCase();
      list = list.filter(
        (project) =>
          project.title?.toLowerCase().includes(term) ||
          project.location?.toLowerCase().includes(term) ||
          project.category?.toLowerCase().includes(term)
      );
    }

    if (categoryFilter !== "All") {
      list = list.filter((p) => p.category === categoryFilter);
    }

    if (featuredFilter === "Featured") {
      list = list.filter((p) => p.featured);
    }
    if (featuredFilter === "Normal") {
      list = list.filter((p) => !p.featured);
    }

    switch (sortBy) {
      case "Oldest":
        list.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case "A-Z":
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        list.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return list;
  }, [projects, search, categoryFilter, featuredFilter, sortBy]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-ink/50">
        Loading projects...
      </div>
    );
  }

  return (
    <div>

      {/* ========================================= */}
      {/* Header — title, add button, filter row */}
      {/* ========================================= */}

      <div className="rounded-lg border border-emerald/10 bg-white p-3 shadow-soft sm:rounded-xl sm:p-4">

        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-brass sm:text-[10px] sm:tracking-[0.22em]">
              Admin
            </p>
            <h1 className="mt-0.5 truncate font-display text-base font-semibold tracking-tight text-emerald-deep sm:text-lg md:text-xl">
              Projects
            </h1>
          </div>

          <button
            onClick={openAddForm}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-luxe px-3 py-1.5 text-[11px] font-semibold text-brass shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:px-4 sm:py-2 sm:text-xs"
          >
            <PlusCircle size={14} />
            <span>New</span>
          </button>
        </div>

        {/* Filters row — wraps on mobile instead of forcing horizontal scroll cut-off */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">

          {/* Search */}
          <div className="relative">
            <Search
              size={12}
              className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-ink/40"
            />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="h-7 w-24 rounded-full border border-emerald/15 bg-cream/40 pl-7 pr-2.5 text-[11px] text-ink outline-none placeholder:text-ink/35 focus:border-brass focus:bg-white sm:h-8 sm:w-32 sm:text-xs"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <Filter
              size={11}
              className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-ink/40"
            />
            <select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="h-7 appearance-none rounded-full border border-emerald/15 bg-cream/40 pl-7 pr-5 text-[11px] text-ink outline-none focus:border-brass focus:bg-white sm:h-8 sm:text-xs"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Featured */}
          <select
            value={featuredFilter}
            onChange={(e) => {
              setFeaturedFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="h-7 rounded-full border border-emerald/15 bg-cream/40 px-2.5 text-[11px] text-ink outline-none focus:border-brass focus:bg-white sm:h-8 sm:text-xs"
          >
            <option value="All">All</option>
            <option value="Featured">Star</option>
            <option value="Normal">Normal</option>
          </select>

          {/* Sort */}
          <div className="relative">
            <SortAsc
              size={11}
              className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-ink/40"
            />
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              className="h-7 appearance-none rounded-full border border-emerald/15 bg-cream/40 pl-7 pr-5 text-[11px] text-ink outline-none focus:border-brass focus:bg-white sm:h-8 sm:text-xs"
            >
              <option value="Newest">New</option>
              <option value="Oldest">Old</option>
              <option value="A-Z">A–Z</option>
              <option value="Z-A">Z–A</option>
            </select>
          </div>

        </div>

      </div>

      {/* ========================================= */}
      {/* Main content */}
      {/* ========================================= */}

      <div className="mt-2.5 sm:mt-4">

        <div className="mb-2.5 flex items-center justify-between sm:mb-3">
          <p className="text-[11px] text-ink/50 sm:text-xs">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
          </p>
          {filteredProjects.length === 0 && (
            <button
              onClick={openAddForm}
              className="rounded-full bg-gradient-luxe px-3 py-1 text-[11px] font-semibold text-brass shadow-sm transition hover:-translate-y-0.5 sm:text-xs"
            >
              Add First
            </button>
          )}
        </div>

        {filteredProjects.length === 0 ? (
          <section className="flex min-h-[40vh] flex-col items-center justify-center rounded-lg border border-dashed border-emerald/15 bg-white px-4 text-center sm:rounded-xl">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-brass/10">
              <PlusCircle size={18} className="text-brass" />
            </div>
            <h2 className="mt-3 font-display text-sm font-semibold text-emerald-deep sm:text-base">
              No Projects Yet
            </h2>
            <p className="mx-auto mt-1 max-w-sm text-[11px] leading-5 text-ink/55 sm:text-xs">
              Add your first interior project to start building your portfolio.
            </p>
          </section>
        ) : (
          <>
            {/* Grid — 1 column mobile, 2 tablet, 3 desktop */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
              {paginatedProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  onView={setViewingProject}
                  onEdit={openEditForm}
                  onDelete={deleteProject}
                  onToggleFeatured={toggleFeatured}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="rounded-full border border-emerald/15 bg-white px-3 py-1.5 text-[11px] font-medium text-ink/70 transition hover:border-brass hover:text-brass disabled:cursor-not-allowed disabled:opacity-40 sm:text-xs"
                >
                  Prev
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => {
                    const page = i + 1;
                    const active = currentPage === page;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`h-7 w-7 rounded-full text-[11px] font-semibold transition sm:text-xs ${
                          active
                            ? "bg-gradient-luxe text-brass shadow-sm"
                            : "border border-emerald/15 bg-white text-ink/60 hover:border-brass hover:text-brass"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="rounded-full border border-emerald/15 bg-white px-3 py-1.5 text-[11px] font-medium text-ink/70 transition hover:border-brass hover:text-brass disabled:cursor-not-allowed disabled:opacity-40 sm:text-xs"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* ========================================= */}
      {/* Modals */}
      {/* ========================================= */}

      {viewingProject && (
        <ProjectDetails
          project={viewingProject}
          onClose={() => setViewingProject(null)}
        />
      )}

      {formOpen && (
        <ProjectForm
          project={editingProject}
          onClose={closeForm}
          onSaved={refreshProjects}
        />
      )}

    </div>
  );
}