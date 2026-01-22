import { useState } from "react";
import { FiArrowRight, FiBox, FiSearch, FiTarget, FiZap } from "react-icons/fi";
import Gradient from "../assets/images/Gradient.png";
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
    <div className="min-h-screen flex flex-col text-[#0B0F5C] bg-[#EEF1FB]">
      <Navbar transparent />

      <main className="flex-1 w-full overflow-hidden">
       {/* ---------------- OUR PURPOSE ---------------- */}
<section className="relative mt-[-25px] w-full min-h-screen flex items-start pt-[200px] bg-[#EEF1FB] overflow-hidden">
  {/* Background Gradient Image */}
  <img
    src={Gradient}
    alt="Background Gradient"
    className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
  />

  {/* Main Content */}
  <div className="relative z-10 max-w-[1680px] mx-auto px-6 xl:px-16 w-full">

    {/* Banner Image Container */}
    <div className="relative w-[1320px] mx-auto h-[45vh] max-h-[520px] rounded-[32px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
        src={purposeImg}
        alt="Our Purpose"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative h-full w-full flex flex-col justify-between">

        {/* Title */}
        <div className="absolute bottom-12 left-12 lg:left-24 z-20">
          <h2 className="text-white text-[48px] lg:text-[68px] font-bold leading-[1] tracking-tight">
            Our <br /> Purpose
          </h2>
        </div>

        {/* White Cutout / Description */}
        <div className="absolute bottom-0 right-0 w-full lg:w-[800px] z-20">
          <div className="bg-[#EEF1FB] pt-8 pl-10 pr-6 pb-6 rounded-none lg:rounded-tl-[60px]">
            <p
  className="font-bevietnam font-[400] text-[24px] leading-[24px] tracking-[0]
             text-[#050363] max-w-[788px]
             overflow-hidden text-ellipsis
             [display:-webkit-box]
             [-webkit-line-clamp:2]
             [-webkit-box-orient:vertical]"
>
  We speed the journey from idea to execution, delivering fast MVPs and custom apps without the usual tech headaches.
</p>

          </div>
        </div>
      </div>

      {/* Arrow Button */}
      <button className="absolute right-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-[#050363] hover:scale-110 transition-transform z-30">
        <FiArrowRight size={26} />
      </button>
    </div>

    {/* Bottom Text Section */}
    <div className="mt-6 ml-[4%]">

      <h2 className="font-semibold text-[48px] leading-[100%] text-[#050363] max-w-[780px]">
        <span className="whitespace-nowrap">
          Turning Ideas into Digital Reality for Startups
        </span>
        <br />
        and SMEs
      </h2>

      <p className="mt-6 font-bevietnam font-[400] text-[24px] leading-[24px] tracking-[0] text-[#050363] max-w-[922px]">
  Turn your ideas into market-ready solution. We help startups launch quickly and SMEs digitize efficiently with tailored digital solutions.
</p>


    </div>

  </div>
</section>


        {/* ---------------- WHAT MAKES US DIFFERENT ---------------- */}
<section className="relative h-auto min-h-[750px] flex flex-col items-center overflow-hidden py-10 lg:pb-0 bg-[#EEF1FB]">

  {/* Background Gradient Image */}
  <img
    src={Gradient}
    alt="Background Gradient"
    className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
  />

  {/* Content Wrapper */}
  <div className="relative z-10 w-full flex flex-col items-center">

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

      <p className="mt-4 text-sm sm:text-lg max-w-3xl">
        {differentData[activeDiff].desc}
      </p>
    </div>

    <div className="relative mt-20 w-full max-w-[900px] mx-auto h-auto lg:h-[450px] flex flex-col lg:block items-center">

      {/* Arc Border - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 rounded-t-full border-[1.5px] border-[#0B0F5C] opacity-20" />
<div className="hidden lg:block absolute inset-0 rounded-t-full border-t-[1.5px] border-x-[1.5px] border-b-0 border-[#0B0F5C]" />

      {/* Center Image - Dome Shape */}
      <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 
                      w-[400px] h-[230px] lg:w-[720px] lg:h-[400px] 
                      rounded-t-[170px] lg:rounded-t-[350px] 
                      overflow-hidden shadow-2xl z-10 bg-white mb-8 lg:mb-0">
        <img
          src={differentData[activeDiff].image}
          alt=""
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-4 lg:block">
        {differentData.map((item, index) => {
          const Icon = item.icon;
          // Positions adjusted for w-16 (64px) centered on R=450 arc
          const positions = [
            "lg:left-[-5px] lg:top-[264px]",
            "lg:left-[228px] lg:top-[10px]",
            "lg:right-[228px] lg:top-[10px]",
            "lg:right-[-5px] lg:top-[264px]",
          ];

          return (
            <button
              key={index}
              onClick={() => setActiveDiff(index)}
              className={`relative lg:absolute z-20 
                          w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border-2
                          ${
                            activeDiff === index
                              ? "bg-[#0B0F5C] text-white border-[#0B0F5C] scale-110"
                              : "bg-white text-[#0B0F5C] border-transparent hover:scale-105"
                          } ${positions[index]}`}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </div>
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
    <div className="bg-[#F8F9FF] p-4 sm:p-6 rounded-3xl shadow-md md:-ml-6">

      <img
        src={workImages[activeStep]}
        alt="Workspace"
        className="w-full h-[220px] sm:h-[280px] rounded-xl mb-4 object-cover transition-all duration-300"
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

       <section className="text-center py-24 bg-white">


  <h2 className="font-bevietnam font-medium text-[40px] leading-[100%] text-black mb-4">
    Ready to turn your idea into reality?
  </h2>

  <p className="mt-14 font-bevietnam font-medium text-[24px] leading-[100%] text-black mb-10">
    Let’s start building together
  </p>
<div className="flex justify-center">
  <button
    className="
      relative
      flex items-center
      pl-5 pr-12 py-2
      rounded-full
      border border-[#0B0F5C]
      text-[#0B0F5C]
      font-bold
      text-sm
      bg-white
      shadow-sm
      hover:shadow-md transition-all
    "
  >
    <span>Start Your Project</span>

    <span
      className="
        absolute right-[-2px]
        w-9 h-9
        rounded-full
        bg-[#0B0F5C]
        text-white
        flex items-center justify-center
        text-lg
        font-bold
      "
    >
      →
    </span>
  </button>
</div>


</section>

      </main>

      <Footer />
    </div>
  );
}
