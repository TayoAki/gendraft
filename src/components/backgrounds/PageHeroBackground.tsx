
import React from "react";
import { LucideIcon } from "lucide-react";

interface PageHeroBackgroundProps {
  icons: Array<{
    icon: LucideIcon;
    size: number;
    position: string;
    rotation: string;
    color: string;
  }>;
  showTrustIndicators?: boolean;
}

const PageHeroBackground: React.FC<PageHeroBackgroundProps> = ({ 
  icons, 
  showTrustIndicators = true 
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background overlays */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-genesis-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-genesis-lightPurple/5 rounded-full blur-3xl"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoMnY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      {/* Decorative icons */}
      {icons.map((item, index) => (
        <div 
          key={index} 
          className={`absolute ${item.position} ${item.color} transform ${item.rotation}`}
        >
          {React.createElement(item.icon, { 
            size: item.size, 
            strokeWidth: 1 
          })}
        </div>
      ))}
      
      {/* Trust indicators - optional */}
      {showTrustIndicators && (
        <>
          <div className="absolute left-[5%] top-1/2 hidden xl:block">
            <div className="flex items-center justify-center w-24 h-24 bg-white/30 backdrop-blur-sm rounded-full border border-genesis-purple/10 shadow-lg">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-10 h-10 text-genesis-purple/30"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          </div>
          <div className="absolute right-[5%] top-1/3 hidden xl:block">
            <div className="flex items-center justify-center w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full border border-genesis-purple/10 shadow-lg">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-8 h-8 text-genesis-purple/30"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M8 3v2" />
                <path d="M12 3v2" />
                <path d="M16 3v2" />
                <path d="M20 7H4" />
                <path d="M20 11H4" />
                <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
              </svg>
            </div>
          </div>
        </>
      )}

      {/* Light beams */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-genesis-purple/5 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-genesis-purple/5 to-transparent"></div>
    </div>
  );
};

export default PageHeroBackground;
