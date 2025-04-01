
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import ButtonCustom from "../ui/ButtonCustom";
import { resourcesBooks } from "@/data";

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
          {resourcesBooks.map((resource, index) => (
            <FadeIn 
              key={resource.id}
              delay={100 * (index + 1)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={resource.imageUrl} 
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white text-xl font-bold">{resource.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <Link to={resource.link || "/resources/recommended-readings"}>
                  <ButtonCustom variant="ghost" className="text-genesis-purple w-full justify-center">
                    Learn More
                  </ButtonCustom>
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
