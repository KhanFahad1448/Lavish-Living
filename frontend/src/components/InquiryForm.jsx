import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";
import { api, ADMIN_WHATSAPP } from "../lib/api";

const services = ["Modular Kitchen", "Bedroom", "Living Hall", "False Ceiling", "Full Home Interior", "Office / Commercial", "Other"];
const budgets = ["Under ₹3L", "₹3L – ₹6L", "₹6L – ₹12L", "₹12L – ₹25L", "₹25L+"];

export default function InquiryForm({ compact = false }) {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    if (!data.name || data.name.length < 2) return toast.error("Please enter your name");
    if (!data.phone || data.phone.length < 7) return toast.error("Enter a valid phone");

    setSubmitting(true);
    try {
      await api.post("/inquiries", data);
      toast.success("Thanks! Our designer will reach out within 24 hours.");
      e.target.reset();

      // Instant WhatsApp notification — opens prefilled chat to admin
      const msg = encodeURIComponent(
        `New Lavish Living inquiry\nName: ${data.name}\nPhone: ${data.phone}` +
        (data.email ? `\nEmail: ${data.email}` : "") +
        (data.service ? `\nService: ${data.service}` : "") +
        (data.budget ? `\nBudget: ${data.budget}` : "") +
        (data.location ? `\nLocation: ${data.location}` : "") +
        (data.message ? `\nMessage: ${data.message}` : "")
      );
      window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${msg}`, "_blank", "noopener,noreferrer");
    } catch (err) {
      toast.error(err.response?.data?.message || "Couldn't submit. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name *" name="name" placeholder="Aditi Sharma" required />
        <Field label="Phone *" name="phone" type="tel" placeholder="+91 ..." required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" placeholder="you@example.com" />
        <Field label="Location" name="location" placeholder="e.g. Bariatu, Ranchi" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label="Service interested in" name="service" options={services} />
        <Select label="Approx. budget" name="budget" options={budgets} />
      </div>
      {!compact && <Field label="Project type" name="projectType" placeholder="3BHK apartment, villa, shop…" />}
      <div>
        <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/60">Tell us about your space</label>
        <textarea name="message" rows={compact ? 3 : 4} maxLength={2000} placeholder="Carpet area, current condition, style references, timeline…"
          className="w-full rounded-md border border-emerald/20 bg-white px-3 py-2 text-sm outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30" />
      </div>
      <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Send inquiry
      </button>
      <p className="text-xs text-ink/50">By submitting you agree to be contacted by our design team. We respect your privacy.</p>
    </form>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/60">{label}</label>
      <input {...props} className="w-full rounded-md border border-emerald/20 bg-white px-3 py-2 text-sm outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30" />
    </div>
  );
}
function Select({ label, name, options }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/60">{label}</label>
      <select name={name} defaultValue="" className="w-full rounded-md border border-emerald/20 bg-white px-3 py-2 text-sm outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30">
        <option value="">Select an option</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
