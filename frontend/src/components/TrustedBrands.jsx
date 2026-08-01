import hafele from "../assets/brands/hafele.png";
import hettich from "../assets/brands/hettich.png";
import greenply from "../assets/brands/greenply.png";
import centuryply from "../assets/brands/centuryply.png";
import actiontesa from "../assets/brands/actiontesa.jpg";
import merino from "../assets/brands/merino.jpg";
import asianpaints from "../assets/brands/asianpaints.jpg";
import royaletouche from "../assets/brands/royaletouche.png";

const brands = [
  { name: "Häfele", logo: hafele },
  { name: "Hettich", logo: hettich },
  { name: "Greenply", logo: greenply },
  { name: "Century Ply", logo: centuryply },
  { name: "Action TESA", logo: actiontesa },
  { name: "Merino", logo: merino },
  { name: "Asian Paints", logo: asianpaints },
  { name: "Royale Touche", logo: royaletouche },
];

export default function TrustedBrands() {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-14">
      <div className="container-luxe">

        <div className="mb-6 text-center sm:mb-7 md:mb-11">

          <span className="inline-flex rounded-full border border-brass/30 bg-brass/10 px-3 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-brass sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.2em]">
            Trusted Brands
          </span>

          <h2 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-emerald-deep sm:mt-3 sm:text-2xl md:mt-4 md:text-3xl lg:text-4xl">
            We Use Only
            <br />
            <span className="text-brass-gradient">
              Premium Materials
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-3xl text-xs leading-5 text-ink/65 sm:mt-3 sm:text-xs sm:leading-5 md:mt-4 md:text-sm md:leading-6">
            Every beautiful interior begins with exceptional materials.
            That's why we partner with India's most trusted brands to
            deliver quality, durability and timeless luxury.
          </p>

        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-6">

          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex h-16 items-center justify-center rounded-xl border border-emerald/10 bg-white p-2.5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brass/30 hover:shadow-luxe sm:h-36 sm:rounded-2xl sm:p-6 sm:hover:-translate-y-2"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-8 w-auto object-contain transition duration-300 sm:max-h-16 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}