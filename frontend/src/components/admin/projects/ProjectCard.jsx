import {
  Pencil,
  Trash2,
  Star,
  Eye,
  Image as ImageIcon,
} from "lucide-react";

export default function ProjectCard({
  project,
  onEdit,
  onDelete,
  onView,
  onToggleFeatured,
}) {
  const image =
    project.images?.[0] ||
    project.image ||
    "https://placehold.co/900x600?text=No+Image";

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-soft transition hover:shadow-lg">

      <img
        src={image}
        alt={project.title}
        className="h-56 w-full cursor-pointer object-cover"
        onClick={() => onView?.(project)}
      />

      <div className="p-6">

        <div className="flex items-start justify-between">

          <div>

            <span className="text-xs uppercase tracking-wider text-brass">
              {project.category}
            </span>

            <h2 className="mt-1 font-display text-2xl text-emerald-deep">
              {project.title}
            </h2>

            {project.location && (
              <p className="mt-1 text-sm text-ink/60">
                {project.location}
              </p>
            )}

          </div>

          <button
            onClick={() => onToggleFeatured?.(project)}
            className={`rounded-full p-2 transition ${
              project.featured
                ? "bg-brass text-emerald-deep"
                : "bg-gray-200 text-gray-500 hover:bg-yellow-100"
            }`}
            title={
              project.featured
                ? "Remove from Featured"
                : "Mark as Featured"
            }
          >
            <Star
              size={18}
              fill={project.featured ? "currentColor" : "none"}
            />
          </button>

        </div>

        {project.description && (
          <p className="mt-4 line-clamp-2 text-sm text-ink/70">
            {project.description}
          </p>
        )}

        <div className="mt-4 flex items-center gap-2 text-sm text-ink/60">
          <ImageIcon size={16} />
          {project.images?.length || 1} image
          {(project.images?.length || 1) !== 1 ? "s" : ""}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">

          <button
            onClick={() => onView?.(project)}
            className="btn-outline"
          >
            <Eye size={16} />
            View
          </button>

          <button
            onClick={() => onEdit?.(project)}
            className="btn-outline"
          >
            <Pencil size={16} />
            Edit
          </button>

          <button
            onClick={() => onDelete?.(project._id)}
            className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-3 text-sm text-white transition hover:bg-red-600"
          >
            <Trash2 size={16} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}