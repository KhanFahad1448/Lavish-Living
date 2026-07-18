import { useState } from "react";
import toast from "react-hot-toast";
import { Loader2, UploadCloud, Star } from "lucide-react";
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
    const file = e.target.files[0];

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

      toast.success(
        "Thank you! Your review has been submitted for approval."
      );

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
    <div className="rounded-3xl bg-ivory p-8 shadow-luxe">

      <p className="text-xs uppercase tracking-[0.2em] text-brass">
        Share Your Experience
      </p>

      <h2 className="mt-2 font-display text-3xl text-emerald-deep">
        Leave a Review
      </h2>

      <p className="mt-3 text-sm text-ink/70">
        We genuinely value every homeowner's experience with Lavish Living.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >

        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-emerald/20 bg-white px-4 py-3 outline-none focus:border-brass"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Location
            </label>

            <input
              required
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full rounded-xl border border-emerald/20 bg-white px-4 py-3 outline-none focus:border-brass"
            />

          </div>

        </div>

        <div>

          <label className="mb-3 block text-sm font-medium">
            Your Rating
          </label>

          <div className="flex gap-2">

            {[1,2,3,4,5].map((star)=>(
              <button
                key={star}
                type="button"
                onClick={()=>setRating(star)}
              >
                <Star
                  size={30}
                  className={
                    star<=rating
                      ? "fill-brass text-brass"
                      : "text-gray-300"
                  }
                />
              </button>
            ))}

          </div>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Your Review
          </label>

          <textarea
            required
            rows={5}
            name="review"
            value={form.review}
            onChange={handleChange}
            className="w-full rounded-xl border border-emerald/20 bg-white px-4 py-3 outline-none focus:border-brass"
          />

        </div>

        <div>

          <label className="mb-3 block text-sm font-medium">
            Profile Photo (Optional)
          </label>

          <label className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-brass/30 bg-white p-8 transition hover:border-brass">

            <div className="text-center">

              <UploadCloud
                className="mx-auto mb-3 text-brass"
                size={40}
              />

              <p className="text-sm">
                Click to upload your photo
              </p>

            </div>

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

          </label>

          {preview && (

            <img
              src={preview}
              alt=""
              className="mt-5 h-28 w-28 rounded-full border-4 border-brass object-cover"
            />

          )}

        </div>

        <button
          disabled={busy}
          className="btn-primary w-full justify-center disabled:opacity-60"
        >

          {busy && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}

          {busy
            ? "Submitting..."
            : "Submit Review"}

        </button>

      </form>

    </div>
  );
}