/**
 * Read-only "view" modal for a project — full image gallery + description.
 *
 * Props:
 *  project   the project to display, or null to render nothing
 *  onClose()
 */

import { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { X, MapPin, Calendar, Sparkles } from "lucide-react";

export default function ProjectDetails({ project, onClose }) {
  const [previewImage, setPreviewImage] = useState(null);

  if (!project) return null;

  const images = project.gallery?.length
  ? project.gallery
  : project.images?.length
  ? project.images
  : project.image
  ? [project.image]
  : [];

    const hasComparison =
    project.beforeImage &&
    project.afterImage;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-1.5 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-luxe sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}

        <button
          type="button"
          onClick={onClose}
          className="absolute right-1.5 top-1.5 z-10 grid h-5 w-5 place-items-center rounded-full bg-white/95 text-emerald-deep shadow-md transition hover:rotate-90 sm:right-4 sm:top-4 sm:h-9 sm:w-9"
        >
          <X size={10} className="sm:hidden" />
          <X size={16} className="hidden sm:block" />
        </button>

        <div className="p-2 sm:p-6 lg:p-8">

          {/* Header */}

          <div className="pr-5 sm:pr-10">
            <span className="text-[7px] font-semibold uppercase tracking-[0.12em] text-brass sm:text-[10px] sm:tracking-[0.22em]">
              {project.category}
            </span>

            <h2 className="mt-0.5 text-[11px] font-semibold leading-tight tracking-tight text-emerald-deep sm:mt-1 sm:text-lg md:text-xl">
              {project.title}
            </h2>

            {project.location && (
              <p className="mt-0 flex items-center gap-1 text-[9px] text-ink/55 sm:mt-1 sm:text-sm">
                <MapPin size={9} className="shrink-0" />
                {project.location}
              </p>
            )}
          </div>

          {/* Before & After */}

          {hasComparison && (
            <div className="mt-2 sm:mt-6">

              <p className="mb-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-brass sm:mb-2.5 sm:text-[10px] sm:tracking-[0.22em]">
                The Transformation
              </p>

              <div className="relative overflow-hidden rounded-md border border-emerald/10 shadow-soft sm:rounded-2xl">

                <div className="pointer-events-none absolute left-1 top-1 z-10 rounded-full bg-black/50 px-1 py-0.5 text-[7px] font-semibold uppercase tracking-wide text-white sm:left-3 sm:top-3 sm:text-[10px]">
                  Before
                </div>
                <div className="pointer-events-none absolute right-1 top-1 z-10 rounded-full bg-brass px-1 py-0.5 text-[7px] font-semibold uppercase tracking-wide text-emerald-deep sm:right-3 sm:top-3 sm:text-[10px]">
                  After
                </div>

                <div className="aspect-[16/9]">
                  <ReactCompareImage
                    leftImage={project.beforeImage}
                    rightImage={project.afterImage}
                  />
                </div>

              </div>
            </div>
          )}

          {/* Gallery */}

          {images.length > 0 && (
            <div className="mt-2 sm:mt-6">

              <p className="mb-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-brass sm:mb-2.5 sm:text-[10px] sm:tracking-[0.22em]">
                Gallery
              </p>

              <div className="grid grid-cols-5 gap-0.5 sm:grid-cols-4 sm:gap-2 lg:grid-cols-5">
                {images.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setPreviewImage(src)}
                    className="group aspect-square overflow-hidden rounded sm:rounded-lg"
                  >
                    <img
                      src={src}
                      alt={`${project.title} project`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* Description */}

          {project.description && (
            <p className="mt-2 whitespace-pre-line text-[9px] leading-4 text-ink/65 sm:mt-6 sm:text-sm sm:leading-6">
              {project.description}
            </p>
          )}

          {/* Meta */}

          <div className="mt-2 flex flex-wrap items-center gap-1 border-t border-emerald/10 pt-1.5 sm:mt-6 sm:gap-3 sm:pt-4">

            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-brass/15 px-1.5 py-0.5 text-[8px] font-semibold text-brass sm:px-2.5 sm:py-1 sm:text-xs">
                <Sparkles size={8} />
                Featured
              </span>
            )}

            {project.createdAt && (
              <span className="inline-flex items-center gap-1 text-[8px] text-ink/45 sm:text-xs">
                <Calendar size={8} />
                Added {new Date(project.createdAt).toLocaleDateString()}
              </span>
            )}

          </div>

        </div>

      </div>

      {/* Full-screen image preview */}

      {previewImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-3 sm:p-6"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={() => setPreviewImage(null)}
            className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8 sm:h-10 sm:w-10"
          >
            <X size={18} className="sm:size-[22px]" />
          </button>
        </div>
      )}

    </div>
  );
}