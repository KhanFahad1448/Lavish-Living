import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";
import { api, ADMIN_WHATSAPP } from "../lib/api";

const services = [
  "Modular Kitchen",
  "Bedroom",
  "Living Hall",
  "False Ceiling",
  "Full Home Interior",
  "Office / Commercial",
  "Other",
];

const budgets = [
  "Under ₹3L",
  "₹3L – ₹6L",
  "₹6L – ₹12L",
  "₹12L – ₹25L",
  "₹25L+",
];

export default function InquiryForm({ compact = false }) {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    if (!data.name || data.name.length < 2)
      return toast.error("Please enter your name");

    if (!data.phone || data.phone.length < 7)
      return toast.error("Enter a valid phone");

    setSubmitting(true);

    try {
      await api.post("/inquiries", data);

      toast.success(
        "Thanks! Our designer will reach out within 24 hours."
      );

      e.target.reset();

      const msg = encodeURIComponent(
        `New Lavish Living inquiry\nName: ${data.name}\nPhone: ${data.phone}` +
          (data.email ? `\nEmail: ${data.email}` : "") +
          (data.service ? `\nService: ${data.service}` : "") +
          (data.budget ? `\nBudget: ${data.budget}` : "") +
          (data.location ? `\nLocation: ${data.location}` : "") +
          (data.message ? `\nMessage: ${data.message}` : "")
      );

      window.open(
        `https://wa.me/${ADMIN_WHATSAPP}?text=${msg}`,
        "_blank",
        "noopener,noreferrer"
      );
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Couldn't submit. Try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-2.5"
    >
      {/* Row 1 */}

      <div className="grid grid-cols-2 gap-2">

        <Field
          label="Full Name"
          name="name"
          placeholder="Khan Fahad"
          required
        />

        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91..."
          required
        />

      </div>

      {/* Row 2 */}

      <div className="grid grid-cols-2 gap-2">

        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="example@mail.com"
        />

        <Field
          label="Location"
          name="location"
          placeholder="Ranchi"
        />

      </div>

      {/* Row 3 */}

      <div className="grid grid-cols-2 gap-2">

        <Select
          label="Service"
          name="service"
          options={services}
        />

        <Select
          label="Budget"
          name="budget"
          options={budgets}
        />

      </div>

      {!compact && (
        <Field
          label="Project Type"
          name="projectType"
          placeholder="3BHK Apartment"
        />
      )}

      <div>

        <label className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.14em] text-ink/55">

          Project Details

        </label>

        <textarea
          name="message"
          rows={2}
          maxLength={2000}
          placeholder="Area, style, timeline..."
          className="w-full rounded-lg border border-emerald/20 bg-white px-3 py-2 text-[12px] outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20"
        />

      </div>
      

      {/* Submit */}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-gradient-luxe text-[13px] font-semibold text-brass transition-all duration-300 hover:shadow-lg disabled:opacity-60"
      >
        {submitting ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Send className="h-3.5 w-3.5" />
        )}

        Send Inquiry

      </button>

      {/* Footer */}

      <p className="text-center text-[9px] leading-4 text-ink/45">

        By submitting this form you agree to be contacted by our
        design team. Your information remains completely private.

      </p>

    </form>
  );
}

/* ---------- Input ---------- */

function Field({ label, ...props }) {
  return (
    <div>

      <label className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.14em] text-ink/55">

        {label}

      </label>

      <input
        {...props}
        className="h-9 w-full rounded-lg border border-emerald/20 bg-white px-3 text-[12px] outline-none transition-all duration-300 focus:border-brass focus:ring-2 focus:ring-brass/20"
      />

    </div>
  );
}

/* ---------- Select ---------- */

function Select({
  label,
  name,
  options,
}) {
  return (
    <div>

      <label className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.14em] text-ink/55">

        {label}

      </label>

      <select
        name={name}
        defaultValue=""
        className="h-9 w-full rounded-lg border border-emerald/20 bg-white px-3 text-[12px] outline-none transition-all duration-300 focus:border-brass focus:ring-2 focus:ring-brass/20"
      >
        <option value="">
          Select
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  );
}