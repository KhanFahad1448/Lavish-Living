import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote, MapPin, Star } from "lucide-react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchReviews(); }, []);

  async function fetchReviews() {
    try {
      const { data } = await api.get("/reviews");
      const sorted = (data.reviews || []).sort((a,b)=>Number(b.featured)-Number(a.featured));
      setReviews(sorted);
    } catch {
      console.log("Unable to fetch reviews");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="section-pad bg-cream">
        <div className="container-luxe">
          <div className="grid gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map(i=>(
              <div key={i} className="h-40 animate-pulse rounded-2xl bg-white shadow-soft sm:h-52"/>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!reviews.length) {
    return (
      <section className="section-pad bg-cream">
        <div className="container-luxe text-center">
          <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-xs">Testimonials</p>
          <h2 className="mt-2 font-display text-2xl leading-tight text-emerald-deep sm:mt-3 sm:text-3xl md:text-4xl">Loved by homeowners across Ranchi</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brass sm:mt-5 sm:w-24"></div>
          <p className="mt-3 text-xs text-ink/70 sm:mt-6 sm:text-base">Be the first homeowner to share your experience with Lavish Living.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad bg-cream">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-xs">Testimonials</p>
          <h2 className="mt-2 font-display text-2xl leading-tight text-emerald-deep sm:mt-3 sm:text-3xl md:text-4xl">Loved by homeowners across Ranchi</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brass sm:mt-5 sm:w-24"></div>
          <p className="mt-2 text-xs text-ink/70 sm:mt-4 sm:text-base">Every beautiful home has a story. Here's what our customers have to say.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{delay:4500,disableOnInteraction:false,pauseOnMouseEnter:true}}
          pagination={{clickable:true}}
          loop={reviews.length>3}
          grabCursor
          breakpoints={{
            0:{slidesPerView:1,spaceBetween:14},
            640:{slidesPerView:1,spaceBetween:18},
            768:{slidesPerView:2,spaceBetween:18},
            1200:{slidesPerView:3,spaceBetween:20},
          }}
          className="mt-8 pb-10 sm:mt-12 sm:pb-12"
        >
          {reviews.map(review=>(
            <SwiperSlide key={review._id}>
              <div className="group relative flex h-[190px] flex-col justify-between rounded-2xl border border-emerald/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/30 hover:shadow-lg sm:h-[210px] sm:p-5">

                {/* Top row: quote mark + rating */}
                <div className="flex items-start justify-between">

                  <div className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-deep/5 text-emerald-deep/40 sm:h-8 sm:w-8">
                    <Quote size={14} className="fill-current sm:size-4" />
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-brass/10 px-2 py-1">
                    <Star size={11} className="fill-brass text-brass sm:size-3" />
                    <span className="text-[10px] font-semibold text-emerald-deep sm:text-xs">
                      {review.rating?.toFixed ? review.rating.toFixed(1) : review.rating}
                    </span>
                  </div>

                </div>

                {/* Quote text */}
                <p className="mt-3 flex-1 overflow-hidden text-xs font-medium italic leading-5 text-brass line-clamp-3 sm:text-sm sm:leading-6">
                  {review.review}
                </p>

                {/* Footer: avatar + name */}
                <div className="mt-3 flex items-center gap-2.5 border-t border-emerald/5 pt-3">

                  {review.image ? (
                    <img src={review.image} alt={review.name} className="h-8 w-8 rounded-full object-cover ring-2 ring-brass/20 sm:h-9 sm:w-9" />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-luxe text-[11px] font-bold text-brass sm:h-9 sm:w-9 sm:text-xs">
                      {review.name?.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-xs font-semibold text-emerald-deep sm:text-sm">{review.name}</h4>
                    <p className="flex items-center gap-1 truncate text-[10px] text-ink/50 sm:text-[11px]">
                      <MapPin size={10} className="shrink-0" />
                      {review.location}
                    </p>
                  </div>

                  {review.featured && (
                    <span className="shrink-0 rounded-full bg-emerald-deep px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-brass">
                      Featured
                    </span>
                  )}

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}