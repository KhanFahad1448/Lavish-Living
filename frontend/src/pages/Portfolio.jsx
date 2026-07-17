import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { api } from "../lib/api";

import BeforeAfter from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import ProjectDetails from "../components/admin/projects/ProjectDetails";

const defaultWorks = [
  {
    tag: "Modular Kitchen",
    title: "Olive lacquer parallel kitchen",
    loc: "Harmu, Ranchi",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  },
  {
    tag: "Master Bedroom",
    title: "Warm-oak panelled bedroom",
    loc: "Bariatu, Ranchi",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
  {
    tag: "Living Hall",
    title: "Brass-trim accent living",
    loc: "Lalpur, Ranchi",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  },
  {
    tag: "False Ceiling",
    title: "Cove-lit tray ceiling",
    loc: "Kanke Road",
    img: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=1200&q=80",
  },
  {
    tag: "Wardrobe",
    title: "Floor-to-ceiling sliding wardrobe",
    loc: "Doranda",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80",
  },
  {
    tag: "Dining",
    title: "Travertine dining nook",
    loc: "Ashok Nagar",
    img: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=1200&q=80",
  },
  {
    tag: "Office",
    title: "Boutique clinic reception",
    loc: "Main Road",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    tag: "Kids Room",
    title: "Pastel kids bedroom",
    loc: "Morabadi",
    img: "https://images.unsplash.com/photo-1558883689-a1d5d5a8d3df?w=1200&q=80",
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
      <section className="bg-gradient-luxe py-24 text-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass">
            Portfolio
          </p>

          <h1 className="mt-3 font-display text-5xl">
            Proof of work.
          </h1>

          <p className="mt-4 text-ivory/80">
            A selection of recent residential and commercial projects
            delivered across Ranchi and Jharkhand.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
           <article
             key={i}
             onClick={() => setSelectedProject(w)}
             className="group cursor-pointer overflow-hidden rounded-2xl bg-ivory shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
            >
            
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <span className="text-xs uppercase tracking-wider text-brass">
                  {w.tag}
                </span>

                <h3 className="mt-1 font-display text-xl text-emerald-deep">
                  {w.title}
                </h3>

                <p className="mt-1 text-sm text-ink/60">
                  {w.loc}
                </p>
              </div>
            </article>
          ))}
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