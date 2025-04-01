import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FadeIn from "@/components/animations/FadeIn";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            {/* Update the text here */}
            <span className="inline-block rounded-full bg-genesis-purple/10 px-3 py-1 text-sm font-medium text-genesis-purple">
              Take charge of your health today!
            </span>
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Professional Healthcare Services
              </h1>
              <p className="text-lg text-gray-700">
                Genesis Healthcare Associates is committed to providing the highest
                quality, patient-centered care.
              </p>
              <div>
                <Link to="/registration">
                  <Button size="lg" className="bg-genesis-purple hover:bg-genesis-lightPurple text-white">
                    New Patient Registration
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2">
            <FadeIn>
              <img
                src="/hero-image.webp"
                alt="Healthcare professionals"
                className="rounded-xl shadow-lg"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
