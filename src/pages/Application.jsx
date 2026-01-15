import { useState } from "react";
import { FiCode, FiLayers, FiSmartphone } from "react-icons/fi";
import { Link } from "react-router-dom";

import ca1 from "../assets/coustm Appplication/Property 1=Default (5).png";
import ca2 from "../assets/coustm Appplication/Property 1=Variant2.png";
import group69 from "../assets/Group/Group 69.png";
import a1 from "../assets/Our Approch/Property 1=Default (1).png";
import a2 from "../assets/Our Approch/Property 1=Default (2).png";
import a3 from "../assets/Our Approch/Property 1=Default (3).png";
import a4 from "../assets/Our Approch/Property 1=Default (4).png";
import a0 from "../assets/Our Approch/Property 1=Default.png";
import agilis from "../assets/Our Project/Agilis.png";
import bhajanMandhir from "../assets/Our Project/Bhajan mandhir.png";
import careerminer from "../assets/Our Project/Careerminer.png";
import estateVerse from "../assets/Our Project/EstateVerse.png";
import growvia from "../assets/Our Project/Growvia.png";
import hero from "../assets/Our Project/unsplash_sScmok4Iq1o.png";
import zinnAI from "../assets/Our Project/ZINN AI.png";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* ---------------- DATA ---------------- */

const projectImages = [
  careerminer,
  zinnAI,
  agilis,
  bhajanMandhir,
  estateVerse,
  growvia,
];

const approachItems = [
  { title: "Startup-Centric", image: a0 },
  { title: "Tailored Solutions", image: a1 },
  { title: "Agile & Secure", image: a2 },
  { title: "Comprehensive Support", image: a3 },
  { title: "Expert Team", image: a4 },
];

export default function Application() {
  const [womanIndex, setWomanIndex] = useState(0);
  const [approachIndex, setApproachIndex] = useState(0);
  const womanImages = [ca1, ca2];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4">

        {/* HERO */}
        <section className="mt-20 text-center pt-10">
          <h1 className="font-bold text-[26px] sm:text-[36px] md:text-[50px] leading-tight tracking-[2%] text-[#050363]">
            Custom Applications{" "}
            <span className="text-[#585b81]">That Drive Growth</span>
            <br />
            and Efficiency
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-800 text-sm sm:text-lg max-w-3xl mx-auto">
            From MVPs for startups to scalable applications for SMEs, we create
            tailored solutions that turn ideas into digital products that work.
          </p>
        </section>

        {/* OUR PROJECTS */}
        <section className="mt-12 flex justify-center">
          <div className="relative w-full max-w-[1050px] h-[220px] sm:h-[320px] rounded-[22px] overflow-hidden shadow-md">
            <img src={hero} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />

            <div className="absolute inset-0 flex items-center px-4 sm:px-10">
              <div>
                <h3 className="text-[#0b0f5c] font-bold text-base sm:text-xl mb-4 sm:mb-10">
                  Our projects
                </h3>

                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  <div className="flex -space-x-3">
                    {projectImages.map((img, i) => (
                      <Link
                        key={i}
                        to="/projects"
                        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-white shadow overflow-hidden"
                      >
                        <img src={img} className="w-full h-full object-cover" alt="Project" />
                      </Link>
                    ))}
                  </div>

                  <span className="text-xs sm:text-lg font-semibold text-gray-700 ml-1 sm:ml-2">
                    and more
                  </span>

                  <Link
                    to="/projects"
                    className="ml-2 sm:ml-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#e9ecff] flex items-center justify-center text-[#0b0f5c]"
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CUSTOM */}
        <section className="mt-14 grid md:grid-cols-2 gap-10 items-center relative md:left-[7%]">
          <div>
            <h2 className="font-bold text-[22px] sm:text-[32px] md:text-[40px] leading-tight text-[#050363]">
              Why Your Business <span className="text-[#8a8fb5]">Needs</span>
              <br />a Custom Application
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-lg">
              Inefficient tools or generic software often create operational bottlenecks.
            </p>

            <div className="mt-6 bg-[#f5f6fa] rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <p className="font-semibold text-[#0b0f5c] mb-3 sm:mb-4 text-sm sm:text-lg">
                Custom applications can transform the way your startup or SME operates:
              </p>
              <ul className="space-y-2 sm:space-y-3 text-gray-800 font-medium text-sm sm:text-base">
                <li>• Streamline operations and automate workflows</li>
                <li>• Deliver unique services or experiences</li>
                <li>• Support long-term growth</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden bg-white">
            <img
              src={womanImages[womanIndex]}
              className="w-full max-w-[360px] mx-auto md:max-w-none h-auto md:h-[28rem] object-contain grayscale cursor-pointer transition-all hover:grayscale-0"
              onClick={() => setWomanIndex((p) => (p + 1) % womanImages.length)}
              alt="Custom Application"
            />
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-24 sm:mt-28 text-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(#eef0fb_1px,transparent_1px),linear-gradient(90deg,#eef0fb_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

          <div className="relative">
            <h2 className="font-bold text-[24px] sm:text-[36px] md:text-[40px] leading-tight text-[#050363]">
              Our Application <br />
              Development <span className="text-[#676c8e]">Services</span>
            </h2>

            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              <ServiceDarkCard icon={FiCode} title="Custom Software Development" />
              <ServiceLightCard />
              <ServiceDarkCard icon={FiLayers} title="Cross-Platform Solutions" />
            </div>
          </div>
        </section>

        <ApproachSection
          approachItems={approachItems}
          index={approachIndex}
          setIndex={setApproachIndex}
        />

        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}

/* ---------------- UI COMPONENTS ---------------- */

function ServiceDarkCard({ icon: Icon, title }) {
  return (
    <div className="w-full sm:w-[300px] min-h-[280px] sm:h-[320px] rounded-2xl p-6 text-white relative bg-gradient-to-b from-[#9aa0c9] to-[#1a1f7a] text-left">
      <div className="absolute top-5 right-5 w-10 h-10 bg-white/25 rounded-lg flex items-center justify-center">
        <Icon size={18} />
      </div>
      <h3 className="mt-12 font-bold text-lg sm:text-xl leading-tight">{title}</h3>
      <p className="mt-4 text-sm text-white/90">
        Tailored solutions for automating tasks, improving workflows, or delivering unique business functionality.
      </p>
    </div>
  );
}

function ServiceLightCard() {
  return (
    <div className="w-full sm:w-[300px] min-h-[280px] sm:h-[320px] rounded-2xl p-6 bg-[#dde3f5] relative text-left">
      <div className="absolute top-5 right-5 w-10 h-10 bg-[#cfd7ef] rounded-lg flex items-center justify-center">
        <FiSmartphone size={18} className="text-[#0b0f5c]" />
      </div>
      <h3 className="mt-12 font-bold text-lg sm:text-xl leading-tight text-[#0b0f5c]">
        Mobile App Development
      </h3>
      <p className="mt-4 text-sm text-gray-600">
        High-performance apps for iOS and Android designed to engage users.
      </p>
    </div>
  );
}

/* ---------------- OUR APPROACH ---------------- */

function ApproachSection({ approachItems, index, setIndex }) {
  const prev = () => setIndex((index - 1 + approachItems.length) % approachItems.length);
  const next = () => setIndex((index + 1) % approachItems.length);

  return (
    <section className="mt-28 sm:mt-32 mb-32 sm:mb-40 max-w-[1400px] mx-auto relative overflow-hidden">
      <h2 className="font-bold text-[24px] sm:text-[36px] md:text-[40px] leading-tight text-[#0b0a72] text-center md:text-left">
        Our Approach
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between">

        <div className="w-full md:w-1/2 relative z-20">
          <div className="flex flex-col items-center md:items-end space-y-4 sm:space-y-6 md:space-y-10 pr-0 md:pr-24">
            {approachItems.map((item, i) => (
              <h3
                key={i}
                onClick={() => setIndex(i)}
                className={`cursor-pointer font-semibold transition-all duration-500 select-none text-center md:text-right
                ${
                  i === index
                    ? "text-[20px] sm:text-[32px] md:text-[40px] text-[#0e0e19]"
                    : "text-[14px] sm:text-[22px] md:text-[28px] text-[#0d0d19] opacity-30"
                }`}
              >
                {item.title}
              </h3>
            ))}
          </div>

          <div className="flex gap-4 mt-10 sm:mt-16 md:mt-24 justify-center md:justify-start">
            <button onClick={prev} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#EBF0FF] flex items-center justify-center text-[#050363] shadow">
              ←
            </button>
            <button onClick={next} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#EBF0FF] flex items-center justify-center text-[#050363] shadow">
              →
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-12 md:mt-0">
  <div className="w-full max-w-[360px] md:max-w-none md:w-[98%] h-auto sm:h-[320px] md:h-[70%]
                  rounded-xl md:rounded-full
                  overflow-hidden bg-white
                  md:-translate-x-[15%] md:-translate-y-[10%]">
    <img
      src={approachItems[index].image}
      alt={approachItems[index].title}
      className="w-full h-full object-contain md:object-cover"
    />
  </div>
</div>


      </div>
    </section>
  );
}

/* ---------------- CONTACT SECTION ---------------- */

function ContactSection() {
  return (
    <section id="contact" className="mt-28 sm:mt-32 mb-20 text-center px-4">
      <h2 className="font-bold text-[24px] sm:text-[36px] md:text-[40px] leading-tight text-[#0b0a72]">
        Ready to Build Your <br /> Application?
      </h2>

      <p className="mt-4 text-gray-800 text-sm sm:text-lg max-w-3xl mx-auto">
        Let us create a digital solution that boosts efficiency, engages users,
        and accelerates growth for your startup or SME.
      </p>

      <div className="relative mt-12 sm:mt-16 max-w-6xl mx-auto">
        <div className="block relative md:absolute right-0 top-[5%] bottom-[5%] w-full md:w-1/2 h-[220px] md:h-auto rounded-2xl overflow-hidden shadow-lg mb-6 md:mb-0">
  <img
    src={group69}
    alt="Contact Visual"
    className="w-full h-full object-cover"
  />
</div>


        <div className="relative bg-white rounded-2xl border border-[#9aa0c9] shadow-lg p-6 sm:p-8 md:p-12 text-left md:w-[60%] mx-auto">
          <form className="space-y-5">
            {["Name*", "Email*", "Phone Number", "Startup Name (optional)"].map((label, idx) => (
              <div key={idx}>
                <label className="block text-[#0b0f5c] font-bold mb-2 text-sm sm:text-base">
                  {label}
                </label>
                <input
                  type={label.includes("Email") ? "email" : "text"}
                  required={label.includes("*")}
                  className="w-full h-11 sm:h-12 rounded-xl border border-[#9aa0c9] px-4 outline-none bg-white"
                />
              </div>
            ))}

            <div>
              <label className="block text-[#0b0f5c] font-bold mb-2 text-sm sm:text-base">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-[#9aa0c9] p-4 outline-none resize-none bg-white"
              />
            </div>

            <div className="flex justify-center md:justify-start pt-2">
              <button
                type="submit"
                className="flex items-center gap-3 px-6 sm:px-8 py-3 rounded-full border border-[#0b0f5c] text-[#0b0f5c] font-bold hover:bg-[#0b0f5c] hover:text-white transition"
              >
                Send Message
                <span className="w-6 h-6 rounded-full bg-[#0b0f5c] flex items-center justify-center text-white text-sm">
                  →
                </span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
