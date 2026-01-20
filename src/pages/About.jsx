import { useState } from "react";
import { FiArrowRight, FiBox, FiSearch, FiTarget, FiZap } from "react-icons/fi";
import purposeImg from "../assets/Purpose/purpose.jpg";
import unsplash1 from "../assets/Unsplash/unsplash1.png";
import unsplash2 from "../assets/Unsplash/unsplash2.png";
import unsplash3 from "../assets/Unsplash/unsplash3.png";
import unsplash4 from "../assets/Unsplash/unsplash4.png";
import work1 from "../assets/Work/work1.png";
import work2 from "../assets/Work/work2.png";
import work3 from "../assets/Work/work3.png";
import work4 from "../assets/Work/work4.png";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";



/* ---------------- DIFFERENT SECTION DATA ---------------- */


const differentData = [
  {
    title: "Speed Without Compromise",
    desc: "Launch faster and smarter with lean, agile processes.",
    image: unsplash1,
    icon: FiZap,
  },
  {
    title: "Tailored Solutions",
    desc: "Every product is customized to meet your business goals.",
    image: unsplash2,
    icon: FiTarget,
  },
  {
    title: "Market Insight",
    desc: "Deep understanding of user needs and industry trends.",
    image: unsplash3,
    icon: FiSearch,
  },
  {
    title: "Cost Efficiency",
    desc: "Achieve high-quality results without overspending.",
    image: unsplash4,
    icon: FiBox,
  },
];


/* ---------------- PLACEHOLDER IMAGE ---------------- */

const ImagePlaceholder = ({ className, label }) => (
  <div
    className={`bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 font-medium ${className}`}
  >
    {label}
  </div>
);

export default function About() {
  const [activeDiff, setActiveDiff] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const workImages = [work1, work2, work3, work4]; // ✅ ADD THIS

  const workSteps = [
    {
      title: "Understand Your Vision",
      icon: FiSearch,
      desc: "We start by deeply understanding your business goals, target users, challenges, and technical requirements to ensure the right foundation.",
    },
    {
      title: "Plan Smart",
      icon: FiTarget,
      desc: "We define the project scope, timeline, architecture, and roadmap to ensure efficient execution with minimal risk.",
    },
    {
      title: "Build and Iterate",
      icon: FiZap,
      desc: "Our developers build fast, test continuously, and refine features based on feedback to deliver a high-quality product.",
    },
    {
      title: "Launch and Grow",
      icon: FiBox,
      desc: "We deploy your product, monitor performance, provide support, and help scale your solution as your business grows.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col text-[#0B0F5C] bg-white">
      <Navbar />

      <main className="flex-1 w-full overflow-hidden">
        {/* ---------------- OUR PURPOSE ---------------- */}
        <section className="mt-[135px] w-full bg-[#EEF1FB] pt-20 pb-20">
          <div className="max-w-[1728px] mx-auto px-10 pt-20">
            <div className="relative w-full h-auto lg:h-[400px] rounded-[32px] overflow-hidden shadow-2xl">
              {/* Background Image */}
              <img
                src={purposeImg}
                alt="Our Purpose"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="relative h-full w-full flex flex-col justify-between">
                <div className="relative p-8 lg:p-0 lg:absolute lg:bottom-16 lg:left-16 z-20">
                  <h2 className="text-white text-[42px] lg:text-[72px] font-bold leading-[1] tracking-tight">
                    Our <br /> Purpose
                  </h2>
                </div>


                <div className="relative w-full lg:absolute lg:bottom-0 lg:right-0 lg:w-[520px] flex items-end z-20">
                  <div className="bg-[#EEF1FB] pt-10 pl-10 pr-6 pb-6 rounded-none lg:rounded-tl-[40px] w-full relative z-10">
                    <p className="text-gray-00 text-sm sm:text-lg max-w-3xl mx-auto">
                      We speed the journey from idea to execution, delivering
                      fast MVPs and custom apps without the usual tech
                      headaches.
                    </p>
                  </div>
                </div>

              </div>

              <button className="absolute right-12 top-1/3 translate-y-1/3 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl text-[#050363] hover:scale-110 transition-transform z-30">
                <FiArrowRight size={28} />
              </button>
            </div>

            <div className="mt-20 ml-2">
              <h1 className="font-bold text-[26px] sm:text-[36px] md:text-[50px] leading-tight tracking-[2%] text-[#050363]">
  Turning Ideas into Digital Reality for <br />
  <span className="text-[#373d71]">Startups and SMEs</span>
</h1>

<p className="mt-4  text-gray-00 text-sm sm:text-lg max-w-3xl ">
  Turn your ideas into market-ready solution. We help startups launch quickly
  <br />
  <span className="text-[#373d71]">
    and SMEs digitize efficiently with tailored digital solutions.
  </span>
</p>


            </div>
          </div>
        </section>

        {/* ---------------- WHAT MAKES US DIFFERENT ---------------- */}
        <section
          className="relative h-auto min-h-[750px] flex flex-col items-center overflow-hidden py-10 lg:pb-0"
          style={{
            background:
              "linear-gradient(180deg, #E6E9F5 0%, #F1F3FA 100%, #FFFFFF 100%)",
          }}
        >
          <h3 className="font-bold text-[26px] sm:text-[36px] md:text-[50px] leading-tight tracking-[2%] text-[#050363]">
            What Makes Us <span className="text-[#3a427d]">Different</span>
          </h3>

          <div className="mt-10 text-center relative">
           <span
  key={activeDiff}
  className="absolute left-[-20%] top-1/2 -translate-y-1/2 text-[128px] font-bold text-[#2f3cc8] opacity-20 select-none transition-all duration-300"
>
  {String(activeDiff + 1).padStart(2, )}
</span>


            <h4 className="text-3xl md:text-4xl font-bold text-[#050363]">
              {differentData[activeDiff].title}
            </h4>

            <p className="mt-4text-gray-00 text-sm sm:text-lg max-w-3xl">
              {differentData[activeDiff].desc}
            </p>
          </div>

          <div className="relative mt-24 w-full max-w-5xl h-auto lg:h-[450px] flex flex-col lg:block items-center">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-[760px] h-[760px] rounded-full border border-[#cfd5ff]" />

            <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[140px] w-full max-w-[340px] lg:max-w-none lg:w-[620px] h-[250px] lg:h-[360px] rounded-2xl lg:rounded-[20px] lg:rounded-t-[320px] overflow-hidden shadow-xl bg-white mb-8 lg:mb-0">
  <img
    src={differentData[activeDiff].image}
    alt="Different feature"
    className="w-full h-full object-cover transition-all duration-500"
  />
</div>


            <div className="relative w-full flex flex-wrap justify-center gap-6 lg:block lg:w-auto">
              {differentData.map((item, index) => {
              const Icon = item.icon;

              const positions = [
                "lg:left-[calc(50%-390px)] lg:top-[220px]",
                "lg:left-[calc(40%-160px)] lg:top-[60px]",
                "lg:right-[calc(40%-160px)] lg:top-[60px]",
                "lg:right-[calc(50%-390px)] lg:top-[220px]",
              ];

                return (
                  <button
                    key={index}
                    onClick={() => setActiveDiff(index)}
                    className={`relative lg:absolute mx-0 lg:mx-0 ${
                      positions[index]
                    } w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                      activeDiff === index
                        ? "bg-[#0B0F5C] text-white scale-110 ring-4 ring-[#dfe3ff]"
                        : "bg-white text-[#0B0F5C] hover:scale-105"
                    }`}
                  >
                    <Icon size={22} />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------- HOW WE WORK ---------------- */}
<section className="py-16 sm:py-20 px-4 bg-white">
  <h2 className="text-center font-bold text-[26px] sm:text-[36px] md:text-[50px] leading-tight tracking-wide text-[#050363] mb-10">
    How We Work
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left timeline */}
    <div className="relative pl-10">
      <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gray-200" />

      {[
        "Understand Your Vision",
        "Plan Smart",
        "Build and Iterate",
        "Launch and Grow",
      ].map((title, idx) => (
        <div
          key={idx}
          className="relative mb-10 cursor-pointer"
          onClick={() => setActiveStep(idx)}
        >
          <div
            className={`absolute -left-[34px] top-1 w-6 h-6 rounded-full border-4 border-white shadow-md transition-all ${
              activeStep === idx
                ? "bg-[#0B0F5C] scale-125"
                : "bg-gray-300"
            }`}
          />

          <h3
            className={`text-xl sm:text-2xl font-bold ${
              activeStep === idx ? "text-[#050363]" : "text-gray-400"
            }`}
          >
            <span className="block text-sm text-gray-400 font-normal mb-1">
              Stage {idx + 1}
            </span>
            {title}
          </h3>
        </div>
      ))}
    </div>

    {/* Right content card */}
    <div className="bg-[#F8F9FF] p-6 sm:p-8 rounded-3xl shadow-md">
      <img
        src={workImages[activeStep]}
        alt="Workspace"
        className="w-full h-[240px] sm:h-[300px] rounded-xl mb-6 object-cover transition-all duration-300"
      />

      <div className="flex gap-4 items-start">
        <div className="w-10 h-10 rounded-full border flex items-center justify-center text-[#0B0F5C]">
          {(() => {
            const Icon = workSteps[activeStep].icon;
            return <Icon size={18} />;
          })()}
        </div>

        <div>
          <h4 className="text-xl sm:text-2xl font-bold">
  {workSteps[activeStep].title}
</h4>


          <p className="text-gray-00 text-sm sm:text-lg max-w-3xl mx-auto">
            {workSteps[activeStep].desc}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* ---------------- CTA ---------------- */}
        <section className="text-center py-24">
          <h2 className="text-center font-bold text-[26px] sm:text-[36px] md:text-[50px] leading-tight tracking-wide text-[#050363] mb-10">
            Ready to turn your idea into reality?
          </h2>

          <p className="mt-4 text-gray-00 text-sm sm:text-lg max-w-3xl mx-auto">
  Let’s start building together
</p>


          <button className="inline-flex items-center gap-3 px-6 py-2 border-2 border-[#0B0F5C] rounded-full font-semibold text-[#0B0F5C] hover:bg-[#0B0F5C] hover:text-white transition-all group">
            Talk to Our Experts
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0B0F5C] text-white group-hover:bg-white group-hover:text-[#0B0F5C] transition-all">
              <FiArrowRight size={16} />
            </span>
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
