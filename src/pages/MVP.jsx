import { useState } from "react";
import { FiCode, FiLayers, FiSmartphone } from "react-icons/fi";

import a1 from "../assets/Frame/frame1.png";
import a2 from "../assets/Frame/frame2.png";
import a3 from "../assets/Frame/frame3.png";
import a4 from "../assets/Frame/frame4.png";
import group69 from "../assets/Group/Group 69.png";
import ca1 from "../assets/Mask Group/mask.png";
import ca2 from "../assets/Mask Group/mask1.png";
import b1 from "../assets/MVP/mvp1.png";
import b2 from "../assets/MVP/mvp2.png";
import b3 from "../assets/MVP/mvp3.png";
// import a0 from "../assets/Our Approch/Property 1=Default.png";

import Our from "../assets/Our Expertise/Our 2.png";


import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const approachItems = [
  { title: "Startup-Focused", image: a1 },
  { title: "Agile Methodology", image: a2 },
  { title: "Market-Ready-Solution", image: a3 },
  { title: "Collaborative Partnership", image: a4 },
  
];

export default function Application() {
  const [maskIndex, setMaskIndex] = useState(0);
  const [approachIndex, setApproachIndex] = useState(0);
  const maskImages = [ca1, ca2];
  


  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4">

     <section className=" mt-[150px] pt-28 pb-24 bg-white">
  <div className="max-w-7xl mx-auto px-4">

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

      {/* LEFT TEXT */}
      <div>
        <h1 className="font-bold text-[32px] sm:text-[42px] md:text-[50px] leading-tight text-[#050363]">
          Launch Your Startup <br />
          Faster with a <br />
          <span className="text-[#585b81]">Market-Ready MVP</span>
        </h1>

        <p className="mt-6 md:mt-10 font-semibold text-[#0c0c0d] text-lg sm:text-xl mb-8 md:mb-0">
          We help early-stage startups transform ideas into functional products quickly and efficiently.
          Test, iterate, and validate your concept with a clean, scalable MVP designed for growth.
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative flex justify-end z-20">
        <div className="rounded-[24px] overflow-hidden shadow-xl bg-white w-full max-w-[649px]">
          <img
            src={Our}
            alt="Team working"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

    </div>

    {/* BLUE CTA BAR (FULL WIDTH) */}
    <div className="relative mt-10 md:mt-[-120px] z-10">
      <div className="w-full h-auto py-8 md:py-0 md:h-[154px] bg-[#050363] rounded-[30px] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 shadow-lg gap-6 md:gap-0">

        <button className="flex items-center gap-3 bg-white text-[#050363] px-6 py-2 rounded-full text-[14px] font-bold shadow-md whitespace-nowrap">
          Start Your MVP Today
          <span className="w-6 h-6 rounded-full border border-[#050363] flex items-center justify-center text-sm">
            →
          </span>
        </button>

      </div>
    </div>

    
  <div className="mt-10 max-w-7xl mx-auto px-4">
  <div className="grid grid-cols-3 items-center opacity-70">

    <div className="flex justify-start">
  <img src={b1} alt="MVP 1" className="h-12 sm:h-14 object-contain" />
</div>

<div className="flex justify-center">
  <img src={b2} alt="MVP 2" className="h-16 sm:h-20 object-contain" />
</div>

<div className="flex justify-end">
  <img src={b3} alt="MVP 3" className="h-12 sm:h-14 object-contain" />
</div>


  </div>
</div>

</div>

  
</section>



        {/* WHY MVP DEVELOPMENT MATTERS */}
<section className=" mb-28">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="font-bold text-[32px] sm:text-[42px] md:text-[48px] leading-tight text-[#050363]">
        Why MVP Development <br /> Matters
      </h2>

     <div className="mt-11 flex gap-6 items-start">
  <div className="font-bold text-[#050363] text-xl sm:text-2xl md:text-3xl leading-none">
    1
  </div>

  <div></div>

        <div>
          <h4 className="font-semibold text-[#050363] text-xl sm:text-2xl md:text-3xl mb-10">
  Bringing a new product to market is challenging. Startups often face:
</h4>

          <ul className="space-y-5 font-semibold text-[#0c0c0d] text-lg sm:text-xl mb-">
            <li>Limited time and budget to test ideas</li>
            <li>Uncertainty about product-market fit</li>
            <li>
              Technical hurdles in building a reliable, user-ready product
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end relative">
  <img
    src={maskImages[maskIndex]}
    alt="Idea bulb"
    className="w-[300px] sm:w-[300px] md:w-[250px] object-contain"
  />

  <button
  onClick={() => setMaskIndex((prev) => (prev + 1) % maskImages.length)}
  className="absolute bottom-[-10px] right-0 md:bottom-[-2px] md:left-[80%] md:-translate-x-1/2
             w-12 h-12 rounded-full bg-[#e9edff] text-[#050363]
             flex items-center justify-center text-xl shadow-md
             hover:bg-[#dfe5ff] transition"
>
  →
</button>

</div>



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
  <div className="w-full max-w-[360px] md:max-w-none md:w-[98%] h-[250px] sm:h-[320px] md:h-[70%]
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
    <section id="contact" className="mt-20 sm:mt-32 mb-20 text-center px-4">
      <h2 className="font-bold text-[24px] sm:text-[36px] md:text-[40px] leading-tight text-[#0b0a72]">
        Ready to Build Your <br /> Application?
      </h2>

      <p className="mt-4 text-gray-00 text-sm sm:text-lg max-w-3xl mx-auto">
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
