
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import ButtonCustom from "../ui/ButtonCustom";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive healthcare solutions designed to address your unique needs
            with a focus on quality, accessibility, and personalized care.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn direction="left" className="relative rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-genesis-purple transition-all duration-300 group-hover:opacity-90 opacity-80"></div>
            <img 
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Advanced Nursing"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-3">Advance Nursing Clinicals</h3>
              <p className="text-white/80 mb-4">
                Specialized nursing services providing advanced clinical care and support for patients with complex needs.
              </p>
              <Link to="/nursing">
                <ButtonCustom variant="primary" className="backdrop-blur-sm bg-white/20 border-none hover:bg-white/30">
                  Learn More
                </ButtonCustom>
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="relative rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-genesis-blue transition-all duration-300 group-hover:opacity-90 opacity-80"></div>
            <img 
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Medical Cannabis"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-3">Medical Cannabis</h3>
              <p className="text-white/80 mb-4">
                Expert guidance on medical cannabis treatments and therapies tailored to your specific health conditions.
              </p>
              <Link to="/medical-cannabis">
                <ButtonCustom variant="primary" className="backdrop-blur-sm bg-white/20 border-none hover:bg-white/30">
                  Learn More
                </ButtonCustom>
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceFeatures.map((feature, index) => (
            <FadeIn 
              key={feature.title} 
              delay={100 * index}
              className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const serviceFeatures = [
  {
    title: "Primary Care",
    description: "Comprehensive primary healthcare services for all ages, from routine check-ups to chronic disease management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-genesis-purple"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
    )
  },
  {
    title: "Specialist Referrals",
    description: "Access to a network of specialists to ensure comprehensive care for complex medical conditions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-genesis-purple"><path d="M16 22h2a2 2 0 0 0 2-2v-1a7 7 0 0 0-7-7H11a7 7 0 0 0-7 7v1a2 2 0 0 0 2 2h2" /><rect x="10" y="6" width="4" height="6" rx="2" /><path d="M3 9v1" /><path d="M21 9v1" /><path d="M12 16v3" /></svg>
    )
  },
  {
    title: "Preventive Care",
    description: "Proactive health screenings and wellness programs designed to prevent illness and promote long-term health.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-genesis-purple"><path d="M2.5 2v6h6M21.5 22v-6h-6" /><path d="M22 8.5c0 7.18-5.82 13-13 13C8.46 21.5 7.96 20 7.96 20" /><path d="M2 15.5c0-7.18 5.82-13 13-13 0.54 0 1.04 1.5 1.04 1.5" /></svg>
    )
  },
  {
    title: "Direct Primary Care",
    description: "Membership-based care model offering dedicated provider access, extended appointments, and simplified healthcare without insurance barriers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-genesis-purple"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 1.9-1.1l.3-.6" /><path d="M8.8 8.7a4.5 4.5 0 0 1 3.1 2.4l.2.5" /><path d="M7 9H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1Z" /><path d="M16 21h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1Z" /><path d="M16 5h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1Z" /></svg>
    )
  }
];

export default ServicesSection;
