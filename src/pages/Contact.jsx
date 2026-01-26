import group69 from "../assets/Group/Group 69.png";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
 
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-20">

        {/* Header */}
        <section className="mt-[40px] text-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#050363]">
            Let’s Build Your <span className="text-[#4f4e83] leading-[1.8]">Digital</span>
            <br /> Vision Together
          </h1>

          <p className="mt-6 sm:mt-8
    font-bevietnam
    font-semibold
    text-[20px]
    leading-[1.4]
    tracking-[0]
    text-[#4A4A4A]
    text-center
    max-w-[690px]
    mx-auto">
            Have an idea for your startup or want to digitize your SME operations?
            Our team of experts is ready to guide you from concept to launch.
            Reach out today, and let’s turn your vision into a market-ready product.
          </p>
        </section>

        {/* Content */}
        {/* Content */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch justify-items-center">

          {/* LEFT COLUMN */}
          <div className="w-full max-w-[420px] lg:ml-auto">

            <h2 className="font-bold text-2xl sm:text-3xl text-[#000000] mb-8 text-center lg:text-left">
              Contact<br />Information
            </h2>

            <div className="space-y-4">

              {/* Email */}
              <InfoCard title="Email" value="info@datenstrom-3ag.com" isLink>
                <path d="M3 6h18v12H3z" />
                <path d="M3 7l9 6 9-6" />
              </InfoCard>

              {/* Hours */}
              <InfoCard title="Working Hours" value="Monday – Friday · 9:00 – 18:00">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </InfoCard>

              {/* Address */}
              <InfoCard title="Our Address" value="Kolonnenstr. 8, 10827 Berlin">
                <path d="M12 3c4 0 7 3 7 7 0 5-7 11-7 11S5 15 5 10c0-4 3-7 7-7z" />
                <circle cx="12" cy="10" r="2" />
              </InfoCard>

            </div>

            {/* Image */}
            <div className="mt-7">
              <img
                src={group69}
                alt="Contact visual"
                style={{ aspectRatio: '1 / 1.1' }}
                className="rounded-xl w-full object-cover border border-[#0B0F5C]"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="w-full max-w-[500px] lg:mr-auto rounded-2xl border border-[#0B0F5C] hover:border-[#050363] transition-all duration-200 shadow-lg p-6 sm:p-8 bg-white">

            <div className="space-y-4">
              {["Name*", "Email*", "Phone Number", "Company Name (optional)"].map((label) => (
                <div key={label}>
                  <label className="block text-sm font-bold text-black mb-1">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-[#0B0F5C] px-3 py-3 text-black outline-none focus:border-[#050363]"
                  />
                </div>
              ))}

              <div>
                <p className="text-sm font-bold text-black mb-2">Service interested*</p>

                <div className="space-y-2 pl-[5%] mt-8">
                  <label className="flex gap-3 items-center text-sm font-semibold text-black cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="radio" 
                        name="service" 
                        defaultChecked 
                        className="peer appearance-none w-5 h-5 rounded-full border border-gray-400 checked:border-[#050363] transition-all" 
                      />
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-[#050363] scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span>MVP</span>
                  </label>

                  <label className="flex gap-3 items-center text-sm font-semibold text-black cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="radio" 
                        name="service" 
                        className="peer appearance-none w-5 h-5 rounded-full border border-gray-400 checked:border-[#050363] transition-all" 
                      />
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-[#050363] scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span>Application Development</span>
                  </label>
                </div>
              </div>

              <div className="pl-[5%] mt-8">
                <label className="mt-12 block text-sm font-bold text-black mb-1">Message</label>
                <textarea className="w-full rounded-lg border border-[#0B0F5C] px-3 py-3 min-h-[110px] text-black outline-none focus:border-[#050363]" />
              </div>

            </div>

            <button className="mt-12 mx-auto
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
  <span>Send Message</span>

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

          </form>

        </section>

        {/* Footer text */}
        <section className="mt-24 mb-24">
          <div className="max-w-[780px] mx-auto text-center px-4">
            <p className="mt-8 text-black mt-6 sm:mt-8
    font-bevietnam
    font-semibold
    text-[20px]
    leading-[1.5]
    tracking-[0]
    text-[#4A4A4A]
    text-center
    max-w-[990px]
    mx-auto">
              Whether you’re building your first MVP or planning a custom application for
              your SME, we’re here to provide the expertise, guidance, and solutions you
              need to succeed. Let’s start building your future today.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

/* Small reusable component */
function InfoCard({ title, value, children, isLink }) {
  return (
    <div className="flex items-center gap-4 p-4 border border-[#0B0F5C] hover:border-[#050363] transition-all duration-300 rounded-2xl shadow-sm bg-white hover:shadow-md cursor-pointer">
      <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-b from-[#1a1873] to-[#050363] flex items-center justify-center text-white shadow-inner">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          {children}
        </svg>
      </div>
      <div>
        <p className="text-sm font-medium text-black mb-0.5">{title}</p>
        {isLink ? (
          <a
            href={`mailto:${value}`}
            className="text-black text-sm font-bold underline underline-offset-2 hover:text-blue-900"
          >
            {value}
          </a>
        ) : (
          <p className="text-black text-sm font-bold">{value}</p>
        )}
      </div>
    </div>
  );
}
