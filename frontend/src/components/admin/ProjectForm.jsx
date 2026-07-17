import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../lib/api";

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

export default function ProjectForm({
  project = null,
  onClose,
  onSaved,
}) {
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

      toast.error(
        err.response?.data?.message || "Unable to save project"
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">

      <div className="w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-luxe">

        <form
           onSubmit={handleSubmit}
            className="max-h-[90vh] overflow-y-auto p-8 grid gap-6"
         >

          <div className="flex items-center justify-between">

            <h2 className="font-display text-3xl text-emerald-deep">
              {isEdit ? "Edit Project" : "Add Project"}
            </h2>

          <button
           type="button"
           onClick={onClose}
           className="text-3xl leading-none"
           >
             ×
          </button>

          </div>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project Title"
            className="rounded-xl border p-3"
            required
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border p-3"
            required
          >
            <option value="">Select Category</option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="rounded-xl border p-3"
          />

          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="rounded-xl border p-3"
          />
          
          {/* Before Image */}

        <div>

         <label className="mb-2 block font-medium">

          Before Image

         </label>

           <input
           type="file"
           accept="image/*"
           onChange={(e) =>
             setBeforeImage(e.target.files[0])
            }
          />

          </div>

       {/* After Image */}

         <div>

         <label className="mb-2 block font-medium">
 
        After Image

       </label>

        <input
         type="file"
         accept="image/*"
         onChange={(e) =>
         setAfterImage(e.target.files[0])
         }
         />

         </div>

         {/* Gallery Images */}

         <div>

          <label className="mb-2 block font-medium">

           Gallery Images

         </label>

          <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) =>
          setImages(Array.from(e.target.files))
         }
        />

         </div>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              checked={featured}
              onChange={(e) =>
                setFeatured(e.target.checked)
              }
            />

            Featured Project

          </label>

          <div className="flex gap-4">

            <button
              type="submit"
              disabled={saving}
              className="btn-primary"
            >
              {saving ? "Saving..." : "Save Project"}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="btn-outline"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}