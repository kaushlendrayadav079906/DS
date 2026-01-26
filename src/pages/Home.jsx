import { useState } from "react";
import complexImg from "../assets/Complext section/Complex.jpg";
import Gradient from "../assets/images/Gradient.png";
import subtract from "../assets/images/Subtract.png";
// import subtract from "../assets/images/Subtract.png";
import ourImg2 from "../assets/Our Expertise/Our 1.png";
import ourImg1 from "../assets/Our Expertise/Our 2.png";
import partnerImg1 from "../assets/Partner/Partner1.png"; // ✅ REQUIRED
import partnerImg2 from "../assets/Partner/Partner2.jpg";
import partnerImg3 from "../assets/Partner/Partner3.jpg";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
const partnerData = [
  {
    title: "Speed & Efficiency",
    desc: "Launch your MVP or application quickly without compromising quality.",
    img: partnerImg1,
  },
  {
    title: "Cost-Effective Solutions",
    desc: "Get maximum value from your budget with solutions designed for impact.",
    img: partnerImg2,
  },
  {
    title: "German-Market Expertise",
        desc: "Benefit from our deep understanding of Germany's business landscape and regulations.",
    img: partnerImg3,
  },
];
const expertiseData = [
  {
    title: "MVP Development for Startups",
    desc: "Rapidly transform your idea into a working MVP. Test your concept, gather user feedback, and enter the market faster with a product designed for growth.",
    leftImg: ourImg2,
    rightImg: ourImg1,
  },
  {
    title: "App Development for SMEs",
    desc: "Build scalable, secure, and high-performance applications tailored for small and medium businesses to improve operations and customer engagement.",
    leftImg: ourImg1,
    rightImg: ourImg2,
  },
];
export default function Home() {
  const [lastIndex] = useState(expertiseData.length - 1);

  const [index, setIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);

  return (
<div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <Navbar transparent />
      {/* ================= HERO SECTION ================= */}
            <section className="relative w-full min-h-[738px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#AFA3E8] via-[#DAD7F3] to-[#E5E9F9]">
              
              {/* Gradients / Mesh Background Effects */}
             <div
        className="absolute inset-0 z-0 pointer-events-none bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Gradient})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B7CDE]/50 via-[#DAD7F3]/40 to-[#B5BFF8]/50"></div>
      </div>
      
      
             <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center px-4 xl:text-lg py-2.5 leading-[100%]">
           {/* Main Headline */}
                <h1
                className="font-bold question
  text-[48px] sm:text-[50px] xl:text-[50px]
  py-2.5
  leading-[1.3]
  max-w-[1242px]
  text-[#4A4A4A]"
                style={{ color: "#0B0F5C" }}
              >
                Fast MVPs & Scalable Applications for <br />
                Startups and SMEs
              </h1>
      
                {/* Subheadline */}
               <p className="
        
        question xl:text-lg py-2.5
  
  text-[100px] sm:text-[50px] 
  leading-[100%]
  max-w-[542px]
        text-[#050363]
      ">
         Turn your ideas into market-ready solution. We help startups launch
        quickly and SMEs digitize efficiently with tailored digital solutions.    
                </p>
                
      
                 
      
                {/* Image Container */}
                {/* Image Container */}
               <div className="mt-8 relative w-full h-[140px] md:h-[200px] lg:h-[240px] max-w-[70%] md:max-w-[1200px] rounded-[24px] overflow-hidden shadow-xl">
      
                   <img
                    src={subtract}
                    alt="Office Workspace"
                    className="w-full h-full object-cover"
                  />
                   {/* Overlay Gradient on Image */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F5C]/50 to-transparent pointer-events-none"></div>
                </div>
      
                {/* CTA Button */}
                <div className="mt-12 flex justify-center">
             <button className="
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
">
  <span>Start Your Project</span>

  <span className="
    absolute right-[-2px]
    w-9 h-9
    rounded-full
    bg-[#0B0F5C]
    text-white
    flex items-center justify-center
    text-lg
    font-bold
  ">
    →
  </span>
</button>
          </div>
      
              </div>
            </section>
      <main className="max-w-[1400px] mx-auto px-6">
        {/* ===== Complex Section ===== */}
        <section className=" bg-white">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-6">
            {/* Text */}
            <div className="text-center md:text-left">
             <h2 className="font-semibold text-[48px] py-1.5 leading-[1.3] text-[#050363] max-w-[780px]">
  <span className="whitespace-nowrap">
    Bringing Ideas to Life Can Be
  </span>
  <br />
  Complex
</h2>


             <p className="mt-8 question xl:text-lg py-2.5
  
  text-[24px]
  leading-[100%]
  max-w-[742px]
  text-[#4A4A4A]
 ">
  Startups often face tight timelines and limited budgets when
  building their first MVP, while SMEs struggle to digitize
  operations and create custom applications. Delays, unclear
  priorities, and technical hurdles can slow growth and reduce
  market impact.
</p>

            </div>

            {/* Image */}
            <div className=" mt-12 flex justify-center md:justify-end">
              <img
                src={complexImg}
                alt="Dashboard"
                className=" mt-12 w-[414px] h-[323px] object-cover rounded-[20px] shadow-md"
              />
            </div>
          </div>
        </section>

        {/* ================= OUR EXPERTISE ================= */}
        <section className="mt-8 py-24 bg-white">

          <div className="max-w-[1552px] ml-auto mr-0 text-center px-6">
            <h2 className="font-semibold text-[40px] leading-[100%] text-[#050363]">
              Our Expertise
            </h2>
            <p className="mt-8 question xl:text-lg py-2.5
  
  text-[24px]
  leading-[100%]
  
  text-[#4A4A4A]">
  Datenstrom-3AG simplifies the journey from concept to launch. Our expert team delivers <br />
  fast, cost-effective, and scalable solutions that meet your business goals.
</p>

            
            <div className="mt-8 inline-flex items-center rounded-full border border-[#050363] bg-white p-[3px] w-[700px] h-[50px]">
  <button
    onClick={() => setIndex(0)}
    className={`flex-1 h-full text-[24px] rounded-full font-semibold transition ${
      index === 0
        ? "bg-[#0B0F5C] text-white "
        :  "bg-white text-[#000000]"

    }`}
  >
    MVP Development for Startups
  </button>

  <button
    onClick={() => setIndex(1)}
    className={`flex-1 h-full text-[24px] rounded-full font-semibold transition ${
      index === 1
        ? "bg-[#0B0F5C] text-white shadow"
        : "bg-white text-[#000000]"

    }`}
  >
    App Development for SMEs
  </button>
</div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 items-stretch gap-8 lg:gap-16">
             <div className=" mt-8 flex justify-center lg:justify-end">
  <div className="border-[3px] border-[#8E95D9] w-[425px] h-[425px] overflow-hidden rounded-[20px]">
    <img
      src={expertiseData[index].leftImg}
      alt="left"
      className="w-full h-full object-cover"
    />
  </div>
</div>

              <div className=" mt-8 text-center lg:text-left flex flex-col items-center lg:items-start text-left">
                <h3 className="font-semibold text-[40px] leading-[100%] text-[#000000] max-w-[454px]">
                  {expertiseData[index].title}
                </h3>
                <p className="mt-12 question xl:text-lg py-2.5
  text-[35px]
  leading-[100%]
  max-w-[742px]
  font-semibold
  text-[#000000]
  mx-auto lg:mx-0">
                  {expertiseData[index].desc}
                </p>
                <button className="  lg:mt-[110px]
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
">
  <span>See More</span>

  <span className="
    absolute right-[-2px]
    w-9 h-9
    rounded-full
    bg-[#0B0F5C]
    text-white
    flex items-center justify-center
    text-lg
    font-bold
  ">
    →
  </span>
</button>
              </div>
             <div className="mt-8 flex justify-center lg:justify-start">
  <div className="border-[3px] border-[#8E95D9] w-[425px] h-[425px] overflow-hidden rounded-[20px]">
    <img
      src={expertiseData[index].rightImg}
      alt="right"
      className="w-full h-full object-cover"
    />
  </div>
</div>

            </div>
           



  
          </div>
        </section>
        {/* ================= WHY PARTNER ================= */}
        <section className="mt-16 text-center">
          <h2 className="font-semibold text-[40px] leading-[100%] text-[#050363]">
            Why Partner with Us
          </h2>

          <p
  className="mt-5 mx-auto text-center xl:text-lg py-2.5
  text-[24px] leading-[100%]
  text-[#4A4A4A]
  max-w-[742px]"
>
  Provide a general summary of the services you provide, highlighting
  key features and benefits for potential clients.
</p>

           

          <div className="mt-11 relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={partnerData[partnerIndex].img}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              alt="partner background"
            />

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
              {partnerData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPartnerIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    partnerIndex === idx
                      ? "bg-[#0B0F5C] scale-125"
                      : "bg-white/80 hover:bg-white"
                  }`}
                />
              ))}
            </div>

            {/* Overlay Card */}
            <div
              className="
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                bg-[#DEE6FA]
                w-[1200px] h-[284px]
                rounded px-6 py-8 md:px-10 md:py-10
                flex flex-col md:flex-row items-center
                gap-6 md:gap-12
                shadow-2xl
              "
            >
              {/* 1. Title */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-[24px] md:text-[32px] leading-[110%] text-[#0B0F5C]">
                  {partnerData[partnerIndex].title}
                </h3>
              </div>

              {/* 2. Center Image */}
              <div className="flex-shrink-0 w-[160px] h-[100px] md:w-[200px] md:h-[130px] shadow-lg overflow-hidden rounded">
                <img
                  src={partnerData[partnerIndex].img}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>

              {/* 3. Description & Navigation */}
              <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                <p className="
  font-bevietnam
  text-[24px]
  py-2.5
  leading-[100%]
  text-[#4A4A4A]
  max-w-[942px]
">
  {partnerData[partnerIndex].desc}
</p>


                <div className="flex justify-center md:justify-start gap-3 mt-2">
                  <button
                    onClick={() =>
                      setPartnerIndex((prev) => (prev === 0 ? 0 : prev - 1))
                    }
                    disabled={partnerIndex === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                      partnerIndex === 0
                        ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                        : "bg-white text-[#0B0F5C] shadow hover:bg-gray-50"
                    }`}
                  >
                    ←
                  </button>

                  <button
                    onClick={() =>
                      setPartnerIndex((prev) =>
                        prev === partnerData.length - 1 ? prev : prev + 1
                      )
                    }
                    disabled={partnerIndex === partnerData.length - 1}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                      partnerIndex === partnerData.length - 1
                        ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                        : "bg-white text-[#0B0F5C] shadow hover:bg-gray-50"
                    }`}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-20 text-center flex flex-col items-center">
          <h2 className="font-semibold text-[40px] leading-[100%] text-[#000000] max-w-[832px]">
            Let’s Build Your Digital Future Together
          </h2>

          <p className="mt-12 question xl:text-lg py-2.5
  
  text-[24px]
  leading-[100%]
  
  text-[#4A4A4A]
  max-w-[742px]">
            Whether you’re an early-stage startup testing your first idea or an
            SME looking to digitize operations, Datenstrom-3AG provides the technology, strategy, and guidance to make it happen.
          </p>


          <div className="mt-14 flex justify-center">
             <button className="
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
">
  <span>Start Your Project</span>

  <span className="
    absolute right-[-2px]
    w-9 h-9
    rounded-full
    bg-[#0B0F5C]
    text-white
    flex items-center justify-center
    text-lg
    font-bold
  ">
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
