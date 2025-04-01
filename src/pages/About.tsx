
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
                {/* Dr. Carla Neal-Haley */}
                <StaffProfile
                  name="Carla Y. Neal-Haley"
                  title="M.D."
                  bio="Dr. Neal-Haley specializes in internal medicine and pediatrics. She received her medical degree from the University of Pittsburgh School of Medicine in 1991. She completed her residency in internal medicine and pediatrics at Wayne State University and Detroit Medical Center."
                  expandedBio={`Being board certified in both internal medicine and pediatrics, Dr. Neal-Haley has a special interest in adolescent medicine, preventive health care, and obesity/metabolic syndrome. Dr. Neal-Haley opened Genesis Healthcare Associates P.C., after nine years at the Emory Clinic of Smyrna, where she was Medical Director for four years.

She served as Clinical Instructor of Pediatrics and Internal Medicine at Children's Hospital of Michigan and Wayne State University before moving to Atlanta in 1997.

She has 3 adult children and has served on the board of the Lovett School and as the Chief of staff at Emory Adventist Hospital. She currently holds an adjunct professor title at several Universities associated with her clinical teaching responsibilities for Medical and Nurse Practitioner students.`}
                  imagePath="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                />
                
                {/* Christine Wasilewski */}
                <StaffProfile
                  name="Christine Wasilewski"
                  title="FNP - BC"
                  bio="Christine Wasilewski cares for patients of all ages. She is originally from New Hampshire and moved to Georgia in 1996. She completed her Bachelor of Science Degree from the University of New Hampshire in 1996 and her Master of Science in Nursing from Georgia State University in 2001."
                  expandedBio={`She has specialized in primary care of adults and children since 2004 working with Dr. Carla Neal-Haley at the Emory Clinic as well as Genesis HCA. She has a special interest in preventative health care and pediatric and adolescent medicine. Prior to that, she cared for adults and children with cancer and blood disorders. 

Christine lives in Marietta, GA with her husband and two children. She is active in the community and serves on the Foundation Board at Kincaid Elementary School. When not at work she enjoys spending time running and relaxing with her family.`}
                  imagePath="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
                />
                
                {/* Crystal Johnson */}
                <StaffProfile
                  name="Crystal Johnson"
                  title="FNP - BC"
                  bio="Crystal Johnson is an award-winning, Board Certified Family Nurse Practitioner. She began her career in the cardiovascular intensive care unit as a Registered Nurse 16 years ago at Emory University Hospital Midtown. She received her Bachelor of Science degree in Nursing from Emory University. She received her Masters of Science degree and training as a Family Nurse Practitioner from Walden University in Minnesota in conjunction with Dr. Carla Neal-Haley of Genesis Healthcare."
                  expandedBio={`Crystal is the recipient of The Emory Medal. This is the highest honor presented to Emory Alumni for outstanding service. Crystal was part of the healthcare team at Emory University Hospital's Serious Health and Communicable Diseases Unit that successfully and safely treated patients with Ebola virus disease in 2014. She was one of the healthcare professionals honored by Time Magazine's "Person of the Year" and acknowledged by President Obama. She received the Emory School of Nursing Excellence in Nursing Award in 2015.

Crystal has a unique combination of strong nursing skills and strives to provide the best health care possible. She believes in building a long lasting and trusting relationship with her patients and families. She strives to acquire a comprehensive evaluation of every patient by taking time to listen and understand their particular needs. Her true desire is to enhance a positive healing experience and confidence to those in need.`}
                  imagePath="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
                />
                
                {/* Vonnie Cesar */}
                <StaffProfile
                  name="Vonnie Cesar"
                  title="MSN, APRN, FNP-BC"
                  bio="Vonnie Cesar is a Family Nurse Practitioner that cares for pediatric and adult patients across the lifespan. She began her career in healthcare as LPN (1991) and completed a series of nursing degrees which include an Associate of Science in Nursing (2005) from Excelsior College in Albany, New York; Bachelor of Science in Nursing with honors (2016) from the University of Texas at Arlington; Master of Science in Nursing (2020) from Walden University in Minnesota; Doctor of Nursing Practice Degree (expected 2025) from Nell Hodgson Woodruff School of Nursing at Emory University."
                  expandedBio={`Throughout her career she has mainly worked inpatient pediatrics, ambulatory care, and neonatal intensive care. She has been practicing as an APRN for the past three years in internal medicine/primary care and as adjunct clinical instructor and faculty for Nell Hodgson Woodruff School of Nursing at Emory University.

Vonnie is nationally certified by The American Academy of Nurse Practitioners and licensed to practice in the state of Georgia. She has a special interest in Preventive Health and Wellness, hypertension, diabetes, hematology, rare diseases, and obesity medicine. She strives to maintain a trusting, and caring relationship with her patients that includes making healthcare more equitable and inclusive for people of all sexes, sexual orientations, gender identities, and gender expressions. 

Vonnie and her husband, Brian live in the Atlanta area, have one grown daughter, Emily and a grandog, Violet. In her spare time, she enjoys traveling, cooking, genealogy and history.`}
                  imagePath="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop"
                />
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
