import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phone = "918085509001"; // Replace with your number

  const message =
    "Hello Lavish Living! I would like to know more about your interior design services.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-5 z-[9999] flex items-end gap-3">

      {/* Chat Bubble */}

      <div
        className="
          hidden
          md:flex
          animate-[fadeIn_1s_ease]
          flex-col
          rounded-2xl
          bg-white/95
          backdrop-blur-md
          px-5
          py-3
          shadow-2xl
          border
          border-emerald-100
        "
      >
        <span className="font-semibold text-emerald-deep">
          Need Help?
        </span>

        <span className="text-sm text-gray-500">
          Typically replies instantly
        </span>
      </div>

      {/* WhatsApp Button */}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          group
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
          hover:rotate-6
        "
      >
        {/* Soft Pulse */}

        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

        <FaWhatsapp
          className="relative text-white"
          size={38}
        />
      </a>
    </div>
  );
}