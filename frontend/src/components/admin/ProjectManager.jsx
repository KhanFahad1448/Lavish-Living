import { useMemo, useState } from "react";
import { PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { api } from "../../lib/api";

import { useAdmin } from "../../context/AdminContext";

import ProjectCard from "./projects/ProjectCard";
import ProjectDetails from "./projects/ProjectDetails";
import ProjectForm from "./ProjectForm";

export default function ProjectManager({ autoOpenAdd = false }) {

  // ==========================
  // Admin Context
  // ==========================

  const {
    projects,
    setProjects,
    loading,
    refreshProjects,
  } = useAdmin();

  const [viewingProject, setViewingProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [formOpen, setFormOpen] = useState(autoOpenAdd);

  // ==========================
// Filters
// ==========================

const [search, setSearch] = useState("");

const [categoryFilter, setCategoryFilter] =
  useState("All");

const [featuredFilter, setFeaturedFilter] =
  useState("All");

const [sortBy, setSortBy] =
  useState("Newest");

  // ==========================
// Pagination
// ==========================

const PROJECTS_PER_PAGE = 6;

const [currentPage, setCurrentPage] = useState(1);


  // ==========================
  // Delete Project
  // ==========================

  async function deleteProject(id) {

    if (!window.confirm("Delete this project?")) return;

    try {

      await api.delete(`/projects/${id}`);

      toast.success("Project deleted");

      refreshProjects();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Delete failed"
      );

    }

  }

  // ==========================
  // Toggle Featured
  // ==========================

  async function toggleFeatured(project) {

    try {

      const { data } = await api.patch(
        `/projects/${project._id}/featured`
      );

      setProjects((prev) =>
        prev.map((item) =>
          item._id === project._id
            ? {
                ...item,
                featured: data.project.featured,
              }
            : item
        )
      );

      if (
        viewingProject &&
        viewingProject._id === project._id
      ) {

        setViewingProject({
          ...viewingProject,
          featured: data.project.featured,
        });

      }

      toast.success(data.message);

      await refreshProjects();

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Couldn't update featured status"
      );

    }

  }

  // ==========================
  // Open Add
  // ==========================

  function openAddForm() {

    setEditingProject(null);

    setFormOpen(true);

  }

  // ==========================
  // Open Edit
  // ==========================

  function openEditForm(project) {

    setEditingProject(project);

    setFormOpen(true);

  }

  // ==========================
  // Close Form
  // ==========================

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

  // Search
  if (search.trim()) {
    const term = search.toLowerCase();

    list = list.filter(
      (project) =>
        project.title
          ?.toLowerCase()
          .includes(term) ||
        project.location
          ?.toLowerCase()
          .includes(term) ||
        project.category
          ?.toLowerCase()
          .includes(term)
    );
  }

  // Category
  if (categoryFilter !== "All") {
    list = list.filter(
      (p) =>
        p.category === categoryFilter
    );
  }

  // Featured
  if (featuredFilter === "Featured") {
    list = list.filter(
      (p) => p.featured
    );
  }

  if (featuredFilter === "Normal") {
    list = list.filter(
      (p) => !p.featured
    );
  }

  // Sorting
  switch (sortBy) {
    case "Oldest":
      list.sort(
        (a, b) =>
          new Date(a.createdAt) -
          new Date(b.createdAt)
      );
      break;

    case "A-Z":
      list.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;

    case "Z-A":
      list.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;

    default:
      list.sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      );
  }

  return list;
}, [
  projects,
  search,
  categoryFilter,
  featuredFilter,
  sortBy,
]);

// ==========================
// Pagination Logic
// ==========================

const totalPages = Math.ceil(
  filteredProjects.length / PROJECTS_PER_PAGE
);

const paginatedProjects = filteredProjects.slice(
  (currentPage - 1) * PROJECTS_PER_PAGE,
  currentPage * PROJECTS_PER_PAGE
);



    if (loading) {

    // ==========================
// Filtered Projects
// ==========================




    return (

      <div className="py-20 text-center text-ink/60">

        Loading projects...

      </div>

    );

  }

  return (

  <>

    <div className="mb-8 flex items-center justify-between">

      <div>

        <p className="text-xs uppercase tracking-[0.2em] text-brass">
          Admin
        </p>

        <h1 className="mt-2 font-display text-4xl text-emerald-deep">
          Projects
        </h1>

        <p className="mt-2 text-sm text-ink/60">
          {projects.length} project{projects.length !== 1 ? "s" : ""}
        </p>

      </div>

      <button
        onClick={openAddForm}
        className="btn-primary flex items-center gap-2"
      >

        <PlusCircle size={18} />

        Add Project

      </button>

    </div>

    {/* ==========================
        Search & Filters
    ========================== */}

    <div className="mb-8 grid gap-4 rounded-2xl bg-white p-5 shadow-soft md:grid-cols-2 xl:grid-cols-4">

      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-xl border p-3 outline-none focus:border-emerald-deep"
      />

      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="rounded-xl border p-3"
      >
        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>

      <select
        value={featuredFilter}
        onChange={(e) => setFeaturedFilter(e.target.value)}
        className="rounded-xl border p-3"
      >
        <option value="All">All Projects</option>
        <option value="Featured">Featured</option>
        <option value="Normal">Normal</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-xl border p-3"
      >
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

    </div>

    {filteredProjects.length === 0 ? (

      <div className="rounded-2xl border border-dashed p-12 text-center">

        <h2 className="text-xl font-semibold">
          No Projects Yet
        </h2>

        <p className="mt-2 text-ink/60">
          Click <strong>Add Project</strong> to create your first project.
        </p>

      </div>

    ) : (

      <div className="grid gap-6 lg:grid-cols-2">

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

    )}


{totalPages > 1 && (
  <div className="mt-8 flex items-center justify-center gap-2">

    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((p) => p - 1)}
      className="rounded-lg border px-4 py-2 disabled:opacity-50"
    >
      Previous
    </button>

    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => setCurrentPage(index + 1)}
        className={`rounded-lg px-4 py-2 ${
          currentPage === index + 1
            ? "bg-emerald-deep text-white"
            : "border"
        }`}
      >
        {index + 1}
      </button>
    ))}

    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage((p) => p + 1)}
      className="rounded-lg border px-4 py-2 disabled:opacity-50"
    >
      Next
    </button>

  </div>
)}

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

  </>

);

}