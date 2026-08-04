import { useEffect, useState } from "react";
import { X, Star, User, MapPin } from "lucide-react";

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
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave({ ...review, ...form });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-emerald-deep/40 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl bg-ivory shadow-luxe sm:max-w-md sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Drag handle (mobile only) */}
        <div className="flex justify-center pb-1 pt-2.5 sm:hidden">
          <span className="h-1 w-9 rounded-full bg-emerald/20" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-4 pb-3 pt-1 sm:px-6 sm:pt-6">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-brass sm:text-[10px] sm:tracking-[0.22em]">
              {review ? "Edit Entry" : "New Entry"}
            </p>
            <h2 className="mt-0.5 font-display text-lg font-semibold tracking-tight text-emerald-deep sm:text-xl">
              Customer Review
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald/5 text-emerald-deep transition hover:bg-emerald/10"
          >
            <X size={15} />
          </button>
        </div>

        {/* Form (scrollable body) */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col overflow-y-auto"
        >
          <div className="space-y-4 px-4 pb-2 sm:px-6">

            {/* Name + Location — paired row on desktop */}
            <div className="grid gap-3 sm:grid-cols-2">

              <div className="relative">
                <User size={13} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-emerald/40" />
                <input
                  type="text"
                  name="name"
                  placeholder="Customer name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-emerald/15 bg-white py-2.5 pl-9 pr-3 text-sm text-emerald-deep outline-none transition placeholder:text-ink/35 focus:border-brass focus:ring-2 focus:ring-brass/15"
                />
              </div>

              <div className="relative">
                <MapPin size={13} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-emerald/40" />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-emerald/15 bg-white py-2.5 pl-9 pr-3 text-sm text-emerald-deep outline-none transition placeholder:text-ink/35 focus:border-brass focus:ring-2 focus:ring-brass/15"
                />
              </div>

            </div>

            {/* Rating — interactive stars instead of a select */}
            <div className="rounded-xl border border-emerald/15 bg-white px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-ink/45">
                Rating
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, rating: n }))}
                    className="transition hover:scale-110"
                  >
                    <Star
                      size={22}
                      className={n <= form.rating ? "fill-brass text-brass" : "text-emerald/15"}
                    />
                  </button>
                ))}
                <span className="ml-1.5 text-xs font-medium text-ink/50">
                  {form.rating}/5
                </span>
              </div>
            </div>

            {/* Review */}
            <div>
              <textarea
                rows={5}
                name="review"
                placeholder="What did the customer say about their experience?"
                value={form.review}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-emerald/15 bg-white px-4 py-3 text-sm text-emerald-deep outline-none transition placeholder:text-ink/35 focus:border-brass focus:ring-2 focus:ring-brass/15"
              />
            </div>

          </div>

          {/* Sticky footer */}
          <div className="mt-2 flex gap-2 border-t border-emerald/10 bg-ivory/95 px-4 py-3 backdrop-blur sm:px-6">

            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-emerald/15 bg-white py-2.5 text-sm font-semibold text-emerald-deep transition hover:bg-cream sm:flex-none sm:px-6"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-gradient-luxe py-2.5 text-sm font-semibold text-brass shadow-md transition hover:shadow-lg sm:flex-none sm:px-8"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}