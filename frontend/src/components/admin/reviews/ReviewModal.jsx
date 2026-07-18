import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ReviewModal({
  open,
  review,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({
    name: "",
    location: "",
    rating: 5,
    review: "",
  });

  useEffect(() => {
    if (review) {
      setForm({
        name: review.name || "",
        location: review.location || "",
        rating: review.rating || 5,
        review: review.review || "",
      });
    }
  }, [review]);

  if (!open) return null;

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...review,
      ...form,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">

          <h2 className="font-display text-3xl text-emerald-deep">
            Edit Review
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8"
        >

          {/* Name */}

          <div>

            <label className="mb-2 block text-sm font-medium text-emerald-deep">
              Customer Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20"
            />

          </div>

          {/* Location */}

          <div>

            <label className="mb-2 block text-sm font-medium text-emerald-deep">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20"
            />

          </div>

          {/* Rating */}

          <div>

            <label className="mb-2 block text-sm font-medium text-emerald-deep">
              Rating
            </label>

            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20"
            >
              <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
              <option value={4}>⭐⭐⭐⭐ (4)</option>
              <option value={3}>⭐⭐⭐ (3)</option>
              <option value={2}>⭐⭐ (2)</option>
              <option value={1}>⭐ (1)</option>
            </select>

          </div>

          {/* Review */}

          <div>

            <label className="mb-2 block text-sm font-medium text-emerald-deep">
              Review
            </label>

            <textarea
              rows={6}
              name="review"
              value={form.review}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20"
            />

          </div>

          {/* Footer */}

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-emerald-deep px-8 py-3 font-semibold text-white transition hover:bg-emerald"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}