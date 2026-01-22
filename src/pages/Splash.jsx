import { useNavigate } from "react-router-dom";
import videoElement from "../assets/icons/Logo.mp4"; // Importing the video

export default function Splash() {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/home");
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-50 overflow-hidden">
      <video
        src={videoElement}
        className="w-full h-full object-cover"
        autoPlay
        muted 
        playsInline
        onEnded={handleVideoEnd}
      />
    </div>
  );
}
