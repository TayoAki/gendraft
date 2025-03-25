
import React, { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ResourcesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
