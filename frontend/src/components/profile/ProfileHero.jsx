import {
  User,
  Edit3,
  Lock,
  CalendarDays,
  Crown,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ProfileHero({
  user,
  totalEnquiries = 0,
  onEdit,
  onChangePassword,
}) {
  const initials =
    user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase() || "U";

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
      })
    : "Recently Joined";

  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-emerald/10 bg-white shadow-soft">

      {/* Decorative Background */}

      <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-brass/5 blur-3xl" />

      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-emerald/5 blur-3xl" />

      <div className="relative p-4 sm:p-6 lg:p-10">

        {/* Hero */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="flex items-start gap-4 sm:gap-5">

            {/* Avatar */}

            <div className="relative flex-shrink-0">

              <div className="flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full bg-gradient-luxe text-xl sm:text-2xl lg:text-3xl font-display text-brass shadow-lg">

                {initials}

              </div>

              <div className="absolute bottom-0 right-0 flex h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 items-center justify-center rounded-full border-2 border-white bg-emerald text-white">

                <User size={13} />

              </div>

            </div>

            {/* Welcome */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-brass/10 px-2.5 py-1 text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">

                <Crown size={12} />

                Premium Client

              </span>

              <p className="mt-3 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-ink/45">

                Welcome Back

              </p>

              <h1 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl text-emerald-deep">

                {user?.name || "Customer"}

              </h1>

              <p className="mt-3 max-w-xl text-sm sm:text-[15px] leading-6 sm:leading-7 text-ink/60">

                Every beautiful home begins with a conversation.
                Track your interior journey, monitor project updates,
                and stay connected with Lavish Living.

              </p>

            </div>

          </div>

          {/* Summary */}

          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full lg:w-auto">

            <div className="rounded-xl sm:rounded-2xl border border-emerald/10 bg-cream px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5">

              <p className="text-[9px] sm:text-xs uppercase tracking-[0.15em] text-ink/50">

                Enquiries

              </p>

              <h3 className="mt-1 sm:mt-2 font-display text-xl sm:text-2xl lg:text-3xl text-emerald-deep">

                {totalEnquiries}

              </h3>

            </div>

            <div className="rounded-xl sm:rounded-2xl border border-emerald/10 bg-cream px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5">

              <p className="text-[9px] sm:text-xs uppercase tracking-[0.15em] text-ink/50">

                Status

              </p>

              <h3 className="mt-1 sm:mt-2 text-sm sm:text-lg lg:text-xl font-semibold text-brass">

                Active

              </h3>

            </div>

            <div className="rounded-xl sm:rounded-2xl border border-emerald/10 bg-cream px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5">

              <p className="text-[9px] sm:text-xs uppercase tracking-[0.15em] text-ink/50">

                Member

              </p>

              <h3 className="mt-1 sm:mt-2 text-[11px] sm:text-sm lg:text-base font-semibold text-emerald-deep">

                {memberSince}

              </h3>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-6 sm:my-8 lg:my-10 h-px bg-gradient-to-r from-transparent via-emerald/15 to-transparent" />

        {/* Bottom Starts */}

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">

                  {/* Profile Information Card */}

          <div className="rounded-2xl sm:rounded-3xl border border-emerald/10 bg-gradient-to-br from-white to-cream p-4 sm:p-6 lg:p-7 shadow-soft">

            <div className="mb-5 sm:mb-6 flex items-center justify-between">

              <h2 className="font-display text-xl sm:text-2xl text-emerald-deep">
                Profile Information
              </h2>

              <span className="rounded-full bg-emerald/10 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-emerald">
                Verified
              </span>

            </div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">

              <div className="flex items-start gap-3">

                <div className="rounded-xl bg-gradient-luxe p-2.5 sm:p-3 text-brass">
                  <Mail size={16} />
                </div>

                <div>

                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-ink/45">
                    Email
                  </p>

                  <p className="mt-1 text-sm sm:text-base font-medium text-emerald-deep break-all">
                    {user?.email || "Not Available"}
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="rounded-xl bg-gradient-luxe p-2.5 sm:p-3 text-brass">
                  <Phone size={16} />
                </div>

                <div>

                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-ink/45">
                    Phone
                  </p>

                  <p className="mt-1 text-sm sm:text-base font-medium text-emerald-deep">
                    {user?.phone || "Not Added"}
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="rounded-xl bg-gradient-luxe p-2.5 sm:p-3 text-brass">
                  <MapPin size={16} />
                </div>

                <div>

                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-ink/45">
                    Location
                  </p>

                  <p className="mt-1 text-sm sm:text-base font-medium text-emerald-deep">
                    {user?.location || "Not Specified"}
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="rounded-xl bg-gradient-luxe p-2.5 sm:p-3 text-brass">
                  <CalendarDays size={16} />
                </div>

                <div>

                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-ink/45">
                    Member Since
                  </p>

                  <p className="mt-1 text-sm sm:text-base font-medium text-emerald-deep">
                    {memberSince}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Account Settings */}

          <div className="rounded-2xl sm:rounded-3xl border border-emerald/10 bg-white p-4 sm:p-6 lg:p-7 shadow-soft">

            <h2 className="font-display text-xl sm:text-2xl text-emerald-deep">
              Account Settings
            </h2>

            <p className="mt-3 text-sm sm:text-[15px] leading-6 sm:leading-7 text-ink/60">
              Keep your personal information up to date and secure your
              Lavish Living account with a strong password.
            </p>

            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">

              <button
                onClick={onEdit}
                className="flex w-full items-center justify-center gap-3 rounded-xl sm:rounded-2xl bg-gradient-luxe px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-brass transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Edit3 size={17} />
                Edit Profile
              </button>

              <button
                onClick={onChangePassword}
                className="flex w-full items-center justify-center gap-3 rounded-xl sm:rounded-2xl border border-emerald/10 bg-white px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-emerald-deep transition-all duration-300 hover:border-brass hover:shadow-md"
              >
                <Lock size={17} />
                Change Password
              </button>

            </div>

            <div className="mt-6 sm:mt-8 rounded-2xl bg-cream p-4 sm:p-5">

              <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-ink/45">
                Lavish Living Promise
              </p>

              <p className="mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-ink/65">
                Your information remains private and is only used to provide
                project updates, quotations and design consultations.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}  