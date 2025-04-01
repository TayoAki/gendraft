
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Facebook, Instagram } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${mobileMenuOpen ? 'h-screen md:h-auto' : ''}`}>
      {/* Top Bar */}
      <div className="bg-genesis-purple text-white py-2">
        <div className="container-section flex justify-between items-center">
          <a 
            href="tel:770-434-1904" 
            className="flex items-center gap-2 hover:text-genesis-lightBlue transition-colors duration-200"
          >
            <Phone size={16} strokeWidth={2} />
            <span className="text-sm">770-434-1904</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:text-genesis-lightBlue transition-colors duration-200" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-white hover:text-genesis-lightBlue transition-colors duration-200" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div 
        className={`bg-white transition-all duration-300 ${
          scrolled ? "shadow-md bg-white/95 backdrop-blur-md" : ""
        }`}
      >
        <div className="container-section flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-2 z-20">
            <div className="w-12 h-12 md:w-14 md:h-14 relative flex-shrink-0">
              <img 
                src="/lovable-uploads/eb1482a5-582d-4228-9df7-5a2ac2ce6bea.png" 
                alt="Genesis Healthcare Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-genesis-purple font-bold text-lg md:text-xl leading-tight">GENESIS</span>
              <span className="text-gray-500 text-[10px] md:text-xs leading-tight">HEALTHCARE ASSOCIATES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/registration">Registration</NavLink>
            <NavLink to="/direct-primary-care">Direct Primary Care</NavLink>
            <NavLink to="/medical-cannabis">Medical Cannabis</NavLink>
            <NavLink to="/community">Community</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/nursing"
              className="py-2 px-3 lg:px-4 text-sm bg-genesis-purple text-white rounded-md transition-all hover:bg-genesis-lightPurple"
            >
              Nursing Clinicals
            </Link>
            <Link 
              to="/payments"
              className="py-2 px-3 lg:px-4 text-sm border border-genesis-purple text-genesis-purple rounded-md transition-all hover:bg-genesis-purple/5"
            >
              Payments
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-genesis-purple z-20" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div 
          className={`fixed inset-0 bg-white z-10 transition-transform duration-300 pt-24 px-6 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <nav className="flex flex-col gap-6 mb-8">
              <MobileNavLink to="/" active={location.pathname === "/"}>Home</MobileNavLink>
              <MobileNavLink to="/about" active={location.pathname === "/about"}>About Us</MobileNavLink>
              <MobileNavLink to="/registration" active={location.pathname === "/registration"}>Registration</MobileNavLink>
              <MobileNavLink to="/direct-primary-care" active={location.pathname === "/direct-primary-care"}>Direct Primary Care</MobileNavLink>
              <MobileNavLink to="/medical-cannabis" active={location.pathname === "/medical-cannabis"}>Medical Cannabis</MobileNavLink>
              <MobileNavLink to="/community" active={location.pathname === "/community"}>Community Initiatives</MobileNavLink>
            </nav>
            
            <div className="flex flex-col gap-3 mt-auto mb-10">
              <Link 
                to="/nursing"
                className="py-3 bg-genesis-purple text-white rounded-md transition-all hover:bg-genesis-lightPurple text-center"
              >
                Advance Nursing Clinicals
              </Link>
              <Link 
                to="/payments"
                className="py-3 border border-genesis-purple text-genesis-purple rounded-md transition-all hover:bg-genesis-purple/5 text-center"
              >
                Payments
              </Link>
              
              <div className="flex items-center justify-center gap-4 mt-6">
                <a 
                  href="tel:770-434-1904" 
                  className="flex items-center gap-2 text-genesis-purple hover:text-genesis-lightPurple transition-colors duration-200"
                >
                  <Phone size={18} />
                  <span>770-434-1904</span>
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-4">
                <a href="#" className="text-genesis-purple hover:text-genesis-lightPurple transition-colors duration-200" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-genesis-purple hover:text-genesis-lightPurple transition-colors duration-200" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`relative text-gray-700 hover:text-genesis-purple transition-colors duration-200 font-medium text-sm lg:text-base 
        ${isActive ? 'text-genesis-purple' : ''}
        after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-genesis-purple after:origin-center 
        ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'} 
        hover:after:scale-x-100 after:transition-transform`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) => {
  return (
    <Link
      to={to}
      className={`text-xl ${active ? 'text-genesis-purple font-medium' : 'text-gray-700'} hover:text-genesis-purple transition-colors`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
