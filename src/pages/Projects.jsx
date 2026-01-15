import React, { useState } from "react";
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

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ================= Ongoing Projects ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24">
        <h2 className="font-bold text-[26px] sm:text-[36px] md:text-[50px] leading-tight tracking-[2%] text-[#11105b]">
          Our Ongoing Projects <span className="text-indigo-900"></span>
        </h2>

        <p className="mt-3 text-gray-600 max-w-xl">
          Discover the projects where ideas became digital products, tailored for startups and growing businesses alike.
        </p>

        <button className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-indigo-800 text-indigo-900 font-semibold hover:bg-indigo-700 hover:text-white transition">
          Start Your Project
          <span className="w-7 h-7 rounded-full bg-indigo-700 text-white flex items-center justify-center">→</span>
        </button>

        {/* Images row */}
        <div className="relative mt-14 overflow-x-auto">
          <div className="flex gap-6 flex-nowrap pb-4">
            {projects.map((p, i) => (
              <div
                key={p.slug}
                onClick={() => setIndex(i)}
                className={`min-w-[260px] h-[420px] bg-white rounded-3xl border overflow-hidden cursor-pointer transition-all duration-300 ${
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
            ))}
          </div>
        </div>

        {/* Names row */}
        <div className="flex gap-3 mt-6 flex-nowrap overflow-x-auto whitespace-nowrap pb-2">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setIndex(i)}
              className={`flex items-center justify-between gap-2 w-[260px] px-5 py-2 rounded-full border text-sm font-medium transition ${
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
          ))}
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
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          <span className="text-indigo-800">Our Projects</span>
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

                  <p className="mt-3 text-gray-700 leading-relaxed">
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
