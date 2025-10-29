import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Car } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary">
      <div className="text-center animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-sm">
            <Car className="h-20 w-20 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
          RideWise
        </h1>
        <p className="text-xl text-white/90 font-light">
          Smart Rides, Smart Choices
        </p>
        <div className="mt-12">
          <div className="w-16 h-1 bg-white/30 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-white rounded-full animate-progress" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
