
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: "linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.9)), url('/images/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6 text-puretouch-cream">
          Ready for a Professional Clean?
        </h2>
        <p className="text-puretouch-cream/80 max-w-2xl mx-auto mb-8 text-lg">
          Contact us today to schedule your cleaning service or request a free quote. Experience the difference of a truly thorough clean.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="bg-puretouch-sage text-puretouch-dark hover:bg-puretouch-cream px-6 py-6 text-lg">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <Button asChild variant="outline" className="border-puretouch-cream text-puretouch-cream hover:bg-puretouch-cream/10 px-6 py-6 text-lg">
            <Link to="/services">View Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
