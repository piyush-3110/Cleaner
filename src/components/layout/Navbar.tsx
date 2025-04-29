
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4",
        scrolled 
          ? "bg-puretouch-dark shadow-lg py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-playfair text-xl md:text-2xl font-bold text-puretouch-cream">
            PureTouch<span className="text-puretouch-sage">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Button variant="outline" className="bg-transparent border-puretouch-sage text-puretouch-cream hover:bg-puretouch-sage hover:text-puretouch-dark">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-puretouch-cream focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-puretouch-dark bg-opacity-95 z-40 md:hidden transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4 text-lg">
          <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          <Button variant="outline" className="mt-4 bg-transparent border-puretouch-sage text-puretouch-cream hover:bg-puretouch-sage hover:text-puretouch-dark">
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const isActive = window.location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "font-medium transition-colors hover:text-puretouch-sage relative",
        isActive 
          ? "text-puretouch-sage" 
          : "text-puretouch-cream"
      )}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-puretouch-sage" />
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => {
  const isActive = window.location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "font-medium text-xl transition-colors",
        isActive 
          ? "text-puretouch-sage" 
          : "text-puretouch-cream hover:text-puretouch-sage"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
