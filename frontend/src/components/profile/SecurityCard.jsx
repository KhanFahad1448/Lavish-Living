import {
  ShieldCheck,
  LockKeyhole,
  MailCheck,
  UserCheck,
  ArrowRight,
  Fingerprint,
} from "lucide-react";

export default function SecurityCard({ onChangePassword }) {
  return (
    <section className="rounded-2xl border border-emerald/10 bg-white p-4 shadow-soft sm:rounded-3xl sm:p-6 lg:p-8">

      {/* Heading */}

      <div className="mb-4 sm:mb-6">

        <p className="text-[9px] uppercase tracking-[0.16em] text-brass sm:text-[10px]">
          Security
        </p>

        <h2 className="mt-1 font-display text-base font-semibold tracking-tight text-emerald-deep sm:text-lg">
          Account Protection
        </h2>

        <p className="mt-1 max-w-xl text-xs leading-5 text-ink/55 sm:text-sm sm:leading-6">
          Your account is protected with modern authentication
          standards. Manage your login and security here.
        </p>

      </div>

      {/* Security Score */}

      <div className="mb-4 flex flex-col gap-3 rounded-xl bg-gradient-luxe p-4 text-ivory shadow-md sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:rounded-2xl sm:p-5">

        <div className="min-w-0">
          <p className="text-[9px] uppercase tracking-[0.16em] text-brass sm:text-[10px]">
            Security Score
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
            92%
          </h3>
          <p className="mt-1 max-w-xs text-[11px] leading-5 text-ivory/70 sm:text-xs sm:leading-6">
            Your account is well protected. Enable two-factor
            authentication for maximum security.
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brass bg-white/10 backdrop-blur sm:h-14 sm:w-14">
          <ShieldCheck size={22} className="text-brass sm:size-6" />
        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">

        {/* Email */}

        <div className="rounded-xl border border-emerald/10 px-3.5 py-3 transition duration-300 hover:border-brass/30 sm:rounded-2xl sm:p-4">

          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brass/10 text-brass">
              <MailCheck size={14} />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-emerald-deep">
                Email Verification
              </h3>
              <p className="text-[11px] text-green-600 sm:text-xs">
                Verified
              </p>
            </div>
          </div>

          <p className="mt-2.5 text-xs leading-5 text-ink/60 sm:mt-3 sm:text-sm sm:leading-6">
            Used for secure account communication.
          </p>

        </div>

        {/* Password */}

        <div className="rounded-xl border border-emerald/10 px-3.5 py-3 transition duration-300 hover:border-brass/30 sm:rounded-2xl sm:p-4">

          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brass/10 text-brass">
              <LockKeyhole size={14} />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-emerald-deep">
                Password
              </h3>
              <p className="text-[11px] text-ink/50 sm:text-xs">
                Last updated recently
              </p>
            </div>
          </div>

          <p className="mt-2.5 text-xs leading-5 text-ink/60 sm:mt-3 sm:text-sm sm:leading-6">
            Update regularly to keep your account protected.
          </p>

          <button
            onClick={onChangePassword}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-brass px-3.5 py-2 text-xs font-semibold text-brass transition hover:bg-brass hover:text-white sm:mt-3.5 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Change Password
            <ArrowRight size={13} />
          </button>

        </div>

        {/* Account */}

        <div className="rounded-xl border border-emerald/10 px-3.5 py-3 transition duration-300 hover:border-brass/30 sm:rounded-2xl sm:p-4">

          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brass/10 text-brass">
              <UserCheck size={14} />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-emerald-deep">
                Account Status
              </h3>
              <p className="text-[11px] text-green-600 sm:text-xs">
                Active
              </p>
            </div>
          </div>

          <p className="mt-2.5 text-xs leading-5 text-ink/60 sm:mt-3 sm:text-sm sm:leading-6">
            Ready to manage enquiries, quotations and projects.
          </p>

        </div>

        {/* Two Factor */}

        <div className="rounded-xl border border-dashed border-brass/40 bg-cream px-3.5 py-3 sm:rounded-2xl sm:p-4">

          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brass/10 text-brass">
              <Fingerprint size={14} />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-emerald-deep">
                Two-Factor Authentication
              </h3>
              <p className="text-[11px] text-amber-600 sm:text-xs">
                Coming Soon
              </p>
            </div>
          </div>

          <p className="mt-2.5 text-xs leading-5 text-ink/60 sm:mt-3 sm:text-sm sm:leading-6">
            OTP verification for enhanced account safety.
          </p>

        </div>

      </div>

    </section>
  );
}