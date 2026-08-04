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
    <div className="mt-4 rounded-lg border border-emerald/10 bg-white p-3 shadow-soft sm:mt-8 sm:rounded-2xl sm:p-6">

      <div className="grid grid-cols-3 gap-2 sm:gap-5">

        {/* Search */}

        <div className="min-w-0">
          <label className="mb-1 flex items-center gap-1 text-[10px] font-medium text-emerald-deep sm:mb-2 sm:gap-2 sm:text-sm">
            <Search size={12} className="shrink-0 sm:hidden" />
            <Search size={16} className="hidden shrink-0 sm:block" />
            <span className="truncate">Search Review</span>
          </label>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full min-w-0 rounded-md border border-gray-300 px-2 py-2 text-[11px] outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
          />
        </div>

        {/* Status */}

        <div className="min-w-0">
          <label className="mb-1 flex items-center gap-1 text-[10px] font-medium text-emerald-deep sm:mb-2 sm:gap-2 sm:text-sm">
            <Filter size={12} className="shrink-0 sm:hidden" />
            <Filter size={16} className="hidden shrink-0 sm:block" />
            <span className="truncate">Status</span>
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full min-w-0 rounded-md border border-gray-300 px-1.5 py-2 text-[11px] outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
          >
            <option value="all">All Reviews</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="featured">Featured</option>
          </select>
        </div>

        {/* Rating */}

        <div className="min-w-0">
          <label className="mb-1 truncate text-[10px] font-medium text-emerald-deep sm:mb-2 sm:text-sm">
            Rating
          </label>

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full min-w-0 rounded-md border border-gray-300 px-1.5 py-2 text-[11px] outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
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