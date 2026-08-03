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
    <div className="overflow-hidden rounded-xl border border-emerald/10 bg-white shadow-soft transition duration-300 hover:border-brass/30 hover:shadow-luxe sm:rounded-2xl">

      <img
        src={image}
        alt={project.title}
        className="h-32 w-full cursor-pointer object-cover sm:h-40 md:h-44"
        onClick={() => onView?.(project)}
      />

      <div className="p-3.5 sm:p-4 lg:p-5">

        <div className="flex items-start justify-between gap-2">

          <div className="min-w-0">

            <span className="text-[9px] uppercase tracking-[0.14em] text-brass sm:text-[10px]">
              {project.category}
            </span>

            <h2 className="mt-1 truncate font-display text-sm font-semibold tracking-tight text-emerald-deep sm:text-base">
              {project.title}
            </h2>

            {project.location && (
              <p className="mt-0.5 truncate text-xs text-ink/60">
                {project.location}
              </p>
            )}

          </div>

          <button
            onClick={() => onToggleFeatured?.(project)}
            className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition ${
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
              size={13}
              fill={project.featured ? "currentColor" : "none"}
            />
          </button>

        </div>

        {project.description && (
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-ink/65 sm:mt-2.5 sm:text-sm">
            {project.description}
          </p>
        )}

        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-ink/50 sm:mt-2.5 sm:text-xs">
          <ImageIcon size={12} />
          {project.images?.length || 1} image
          {(project.images?.length || 1) !== 1 ? "s" : ""}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">

          <button
            onClick={() => onView?.(project)}
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald/15 bg-white px-3 py-1.5 text-[11px] font-semibold text-emerald-deep transition hover:border-brass sm:px-3.5 sm:py-2 sm:text-xs"
          >
            <Eye size={13} />
            View
          </button>

          <button
            onClick={() => onEdit?.(project)}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-luxe px-3 py-1.5 text-[11px] font-semibold text-brass transition hover:shadow-md sm:px-3.5 sm:py-2 sm:text-xs"
          >
            <Pencil size={13} />
            Edit
          </button>

          <button
            onClick={() => onDelete?.(project._id)}
            className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-red-600 sm:px-3.5 sm:py-2 sm:text-xs"
          >
            <Trash2 size={13} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}