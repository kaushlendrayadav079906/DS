import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import videoElement from "../assets/icons/Logo.mp4"; // Importing the video
import logo from "../assets/icons/logo1.png";

export default function Splash() {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasEntered, setHasEntered] = useState(false); // For entrance animation
  const videoRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animation on mount
    setHasEntered(true);
  }, []);

  const handleInteraction = () => {
    if (isVideoPlaying) return; // Prevent multiple clicks
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    // Navigate after video finishes
    navigate("/page");
  };

  useEffect(() => {
    if (isVideoPlaying && videoRef.current) {
        videoRef.current.play().catch(e => console.error("Video play failed:", e));
    }
  }, [isVideoPlaying]);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleInteraction}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleInteraction();
      }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#7d85c1] via-[#d9d9dc] to-[#5d6597] overflow-hidden cursor-pointer"
    >
      {/* Optional grid overlay */}
      <div className="grid-overlay absolute inset-0 pointer-events-none" />

      {!isVideoPlaying && (
        <div 
            className={`relative z-10 flex items-center justify-center transition-all duration-1000 ease-out 
            ${hasEntered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
        >
            <div 
                title="Click to enter"
            >
                <img
                src={logo}
                alt="DatenStrom-3AG Solutions Logo"
                className="w-80 sm:w-50 md:w-85 lg:w-45 h-auto drop-shadow-lg transition-transform hover:scale-105 active:scale-95 duration-300 pointer-events-none" 
                />
            </div>
        </div>
      )}

      {isVideoPlaying && (
        <video
            ref={videoRef}
            src={videoElement}
            className="fixed inset-0 w-full h-full object-cover z-50"
            muted={false} 
            autoPlay
            onEnded={handleVideoEnd}
        />
      )}
    </div>
  );
}
