
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import ButtonCustom from "../ui/ButtonCustom";

const ResourcesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4">Resources</h2>
          <p className="text-gray-600 text-lg">
            Explore our curated collection of healthcare resources designed to empower
            and inform your health journey.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn 
            delay={100}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Be Not Afraid"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-xl font-bold">Be Not Afraid</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Overcome healthcare anxiety with our supportive resources and guidance
                designed to make your medical journey less intimidating.
              </p>
              <Link to="/resources/be-not-afraid">
                <ButtonCustom variant="ghost" className="text-genesis-purple w-full justify-center">
                  Learn More
                </ButtonCustom>
              </Link>
            </div>
          </FadeIn>

          <FadeIn 
            delay={200}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Recommended Readings"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-xl font-bold">Recommended Readings</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Discover curated books and articles that provide valuable insights into
                healthcare topics and personal wellness strategies.
              </p>
              <Link to="/resources/recommended-readings">
                <ButtonCustom variant="ghost" className="text-genesis-purple w-full justify-center">
                  View Reading List
                </ButtonCustom>
              </Link>
            </div>
          </FadeIn>

          <FadeIn 
            delay={300}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="5 Years of Changing Lives"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-xl font-bold">5 Years of Changing Lives</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Celebrating our five-year milestone of providing exceptional healthcare
                services and making a positive impact in our community.
              </p>
              <Link to="/resources/our-impact">
                <ButtonCustom variant="ghost" className="text-genesis-purple w-full justify-center">
                  See Our Impact
                </ButtonCustom>
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn 
          delay={400}
          className="mt-16 bg-white rounded-xl p-8 border border-gray-100 shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Join Our Health Community</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to receive the latest health tips, resources,
                and updates from Genesis Healthcare Associates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-genesis-purple focus:border-transparent"
                />
                <ButtonCustom>
                  Subscribe
                </ButtonCustom>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=2939&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Healthcare community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-genesis-purple/30 to-genesis-blue/30"></div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ResourcesSection;
