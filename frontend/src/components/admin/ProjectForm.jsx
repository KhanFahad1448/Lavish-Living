import { useState, useMemo } from "react";
import toast from "react-hot-toast";
import { X, Upload, ImagePlus, Star } from "lucide-react";
import { api } from "../../lib/api";
import ProjectPreview from "./projects/ProjectPreview";

const categories = [
  "Kitchen",
  "Bedroom",
  "Living Room",
  "Bathroom",
  "False Ceiling",
  "Full Home",
  "Office / Commercial",
  "Other",
];

export default function ProjectForm({ project = null, onClose, onSaved }) {
  const isEdit = Boolean(project?._id);

  const [title, setTitle] = useState(project?.title || "");
  const [category, setCategory] = useState(project?.category || "");
  const [location, setLocation] = useState(project?.location || "");
  const [description, setDescription] = useState(project?.description || "");
  const [featured, setFeatured] = useState(project?.featured || false);

  const [images, setImages] = useState([]);
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);

  const [saving, setSaving] = useState(false);

  // Prefer after > before > first gallery image > existing project image (edit mode)
  const previewImage = useMemo(() => {
    if (afterImage) return URL.createObjectURL(afterImage);
    if (beforeImage) return URL.createObjectURL(beforeImage);
    if (images.length > 0) return URL.createObjectURL(images[0]);
    return project?.afterImage || project?.beforeImage || null;
  }, [afterImage, beforeImage, images, project]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !category) {
      toast.error("Title and Category are required");
      return;
    }

    try {
      setSaving(true);

      const formData = new FormData();

      formData.append("title", title);
      formData.append("category", category);
      formData.append("location", location);
      formData.append("description", description);
      formData.append("featured", featured);

      if (beforeImage) {
        formData.append("beforeImage", beforeImage);
      }

      if (afterImage) {
        formData.append("afterImage", afterImage);
      }

      images.forEach((file) => {
        formData.append("images", file);
      });

      if (isEdit) {
        await api.put(`/projects/${project._id}`, formData);
        toast.success("Project updated successfully");
      } else {
        await api.post("/projects", formData);
        toast.success("Project created successfully");
      }

      onSaved?.();
      onClose?.();
    } catch (err) {
      console.error(err);

      toast.error(err.response?.data?.message || "Unable to save project");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-0 sm:p-6">

      <div className="flex h-full w-full max-w-5xl flex-col overflow-hidden bg-white shadow-luxe sm:h-auto sm:max-h-[90vh] sm:rounded-3xl">

        {/* ========================================= */}
        {/* Header */}
        {/* ========================================= */}

        <div className="flex shrink-0 items-center justify-between border-b border-emerald/10 px-4 py-3.5 sm:px-8 sm:py-5">

          <div>
            <h2 className="font-display text-lg font-semibold tracking-tight text-emerald-deep sm:text-2xl md:text-3xl">
              {isEdit ? "Edit Project" : "Add Project"}
            </h2>
            <p className="mt-0.5 text-[10px] text-ink/50 sm:text-xs">
              {isEdit
                ? "Update the details for this project"
                : "Fill in the details to add a new project"}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-ink/50 transition hover:bg-cream hover:text-emerald-deep sm:h-9 sm:w-9"
          >
            <X size={18} />
          </button>

        </div>

        {/* ========================================= */}
        {/* Body — scrollable, form + live preview */}
        {/* ========================================= */}

        <form
          onSubmit={handleSubmit}
          className="grid flex-1 gap-6 overflow-y-auto p-4 sm:p-6 md:p-8 lg:grid-cols-[1fr_320px]"
        >

          {/* ----------------------------------- */}
          {/* Left column — form fields */}
          {/* ----------------------------------- */}

          <div className="grid gap-4 sm:gap-5">

            <Field label="Project Title" required>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Modern Modular Kitchen"
                className="input-field"
                required
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

              <Field label="Category" required>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="input-field"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Location">
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Ranchi, Jharkhand"
                  className="input-field"
                />
              </Field>

            </div>

            <Field label="Description">
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of the project..."
                className="input-field resize-none"
              />
            </Field>

            {/* ----------------------------------- */}
            {/* Before / After images */}
            {/* ----------------------------------- */}

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

              <ImageUploadField
                label="Before Image"
                file={beforeImage}
                onChange={setBeforeImage}
              />

              <ImageUploadField
                label="After Image"
                file={afterImage}
                onChange={setAfterImage}
              />

            </div>

            {/* ----------------------------------- */}
            {/* Gallery images */}
            {/* ----------------------------------- */}

            <Field label="Gallery Images">

              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-emerald/15 bg-cream/40 px-3 py-3 text-center text-xs font-medium text-ink/50 transition hover:border-brass/40 hover:text-brass sm:rounded-xl sm:py-4 sm:text-sm">
                <Upload size={14} className="shrink-0 sm:size-4" />
                {images.length > 0
                  ? `${images.length} image${images.length > 1 ? "s" : ""} selected`
                  : "Click to upload gallery images"}
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => setImages(Array.from(e.target.files))}
                  className="hidden"
                />
              </label>

              {images.length > 0 && (
                <div className="mt-2 grid grid-cols-4 gap-1.5 sm:grid-cols-6 sm:gap-2">
                  {images.map((file, i) => (
                    <div
                      key={i}
                      className="relative aspect-square overflow-hidden rounded-md bg-cream sm:rounded-lg"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Gallery ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setImages((prev) => prev.filter((_, idx) => idx !== i))
                        }
                        className="absolute right-0.5 top-0.5 grid h-4 w-4 place-items-center rounded-full bg-black/60 text-white sm:h-5 sm:w-5"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

            </Field>

            {/* ----------------------------------- */}
            {/* Featured toggle */}
            {/* ----------------------------------- */}

            <label
              className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 transition sm:rounded-xl sm:px-4 sm:py-3 ${
                featured
                  ? "border-brass/40 bg-brass/5"
                  : "border-emerald/10 bg-white hover:bg-cream/60"
              }`}
            >
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="sr-only"
              />

              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full transition ${
                  featured ? "bg-gradient-luxe text-brass" : "bg-cream text-ink/30"
                }`}
              >
                <Star size={11} className={featured ? "fill-brass" : ""} />
              </span>

              <span className="text-xs font-medium text-emerald-deep sm:text-sm">
                Mark as Featured Project
              </span>
            </label>

            {/* Preview — mobile/tablet only, sits inline below fields */}
            <div className="lg:hidden">
              <ProjectPreview
                title={title}
                category={category}
                location={location}
                description={description}
                featured={featured}
                previewImage={previewImage}
              />
            </div>

            {/* ----------------------------------- */}
            {/* Actions */}
            {/* ----------------------------------- */}

            <div className="mt-1 flex flex-col-reverse gap-2.5 border-t border-emerald/10 pt-4 sm:flex-row">

              <button
                type="button"
                onClick={onClose}
                className="btn-outline w-full text-sm sm:w-auto"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="btn-primary w-full text-sm sm:w-auto"
              >
                {saving ? "Saving..." : "Save Project"}
              </button>

            </div>

          </div>

          {/* ----------------------------------- */}
          {/* Right column — live preview, desktop only, sticky */}
          {/* ----------------------------------- */}

          <div className="hidden lg:block">
            <div className="sticky top-0">
              <ProjectPreview
                title={title}
                category={category}
                location={location}
                description={description}
                featured={featured}
                previewImage={previewImage}
              />
            </div>
          </div>

        </form>

      </div>

    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold tracking-tight text-emerald-deep sm:text-sm">
        {label}
        {required && <span className="ml-0.5 text-brass">*</span>}
      </label>
      {children}
    </div>
  );
}

function ImageUploadField({ label, file, onChange }) {
  return (
    <Field label={label}>

      {file ? (
        <div className="relative overflow-hidden rounded-lg border border-emerald/10 sm:rounded-xl">
          <img
            src={URL.createObjectURL(file)}
            alt={label}
            className="h-28 w-full object-cover sm:h-36"
          />
          <button
            type="button"
            onClick={() => onChange(null)}
            className="absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-full bg-black/60 text-white"
          >
            <X size={12} />
          </button>
        </div>
      ) : (
        <label className="flex h-28 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-emerald/15 bg-cream/40 text-ink/50 transition hover:border-brass/40 hover:text-brass sm:h-36 sm:rounded-xl">
          <ImagePlus size={18} className="sm:size-5" />
          <span className="text-[10px] font-medium sm:text-xs">Click to upload</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onChange(e.target.files[0])}
            className="hidden"
          />
        </label>
      )}

    </Field>
  );
}