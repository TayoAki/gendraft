
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import ButtonCustom from "@/components/ui/ButtonCustom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Flask, Pill, AlertCircle } from "lucide-react";

const Registration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState<'services' | 'policies'>('services');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-genesis-purple/10 to-white py-16">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold text-genesis-purple mb-6">Registration</h1>
                <p className="text-xl text-gray-600 mb-6">
                  Everything you need to know before your visit.
                </p>
                <p className="text-lg font-medium text-genesis-purple">
                  Take charge of your health today!
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container-section">
            {/* Introduction */}
            <div className="mb-12 max-w-3xl mx-auto">
              <FadeIn>
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-genesis-purple mb-4 text-center">
                      Learn All About Registering To Become A Patient
                    </h2>
                    <p className="text-gray-700 text-center">
                      Before you arrive please be sure to review our office policies and procedures, 
                      registration forms, and our list of services.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
            
            {/* Tabs and Content */}
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                  <p className="text-center text-gray-700 mb-4">Toggle to view our services, policies and procedures</p>
                  <div className="flex justify-center gap-4">
                    <ButtonCustom 
                      variant={activeTab === 'services' ? 'primary' : 'outline'}
                      onClick={() => setActiveTab('services')}
                      className="min-w-32"
                    >
                      Our Services
                    </ButtonCustom>
                    <ButtonCustom 
                      variant={activeTab === 'policies' ? 'primary' : 'outline'}
                      onClick={() => setActiveTab('policies')}
                      className="min-w-32"
                    >
                      Policies and Procedures
                    </ButtonCustom>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {activeTab === 'services' ? (
                    <div className="space-y-6">
                      <ServiceCard
                        title="Primary Care Services"
                        description="Our comprehensive primary care services include physical exams, preventive care, chronic disease management, and more."
                        icon={<FileText className="text-genesis-purple" size={24} />}
                      />
                      <ServiceCard
                        title="Medical Cannabis Evaluations"
                        description="We provide evaluations for patients who may benefit from medical cannabis treatment according to Georgia state law."
                        icon={<FileText className="text-genesis-purple" size={24} />}
                      />
                      <ServiceCard
                        title="Direct Primary Care"
                        description="Our direct primary care model offers personalized healthcare without the constraints of traditional insurance."
                        icon={<FileText className="text-genesis-purple" size={24} />}
                      />
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <PolicyCard
                        title="Pre-Visit Labs"
                        icon={<Flask />}
                        highlight="If your labs are not available at the time of your visit, you may be asked to reschedule or make a lab only follow-up visit."
                      >
                        <p>All patients are required to get their labs in advance for physical and routine follow-up.</p>
                        <p>Please let our associate know the reason for your visit and the nature of your chronic problems when you make your appointments so we can better serve you.</p>
                        <p>Labs should be drawn 3-5 days prior to visit.</p>
                      </PolicyCard>
                      
                      <PolicyCard
                        title="Lab Results"
                        icon={<FileText />}
                        highlight="Please make sure you make your follow-up appointment at your visit or immediately after your special testing is done."
                      >
                        <p>Genesis HCA only mails results on pap smears and mammograms.</p>
                        <p>All other labs should be reviewed with providers in the context of a visit.</p>
                        <p>This allows for more accurate communication.</p>
                        <p>Patients can ask all of their questions and an appropriate follow-up plan can be made.</p>
                      </PolicyCard>
                      
                      <PolicyCard
                        title="Medicine Refill"
                        icon={<Pill />}
                        highlight="Please make your medication refill appointments when you fill your last prescription at the pharmacy."
                      >
                        <p>Genesis HCA does not do phone or fax refills.</p>
                        <p>We will give you enough refills at your visit to get you to your next visit.</p>
                        <p>This allows for accuracy in dosing, often lost or confused over the phone.</p>
                        <p>It also makes sure that you get proper lab and side effect monitoring.</p>
                      </PolicyCard>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
            
            {/* Call to Action */}
            <div className="mt-16 max-w-3xl mx-auto">
              <FadeIn>
                <div className="bg-genesis-purple/10 rounded-lg p-8 border border-genesis-purple/20 text-center">
                  <h3 className="text-xl font-bold mb-4 text-genesis-purple">Ready to Get Started?</h3>
                  <p className="text-gray-700 mb-6">
                    Download and complete our registration forms before your visit to save time.
                  </p>
                  <div className="flex justify-center gap-4">
                    <ButtonCustom>
                      Download Registration Forms
                    </ButtonCustom>
                    <ButtonCustom variant="outline">
                      Contact Us
                    </ButtonCustom>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="mt-1">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-genesis-purple mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface PolicyCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  highlight: string;
}

const PolicyCard = ({ title, icon, children, highlight }: PolicyCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <div className="flex items-center gap-3">
          <div className="text-genesis-purple">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-3">
        <div className="space-y-2 text-gray-700">
          {children}
        </div>
        <div className="mt-4 bg-genesis-purple/5 p-4 border-l-4 border-genesis-purple rounded">
          <div className="flex items-start gap-2">
            <AlertCircle className="text-genesis-purple shrink-0 mt-0.5" size={18} />
            <p className="text-genesis-purple font-medium">{highlight}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Registration;
