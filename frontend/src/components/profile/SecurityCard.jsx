import {
  ShieldCheck,
  LockKeyhole,
  MailCheck,
  UserCheck,
  ArrowRight,
  Fingerprint,
} from "lucide-react";

export default function SecurityCard() {
  return (
    <section className="rounded-3xl border border-emerald/10 bg-white p-8 shadow-soft">

      {/* Heading */}

      <div className="mb-10">

        <p className="text-xs uppercase tracking-[0.25em] text-brass">
          Security
        </p>

        <h2 className="mt-2 font-display text-4xl text-emerald-deep">
          Account Protection
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-ink/60">
          Your Lavish Living account is protected with modern
          authentication standards. Manage your login credentials
          and security preferences here.
        </p>

      </div>

      {/* Security Score */}

      <div className="mb-10 rounded-3xl bg-gradient-luxe p-8 text-ivory shadow-lg">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-brass">
              Security Score
            </p>

            <h3 className="mt-2 font-display text-5xl">
              92%
            </h3>

            <p className="mt-3 max-w-md leading-7 text-ivory/80">
              Your account is well protected.
              Complete two-factor authentication in the future
              for maximum security.
            </p>

          </div>

          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-brass bg-white/10 backdrop-blur">

            <ShieldCheck
              size={44}
              className="text-brass"
            />

          </div>

        </div>

      </div>

      {/* Cards */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Email */}

        <div className="rounded-2xl border border-emerald/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-brass/30 hover:shadow-luxe">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-gradient-luxe p-3 text-brass">

              <MailCheck size={20} />

            </div>

            <div>

              <h3 className="font-semibold text-emerald-deep">
                Email Verification
              </h3>

              <p className="text-sm text-green-600">
                Verified
              </p>

            </div>

          </div>

          <p className="mt-5 leading-7 text-ink/60">
            Your registered email address has been verified
            and is currently being used for secure account
            communication.
          </p>

        </div>

        {/* Password */}

        <div className="rounded-2xl border border-emerald/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-brass/30 hover:shadow-luxe">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-gradient-luxe p-3 text-brass">

              <LockKeyhole size={20} />

            </div>

            <div>

              <h3 className="font-semibold text-emerald-deep">
                Password
              </h3>

              <p className="text-sm text-ink/50">
                Last updated recently
              </p>

            </div>

          </div>

          <p className="mt-5 leading-7 text-ink/60">
            Update your password regularly to keep your
            account protected from unauthorized access.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-brass px-5 py-2 text-sm font-semibold text-brass transition hover:bg-brass hover:text-white">

            Change Password

            <ArrowRight size={16} />

          </button>

        </div>

        {/* Account */}

        <div className="rounded-2xl border border-emerald/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-brass/30 hover:shadow-luxe">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-gradient-luxe p-3 text-brass">

              <UserCheck size={20} />

            </div>

            <div>

              <h3 className="font-semibold text-emerald-deep">
                Account Status
              </h3>

              <p className="text-sm text-green-600">
                Active
              </p>

            </div>

          </div>

          <p className="mt-5 leading-7 text-ink/60">
            Your Lavish Living customer account is active and
            ready to manage enquiries, quotations and future
            interior projects.
          </p>

        </div>

        {/* Two Factor */}

        <div className="rounded-2xl border border-dashed border-brass/40 bg-cream p-6">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-gradient-luxe p-3 text-brass">

              <Fingerprint size={20} />

            </div>

            <div>

              <h3 className="font-semibold text-emerald-deep">
                Two-Factor Authentication
              </h3>

              <p className="text-sm text-amber-600">
                Coming Soon
              </p>

            </div>

          </div>

          <p className="mt-5 leading-7 text-ink/60">
            Soon you'll be able to add an extra security layer
            using OTP verification for enhanced account safety.
          </p>

        </div>

      </div>

    </section>
  );
}