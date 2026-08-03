import { useEffect, useState } from "react";
import { ClipboardList, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { api } from "../lib/api";
import InquiryCard from "../components/InquiryCard";

export default function MyInquiries() {
  const [loading, setLoading] = useState(true);
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    fetchMyInquiries();
  }, []);

  async function fetchMyInquiries() {
    try {
      const { data } = await api.get("/inquiries/my");

      setInquiries(data.inquiries || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>My Enquiries | Lavish Living</title>

        <meta
          name="description"
          content="Track all your Lavish Living interior design enquiries in one place."
        />
      </Helmet>

      {/* Hero */}

      <section className="bg-gradient-luxe py-8 text-ivory sm:py-10 md:py-14">

        <div className="container-luxe max-w-3xl">

          <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-xs">
            Customer Dashboard
          </p>

          <h1 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:mt-3 sm:text-3xl md:text-4xl">
            My Enquiries
          </h1>

          <p className="mt-2 text-xs leading-5 text-ivory/80 sm:mt-3 sm:text-sm sm:leading-6 md:text-base">
            Track every enquiry you've submitted, monitor its progress
            and stay updated throughout your journey.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="bg-cream py-6 sm:py-8 md:py-12">

        <div className="container-luxe">

          {loading ? (

            <div className="flex flex-col items-center justify-center py-14 sm:py-20">

              <Loader2 size={26} className="animate-spin text-brass sm:size-8" />

              <p className="mt-3 text-xs text-ink/60 sm:mt-4 sm:text-sm">
                Loading your enquiries...
              </p>

            </div>

          ) : inquiries.length === 0 ? (

            <div className="rounded-2xl bg-white p-6 text-center shadow-soft sm:rounded-3xl sm:p-10">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-luxe sm:h-16 sm:w-16">
                <ClipboardList size={20} className="text-brass sm:size-6" />
              </div>

              <h2 className="mt-4 font-display text-lg font-semibold tracking-tight text-emerald-deep sm:mt-5 sm:text-xl md:text-2xl">
                No enquiries yet
              </h2>

              <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-ink/65 sm:mt-3 sm:text-sm sm:leading-6">
                Once you submit an enquiry form, it will appear here so
                you can track its progress.
              </p>

            </div>

          ) : (

            <div>

              <div className="mb-4 sm:mb-6">

                <h2 className="font-display text-lg font-semibold tracking-tight text-emerald-deep sm:text-xl md:text-2xl">
                  Your Interior Projects
                </h2>

                <p className="mt-1 text-xs text-ink/60 sm:text-sm">
                  Total Enquiries:{" "}
                  <span className="font-semibold text-brass">
                    {inquiries.length}
                  </span>
                </p>

              </div>

              <div className="space-y-3 sm:space-y-4">

                {inquiries.map((inquiry) => (
                  <InquiryCard
                    key={inquiry._id}
                    inquiry={inquiry}
                  />
                ))}

              </div>

            </div>

          )}

        </div>

      </section>
    </>
  );
}