import React from "react";
import { Button } from "../ui/button";

const ServiceHero = () => {
  return (
    <section
      className="relative pt-32 pb-20  min-h-screen flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26, 31, 44, 0.8), rgba(26, 31, 44, 0.9)), url('/images/deepclean.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto  px-4 md:px-6 text-center">
        <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-puretouch-cream">
          Our Cleaning Services
        </h1>
        <p className="text-puretouch-cream/80 max-w-2xl mx-auto text-lg">
          Discover our range of professional cleaning services tailored to meet
          your specific needs. Each service is delivered with meticulous
          attention to detail.
        </p>
        <div className="flex flex-col mt-6 sm:flex-row items-center justify-center gap-4">
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
    </section>
  );
};

export default ServiceHero;
