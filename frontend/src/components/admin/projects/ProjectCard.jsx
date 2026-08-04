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
    <div className="overflow-hidden rounded-md border border-emerald/10 bg-white shadow-soft transition duration-300 hover:border-brass/30 hover:shadow-luxe sm:rounded-xl">

      <img
        src={image}
        alt={project.title}
        className="h-20 w-full cursor-pointer object-cover sm:h-40 lg:h-44"
        onClick={() => onView?.(project)}
      />

      <div className="p-2 sm:p-4 lg:p-5">

        <div className="flex items-start justify-between gap-1.5 sm:gap-2">

          <div className="min-w-0">

            <span className="text-[7px] uppercase tracking-[0.12em] text-brass sm:text-[10px] sm:tracking-[0.14em]">
              {project.category}
            </span>

            <h2 className="mt-0.5 truncate font-display text-[11px] font-semibold tracking-tight text-emerald-deep sm:mt-1 sm:text-sm">
              {project.title}
            </h2>

            {project.location && (
              <p className="mt-0 truncate text-[9px] text-ink/60 sm:mt-0.5 sm:text-xs">
                {project.location}
              </p>
            )}

          </div>

          <button
            type="button"
            onClick={() => onToggleFeatured?.(project)}
            className={`grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full transition sm:h-7 sm:w-7 ${
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
              size={9}
              className="sm:hidden"
              fill={project.featured ? "currentColor" : "none"}
            />
            <Star
              size={13}
              className="hidden sm:block"
              fill={project.featured ? "currentColor" : "none"}
            />
          </button>

        </div>

        {project.description && (
          <p className="mt-1 line-clamp-2 text-[9px] leading-4 text-ink/65 sm:mt-2.5 sm:text-xs sm:leading-5">
            {project.description}
          </p>
        )}

        <div className="mt-1 flex items-center gap-1 text-[8px] text-ink/50 sm:mt-2.5 sm:gap-1.5 sm:text-[11px]">
          <ImageIcon size={9} className="sm:hidden" />
          <ImageIcon size={12} className="hidden sm:block" />
          {project.images?.length || 1} image
          {(project.images?.length || 1) !== 1 ? "s" : ""}
        </div>

        <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-4 sm:gap-2">

          <button
            type="button"
            onClick={() => onView?.(project)}
            className="inline-flex items-center gap-1 rounded-full border border-emerald/15 bg-white px-2 py-1 text-[8px] font-semibold text-emerald-deep transition hover:border-brass sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-xs"
          >
            <Eye size={9} className="sm:hidden" />
            <Eye size={13} className="hidden sm:block" />
            View
          </button>

          <button
            type="button"
            onClick={() => onEdit?.(project)}
            className="inline-flex items-center gap-1 rounded-full bg-gradient-luxe px-2 py-1 text-[8px] font-semibold text-brass transition hover:shadow-md sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-xs"
          >
            <Pencil size={9} className="sm:hidden" />
            <Pencil size={13} className="hidden sm:block" />
            Edit
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(project._id)}
            className="inline-flex items-center gap-1 rounded-full bg-red-500 px-2 py-1 text-[8px] font-semibold text-white transition hover:bg-red-600 sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-xs"
          >
            <Trash2 size={9} className="sm:hidden" />
            <Trash2 size={13} className="hidden sm:block" />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}