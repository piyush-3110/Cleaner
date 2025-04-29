import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesPreview = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Comprehensive cleaning solutions tailored to your home's specific needs, from regular maintenance to deep cleaning.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Commercial Cleaning",
      description:
        "Professional cleaning services for offices, retail spaces, and other business environments, ensuring a clean workspace.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Deep Cleaning",
      description:
        "Thorough cleaning that reaches all corners and crevices, perfect for seasonal cleaning or move-in/move-out services.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-puretouch-dark to-puretouch-dark/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-puretouch-sage font-playfair text-lg mb-3">
            Our Services
          </h2>
          <h3 className="font-playfair font-semibold text-3xl md:text-4xl mb-6 text-puretouch-cream">
            Premium Cleaning Solutions
          </h3>
          <p className="text-puretouch-cream/80 max-w-2xl mx-auto">
            We offer a range of professional cleaning services designed to meet
            your specific needs. Each service is delivered with meticulous
            attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-puretouch-sage text-puretouch-dark hover:bg-puretouch-cream px-6 py-6 text-lg"
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-puretouch-dark/60 backdrop-blur-sm p-8 rounded-lg border border-puretouch-sage/10 shadow-lg hover:border-puretouch-sage/30 transition-all duration-300 group">
      <div className="text-puretouch-sage mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="font-playfair text-xl font-semibold mb-4 text-puretouch-cream">
        {title}
      </h4>
      <p className="text-puretouch-cream/70 mb-6">{description}</p>
      <Link
        to="/services"
        className="text-puretouch-sage font-medium inline-flex items-center group-hover:underline"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ServicesPreview;
