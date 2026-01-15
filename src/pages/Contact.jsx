import group69 from "../assets/Group/Group 69.png";
import logo from "../assets/icons/Logo-removebg-preview.png";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-20">
        {/* Header */}
        <section className="mt-16 text-center">
          <h1 className="font-extrabold text-4xl md:text-5xl text-[#050363]">
            Let’s Build Your <span className="text-[#4f4e83]">Digital</span>
            <br /> Vision Together
          </h1>

          <p className="mt-4  text-gray-800 text-lg max-w-3xl mx-auto">
            Have an idea for your startup or want to digitize your SME operations?
            Our team of experts is ready to guide you from concept to launch.
            Reach out today, and let’s turn your vision into a market‑ready product.
          </p>
        </section>

        {/* Content */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

  {/* LEFT COLUMN */}
  <div className="max-w-[520px]">

    <h2 className="font-bold text-[32px] md:text-[36px] text-[#050363] mb-8">
      Contact<br />Information
    </h2>

    <div className="space-y-5">

      {/* Email */}
      <div className="flex items-center gap-4 p-4 border border-indigo-200 rounded-xl shadow-sm">
        <div className="w-11 h-11 rounded-full bg-indigo-900 flex items-center justify-center text-white">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18v12H3z" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-sm">Email</p>
          <p className="text-indigo-900 text-sm">info@datenstrom-3ag.com</p>
        </div>
      </div>

      {/* Hours */}
      <div className="flex items-center gap-4 p-4 border border-indigo-200 rounded-xl shadow-sm">
        <div className="w-11 h-11 rounded-full bg-indigo-900 flex items-center justify-center text-white">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-sm">Working Hours</p>
          <p className="text-gray-600 text-sm">Monday – Friday · 9:00 – 18:00</p>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-center gap-4 p-4 border border-indigo-200 rounded-xl shadow-sm">
        <div className="w-11 h-11 rounded-full bg-indigo-900 flex items-center justify-center text-white">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3c4 0 7 3 7 7 0 5-7 11-7 11S5 15 5 10c0-4 3-7 7-7z" />
            <circle cx="12" cy="10" r="2" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-sm">Our Address</p>
          <p className="text-gray-600 text-sm">Kolonnenstr. 8, 10827 Berlin</p>
        </div>
      </div>

    </div>

    {/* Image */}
    <div className="mt-8">
      <img
        src={group69}
        alt="Contact visual"
        className="rounded-xl w-full h-[240px] object-cover border border-indigo-200"
      />
    </div>
  </div>

  {/* RIGHT FORM */}
  <form className="max-w-[520px] w-full rounded-2xl border border-indigo-200 shadow-lg p-8">

    <div className="space-y-4">

      {[
        "Name*",
        "Email*",
        "Phone Number",
        "Company Name (optional)",
      ].map((label) => (
        <div key={label}>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            {label}
          </label>
          <input className="w-full rounded-lg border border-indigo-200 px-3 py-2 outline-none focus:border-indigo-900" />
        </div>
      ))}

      <div>
        <p className="text-sm font-semibold mb-2">Service interested*</p>
        <label className="flex gap-2 items-center text-sm text-gray-600">
          <input type="radio" name="service" defaultChecked className="accent-indigo-900" />
          MVP
        </label>
        <label className="flex gap-2 items-center mt-2 text-sm text-gray-600">
          <input type="radio" name="service" className="accent-indigo-900" />
          Application Development
        </label>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
        <textarea className="w-full rounded-lg border border-indigo-200 px-3 py-2 min-h-[110px] outline-none focus:border-indigo-900" />
      </div>
    </div>

    <button
      type="button"
      className="mt-6 flex items-center gap-2 rounded-full bg-indigo-900 text-white px-7 py-3 text-sm font-semibold hover:bg-indigo-800 transition"
    >
      Send Message →
    </button>

  </form>

</section>


        {/* Footer text */}
        <section className="mt-24 mb-24">
  <div className="max-w-[780px] mx-auto text-center px-4">
    <p className=" text-gray-800 text-lg max-w-3xl mx-auto">
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
