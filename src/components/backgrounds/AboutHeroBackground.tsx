
import React from "react";
import { ShieldCheck, HeartPulse, Award, Stethoscope, Users, Microscope } from "lucide-react";

const AboutHeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background overlays */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-genesis-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-genesis-lightPurple/5 rounded-full blur-3xl"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoMnY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      {/* Decorative medical icons */}
      <div className="absolute top-[15%] left-[10%] text-genesis-purple/10 transform -rotate-12">
        <HeartPulse size={120} strokeWidth={1} />
      </div>
      <div className="absolute bottom-[10%] right-[15%] text-genesis-purple/10 transform rotate-12">
        <Stethoscope size={100} strokeWidth={1} />
      </div>
      <div className="absolute top-[20%] right-[20%] text-genesis-lightPurple/10 transform rotate-45">
        <ShieldCheck size={80} strokeWidth={1} />
      </div>
      <div className="absolute bottom-[25%] left-[15%] text-genesis-lightPurple/10 transform -rotate-15">
        <Award size={90} strokeWidth={1} />
      </div>
      
      {/* Trust indicators */}
      <div className="absolute left-[5%] top-1/2 hidden xl:block">
        <div className="flex items-center justify-center w-24 h-24 bg-white/30 backdrop-blur-sm rounded-full border border-genesis-purple/10 shadow-lg">
          <Users className="w-10 h-10 text-genesis-purple/30" />
        </div>
      </div>
      <div className="absolute right-[5%] top-1/3 hidden xl:block">
        <div className="flex items-center justify-center w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full border border-genesis-purple/10 shadow-lg">
          <Microscope className="w-8 h-8 text-genesis-purple/30" />
        </div>
      </div>

      {/* Light beams */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-genesis-purple/5 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-genesis-purple/5 to-transparent"></div>
    </div>
  );
};

export default AboutHeroBackground;
