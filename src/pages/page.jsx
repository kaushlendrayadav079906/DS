
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Gradient from "../assets/images/Gradient.png";
import subtract from "../assets/images/Subtract.png";
import Navbar from "../components/Navbar.jsx";
export default function Home() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Timer to trigger exit animation and navigation
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        navigate("/home");
      }, 10); // Wait for exit animation
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <div className={`h-screen bg-white overflow-hidden font-sans transition-opacity duration-800 ease-in-out ${isExiting ? "opacity-0" : "opacity-100"}`}>
      <Navbar transparent={true} />
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#AFA3E8] via-[#DAD7F3] to-[#E5E9F9]">
        
        {/* Gradients / Mesh Background Effects */}
       <div
  className="absolute inset-0 z-0 pointer-events-none bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: `url(${Gradient})` }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#8B7CDE]/50 via-[#DAD7F3]/40 to-[#B5BFF8]/50"></div>
</div>


        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center px-4 pt-[140px] md:pt-[160px]">
          
          {/* Main Headline */}
          <h1 className="font-bevietnam font-bold text-[28px] md:text-[42px] lg:text-[48px] leading-[1.1] text-[#0B0F5C] tracking-tight max-w-[90%] md:max-w-[900px] mx-auto drop-shadow-sm">
            Fast MVPs & Scalable Applications for <br className="hidden md:block" />
            <span className="opacity-90">Startups and SMEs</span>
          </h1>

          {/* Subheadline */}
         <p className="
  mt-8
  font-bevietnam
  font-normal
  text-[24px]
  leading-[100%]
  tracking-[0]
  text-center
  text-[#050363]
">
   Turn your ideas into market-ready solution. We help startups launch
            
          </p>
          <p className="
  mt-2
  font-bevietnam
  font-normal
  text-[24px]
  leading-[100%]
  tracking-[0]
  text-center
  text-[#050363]
">
   
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
          <div className="mt-6 relative z-20 pb-4">
             <button className="
  relative
  flex items-center
  pl-5 pr-16 py-2
  rounded-full
  border-2 border-[#0B0F5C]
  text-[#0B0F5C]
  font-bold
  text-[22px]
  bg-white
">
  <span>Start Your Project</span>

  <span className="
    absolute right-[-2px]
    w-12 h-12
    rounded-full
    bg-[#0B0F5C]
    text-white
    flex items-center justify-center
    text-[22px]
    font-bold
  ">
    →
  </span>
</button>
          </div>

        </div>
      </section>
    </div>
  );
}