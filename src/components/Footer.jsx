import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/icons/Logo-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white font-sans overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Main Blue Container */}
        <div className="bg-[#DCE4F7] relative">

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
                  className="w-10 h-10 object-contain"
                  alt="logo"
                />
                <div>
                  <span className="block text-[#414141] font-bold text-lg sm:text-[26px] leading-tight">
                    DatenStrom-3AG
                  </span>
                  <span className="block text-[#414141] font-bold text-lg sm:text-[26px] leading-tight">
                    Solutions
                  </span>
                </div>
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

              <button className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full text-sm font-bold text-[#1F2A5A] border shadow-sm hover:shadow-md transition">
                Book Consultation
                <span className="bg-[#0A1140] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs">
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
            <div className="space-y-3 text-sm text-[#1F2A5A] w-full md:w-auto">

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

            <div className="flex gap-6 sm:gap-12">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </div>

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
