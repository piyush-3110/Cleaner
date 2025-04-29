import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-puretouch-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img
                src="/images/about-cleaning.jpg"
                alt="Professional cleaner at work"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div>
            <h2 className="text-puretouch-sage font-playfair text-lg mb-3">
              About Us
            </h2>
            <h3 className="font-playfair font-semibold text-3xl md:text-4xl mb-6 text-puretouch-cream">
              Local, Trustworthy, & <br />
              Detail-Oriented Cleaning
            </h3>
            <p className="text-puretouch-cream/80 mb-6 leading-relaxed">
              PureTouch Cleaning Co. is a local business dedicated to providing
              exceptional cleaning services with meticulous attention to detail.
              We take pride in transforming spaces into pristine environments
              that promote well-being and peace of mind.
            </p>
            <p className="text-puretouch-cream/80 mb-8 leading-relaxed">
              Our team of professional cleaners is thoroughly vetted, trained,
              and passionate about delivering the highest quality service. We
              understand that inviting someone into your home or business
              requires trust, which is why reliability and integrity are at the
              core of everything we do.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <Stat number="5+" text="Years Experience" />
              <Stat number="200+" text="Happy Clients" />
              <Stat number="99%" text="Satisfaction" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="text-center p-4 bg-puretouch-dark/50 backdrop-blur-sm border border-puretouch-sage/20 rounded-lg">
      <p className="font-playfair text-2xl md:text-3xl font-bold text-puretouch-sage">
        {number}
      </p>
      <p className="text-puretouch-cream/80 text-sm">{text}</p>
    </div>
  );
};

export default About;
