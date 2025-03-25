
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-genesis-purple text-white py-2">
        <div className="container-section flex justify-between items-center">
          <a 
            href="tel:770-434-1904" 
            className="flex items-center gap-2 hover:text-genesis-lightBlue transition-colors duration-200"
          >
            <Phone size={18} />
            <span className="text-sm sm:text-base">770-434-1904</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:text-genesis-lightBlue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="text-white hover:text-genesis-lightBlue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div 
        className={`bg-white backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-md bg-white/90" : ""
        }`}
      >
        <div className="container-section flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="30" cy="30" r="28" fill="#4f4183" />
                <path d="M30,15 L30,45 M20,25 L40,25 M20,35 L40,35" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-genesis-purple font-bold text-xl leading-tight">GENESIS</span>
              <span className="text-gray-500 text-xs leading-tight">HEALTHCARE ASSOCIATES</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/registration">Registration</NavLink>
            <NavLink to="/direct-primary-care">Direct Primary Care</NavLink>
            <NavLink to="/medical-cannabis">Medical Cannabis</NavLink>
            <NavLink to="/community">Community Initiatives</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/nursing"
              className="py-2 px-4 bg-genesis-purple text-white rounded-md transition-all hover:bg-genesis-lightPurple"
            >
              Advance Nursing Clinicals
            </Link>
            <Link 
              to="/payments"
              className="py-2 px-4 border border-genesis-purple text-genesis-purple rounded-md transition-all hover:bg-genesis-purple/5"
            >
              Payments
            </Link>
          </div>

          <button className="md:hidden text-genesis-purple">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="relative text-gray-700 hover:text-genesis-purple transition-colors duration-200 font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-genesis-purple after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform"
    >
      {children}
    </Link>
  );
};

export default Navbar;
