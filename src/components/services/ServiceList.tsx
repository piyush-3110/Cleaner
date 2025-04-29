import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceList = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Our standard residential cleaning service includes thorough cleaning of all rooms, focusing on kitchens, bathrooms, living spaces, and bedrooms. We dust, vacuum, mop, and ensure your home is spotless.",
      image: "/images/residential.webp",
      features: [
        "Weekly, bi-weekly, or monthly options",
        "Customized cleaning plans",
        "Eco-friendly products available",
      ],
      pricing: [
        {
          name: "Standard",
          price: "$120",
          description: "Weekly cleaning, up to 2 bedrooms",
        },
        {
          name: "Premium",
          price: "$160",
          description: "Weekly cleaning, 3-4 bedrooms",
        },
        {
          name: "Deluxe",
          price: "$200+",
          description: "Weekly cleaning, 5+ bedrooms",
        },
      ],
    },
    {
      title: "Commercial Cleaning",
      description:
        "Keep your business looking professional with our commercial cleaning services. We handle offices, retail spaces, medical facilities, and more, providing a clean environment for employees and customers.",
      image: "/images/imageclean.webp",
      features: [
        "After-hours cleaning available",
        "Daily, weekly, or custom schedules",
        "Specialized cleaning protocols",
      ],
      pricing: [
        {
          name: "Office Basic",
          price: "$0.15",
          description: "Per sq ft, general cleaning",
        },
        {
          name: "Office Plus",
          price: "$0.20",
          description: "Per sq ft, with carpet cleaning",
        },
        {
          name: "Medical/Special",
          price: "Custom",
          description: "Tailored to facility needs",
        },
      ],
    },
    {
      title: "Deep Cleaning",
      description:
        "Our deep cleaning service tackles the tough jobs and hard-to-reach areas that regular cleaning might miss. Perfect for seasonal cleaning, pre/post-event cleanup, or move-in/move-out situations.",
      image: "/images/deepclean.jpg",
      features: [
        "Inside appliance cleaning",
        "Wall and baseboard washing",
        "Detailed fixture cleaning",
      ],
      pricing: [
        {
          name: "One-Time",
          price: "$250",
          description: "Up to 2 bedrooms, one bathroom",
        },
        {
          name: "Full Home",
          price: "$350+",
          description: "3+ bedrooms, multiple bathrooms",
        },
        {
          name: "Move-In/Out",
          price: "$400+",
          description: "Complete property preparation",
        },
      ],
    },
    {
      title: "Specialized Services",
      description:
        "Beyond our standard cleaning packages, we offer specialized services to address specific needs such as carpet cleaning, window washing, post-construction cleanup, and more.",
      image: "/images/special.jpg",
      features: [
        "Carpet and upholstery cleaning",
        "Window and blind cleaning",
        "Post-renovation cleanup",
      ],
      pricing: [
        {
          name: "Carpet Cleaning",
          price: "$0.30",
          description: "Per sq ft of carpet area",
        },
        {
          name: "Window Cleaning",
          price: "$7",
          description: "Per window (interior & exterior)",
        },
        {
          name: "Post-Construction",
          price: "Custom",
          description: "Based on project scope",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-puretouch-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PricingTier {
  name: string;
  price: string;
  description: string;
}

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  pricing: PricingTier[];
}

interface ServiceCardProps {
  service: ServiceProps;
  reverse?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  reverse = false,
}) => {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <h2 className="font-playfair font-semibold text-3xl mb-4 text-puretouch-cream">
          {service.title}
        </h2>
        <p className="text-puretouch-cream/80 mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="mb-8 space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-puretouch-cream/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-puretouch-sage mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mb-8">
          <h3 className="font-playfair text-xl mb-4 text-puretouch-sage">
            Pricing Options
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {service.pricing.map((tier, idx) => (
              <div
                key={idx}
                className="bg-puretouch-dark/50 border border-puretouch-sage/10 p-4 rounded-lg"
              >
                <p className="font-playfair font-medium text-puretouch-cream">
                  {tier.name}
                </p>
                <p className="text-puretouch-sage text-xl font-bold my-1">
                  {tier.price}
                </p>
                <p className="text-puretouch-cream/60 text-sm">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Button
          asChild
          className="bg-puretouch-sage text-puretouch-dark hover:bg-puretouch-cream"
        >
          <Link to="/contact">Book This Service</Link>
        </Button>
      </div>

      <div className={`relative ${reverse ? "md:order-1" : ""}`}>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-puretouch-sage/20 rounded-lg -z-10"></div>
      </div>
    </div>
  );
};

export default ServiceList;
