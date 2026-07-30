import {
  CalendarDays,
  IndianRupee,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function InquiryCard({ inquiry }) {
  const statusStyles = {
    new: "text-yellow-700 bg-yellow-50 border-yellow-200",
    contacted: "text-blue-700 bg-blue-50 border-blue-200",
    converted: "text-emerald-700 bg-emerald-50 border-emerald-200",
    closed: "text-gray-600 bg-gray-100 border-gray-200",
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-emerald/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe">

      {/* Architectural Brass Line */}

      <div className="h-[3px] bg-gradient-to-r from-brass via-[#d5b06c] to-brass" />

      <div className="p-4 sm:p-5 lg:p-6">

        {/* Blueprint Heading */}

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-brass">

              Project File

            </p>

            <h2 className="mt-3 font-display text-xl text-emerald-deep sm:text-2xl">

              {inquiry.service || "Interior Consultation"}

            </h2>

            <p className="mt-2 text-sm text-ink/55">

              Residential Interior Project

            </p>

          </div>

          <div className="flex flex-col items-end gap-3">

            <span
              className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.20em] ${
                statusStyles[inquiry.status] ||
                "border-gray-200 bg-gray-100 text-gray-700"
              }`}
            >
              {inquiry.status}
            </span>

            <ArrowUpRight className="h-4 w-4 text-brass transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

          </div>

        </div>

        {/* Luxury Divider */}

        <div className="my-6 flex items-center gap-3">

          <div className="h-px flex-1 bg-emerald/10"></div>

          <span className="text-[9px] uppercase tracking-[0.35em] text-brass">

            Project Details

          </span>

          <div className="h-px flex-1 bg-emerald/10"></div>

        </div>

        {/* Information Grid */}

        <div className="grid gap-y-5 gap-x-8 sm:grid-cols-2">

                    <BlueprintRow
            label="Location"
            value={inquiry.location || "Not specified"}
            icon={MapPin}
          />

          <BlueprintRow
            label="Budget"
            value={inquiry.budget || "Not specified"}
            icon={IndianRupee}
          />

          <BlueprintRow
            label="Client Contact"
            value={inquiry.phone || "Not available"}
            icon={Phone}
          />

          <BlueprintRow
            label="Submission Date"
            value={new Date(inquiry.createdAt).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
            icon={CalendarDays}
          />

        </div>

        {/* Blueprint Divider */}

        <div className="my-7 border-t border-dashed border-emerald/15"></div>

        {/* Architect Notes */}

        {inquiry.message && (
          <div>

            <div className="flex items-center gap-3">

              <span className="h-[2px] w-8 bg-brass"></span>

              <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-brass">

                CLIENT NOTES

              </p>

            </div>

            <p className="mt-4 max-w-3xl text-[13px] leading-7 text-ink/65">

              {inquiry.message}

            </p>

          </div>
        )}

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-emerald/10 pt-5">

          <div>

            <p className="text-[10px] uppercase tracking-[0.30em] text-ink/40">

              Lavish Living

            </p>

            <p className="mt-1 text-xs text-ink/55">

              Premium Interior Design Studio

            </p>

          </div>

          <div className="rounded-full border border-brass/20 bg-brass/5 px-3 py-1">

            <span className="text-[10px] font-semibold uppercase tracking-[0.20em] text-brass">

              PROJECT #{String(inquiry._id || "001").slice(-4).toUpperCase()}

            </span>

          </div>

        </div>

      </div>

    </article>
  );
}

/* ---------------------------------------------------------------- */

function BlueprintRow({
  label,
  value,
  icon: Icon,
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-emerald/5 pb-3">

      <div className="flex items-center gap-3">

        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brass/20 bg-brass/5">

          <Icon className="h-4 w-4 text-brass" />

        </div>

        <span className="text-[10px] uppercase tracking-[0.25em] text-ink/45">

          {label}

        </span>

      </div>

      <span className="max-w-[55%] text-right text-[13px] font-medium text-emerald-deep">

        {value}

      </span>

    </div>
  );
}