import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [showCard, setShowCard] = useState(true);

  const phone = "918085509001"; // Replace with your number

  const message =
    "Hello Lavish Living! I would like to know more about your interior design services.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-3 right-3 z-[9999] flex items-end gap-2 md:bottom-5 md:right-5">

      {/* Floating Card */}

      <div
        className={`
          hidden md:block
          transition-all duration-300 ease-out
          ${
            showCard
              ? "translate-x-0 opacity-100"
              : "translate-x-4 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="rounded-xl border border-emerald-100 bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md">

          <p className="text-sm font-semibold text-emerald-deep">
            👋 Welcome!
          </p>

          <p className="mt-0.5 text-xs leading-5 text-gray-500">
            Need help designing your dream home?
          </p>

          <p className="mt-0.5 text-[10px] text-brass">
            Typically replies instantly
          </p>

        </div>
      </div>

      {/* WhatsApp Button */}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        onMouseEnter={() => setShowCard(true)}
        onMouseLeave={() => setShowCard(false)}
        className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          md:h-14
          md:w-14
        "
      >
        {/* Pulse */}

        <span className="absolute h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20"></span>

        <FaWhatsapp className="relative text-[22px] text-white md:text-[30px]" />

      </a>
    </div>
  );
}