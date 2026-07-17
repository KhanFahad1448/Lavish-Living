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
    <div className="overflow-hidden rounded-2xl border border-emerald/10 bg-white shadow-soft">
      <img
        src={previewImage || "https://placehold.co/900x600?text=No+Image"}
        alt=""
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-brass">
              {category || "Category"}
            </span>
            <h3 className="mt-1 font-display text-lg text-emerald-deep">
              {title || "Project title"}
            </h3>
            <p className="mt-1 text-xs text-ink/60">
              {location || "Location"}
            </p>
          </div>

          {featured && (
            <div className="rounded-full bg-brass p-1.5 text-emerald-deep">
              <Star size={14} fill="currentColor" />
            </div>
          )}
        </div>

        {description && (
          <p className="mt-3 line-clamp-2 text-xs text-ink/70">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
