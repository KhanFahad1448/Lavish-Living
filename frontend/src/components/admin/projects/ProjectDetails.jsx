/**
 * Read-only "view" modal for a project — full image gallery + description.
 *
 * Props:
 *  project   the project to display, or null to render nothing
 *  onClose()
 */

import { useState } from "react";
import ReactCompareImage from "react-compare-image";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-8 shadow-luxe"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-brass">
              {project.category}
            </span>
            <h2 className="mt-1 font-display text-3xl text-emerald-deep">
              {project.title}
            </h2>
            {project.location && (
              <p className="mt-1 text-sm text-ink/60">{project.location}</p>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-3xl leading-none text-ink/50 hover:text-ink"
          >
            &times;
          </button>
        </div>

        {hasComparison && (
       <div className="mt-6">

       <h3 className="mb-4 font-display text-2xl text-emerald-deep">
         Before & After
        </h3>

      <div className="overflow-hidden rounded-2xl shadow-soft">
           <div className="aspect-[16/9]">
          <ReactCompareImage
          leftImage={project.beforeImage}
          rightImage={project.afterImage}
         />

       </div>
    </div>
  </div>
      )}
        
        <h3 className="mt-8 mb-4 font-display text-2xl text-emerald-deep">
             Project Gallery
        </h3>

        {images.length > 0 && (
         
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {images.map((src) => (
             <img
              key={src}
              src={src}
              alt={`${project.title} Project`}
              loading="lazy"
              onClick={() => setPreviewImage(src)}
              className="h-44 w-full cursor-pointer rounded-xl object-cover transition duration-300 hover:scale-105"
             />
            ))}
          </div>
        )}

        {project.description && (
          <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-ink/70">
            {project.description}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3 text-xs text-ink/50">
          {project.featured && (
            <span className="rounded-full bg-brass/20 px-3 py-1 font-medium text-brass">
              Featured
            </span>
          )}
          {project.createdAt && (
            <span>
              Added {new Date(project.createdAt).toLocaleDateString()}
            </span>
          )}

          {previewImage && (
  <div
    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6"
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
      className="absolute right-8 top-8 text-5xl text-white hover:text-brass"
    >
      ×
    </button>
  </div>
)}
        </div>
      </div>
    </div>
  );
}
