
import React from "react";

const ContactHero = () => {
  return (
    <section 
      className="relative pt-32 pb-20"
      style={{
        backgroundImage: "linear-gradient(rgba(26, 31, 44, 0.8), rgba(26, 31, 44, 0.9)), url('/images/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-puretouch-cream">
          Get in Touch
        </h1>
        <p className="text-puretouch-cream/80 max-w-2xl mx-auto text-lg">
          Contact us to schedule a cleaning service, request a quote, or ask any questions about how we can help you maintain a spotless space.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
