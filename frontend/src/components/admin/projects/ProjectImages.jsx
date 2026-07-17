import { useEffect, useState } from "react";
import { X, UploadCloud } from "lucide-react";
import toast from "react-hot-toast";

const MAX_IMAGES = 10;

export default function ProjectImages({
  existingImages = [],
  removedImages,
  setRemovedImages,
  newFiles,
  setNewFiles,
}) {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    const urls = newFiles.map((file) => URL.createObjectURL(file));

    setPreviews(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [newFiles]);

  function handleFileChange(e) {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    const validFiles = files.filter((file) =>
      file.type.startsWith("image/")
    );

    if (validFiles.length !== files.length) {
      toast.error("Only image files are allowed.");
    }

    const total =
      existingImages.length -
      removedImages.length +
      newFiles.length +
      validFiles.length;

    if (total > MAX_IMAGES) {
      toast.error(`Maximum ${MAX_IMAGES} images allowed.`);
      return;
    }

    setNewFiles((prev) => [...prev, ...validFiles]);

    e.target.value = "";
  }

  function removeNewFile(index) {
    setNewFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function toggleRemoveExisting(url) {
    setRemovedImages((prev) =>
      prev.includes(url)
        ? prev.filter((img) => img !== url)
        : [...prev, url]
    );
  }

  const visibleExisting = existingImages.filter(
    (img) => !removedImages.includes(img)
  );

  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink/60">
        Project Images
      </label>

      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-emerald/30 bg-cream/50 p-6 text-center text-sm text-ink/60 transition hover:border-brass hover:bg-cream">
        <UploadCloud size={26} />

        <span>Click to upload project images</span>

        <span className="text-xs text-ink/50">
          JPG, PNG, WEBP (Max {MAX_IMAGES})
        </span>

        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {(visibleExisting.length > 0 || previews.length > 0) && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {visibleExisting.map((url) => (
            <div
              key={url}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={url}
                alt=""
                className="h-24 w-full object-cover"
              />

              <button
                type="button"
                onClick={() => toggleRemoveExisting(url)}
                className="absolute right-1 top-1 rounded-full bg-black/60 p-1 text-white opacity-0 transition group-hover:opacity-100"
              >
                <X size={14} />
              </button>
            </div>
          ))}

          {previews.map((url, index) => (
            <div
              key={url}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={url}
                alt=""
                className="h-24 w-full object-cover"
              />

              <span className="absolute bottom-1 left-1 rounded bg-brass px-2 py-0.5 text-[10px] font-medium text-emerald-deep">
                NEW
              </span>

              <button
                type="button"
                onClick={() => removeNewFile(index)}
                className="absolute right-1 top-1 rounded-full bg-black/60 p-1 text-white opacity-0 transition group-hover:opacity-100"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {removedImages.length > 0 && (
        <p className="mt-3 text-xs text-red-500">
          {removedImages.length} image
          {removedImages.length > 1 ? "s" : ""} will be removed after saving.
        </p>
      )}
    </div>
  );
}