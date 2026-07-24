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
    <section className="section-pad bg-white">
      <div className="container-luxe">

        <div className="mb-14 text-center">

          <span className="inline-flex rounded-full border border-brass/30 bg-brass/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brass">
            Trusted Brands
          </span>

          <h2 className="mt-5 font-display text-4xl text-emerald-deep md:text-5xl">
            We Use Only
            <br />
            <span className="text-brass-gradient">
              Premium Materials
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink/65">
            Every beautiful interior begins with exceptional materials.
            That's why we partner with India's most trusted brands to
            deliver quality, durability and timeless luxury.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex h-36 items-center justify-center rounded-2xl border border-emerald/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-brass/30 hover:shadow-luxe"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-16 w-auto object-contain transition duration-300 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}