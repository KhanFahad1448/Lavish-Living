import { useState } from "react";
import toast from "react-hot-toast";
import { X, Lock } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function ChangePasswordModal({ onClose }) {
  const { changePassword } = useAuth();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("New password must be at least 8 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    try {
      setSaving(true);
      await changePassword(currentPassword, newPassword);
      toast.success("Password updated successfully");
      onClose?.();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Unable to change password");
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
              Change Password
            </h2>
            <p className="mt-0.5 text-[10px] text-ink/50 sm:text-xs">
              Update your account password
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

          <Field label="Current Password" required>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="input-field"
              required
            />
          </Field>

          <Field label="New Password" required>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="input-field"
              required
            />
          </Field>

          <Field label="Confirm New Password" required>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
              className="input-field"
              required
            />
          </Field>

          <p className="flex items-start gap-2 rounded-lg bg-cream px-3 py-2.5 text-[11px] leading-5 text-ink/60 sm:rounded-xl sm:text-xs">
            <Lock size={13} className="mt-0.5 shrink-0 text-emerald/60" />
            You'll stay signed in on this device after changing your password.
          </p>

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
              {saving ? "Updating..." : "Update Password"}
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