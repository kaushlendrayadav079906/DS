import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

// Images
import agilis from "../assets/Our Project/Agilis.png";
import bhajan from "../assets/Our Project/Bhajan mandhir.png";
import careerminer from "../assets/Our Project/Careerminer.png";
import estateverse from "../assets/Our Project/EstateVerse.png";
import growvia from "../assets/Our Project/Growvia.png";
import zinnai from "../assets/Our Project/ZINN AI.png";
import hero from "../assets/Our Project/unsplash_sScmok4Iq1o.png";

const projects = [
  { slug: "careerminer", title: "Careerminer", image: careerminer },
  { slug: "zinn-ai", title: "ZINN AI", image: zinnai },
  { slug: "agilis", title: "Agilis", image: agilis },
  { slug: "bhajan-mandhir", title: "Bhajan Mandhir", image: bhajan },
  { slug: "estateverse", title: "EstateVerse", image: estateverse },
  { slug: "showcase", title: "Showcase", image: hero },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const itemRefs = useRef([]);

  const scrollToIndex = (i) => {
    setIndex(i);

    const el = itemRefs.current[i];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const next = () => scrollToIndex((index + 1) % projects.length);
  const prev = () => scrollToIndex((index - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ================= Ongoing Projects ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24">
        <h2 className="font-bold text-[26px] sm:text-[36px] md:text-[50px] leading-tight tracking-[2%] text-[#11105b]">
          Our Ongoing Projects
        </h2>

        <p className="mt-3 text-gray-00 text-sm sm:text-lg max-w-3xl ">
          Discover the projects where ideas became digital products, tailored for startups and growing businesses alike.
        </p>

        <button className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-indigo-800 text-indigo-800 font-semibold hover:bg-indigo-700 hover:text-white transition">
          Start Your Project
          <span className="w-7 h-7 rounded-full bg-indigo-900 text-white flex items-center justify-center">→</span>
        </button>

        {/* Images + Names row together */}
        <div className="relative mt-14 overflow-x-auto">
          <div className="flex gap-6 flex-nowrap pb-6 scroll-smooth">

            {projects.map((p, i) => (
              <div
                key={p.slug}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={() => scrollToIndex(i)}
                className="min-w-[260px] flex flex-col items-center cursor-pointer"
              >
                {/* Image */}
                <div
                  className={`h-[420px] w-full bg-white rounded-3xl border overflow-hidden transition-all duration-300 ${
                    i === index
                      ? "border-indigo-900 scale-110 shadow-lg"
                      : "border-indigo-300 opacity-60 scale-95 hover:opacity-100"
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <button
                  className={`mt-4 flex items-center justify-between gap-2 w-full px-5 py-2 rounded-full border text-sm font-medium transition ${
                    i === index
                      ? "bg-indigo-900 text-white"
                      : "border-indigo-300 text-indigo-900 hover:bg-indigo-50"
                  }`}
                >
                  {p.title}
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      i === index
                        ? "bg-white text-indigo-900"
                        : "border border-indigo-400"
                    }`}
                  >
                    →
                  </span>
                </button>
              </div>
            ))}

          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
          >
            →
          </button>
        </div>
      </section>

      {/* ================= Full Projects Section ================= */}
      <main className="mx-auto max-w-6xl px-4 py-20">
       <h2 className="mb-10 font-bold text-[26px] sm:text-[36px] md:text-[50px] leading-tight tracking-[2%] text-[#11105b]">
  <span className="text-indigo-900">Our Projects</span>
</h2>


        <div className="space-y-8">
          {projects.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="block group">
              <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden border border-indigo-100 shadow-md bg-white hover:shadow-xl transition">
                <div className="md:w-1/2 h-56 md:h-auto">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold text-indigo-900">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-gray-00 text-sm sm:text-lg max-w-3xl">
                    Smart platform built for modern businesses and startups.
                  </p>

                  <span className="mt-6 inline-flex items-center gap-3 text-indigo-900 font-semibold">
                    View Project
                    <span className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center">
                      ➜
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
