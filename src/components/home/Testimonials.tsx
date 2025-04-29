
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "PureTouch transformed my home with their exceptional cleaning service. Their attention to detail exceeded my expectations, and my space has never felt more fresh and inviting.",
      author: "Sarah Johnson",
      role: "Homeowner",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "As a business owner, I need reliable cleaning services that I can trust. PureTouch delivers consistent quality every time, and their staff is professional and courteous.",
      author: "Michael Chen",
      role: "Local Business Owner",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "I've tried several cleaning services over the years, but PureTouch stands above the rest. Their team is thorough, dependable, and they use high-quality, eco-friendly products.",
      author: "Amanda Torres",
      role: "Repeat Customer",
      image: "/images/testimonial-3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-puretouch-dark/90 to-puretouch-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-puretouch-sage font-playfair text-lg mb-3">Testimonials</h2>
          <h3 className="font-playfair font-semibold text-3xl md:text-4xl mb-6 text-puretouch-cream">
            What Our Clients Say
          </h3>
          <p className="text-puretouch-cream/80 max-w-2xl mx-auto">
            Discover why our clients trust us for their cleaning needs and keep coming back for our exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, role, image }: { quote: string; author: string; role: string; image: string }) => {
  return (
    <div className="bg-puretouch-dark rounded-lg p-8 shadow-lg border border-puretouch-sage/10 relative">
      <div className="absolute -top-5 left-8 text-puretouch-sage text-5xl">"</div>
      <p className="text-puretouch-cream/80 mb-8 relative z-10 italic leading-relaxed">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-puretouch-sage">
          <img
            src={image}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-playfair font-medium text-puretouch-cream">{author}</p>
          <p className="text-puretouch-sage/80 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
