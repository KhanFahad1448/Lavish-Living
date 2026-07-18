import { CheckCircle2, Star, Trash2, Pencil, Clock3, MapPin,} from "lucide-react";

export default function ReviewTable({
  reviews = [],
  onApprove,
  onFeature,
  onDelete,
  onEdit,
}) {
  if (reviews.length === 0) {
    return (
      <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-soft">
        <h3 className="font-display text-2xl text-emerald-deep">
          No Reviews Found
        </h3>

        <p className="mt-3 text-ink/60">
          Reviews submitted by customers will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-soft">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-cream">

            <tr className="text-left text-sm uppercase tracking-wider text-emerald-deep">

              <th className="px-6 py-4">Customer</th>

              <th className="px-6 py-4">Rating</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4">Featured</th>

              <th className="px-6 py-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {reviews.map((review) => (

              <tr
                key={review._id}
                className="border-t border-gray-100 transition hover:bg-cream/30"
              >

                {/* Customer */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <img
                      src={
                        review.image ||
                        "https://ui-avatars.com/api/?name=" +
                          encodeURIComponent(review.name)
                      }
                      alt={review.name}
                      className="h-14 w-14 rounded-full border-2 border-brass/20 object-cover"
                    />

                    <div>

                      <h4 className="font-semibold text-emerald-deep">
                        {review.name}
                      </h4>

                      <p className="mt-1 flex items-center gap-1 text-sm text-ink/60">
                        <MapPin size={14} />

                        {review.location}
                      </p>

                      <p className="mt-2 max-w-sm text-sm text-ink/70 line-clamp-2">
                        {review.review}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Rating */}

                <td className="px-6 py-5">

                  <div className="flex">

                    {Array.from({
                      length: Number(review.rating),
                    }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-brass text-brass"
                      />
                    ))}

                  </div>

                </td>

                {/* Status */}

                <td className="px-6 py-5">

                  {review.approved ? (

                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">

                      <CheckCircle2 size={16} />

                      Approved

                    </span>

                  ) : (

                    <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">

                      <Clock3 size={16} />

                      Pending

                    </span>

                  )}

                </td>

                {/* Featured */}

                <td className="px-6 py-5">

                  {review.featured ? (

                    <span className="rounded-full bg-brass px-3 py-1 text-sm font-semibold text-emerald-deep">
                      Featured
                    </span>

                  ) : (

                    <span className="text-sm text-ink/50">
                      —
                    </span>

                  )}

                </td>

                {/* Actions */}

                <td className="px-6 py-5">

                  <div className="flex flex-wrap gap-2">

                    <button
                      onClick={() => onApprove(review)}
                      className="rounded-xl bg-green-50 p-2 text-green-700 transition hover:bg-green-100"
                      title="Approve Review"
                    >
                      <CheckCircle2 size={18} />
                    </button>

                    <button
                      onClick={() => onFeature(review)}
                      className="rounded-xl bg-amber-50 p-2 text-amber-600 transition hover:bg-amber-100"
                      title="Feature Review"
                    >
                      <Star size={18} />
                    </button>

                    <button
                      onClick={() => onEdit(review)}
                      className="rounded-xl bg-blue-50 p-2 text-blue-700 transition hover:bg-blue-100"
                      title="Edit Review"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(review)}
                      className="rounded-xl bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
                      title="Delete Review"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}