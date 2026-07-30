import { useState } from "react";
import toast from "react-hot-toast";
import {
  Loader2,
  Upload,
  Star,
  ArrowRight,
} from "lucide-react";
import { api } from "../lib/api";

export default function ReviewForm() {

  const [busy, setBusy] = useState(false);
  const [preview, setPreview] = useState("");
  const [rating, setRating] = useState(5);

  const [form, setForm] = useState({
    name: "",
    location: "",
    review: "",
    image: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleImage(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));

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

      if (form.image) {
        fd.append("image", form.image);
      }

      await api.post("/reviews", fd);

      toast.success("Thank you! Review submitted.");

      setForm({
        name: "",
        location: "",
        review: "",
        image: null,
      });

      setRating(5);
      setPreview("");

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Unable to submit review."
      );

    } finally {

      setBusy(false);

    }
  }

  return (

    <section className="mx-auto mt-4 w-full max-w-md sm:max-w-lg">

      <div className="overflow-hidden rounded-l border border-emerald/10 bg-white shadow-soft">

        {/* Header */}

        <div className="border-b border-emerald/10 bg-gradient-to-b from-white via-cream/40 to-white px-4 py-4 sm:px-5 sm:py-5">

          <p className="text-[9px] uppercase tracking-[0.28em] text-brass">

            CUSTOMER REVIEW

          </p>

          <h2 className="mt-1 font-display text-xl sm:text-2xl text-emerald-deep">

            Share Your Experience

          </h2>

          <p className="mt-1 max-w-sm text-[11px] sm:text-xs leading-5 text-ink/55">

            Tell future homeowners about your Lavish Living journey.

          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 px-4 py-4 sm:px-5 sm:py-5"
        >

          {/* Rating */}

          <div className="text-center">

            <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-ink/45">

              Rating

            </p>

            <div className="flex justify-center gap-1">

              {[1,2,3,4,5].map((star)=>(

                <button
                  key={star}
                  type="button"
                  onClick={()=>setRating(star)}
                  className="transition hover:scale-110"
                >

                  <Star
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      star <= rating
                        ? "fill-brass text-brass"
                        : "text-gray-300"
                    }`}
                  />

                </button>

              ))}

            </div>

          </div>

          {/* Name + Location */}

          <div className="grid gap-4 sm:grid-cols-2">

            <div>

              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border-0 border-b border-emerald/15 bg-transparent px-0 py-2 text-sm placeholder:text-ink/35 focus:border-brass focus:outline-none focus:ring-0"
              />

            </div>

            <div>

              <input
                required
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full border-0 border-b border-emerald/15 bg-transparent px-0 py-2 text-sm placeholder:text-ink/35 focus:border-brass focus:outline-none focus:ring-0"
              />

            </div>

          </div>

                    {/* Review */}

          <div>

            <textarea
              required
              rows={3}
              name="review"
              value={form.review}
              onChange={handleChange}
              placeholder="Tell us about your experience with Lavish Living..."
              className="w-full resize-none rounded-lg border border-emerald/10 bg-cream/30 px-4 py-3 text-sm leading-6 text-emerald-deep placeholder:text-ink/35 transition-all duration-300 focus:border-brass focus:bg-white focus:outline-none"
            />

          </div>

          {/* Compact Upload */}

          <div>

            <label className="flex cursor-pointer items-center justify-between rounded-lg border border-emerald/10 bg-white px-4 py-3 transition-all duration-300 hover:border-brass hover:bg-cream/40">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brass/10">

                  <Upload
                    size={16}
                    className="text-brass"
                  />

                </div>

                <div>

                  <p className="text-sm font-medium text-emerald-deep">

                    Add Photo

                  </p>

                  <p className="text-[11px] text-ink/45">

                    Optional

                  </p>

                </div>

              </div>

              <span className="rounded-full border border-brass/20 bg-brass/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brass">

                Browse

              </span>

              <input
                hidden
                type="file"
                accept="image/*"
                onChange={handleImage}
              />

            </label>

            {preview && (

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-emerald/10 bg-cream/20 p-2.5">

                <img
                  src={preview}
                  alt="Preview"
                  className="h-12 w-12 rounded-xl object-cover"
                />

                <div>

                  <p className="text-xs font-semibold text-emerald-deep">

                    Photo Selected

                  </p>

                  <p className="text-[11px] text-ink/45">

                    Ready to upload

                  </p>

                </div>

              </div>

            )}

          </div>

          {/* Premium Submit */}

          <div className="pt-1 flex justify-center">

            <button
              type="submit"
              disabled={busy}
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-deep px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald hover:shadow-xl disabled:opacity-60"
            >

              {busy ? (

                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>

              ) : (

                <>
                  Submit Review

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </>

              )}

            </button>

          </div>

          <p className="text-center text-[10px] leading-5 text-ink/45">

            Reviews are manually verified before being published on
            Lavish Living.

          </p>

        </form>

      </div>

    </section>

  );

}