import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/Logo-removebg-preview.png";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      tabIndex={0}
      className="min-h-screen flex items-center justify-center cursor-pointer
      bg-gradient-to-br from-[#7d85c1] via-[#d9d9dc] to-[#5d6597]"
      onClick={() => navigate("/home")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") navigate("/home");
      }}
      title="Click anywhere to continue"
    >
      {/* Optional grid overlay */}
      <div className="grid-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 flex items-center gap-4 px-6">
        {/* Logo */}
        <img
          src={logo}
          alt="DatenStrom-3AG Solutions Logo"
          className="w-16 sm:w-20 md:w-24 drop-shadow-lg"
        />

        {/* Company Name */}
        <div className="text-left">
          <p className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-[#3a3a3a] leading-tight">
            DatenStrom-3AG
          </p>
          <p className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#3a3a3a] leading-tight">
            Solutions
          </p>
        </div>
      </div>
    </div>
  );
}
