import { Star } from "lucide-react";

/**
 * Small live preview card shown next to the Add/Edit form, so the admin
 * can see roughly how the project will look before saving.
 */
export default function ProjectPreview({
  title,
  category,
  location,
  description,
  featured,
  previewImage,
}) {
  return (
    <div>

      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40 sm:mb-2 sm:text-xs">
        Live Preview
      </p>

      <div className="overflow-hidden rounded-xl border border-emerald/10 bg-white shadow-soft sm:rounded-2xl">

        <div className="relative h-28 w-full bg-cream sm:h-40">
          <img
            src={previewImage || "https://placehold.co/900x600?text=No+Image"}
            alt=""
            className="h-full w-full object-cover"
          />

          {featured && (
            <div className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-brass text-emerald-deep shadow-md sm:h-7 sm:w-7">
              <Star size={11} className="sm:size-[13px]" fill="currentColor" />
            </div>
          )}
        </div>

        <div className="p-3 sm:p-4">

          <span className="block truncate text-[10px] font-medium uppercase tracking-wider text-brass sm:text-xs">
            {category || "Category"}
          </span>

          <h3 className="mt-0.5 truncate font-display text-sm font-semibold tracking-tight text-emerald-deep sm:mt-1 sm:text-lg">
            {title || "Project title"}
          </h3>

          <p className="mt-0.5 truncate text-[10px] text-ink/60 sm:mt-1 sm:text-xs">
            {location || "Location"}
          </p>

          <p className="mt-2 min-h-[2rem] text-[11px] leading-snug text-ink/70 sm:mt-3 sm:min-h-[2.25rem] sm:text-xs">
            {description ? (
              <span className="line-clamp-2">{description}</span>
            ) : (
              <span className="italic text-ink/35">No description yet</span>
            )}
          </p>

        </div>

      </div>

    </div>
  );
}