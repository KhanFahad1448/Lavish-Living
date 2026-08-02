import { useEffect, useState, Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { api } from "../lib/api";

import BeforeAfter from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import ProjectDetails from "../components/admin/projects/ProjectDetails";

const defaultWorks = [
  {
    tag: "Modular Kitchen",
    category: "Modular Kitchen",
    title: "Olive lacquer parallel kitchen",
    loc: "Harmu, Ranchi",
    location: "Harmu, Ranchi",
    img: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=500&q=80",
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=500&q=80",
  },
  {
    tag: "Master Bedroom",
    category: "Master Bedroom",
    title: "Warm-oak panelled bedroom",
    loc: "Bariatu, Ranchi",
    location: "Bariatu, Ranchi",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
  {
    tag: "Living Hall",
    category: "Living Hall",
    title: "Brass-trim accent living",
    loc: "Lalpur, Ranchi",
    location: "Lalpur, Ranchi",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  },
  {
    tag: "False Ceiling",
    category: "False Ceiling",
    title: "Cove-lit tray ceiling",
    loc: "Kanke Road",
    location: "Kanke Road",
    img: "https://images.unsplash.com/photo-1746439307632-cba0f8effbed?w=500&q=80",
    image: "https://images.unsplash.com/photo-1746439307632-cba0f8effbed?w=500&q=80",
  },
  {
    tag: "Wardrobe",
    category: "Wardrobe",
    title: "Floor-to-ceiling sliding wardrobe",
    loc: "Doranda",
    location: "Doranda",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80",
  },
  {
    tag: "Dining",
    category: "Dining",
    title: "Travertine dining nook",
    loc: "Ashok Nagar",
    location: "Ashok Nagar",
    img: "https://images.unsplash.com/photo-1751290986099-874a49f457a1?w=500&q=80",
    image: "https://images.unsplash.com/photo-1751290986099-874a49f457a1?w=500&q=80",
  },
  {
    tag: "Office",
    category: "Office",
    title: "Boutique clinic reception",
    loc: "Main Road",
    location: "Main Road",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    tag: "Kids Room",
    category: "Kids Room",
    title: "Pastel kids bedroom",
    loc: "Morabadi",
    location: "Morabadi",
    img: "https://images.unsplash.com/photo-1611048267707-aef79593a3ed?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: "https://images.unsplash.com/photo-1611048267707-aef79593a3ed?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export default function Portfolio() {
  const [works, setWorks] = useState(defaultWorks);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const { data } = await api.get("/projects");

      const dbProjects = (data.projects || []).map((project) => ({
      _id: project._id,

      tag: project.category,

      title: project.title,

      loc: project.location,

      beforeImage: project.beforeImage,

      afterImage: project.afterImage,

      gallery: project.images || [],

       img:
       project.afterImage ||
       project.images?.[0] ||
       project.image ||
      "https://via.placeholder.com/1200x800?text=Lavish+Living",
      }));

      // MongoDB projects first, then default portfolio
      setWorks([...dbProjects, ...defaultWorks]);
    } catch (error) {
      console.log("Using default portfolio");
    }
  }

  return (
    <>

    <Helmet>

  <title>
    Interior Design Portfolio | Lavish Living Ranchi
  </title>

  <meta
    name="description"
    content="Explore completed modular kitchens, bedrooms, wardrobes, office interiors, false ceilings and luxury interior projects by Lavish Living in Ranchi."
  />

  <meta
    name="keywords"
    content="Interior Portfolio Ranchi, Modular Kitchen Portfolio, Bedroom Interior Ranchi, Office Interior Ranchi, False Ceiling Projects, Lavish Living"
  />

  <link
    rel="canonical"
    href="https://lavishlivinginteriors.in/portfolio"
  />

  <meta
    property="og:title"
    content="Lavish Living Portfolio | Interior Projects in Ranchi"
  />

  <meta
    property="og:description"
    content="Browse our completed residential and commercial interior projects along with before and after transformations."
  />

  <meta
    property="og:image"
    content="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://lavishlivinginteriors.in/portfolio"
  />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

</Helmet>

      {/* HERO */}

      <section className="bg-gradient-luxe py-8 text-ivory sm:py-10 md:py-14">
        <div className="container-luxe max-w-3xl">
          <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-xs">
            Portfolio
          </p>

          <h1 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:mt-3 sm:text-3xl md:text-4xl">
            Proof of work.
          </h1>

          <p className="mt-2 text-xs leading-5 text-ivory/80 sm:mt-3 sm:text-sm md:text-base">
            A selection of recent residential and commercial projects
            delivered across Ranchi and Jharkhand.
          </p>
        </div>
      </section>

      {/* ========================================= */}
      {/* PORTFOLIO — Bento overlay grid (desktop) */}
      {/* ========================================= */}

      <section className="hidden bg-white py-10 md:block lg:py-12">
        <div className="container-luxe">

          <div className="grid auto-rows-[190px] grid-cols-3 gap-3 lg:auto-rows-[220px] lg:gap-4">

            {works.map((w, i) => {
              const bento = i % 7 === 0;

              return (
                <article
                  key={w._id || i}
                  onClick={() => setSelectedProject(w)}
                  className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-soft transition-all duration-500 hover:shadow-luxe ${
                    bento ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                  }`}
                >
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 lg:p-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-brass lg:text-[10px]">
                      {w.tag}
                    </span>
                    <h3 className="mt-0.5 font-display text-sm font-semibold leading-tight text-white lg:text-base">
                      {w.title}
                    </h3>
                    <p className="mt-0.5 text-[10px] text-ivory/70 lg:text-xs">
                      {w.loc}
                    </p>
                  </div>

                  <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-deep opacity-100 transition-opacity duration-300 group-hover:opacity-0 lg:left-3 lg:top-3 lg:text-[10px]">
                    {w.tag}
                  </span>
                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* PORTFOLIO — Zigzag timeline (mobile) */}
      {/* ========================================= */}

      <section className="bg-white py-6 md:hidden">
        <div className="container-luxe">

          <div className="relative">

            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brass/25 to-transparent" />

            <div className="relative grid grid-cols-2 gap-x-2">

              {works.map((w, i) => {
                const left = i % 2 === 0;

                const thumbnail = (
                  <span className="relative z-10 h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-brass/30 bg-cream shadow-md">
                    <img
                      src={w.img}
                      alt={w.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                      className="h-full w-full object-cover"
                    />
                    <span
                      style={{ display: "none" }}
                      className="h-full w-full items-center justify-center bg-gradient-luxe font-display text-sm font-semibold text-brass"
                    >
                      {w.tag?.charAt(0) || "L"}
                    </span>
                  </span>
                );

                const textBlock = (align) => (
                  <span className={`min-w-0 flex-1 ${align === "right" ? "text-right" : "text-left"}`}>
                    <span className="block text-[8px] font-semibold uppercase tracking-[0.14em] text-brass">
                      {w.tag}
                    </span>
                    <span className="mt-0.5 block truncate font-display text-xs font-semibold leading-tight text-emerald-deep">
                      {w.title}
                    </span>
                    <span className="mt-0.5 block text-[10px] text-ink/50">
                      {w.loc}
                    </span>
                  </span>
                );

               return left ? (
              <Fragment key={w._id || i}>
                <button
                   onClick={() => setSelectedProject(w)}
                   className="flex items-center justify-end gap-2 py-2.5"
                >
                   {textBlock("right")}
                   {thumbnail}
                 </button>
              <div />
              </Fragment>
                 ) : (
              <Fragment key={w._id || i}>
              <div />
               <button
                   onClick={() => setSelectedProject(w)}
                   className="flex items-center justify-start gap-2 py-2.5"
               >
                  {thumbnail}
                  {textBlock("left")}
               </button>
               </Fragment>
               );
              })}

            </div>

          </div>

        </div>
      </section>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </>
  );
}