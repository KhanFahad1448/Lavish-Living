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
  if (!project) return null;
  const [previewImage, setPreviewImage] = useState(null);

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-luxe sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-emerald-deep shadow-md transition hover:rotate-90 sm:right-4 sm:top-4 sm:h-9 sm:w-9"
        >
          <X size={16} />
        </button>

        <div className="p-4 sm:p-6 md:p-8">

          {/* Header */}

          <div className="pr-8 sm:pr-10">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-brass sm:text-[10px] sm:tracking-[0.25em]">
              {project.category}
            </span>

            <h2 className="mt-1 text-lg font-semibold leading-tight tracking-tight text-emerald-deep sm:text-xl md:text-2xl">
              {project.title}
            </h2>

            {project.location && (
              <p className="mt-1 flex items-center gap-1 text-xs text-ink/55 sm:text-sm">
                <MapPin size={12} className="shrink-0" />
                {project.location}
              </p>
            )}
          </div>

          {/* Before & After */}

          {hasComparison && (
            <div className="mt-5 sm:mt-7">

              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-brass sm:mb-3 sm:text-[10px] sm:tracking-[0.25em]">
                The Transformation
              </p>

              <div className="relative overflow-hidden rounded-xl border border-emerald/10 shadow-soft sm:rounded-2xl">

                <div className="pointer-events-none absolute left-2 top-2 z-10 rounded-full bg-black/50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white sm:left-3 sm:top-3 sm:text-[10px]">
                  Before
                </div>
                <div className="pointer-events-none absolute right-2 top-2 z-10 rounded-full bg-brass px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-deep sm:right-3 sm:top-3 sm:text-[10px]">
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
            <div className="mt-5 sm:mt-7">

              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-brass sm:mb-3 sm:text-[10px] sm:tracking-[0.25em]">
                Gallery
              </p>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
                {images.map((src) => (
                  <button
                    key={src}
                    onClick={() => setPreviewImage(src)}
                    className="group aspect-square overflow-hidden rounded-lg sm:rounded-xl"
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
            <p className="mt-5 whitespace-pre-line text-xs leading-5 text-ink/65 sm:mt-7 sm:text-sm sm:leading-6">
              {project.description}
            </p>
          )}

          {/* Meta */}

          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-emerald/10 pt-4 sm:mt-7 sm:gap-3 sm:pt-5">

            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-brass/15 px-2.5 py-1 text-[10px] font-semibold text-brass sm:text-xs">
                <Sparkles size={11} />
                Featured
              </span>
            )}

            {project.createdAt && (
              <span className="inline-flex items-center gap-1 text-[10px] text-ink/45 sm:text-xs">
                <Calendar size={11} />
                Added {new Date(project.createdAt).toLocaleDateString()}
              </span>
            )}

          </div>

        </div>

      </div>

      {/* Full-screen image preview */}

      {previewImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 sm:p-6"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setPreviewImage(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X size={22} />
          </button>
        </div>
      )}

    </div>
  );
}