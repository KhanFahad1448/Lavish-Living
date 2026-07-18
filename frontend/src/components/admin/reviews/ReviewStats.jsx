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
      title: "Total Reviews",
      value: total,
      icon: MessageSquare,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      title: "Approved",
      value: approved,
      icon: CheckCircle2,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Featured",
      value: featured,
      icon: Star,
      color: "bg-amber-50 text-amber-500",
    },
    {
      title: "Average Rating",
      value: averageRating,
      icon: Star,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-emerald/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-luxe"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-ink/60">
                  {card.title}
                </p>

                <h2 className="mt-2 font-display text-3xl text-emerald-deep">
                  {card.value}
                </h2>
              </div>

              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl ${card.color}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}