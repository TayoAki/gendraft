
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import ButtonCustom from "../ui/ButtonCustom";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-genesis-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-genesis-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-section relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeIn direction="left" className="space-y-6">
            <div className="inline-block rounded-full bg-genesis-purple/10 px-3 py-1 text-sm font-medium text-genesis-purple">
              Professional Healthcare Services
            </div>
            <h1 className="font-bold">
              <span className="text-gray-900">GENESIS</span>
              <br />
              <span className="text-gradient">HEALTHCARE</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Making each patient an integral part of their own healthcare.
              Take charge of your health today!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portal">
                <ButtonCustom size="lg">
                  Sign In To My Health Portal
                </ButtonCustom>
              </Link>
              <Link to="/registration">
                <ButtonCustom variant="outline" size="lg">
                  Register Now
                </ButtonCustom>
              </Link>
            </div>
          </FadeIn>
          
          <FadeIn 
            direction="right" 
            delay={200}
            className="relative order-first md:order-last"
          >
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl animate-pulse-subtle">
              <img 
                src="/lovable-uploads/53a93b24-c109-459a-92d6-3159910c2b00.png" 
                alt="Healthcare Professionals"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <FadeIn delay={300} className="glass-card rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-genesis-purple/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-genesis-purple"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Patient-Centered Care</h3>
            <p className="text-gray-600">Personalized attention and treatment plans designed specifically for your needs.</p>
          </FadeIn>
          
          <FadeIn delay={400} className="glass-card rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-genesis-purple/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-genesis-purple"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Health Education</h3>
            <p className="text-gray-600">Empowering you with knowledge to make informed decisions about your health.</p>
          </FadeIn>
          
          <FadeIn delay={500} className="glass-card rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-genesis-purple/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-genesis-purple"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">Building a network of healthcare resources to support your journey to wellness.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
