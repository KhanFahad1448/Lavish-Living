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

      <section className="bg-gradient-luxe py-24 text-ivory">

        <div className="container-luxe max-w-3xl">

          <p className="text-xs uppercase tracking-[0.2em] text-brass">
            Customer Dashboard
          </p>

          <h1 className="mt-3 font-display text-5xl">
            My Enquiries
          </h1>

          <p className="mt-5 text-lg leading-8 text-ivory/80">
            Track every enquiry you've submitted, monitor its current
            progress and stay updated throughout your interior journey.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="section-pad bg-cream">

        <div className="container-luxe">

          {loading ? (

            <div className="flex flex-col items-center justify-center py-24">

              <Loader2
                size={42}
                className="animate-spin text-brass"
              />

              <p className="mt-5 text-ink/60">
                Loading your enquiries...
              </p>

            </div>

          ) : inquiries.length === 0 ? (

            <div className="rounded-3xl bg-white p-16 text-center shadow-soft">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-luxe">

                <ClipboardList
                  size={34}
                  className="text-brass"
                />

              </div>

              <h2 className="mt-8 font-display text-4xl text-emerald-deep">
                No enquiries yet
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-ink/65">
                You haven't submitted any enquiries yet.
                Once you fill out an enquiry form, it will appear here so
                you can easily track its progress.
              </p>

            </div>

          ) : (

            <div>

              <div className="mb-10">

                <h2 className="font-display text-4xl text-emerald-deep">
                  Your Interior Projects
                </h2>

                <p className="mt-2 text-ink/60">
                  Total Enquiries:{" "}
                  <span className="font-semibold text-brass">
                    {inquiries.length}
                  </span>
                </p>

              </div>

              <div className="space-y-8">

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