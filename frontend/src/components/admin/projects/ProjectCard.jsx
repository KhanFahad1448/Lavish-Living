import {
  Pencil,
  Trash2,
  Star,
  Eye,
  Image as ImageIcon,
  MapPin,
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

  const imageCount = project.images?.length || 1;

  return (
    <div className="group overflow-hidden rounded-lg border border-emerald/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/30 hover:shadow-luxe sm:rounded-2xl">

      {/* Image with overlaid content */}
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">

        <img
          src={image}
          alt={project.title}
          onClick={() => onView?.(project)}
          className="h-full w-full cursor-pointer object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Legibility gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-emerald-deep/10 to-transparent" />

        {/* Category badge */}
        <span className="absolute left-1.5 top-1.5 z-10 rounded-full bg-white/20 px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[9px] sm:tracking-[0.16em]">
          {project.category}
        </span>

        {/* Featured toggle */}
        <button
          type="button"
          onClick={() => onToggleFeatured?.(project)}
          className={`absolute right-1.5 top-1.5 z-10 grid h-5 w-5 place-items-center rounded-full backdrop-blur-md transition sm:right-3 sm:top-3 sm:h-8 sm:w-8 ${
            project.featured
              ? "bg-brass text-emerald-deep"
              : "bg-white/25 text-white hover:bg-white/40"
          }`}
          title={project.featured ? "Remove from Featured" : "Mark as Featured"}
        >
          <Star
            size={10}
            className="sm:hidden"
            fill={project.featured ? "currentColor" : "none"}
          />
          <Star
            size={15}
            className="hidden sm:block"
            fill={project.featured ? "currentColor" : "none"}
          />
        </button>

        {/* Title + location, sitting on the gradient */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-2 sm:p-4">
          <h2 className="truncate font-display text-[11px] font-semibold leading-tight text-white sm:text-base">
            {project.title}
          </h2>

          {project.location && (
            <p className="mt-0.5 flex items-center gap-0.5 truncate text-[8px] text-white/75 sm:text-xs">
              <MapPin size={8} className="shrink-0 sm:hidden" />
              <MapPin size={11} className="hidden shrink-0 sm:block" />
              {project.location}
            </p>
          )}
        </div>

      </div>

      {/* Body */}
      <div className="p-2 sm:p-4">

        {project.description && (
          <p className="line-clamp-2 text-[9px] leading-4 text-ink/60 sm:text-xs sm:leading-5">
            {project.description}
          </p>
        )}

        <div className="mt-1.5 flex items-center justify-between gap-1 sm:mt-3">

          <span className="flex items-center gap-1 text-[8px] text-ink/40 sm:text-[11px]">
            <ImageIcon size={9} className="sm:hidden" />
            <ImageIcon size={12} className="hidden sm:block" />
            {imageCount}
          </span>

          <div className="flex items-center gap-1 sm:gap-1.5">

            <button
              type="button"
              onClick={() => onView?.(project)}
              title="View"
              className="grid h-5 w-5 place-items-center rounded-full bg-emerald/5 text-emerald-deep transition hover:bg-emerald/10 sm:h-8 sm:w-8"
            >
              <Eye size={10} className="sm:hidden" />
              <Eye size={14} className="hidden sm:block" />
            </button>

            <button
              type="button"
              onClick={() => onEdit?.(project)}
              title="Edit"
              className="grid h-5 w-5 place-items-center rounded-full bg-gradient-luxe text-brass transition hover:shadow-md sm:h-8 sm:w-8"
            >
              <Pencil size={10} className="sm:hidden" />
              <Pencil size={14} className="hidden sm:block" />
            </button>

            <button
              type="button"
              onClick={() => onDelete?.(project._id)}
              title="Delete"
              className="grid h-5 w-5 place-items-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100 sm:h-8 sm:w-8"
            >
              <Trash2 size={10} className="sm:hidden" />
              <Trash2 size={14} className="hidden sm:block" />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}