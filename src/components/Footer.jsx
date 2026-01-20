import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/icons/logo1.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white font-sans overflow-x-hidden">
      <div className="max-w-[1500px] ">

        {/* Main Blue Container */}
        <div className="relative w-full bg-[#DCE4F7]">


          {/* TOP SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-start">

            {/* LEFT: Logo Area */}
            <div
              className="bg-white pl-6 sm:pl-10 pr-10 sm:pr-24 py-5 w-full md:w-auto"
              style={{
                clipPath:
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
                    : "none",
              }}
            >
              <div className="flex items-center gap-3 justify-center md:justify-start">
               <img
                 src={logo}
                 alt="DatenStrom-3AG Solutions Logo"
                 className="h-[48px] w-auto sm:h-[52px] md:h-[56px]"
               />
              </div>
            </div>

            {/* RIGHT: Contact Heading */}
            <div className="pt-6 md:pt-10 px-6 md:pr-12 w-full md:w-auto text-center md:text-right">
              <h3 className="text-[#1F2A5A] text-base sm:text-lg font-extrabold uppercase tracking-wider">
                Contact
              </h3>
            </div>
          </div>

          {/* MIDDLE SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 pb-10 mt-6 gap-10">

            {/* Button + Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6">

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
  <span>Book Consultation</span>

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

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#3B4BB1] to-[#1F2A5A] text-white flex items-center justify-center shadow-lg"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#3B4BB1] to-[#1F2A5A] text-white flex items-center justify-center shadow-lg"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-[#050363] w-full md:w-auto">

              <InfoRow label="Email" value="info@datenstrom-3ag.com" />
              <InfoRow label="Working Hours" value="Monday - Friday 9:00 - 18:00" />
              <InfoRow label="Our Address" value="Kolonnenstr. 8, 10827 Berlin" />

            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="px-6 sm:px-10 py-6 border-t border-[#1F2A5A]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-[#1F2A5A]">

            <div className="text-center md:text-left text-black opacity-90">
              © 2025 datenstrom-3ag.com . All Rights Reserved
            </div>

            <a href="#" className="hover:underline text-black">Privacy Policy</a>

            <a href="#" className="hover:underline text-black">Terms and conditions</a>

          </div>

        </div>
      </div>
    </footer>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-1 sm:gap-6">
      <span className="opacity-70 font-medium">{label}</span>
      <span className="font-bold sm:text-right sm:w-[240px] break-words">
        {value}
      </span>
    </div>
  );
}
