import { Search, Filter } from "lucide-react";

export default function ReviewFilters({
  search,
  setSearch,
  status,
  setStatus,
  rating,
  setRating,
}) {
  return (
    <div className="mt-8 rounded-2xl border border-emerald/10 bg-white p-6 shadow-soft">

      <div className="grid gap-5 lg:grid-cols-3">

        {/* Search */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-emerald-deep">
            <Search size={16} />
            Search Review
          </label>

          <input
            type="text"
            placeholder="Search by customer name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20"
          />
        </div>

        {/* Status */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-emerald-deep">
            <Filter size={16} />
            Review Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20"
          >
            <option value="all">All Reviews</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="featured">Featured</option>
          </select>
        </div>

        {/* Rating */}

        <div>
          <label className="mb-2 text-sm font-medium text-emerald-deep">
            Rating
          </label>

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20"
          >
            <option value="all">All Ratings</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </div>

      </div>

    </div>
  );
}