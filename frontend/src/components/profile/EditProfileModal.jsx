import { useState } from "react";
import toast from "react-hot-toast";
import { X, Mail } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function EditProfileModal({ user, onClose }) {
  const { updateProfile } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [location, setLocation] = useState(user?.location || "");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    try {
      setSaving(true);
      await updateProfile({ name, phone, location });
      toast.success("Profile updated successfully");
      onClose?.();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Unable to update profile");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-0 sm:p-6">

      <div className="flex h-full w-full max-w-md flex-col overflow-hidden bg-white shadow-luxe sm:h-auto sm:max-h-[90vh] sm:rounded-3xl">

        <div className="flex shrink-0 items-center justify-between border-b border-emerald/10 px-4 py-3.5 sm:px-6 sm:py-5">
          <div>
            <h2 className="font-display text-lg font-semibold tracking-tight text-emerald-deep sm:text-xl">
              Edit Profile
            </h2>
            <p className="mt-0.5 text-[10px] text-ink/50 sm:text-xs">
              Update your personal information
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-ink/50 transition hover:bg-cream hover:text-emerald-deep"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid flex-1 gap-4 overflow-y-auto p-4 sm:gap-5 sm:p-6"
        >

          <Field label="Full Name" required>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="input-field"
              required
            />
          </Field>

          <Field label="Email Address">
            <div className="flex items-center gap-2 rounded-lg border border-emerald/10 bg-cream/50 px-3 py-2.5 text-sm text-ink/50 sm:rounded-xl sm:py-3">
              <Mail size={14} className="shrink-0" />
              {user?.email}
            </div>
            <p className="mt-1 text-[10px] text-ink/40 sm:text-xs">
              Email cannot be changed here
            </p>
          </Field>

          <Field label="Phone Number">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              className="input-field"
            />
          </Field>

          <Field label="Location">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Ranchi, Jharkhand"
              className="input-field"
            />
          </Field>

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
              {saving ? "Saving..." : "Save Changes"}
            </button>

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