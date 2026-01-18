import subtract from "../assets/images/Subtract.png";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import complexImg from "../assets/Complext section/Complex.jpg";
import ourImg1 from "../assets/Our Expertise/Our 2.png";
import ourImg2 from "../assets/Our Expertise/Our 1.png";
import partnerImg from "../assets/Partner/unsplash_vZJdYl5JVXY.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative mx-auto flex justify-center bg-gradient-to-b from-[#EEF1FB] to-[#E9EDFA] overflow-hidden"
        style={{ width: "calc(100% - 12px)" }}
      >
        <div
          className="relative"
          style={{
            width: "min(1728px, 100%)",
            height: "1188px",
            top: "5px",
            left: "-6px",
          }}
        >
          <div
            className="absolute inset-0 z-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(#E0E7FF 1px, transparent 1px), linear-gradient(90deg, #E0E7FF 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-[120px] pb-32">
            <div className="text-center max-w-5xl mx-auto">
              <h1
                className="font-bold text-[50px] leading-[110%] text-[#050363]"
                style={{ color: "#0B0F5C" }}
              >
                Fast MVPs & Scalable Applications for <br />
                Startups and SMEs
              </h1>
              <p
                className="mt-4 font-bevietnam font-normal text-[20px] leading-[100%] tracking-[0] text-center max-w-4xl mx-auto"
                style={{ color: "#4F5B8C" }}
              >
                Turn your ideas into market-ready solution. We help startups
                launch quickly and SMEs digitize efficiently with tailored
                digital solutions.
              </p>
            </div>

            <div className="mt-16 flex flex-col items-center">
              <div className="relative w-full max-w-6xl rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src={subtract}
                  alt="office"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />
              </div>

              <div className="mt-12 flex flex-col items-center gap-6">
                <div className="w-8 h-8 rounded-full bg-[#0B0F5C]" />
                <button className="bg-white px-10 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition">
                  Start Your Project →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-6">
        {/* ===== Complex Section ===== */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-6">
            {/* Text */}
            <div className="text-center md:text-left">
              <h2 className="font-bold text-[40px] leading-[110%] text-[#050363]">
                Bringing Ideas to Life Can Be
                <br />
                Complex
              </h2>

              <p className="mt-6 max-w-[560px] text-gray-800 text-lg mx-auto md:mx-0">
                Startups often face tight timelines and limited budgets when
                building their first MVP, while SMEs struggle to digitize
                operations and create custom applications. Delays, unclear
                priorities, and technical hurdles can slow growth and reduce
                market impact.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={complexImg}
                alt="Dashboard"
                className="w-[480px] h-[280px] object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* ================= OUR EXPERTISE ================= */}
        <section className=" bg-white">
          <div className="max-w-[1552px] ml-auto mr-0 text-center px-6">
            {/* Title */}
            <h2 className="font-bold text-[40px] leading-[110%] text-[#050363]">
              Our Expertise
            </h2>

            <p className="mt-3  text-gray-800 text-lg max-w-3xl mx-auto">
              Datenstrom-3AG simplifies the journey from concept to launch. Our
              expert team delivers fast, cost-effective, and scalable solutions
              that meet your business goals.
            </p>

            {/* Tabs */}
            <div className="mt-6 inline-flex items-center rounded-full border border-[#8B93FF] bg-white p-[3px] shadow">
              <button className="px-6 py-2 text-[13px] rounded-full bg-[#0B0F5C] text-white font-medium shadow">
                MVP Development for Startups
              </button>

              <button className="px-6 py-2 text-[13px] rounded-full text-[#0B0F5C] font-medium">
                App Development for SMEs
              </button>
            </div>

            {/* Content Row */}
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

  {/* Left Image */}
  <div className="flex justify-center lg:justify-end">
    <div className="border-[3px] border-[#8E95D9] p-1">
      <img
        src={ourImg1}
        alt="MVP workspace"
        className="w-[260px] sm:w-[300px] h-[260px] sm:h-[300px] object-cover"
      />
    </div>
  </div>

  {/* Center Text */}
  <div className="text-center lg:text-left pt-4">
    <h3 className="font-bold text-[32px] sm:text-[40px] leading-[110%] text-[#050363]">
      MVP Development for
      <br />
      Startups
    </h3>

    <p className="mt-4 text-gray-800 text-lg max-w-xl mx-auto lg:mx-0">
      Rapidly transform your idea into a working MVP. Test your concept, gather user feedback, and enter the market faster with a product designed for growth.
    </p>

    <button className="mt-8 inline-flex items-center gap-3 border border-[#0B0F5C] px-5 py-2 rounded-full text-[13px] font-medium text-[#0B0F5C]">
      See More
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0B0F5C] text-white text-xs">
        →
      </span>
    </button>
  </div>

  {/* Right Image */}
  <div className="flex justify-center lg:justify-start">
    <div className="border-[3px] border-[#8E95D9] p-1">
      <img
        src={ourImg2}
        alt="Mobile analytics app"
        className="w-[260px] sm:w-[300px] h-[260px] sm:h-[300px] object-cover"
      />
    </div>
  </div>
</div>

{/* Arrows */}
<div className="mt-10 flex justify-center lg:justify-start gap-4">
  <button className="w-11 h-11 rounded-full bg-[#EEF1FF] text-[#0B0F5C] shadow flex items-center justify-center">
    ←
  </button>
  <button className="w-11 h-11 rounded-full bg-[#EEF1FF] text-[#0B0F5C] shadow flex items-center justify-center">
    →
  </button>
</div>
</div>
        </section>

        {/* ================= WHY PARTNER ================= */}
<section className="py-10 px-4 text-center">
  <h2 className="font-bold text-[26px] sm:text-[32px] md:text-[40px] leading-[110%] text-[#050363]">
    Why Partner with Us
  </h2>

  <p className="mt-2 text-gray-800 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
    Provide a general summary of the services you provide, highlighting
    key features and benefits.
  </p>

  <div className="mt-10 relative rounded-xl overflow-hidden shadow-lg">
    <img
      src={partnerImg}
      className="w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover"
      alt="partner"
    />

    {/* Overlay Card */}
    <div
      className="
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        bg-[#DEE6FA]
        w-[92%] sm:w-[520px] md:w-[760px]
        min-h-[160px]
        rounded-md
        flex flex-col sm:flex-row
        items-center
        px-4 sm:px-8
        py-4
        gap-4 sm:gap-8
      "
    >
      <h3 className="font-bold text-[22px] sm:text-[28px] md:text-[40px] leading-[110%] text-[#050363] text-center sm:text-left">
        Speed & Efficiency
      </h3>

      <div className="w-[60px] h-[80px] sm:w-[85px] sm:h-[110px] overflow-hidden rounded">
        <img src={partnerImg} className="w-full h-full object-cover" alt="" />
      </div>

      <div className="flex-1 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
        Launch your MVP or application quickly without compromising quality.

        <div className="flex justify-center sm:justify-start gap-3 mt-4">
          <button className="w-9 h-9 rounded-full bg-white border">←</button>
          <button className="w-9 h-9 rounded-full bg-white border">→</button>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* ================= FINAL CTA ================= */}
        <section className="py-28 text-center">
          <h2 className="font-bold text-[40px] leading-[110%] text-[#050363]">
            Let’s Build Your Digital Future Together
          </h2>

          <p className="mt-4  text-gray-800 text-lg max-w-3xl mx-auto">
            Whether you’re an early-stage startup testing your first idea or an
            SME looking to digitize operations, Datenstrom-3AG provides the
            technology, strategy, and guidance to make it happen.
          </p>

          <div className="mt-8 flex justify-center">
            <button className="flex items-center gap-3 border px-6 py-2 rounded-full">
              Start Your Project
              <span className="w-7 h-7 rounded-full bg-[#0B0F5C] text-white flex items-center justify-center">
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
