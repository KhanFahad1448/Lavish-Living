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
    <div
      className="fixed bottom-6 right-5 z-[9999] flex items-end gap-3"
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      {/* Floating Card */}

      <div
        className={`
        hidden md:block
        transition-all duration-500
        ${
          showCard
            ? "translate-x-0 opacity-100"
            : "translate-x-10 opacity-0 pointer-events-none"
        }
      `}
      >
        <div className="rounded-2xl border border-emerald-100 bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-md">

          <p className="text-lg font-semibold text-emerald-deep">

            👋 Welcome!

          </p>

          <p className="mt-1 text-sm text-gray-500">

            Need help designing your dream home?

          </p>

          <p className="mt-1 text-xs text-brass">

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
        className="
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
      "
      >
        {/* Pulse */}

        <span className="absolute h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20"></span>

        <FaWhatsapp
          size={38}
          className="relative text-white"
        />
      </a>
    </div>
  );
}