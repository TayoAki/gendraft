import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import { UserCircle, Award, CalendarDays, MapPin, Phone, AlarmClock, HeartPulse, Activity, Brain, Microscope, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactSection from "@/components/sections/ContactSection";
import ButtonCustom from "@/components/ui/ButtonCustom";
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { teamMembers } from "@/data";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-genesis-purple/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-genesis-lightPurple/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-section relative py-16">
            <FadeIn className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Genesis</h1>
              <p className="text-xl text-gray-600 mb-8">A high-touch, family-centered healthcare experience.</p>
              <div className="flex justify-center gap-4 mt-6">
                <Link to="/registration">
                  <ButtonCustom>Become a Patient</ButtonCustom>
                </Link>
                <Link to="/direct-primary-care">
                  <ButtonCustom variant="outline">Learn About DPC</ButtonCustom>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Genesis story section */}
        <section className="py-12 bg-white">
          <div className="container-section">
            <FadeIn>
              <div className="bg-genesis-purple text-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">The Start Of Genesis...</h2>
                <p className="text-white/90">
                  Genesis Healthcare Associates P.C. was founded in 2006 as part of a vision that Dr. Carla Neal-Haley had for a high-touch, family-centered care experience. The vision has evolved to bring us to our current reality: Genesis offers an excellent patient experience, combined with high clinical competence provided by a highly engaged healthcare team that is accountable to you and your family. Genesis actively works to make the patient an integral part of their own care. We realize that each patient must be empowered to take charge of their own healthcare. We realize that our healthcare team and each patient we serve must work together to maintain and improve the healthcare condition of every patient.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Medical Services section */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-8">Our Medical Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard 
                  icon={<HeartPulse className="h-8 w-8 text-genesis-purple" />}
                  title="Preventive Care"
                  description="Regular check-ups, vaccinations, and screenings to keep you healthy."
                />
                <ServiceCard 
                  icon={<Activity className="h-8 w-8 text-genesis-purple" />}
                  title="Chronic Disease Management"
                  description="Comprehensive care for diabetes, hypertension, and other conditions."
                />
                <ServiceCard 
                  icon={<Brain className="h-8 w-8 text-genesis-purple" />}
                  title="Mental Health"
                  description="Support for anxiety, depression, and other mental health concerns."
                />
                <ServiceCard 
                  icon={<Microscope className="h-8 w-8 text-genesis-purple" />}
                  title="Lab Services"
                  description="On-site laboratory testing for faster diagnosis and treatment."
                />
              </div>
              <div className="text-center mt-8">
                <Link to="/direct-primary-care">
                  <ButtonCustom>
                    <Stethoscope className="w-5 h-5 mr-2" />
                    View All Services
                  </ButtonCustom>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Team section with improved styling */}
        <section className="py-16 bg-white">
          <div className="container-section">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-6">Our Healthcare Team</h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Meet our dedicated team of healthcare professionals committed to providing you with exceptional care.
              </p>
              
              <div className="space-y-12">
                {teamMembers.map(member => (
                  <StaffProfile
                    key={member.id}
                    name={member.name}
                    title={member.title}
                    bio={member.bio}
                    expandedBio={member.expandedBio}
                    imagePath={member.imagePath}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Add Contact Section to the About page */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

// Service Card component for Medical Services section
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-genesis-purple/10 p-4 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

// Staff profile component with enhanced styling
interface StaffProfileProps {
  name: string;
  title: string;
  bio: string;
  expandedBio: string;
  imagePath: string;
}

const StaffProfile: React.FC<StaffProfileProps> = ({
  name,
  title,
  bio,
  expandedBio,
  imagePath
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 border-4 border-genesis-purple/20">
          <img 
            src={imagePath} 
            alt={name} 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <p className="text-genesis-purple font-medium mb-4">{title}</p>
          
          <p className="text-gray-700">{bio}</p>
          
          <button 
            className="flex items-center mt-4 text-sm text-genesis-purple hover:underline group focus:outline-none focus:ring-2 focus:ring-genesis-purple/40 focus:ring-offset-2 rounded-sm"
            aria-label={`Read more about ${name}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <UserCircle className="w-4 h-4 mr-1" />
            <span>{isExpanded ? "See less" : "See full bio"}</span>
            <span className={`ml-1 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}>→</span>
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-6 pt-4 border-t border-gray-100 animate-accordion-down">
          <div className="flex gap-2 items-start mb-3">
            <Award className="w-5 h-5 text-genesis-purple flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-genesis-purple">Full Biography</h4>
              <div className="text-gray-700 space-y-2 whitespace-pre-line">
                {expandedBio}
              </div>
              <div className="pt-3 flex gap-2 items-center text-xs text-gray-500">
                <CalendarDays className="w-3 h-3" />
                <span>Genesis Healthcare team member</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
