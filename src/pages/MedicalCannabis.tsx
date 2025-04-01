
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cannabis, FileText, Info } from "lucide-react";
import ButtonCustom from "@/components/ui/ButtonCustom";
import MedicalCannabisBackground from "@/components/backgrounds/MedicalCannabisBackground";

const MedicalCannabis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-genesis-purple/10 to-white py-16">
          <MedicalCannabisBackground />
          <div className="container-section relative">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold text-genesis-purple mb-6">Medical Cannabis</h1>
                <p className="text-xl text-gray-600">
                  Curious about cannabis and its benefits? Learn about Georgia's medical cannabis program and how Genesis Healthcare can help.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <FadeIn className="sticky top-32">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Links</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <nav className="flex flex-col">
                        <a href="#policy" className="flex items-center gap-2 px-6 py-3 border-b hover:bg-gray-50 text-gray-700 hover:text-genesis-purple transition-colors">
                          <FileText size={18} />
                          <span>Office Policy</span>
                        </a>
                        <a href="#records" className="flex items-center gap-2 px-6 py-3 border-b hover:bg-gray-50 text-gray-700 hover:text-genesis-purple transition-colors">
                          <FileText size={18} />
                          <span>Medical Records</span>
                        </a>
                        <a href="#insurance" className="flex items-center gap-2 px-6 py-3 border-b hover:bg-gray-50 text-gray-700 hover:text-genesis-purple transition-colors">
                          <Info size={18} />
                          <span>Insurance Information</span>
                        </a>
                        <a href="#eligibility" className="flex items-center gap-2 px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-genesis-purple transition-colors">
                          <Cannabis size={18} />
                          <span>Eligibility Details</span>
                        </a>
                      </nav>
                    </CardContent>
                  </Card>
                  <div className="mt-6">
                    <Link to="/registration">
                      <ButtonCustom className="w-full justify-center">
                        Begin Registration
                      </ButtonCustom>
                    </Link>
                  </div>
                </FadeIn>
              </div>
              
              {/* Main Content */}
              <div className="md:col-span-2 space-y-10">
                <div id="policy" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-bold mb-4 text-genesis-purple">Office Policy and Procedures</h2>
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-gray-700">
                          Our medical cannabis program follows strict guidelines as mandated by the State of Georgia. 
                          Our healthcare providers are trained and certified to evaluate patients for eligibility 
                          based on qualifying conditions. We maintain a professional approach to ensure 
                          all legal and medical requirements are properly met.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                </div>
                
                <div id="records" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-bold mb-4 text-genesis-purple">Medical Records</h2>
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4">
                          A minimum of 2 years medical records documenting your qualifying disease is required. 
                          Your records must be from a licensed physician that has treated or is currently treating 
                          you for the qualifying disease.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Your records must be sent to our office no less than 5 days prior to your appointment. 
                          This gives our Providers time to review and prepare for your visit.
                        </p>
                        <p className="font-medium text-genesis-purple">
                          If your records have not been received, we will have to cancel your appointment. 
                          No exceptions can be made.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                </div>
                
                <div id="insurance" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-bold mb-4 text-genesis-purple">Insurance Information</h2>
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4">
                          The services we provide are not covered by your insurance and full payment is due 
                          at the time of service. We will not file your insurance for any services relating 
                          to Medical Cannabis Treatment.
                        </p>
                        <p className="text-gray-700">
                          You will be given a waiver form to sign that acknowledges your understanding of this policy.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                </div>
                
                <div id="eligibility" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-bold mb-4 text-genesis-purple">Important Information About Medical Cannabis Certification</h2>
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-6">
                          Our providers will do an initial assessment of your condition to see if you are eligible 
                          for treatment with the Medical Cannabis oil. If you qualify, we must register you with 
                          the State of Georgia. This registration is required by law. Please keep in mind that 
                          not all persons will qualify for the program.
                        </p>
                        
                        <h3 className="text-xl font-bold mb-4">Who May Apply</h3>
                        <p className="text-gray-700 mb-4">
                          There are three categories of persons who may apply for the card:
                        </p>
                        
                        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                          <li>
                            An adult (age 18+) who has one or more of the diseases specified in the law, 
                            and who is a resident of the State of Georgia;
                          </li>
                          <li>
                            Legal guardians of an adult who has one or more of the diseases specified in the law, 
                            and who is a resident of the State of Georgia;
                          </li>
                          <li>
                            Parents or legal guardians of a minor child who has one or more of the diseases 
                            specified in the law, and is a resident of Georgia or was born in Georgia.
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                  </FadeIn>
                </div>
                
                <FadeIn>
                  <div className="bg-genesis-purple/10 rounded-lg p-6 border border-genesis-purple/20">
                    <h3 className="text-xl font-bold mb-3 text-genesis-purple">Ready to Get Started?</h3>
                    <p className="text-gray-700 mb-4">
                      If you believe you qualify for Georgia's medical cannabis program, begin your 
                      registration process with Genesis Healthcare today.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <Link to="/registration">
                        <ButtonCustom>
                          Begin Registration
                        </ButtonCustom>
                      </Link>
                      <Link to="/contact">
                        <ButtonCustom variant="outline">
                          Contact Us
                        </ButtonCustom>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MedicalCannabis;
