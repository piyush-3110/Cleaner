
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-puretouch-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair font-semibold text-3xl mb-6 text-puretouch-cream">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                title="Phone"
                content="(555) 123-4567"
              />
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="Email"
                content="info@puretouchcleaning.com"
              />
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Address"
                content="123 Clean Street, Sparkle City, SC 29601"
              />
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Business Hours"
                content="Mon-Fri: 8am-6pm, Sat: 9am-4pm"
              />
            </div>

            <div className="rounded-lg overflow-hidden h-64 md:h-72">
              <iframe
                title="PureTouch Cleaning Co. Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52871.863634387!2d-118.37423004179689!3d34.09772814079946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-puretouch-dark/50 p-6 md:p-8 rounded-lg border border-puretouch-sage/10 shadow-lg">
            <h2 className="font-playfair font-semibold text-3xl mb-6 text-puretouch-cream">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-puretouch-cream font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-puretouch-dark/70 border border-puretouch-sage/20 rounded-md p-3 text-puretouch-cream focus:outline-none focus:border-puretouch-sage"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-puretouch-cream font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-puretouch-dark/70 border border-puretouch-sage/20 rounded-md p-3 text-puretouch-cream focus:outline-none focus:border-puretouch-sage"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-puretouch-cream font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-puretouch-dark/70 border border-puretouch-sage/20 rounded-md p-3 text-puretouch-cream focus:outline-none focus:border-puretouch-sage"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-puretouch-cream font-medium">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-puretouch-dark/70 border border-puretouch-sage/20 rounded-md p-3 text-puretouch-cream focus:outline-none focus:border-puretouch-sage"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="specialized">Specialized Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-puretouch-cream font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-puretouch-dark/70 border border-puretouch-sage/20 rounded-md p-3 text-puretouch-cream focus:outline-none focus:border-puretouch-sage"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-puretouch-sage text-puretouch-dark hover:bg-puretouch-cream py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => {
  return (
    <div className="flex items-start">
      <div className="bg-puretouch-sage/20 p-3 rounded-full mr-4 text-puretouch-sage">
        {icon}
      </div>
      <div>
        <h3 className="font-playfair font-medium text-puretouch-cream">{title}</h3>
        <p className="text-puretouch-cream/80">{content}</p>
      </div>
    </div>
  );
};

export default ContactForm;
