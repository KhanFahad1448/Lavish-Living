import { useEffect } from "react";
import {X,ChevronLeft,ChevronRight,} from "lucide-react";



export default function ImageLightbox({
  images = [],
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  useEffect(() => {
    function handleKeyDown(e) {
      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          previousImage();
          break;

        case "ArrowRight":
          nextImage();
          break;

        default:
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex]);

  function previousImage() {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  function nextImage() {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }

  if (!images.length) return null;

  const image = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade"
    >
      {/* Close */}

      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <X size={26} />
      </button>

      {/* Previous */}

      <button
        onClick={previousImage}
        className="absolute left-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <ChevronLeft size={34} />
      </button>

      {/* Next */}

      <button
        onClick={nextImage}
        className="absolute right-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <ChevronRight size={34} />
      </button>

      {/* Image */}

      <div className="flex max-h-[90vh] max-w-[92vw] flex-col items-center">

        <img
          src={image.image}
          alt={image.title}
          className="max-h-[78vh] rounded-3xl object-contain shadow-2xl"
        />

        <div className="mt-8 text-center">

          <h2 className="text-2xl font-semibold text-white">
            {image.title}
          </h2>

          <p className="mt-2 text-sm tracking-wider text-white/70">
            {image.style}
          </p>

          <div className="mt-5 text-white/60">

            {currentIndex + 1} / {images.length}

          </div>

        </div>

      </div>
    </div>
  );
}