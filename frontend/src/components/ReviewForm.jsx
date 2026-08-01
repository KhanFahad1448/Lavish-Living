import { useState, useRef } from "react";
import toast from "react-hot-toast";
import {
  Loader2,
  Camera,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { api } from "../lib/api";

export default function ReviewForm() {

  const [busy, setBusy] = useState(false);
  const [preview, setPreview] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    location: "",
    review: "",
    image: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setForm((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("location", form.location);
      fd.append("rating", rating);
      fd.append("review", form.review);
      if (form.image) fd.append("image", form.image);

      await api.post("/reviews", fd);

      toast.success("Thank you! Review submitted.");

      setForm({ name: "", location: "", review: "", image: null });
      setRating(5);
      setPreview("");

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Unable to submit review."
      );
    } finally {
      setBusy(false);
    }
  }

  return (

    <section className="mx-auto w-full max-w-xs sm:max-w-sm">

      <form
        onSubmit={handleSubmit}
        className="rounded-[28px] border border-emerald/10 bg-white p-4 shadow-soft transition-shadow duration-300 focus-within:shadow-luxe sm:p-5"
      >

        {/* Eyebrow + rating */}

        <div className="flex items-center justify-between">

          <p className="text-[8px] uppercase tracking-[0.22em] text-brass sm:text-[9px] sm:tracking-[0.28em]">
            Share Your Story
          </p>

          <div
            className="flex gap-0.5"
            onMouseLeave={() => setHoverRating(0)}
          >
            {[1,2,3,4,5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                className="transition hover:scale-110"
              >
                <Star
                  className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${
                    star <= (hoverRating || rating)
                      ? "fill-brass text-brass"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>

        </div>

        {/* Avatar + name/location row */}

        <div className="mt-3 flex items-center gap-3 sm:mt-4">

          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="group relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-dashed border-brass/40 bg-brass/5 transition hover:border-brass sm:h-12 sm:w-12"
          >
            {preview ? (
              <img src={preview} alt="You" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-brass/50 group-hover:text-brass">
                <Camera size={16} />
              </div>
            )}

            <input
              ref={fileRef}
              hidden
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </button>

          <div className="min-w-0 flex-1 space-y-1">

            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border-0 bg-transparent p-0 text-sm font-semibold text-emerald-deep placeholder:font-normal placeholder:text-ink/30 focus:outline-none focus:ring-0 sm:text-[15px]"
            />

            <input
              required
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="City"
              className="w-full border-0 bg-transparent p-0 text-[11px] text-ink/50 placeholder:text-ink/30 focus:outline-none focus:ring-0 sm:text-xs"
            />

          </div>

        </div>

        {/* Quote-style review textarea */}

        <textarea
          required
          rows={3}
          name="review"
          value={form.review}
          onChange={handleChange}
          placeholder="“Working with Lavish Living was…”"
          className="mt-3 w-full resize-none border-0 bg-transparent p-0 text-xs italic leading-5 text-ink/75 placeholder:text-ink/30 focus:outline-none focus:ring-0 sm:mt-4 sm:text-sm sm:leading-6"
        />

        {/* Footer */}

        <div className="mt-3 flex items-center justify-between border-t border-emerald/5 pt-3 sm:mt-4">

          <p className="text-[9px] leading-tight text-ink/35 sm:text-[10px]">
            Verified before<br />publishing
          </p>

          <button
            type="submit"
            disabled={busy}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-deep text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-emerald disabled:opacity-60 sm:h-10 sm:w-10"
          >
            {busy ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowUpRight size={16} />
            )}
          </button>

        </div>

      </form>

    </section>

  );

}