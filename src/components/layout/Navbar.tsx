import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Close the menu when the route changes
    closeMenu();
  }, [pathname]);

  return (
    
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container-section">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/53a93b24-c109-459a-92d6-3159910c2b00.png" alt="Genesis Healthcare Logo" className="h-10" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-genesis-purple" />
              ) : (
                <Menu className="h-6 w-6 text-genesis-purple" />
              )}
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <nav className="hidden md:flex space-x-1">
                <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'text-genesis-purple bg-genesis-purple/10' : 'text-gray-700 hover:text-genesis-purple hover:bg-genesis-purple/5'}`}>
                  Home
                </Link>
                <Link to="/about-us" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/about-us' ? 'text-genesis-purple bg-genesis-purple/10' : 'text-gray-700 hover:text-genesis-purple hover:bg-genesis-purple/5'}`}>
                  About Us
                </Link>
                <Link to="/direct-primary-care" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/direct-primary-care' ? 'text-genesis-purple bg-genesis-purple/10' : 'text-gray-700 hover:text-genesis-purple hover:bg-genesis-purple/5'}`}>
                  Direct Primary Care
                </Link>
              </nav>
              
              <div className="hidden md:flex items-center pl-4 ml-4 border-l border-gray-200">
                <Button asChild variant="default" className="mr-2 bg-genesis-purple hover:bg-genesis-lightPurple">
                  <a href="tel:+16785551234">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } bg-white border-t border-gray-200`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/' ? 'text-genesis-purple bg-genesis-purple/10' : 'text-gray-700 hover:text-genesis-purple hover:bg-genesis-purple/5'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/about-us' ? 'text-genesis-purple bg-genesis-purple/10' : 'text-gray-700 hover:text-genesis-purple hover:bg-genesis-purple/5'
              }`}
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              to="/direct-primary-care"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/direct-primary-care' ? 'text-genesis-purple bg-genesis-purple/10' : 'text-gray-700 hover:text-genesis-purple hover:bg-genesis-purple/5'
              }`}
              onClick={closeMenu}
            >
              Direct Primary Care
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button asChild variant="default" className="w-full bg-genesis-purple hover:bg-genesis-lightPurple">
                <a href="tel:+16785551234" className="flex items-center justify-center" onClick={closeMenu}>
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
