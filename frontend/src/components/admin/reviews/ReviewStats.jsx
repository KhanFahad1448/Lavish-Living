import {
  MessageSquare,
  Clock3,
  CheckCircle2,
  Star,
} from "lucide-react";

export default function ReviewStats({ reviews = [] }) {
  const total = reviews.length;

  const pending = reviews.filter(
    (review) => !review.approved
  ).length;

  const approved = reviews.filter(
    (review) => review.approved
  ).length;

  const featured = reviews.filter(
    (review) => review.featured
  ).length;

  const averageRating =
    total > 0
      ? (
          reviews.reduce(
            (sum, review) => sum + Number(review.rating || 0),
            0
          ) / total
        ).toFixed(1)
      : "0.0";

  const cards = [
    {
      title: "Total",
      fullTitle: "Total Reviews",
      value: total,
      icon: MessageSquare,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Pending",
      fullTitle: "Pending",
      value: pending,
      icon: Clock3,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      title: "Approved",
      fullTitle: "Approved",
      value: approved,
      icon: CheckCircle2,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Featured",
      fullTitle: "Featured",
      value: featured,
      icon: Star,
      color: "bg-amber-50 text-amber-500",
    },
    {
      title: "Avg Rating",
      fullTitle: "Average Rating",
      value: averageRating,
      icon: Star,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-md border border-emerald/10 bg-white p-1.5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-luxe sm:rounded-2xl sm:p-6"
          >
            <div className="flex items-center justify-between gap-1 sm:gap-0">
              <div className="min-w-0">
                <p className="truncate text-[8px] leading-tight text-ink/60 sm:text-sm">
                  <span className="sm:hidden">{card.title}</span>
                  <span className="hidden sm:inline">{card.fullTitle}</span>
                </p>

                <h2 className="mt-0.5 font-display text-sm font-semibold text-emerald-deep sm:mt-2 sm:text-3xl sm:font-normal">
                  {card.value}
                </h2>
              </div>

              <div
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-md sm:h-14 sm:w-14 sm:rounded-2xl ${card.color}`}
              >
                <Icon size={12} className="sm:hidden" />
                <Icon size={28} className="hidden sm:block" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}