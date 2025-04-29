import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsLoaded(true);

    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.85)), url('/images/special.jpg')", // Update the image path here
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-puretouch-dark/30"></div>

      {/* Wipe effect animation */}
      {isLoaded && !isAnimationComplete && !isMobile && (
        <div className="absolute inset-0 z-10 hero-wipe-effect"></div>
      )}

      <div
        className={`container mx-auto px-4 text-center relative z-20 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-puretouch-cream">
          Bringing a <span className="text-puretouch-sage">Sparkle</span> to
          Every Space
        </h1>
        <p className="text-puretouch-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Professional cleaning services you can trust, delivered with care and
          attention to detail for your home or business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-puretouch-sage text-puretouch-dark hover:bg-puretouch-cream px-6 py-6 text-lg">
            Get a Free Quote
          </Button>
          <Button
            variant="outline"
            className="border-puretouch-cream text-puretouch-cream hover:bg-puretouch-cream/10 px-6 py-6 text-lg"
          >
            Our Services
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-puretouch-sage"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
