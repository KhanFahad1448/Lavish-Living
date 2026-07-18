import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote, MapPin } from "lucide-react";
import StarRating from "./StarRating";

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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map(i=>(
              <div key={i} className="h-72 animate-pulse rounded-3xl bg-white shadow-soft"/>
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
          <p className="text-xs uppercase tracking-[0.2em] text-brass">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl text-emerald-deep">Loved by homeowners across Ranchi</h2>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-brass"></div>
          <p className="mt-6 text-ink/70">Be the first homeowner to share your experience with Lavish Living.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad bg-cream">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brass">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl text-emerald-deep">Loved by homeowners across Ranchi</h2>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-brass"></div>
          <p className="mt-4 text-ink/70">Every beautiful home has a story. Here's what our customers have to say.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{delay:4500,disableOnInteraction:false,pauseOnMouseEnter:true}}
          pagination={{clickable:true}}
          loop={reviews.length>3}
          grabCursor
          spaceBetween={24}
          breakpoints={{0:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}}}
          className="mt-14 pb-12"
        >
          {reviews.map(review=>(
            <SwiperSlide key={review._id}>
              <div className="relative flex h-[360px] flex-col rounded-3xl border border-emerald/10 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe">
                {review.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-brass px-3 py-1 text-xs font-semibold text-emerald-deep">Featured</span>
                )}
                <Quote size={56} className="absolute right-5 top-12 text-brass/10"/>
                {review.image ? (
                  <img src={review.image} alt={review.name} className="mb-4 h-16 w-16 rounded-full border-2 border-brass/30 object-cover"/>
                ) : (
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-luxe text-xl font-bold text-brass">
                    {review.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <StarRating rating={review.rating} size={16}/>
                <p className="mt-4 flex-1 overflow-hidden text-sm italic leading-7 text-ink/70 line-clamp-4">
                  "{review.review}"
                </p>
                <div className="mt-5 border-t pt-4">
                  <h4 className="font-semibold text-emerald-deep">{review.name}</h4>
                  <p className="mt-1 flex items-center gap-2 text-sm text-ink/60">
                    <MapPin size={14}/>{review.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
