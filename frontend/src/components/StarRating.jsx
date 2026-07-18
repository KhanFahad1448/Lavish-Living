import { Star } from "lucide-react";

export default function StarRating({
  rating = 0,
  size = 18,
  interactive = false,
  onChange = () => {},
}) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && onChange(star)}
          className={`transition ${
            interactive
              ? "cursor-pointer hover:scale-110"
              : "cursor-default"
          }`}
        >
          <Star
            size={size}
            className={
              star <= rating
                ? "fill-brass text-brass"
                : "text-gray-300"
            }
          />
        </button>
      ))}
    </div>
  );
}