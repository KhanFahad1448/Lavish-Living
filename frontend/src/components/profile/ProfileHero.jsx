import {
  User,
  Edit3,
  Lock,
  CalendarDays,
  Crown,
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
    <section className="relative overflow-hidden rounded-[34px] border border-emerald/10 bg-white shadow-soft">

      {/* Decorative Background */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brass/5 blur-3xl" />

      <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-emerald/5 blur-3xl" />

      <div className="relative p-10 md:p-14">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="flex items-center gap-8">

            {/* Avatar */}

            <div className="relative">

              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-luxe text-5xl font-display text-brass shadow-lg">

                {initials}

              </div>

              <div className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-emerald text-white shadow">

                <User size={18} />

              </div>

            </div>

            {/* User Details */}

            <div>

              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brass/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brass">

                <Crown size={14} />

                Premium Client

              </div>

              <h1 className="font-display text-5xl text-emerald-deep">

                {user?.name || "Customer"}

              </h1>

              <p className="mt-3 max-w-xl text-lg leading-8 text-ink/65">

                Welcome back to Lavish Living.
                Your dream space deserves exceptional attention,
                and we're here to keep every update just one click away.

              </p>

              <div className="mt-6 flex flex-wrap gap-6">

                <div className="flex items-center gap-2 text-sm text-ink/60">

                  <CalendarDays
                    size={17}
                    className="text-brass"
                  />

                  Member since{" "}
                  <span className="font-semibold text-emerald-deep">

                    {memberSince}

                  </span>

                </div>

                <div className="flex items-center gap-2 text-sm text-ink/60">

                  <span className="h-2 w-2 rounded-full bg-emerald" />

                  {totalEnquiries} Enquiries Submitted

                </div>

              </div>

            </div>

          </div>

          {/* Right Buttons */}

          <div className="flex flex-col gap-4">

            <button
              onClick={onEdit}
              className="flex items-center justify-center gap-3 rounded-2xl border border-brass bg-gradient-luxe px-8 py-4 font-semibold text-brass transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Edit3 size={18} />

              Edit Profile
            </button>

            <button
              onClick={onChangePassword}
              className="flex items-center justify-center gap-3 rounded-2xl border border-emerald/10 bg-white px-8 py-4 font-semibold text-emerald-deep transition duration-300 hover:border-brass hover:shadow-lg"
            >
              <Lock size={18} />

              Change Password
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}