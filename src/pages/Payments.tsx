
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import PaymentsBackground from "@/components/backgrounds/PaymentsBackground";

const Payments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-genesis-purple/10 to-white py-16">
          <PaymentsBackground />
          <div className="container-section relative">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold text-genesis-purple mb-6">Payments</h1>
                <p className="text-xl text-gray-600 mb-6">
                  Choose a payment option below.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container-section">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn>
                <Card className="h-full">
                  <CardContent className="p-8 flex flex-col items-center justify-between h-full">
                    <div className="text-center mb-6">
                      <div className="h-16 w-16 bg-genesis-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-genesis-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-genesis-purple mb-2">Student Payments</h2>
                      <p className="text-gray-600">
                        For nursing students completing their clinical rotations.
                      </p>
                    </div>
                    
                    <Button className="w-full bg-genesis-purple hover:bg-genesis-lightPurple">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Make Student Payment
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <Card className="h-full">
                  <CardContent className="p-8 flex flex-col items-center justify-between h-full">
                    <div className="text-center mb-6">
                      <div className="h-16 w-16 bg-genesis-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-genesis-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-genesis-purple mb-2">Patient Payments</h2>
                      <p className="text-gray-600">
                        For patients making payments for services rendered.
                      </p>
                    </div>
                    
                    <Button className="w-full bg-genesis-purple hover:bg-genesis-lightPurple">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Make Patient Payment
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
            
            <div className="mt-16 text-center text-gray-600">
              <p>Genesis Healthcare © {new Date().getFullYear()}</p>
              <div className="mt-8 flex justify-center gap-6">
                <Link to="/about" className="text-genesis-purple hover:text-genesis-lightPurple">About Us</Link>
                <Link to="/registration" className="text-genesis-purple hover:text-genesis-lightPurple">Registration</Link>
                <Link to="/medical-cannabis" className="text-genesis-purple hover:text-genesis-lightPurple">Medical Cannabis</Link>
                <Link to="/community" className="text-genesis-purple hover:text-genesis-lightPurple">Community Initiatives</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payments;
