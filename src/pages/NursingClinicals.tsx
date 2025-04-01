
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import ButtonCustom from "@/components/ui/ButtonCustom";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Heart, Calendar } from "lucide-react";
import NursingBackground from "@/components/backgrounds/NursingBackground";

const NursingClinicals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schools = [
    "Emory School of Nursing",
    "Walden University",
    "US University",
    "Medical University of South Carolina Nursing school",
    "Purdue University School of Nursing"
  ];

  const studentForms = [
    { name: "Emergency Contact", path: "#emergency-contact" },
    { name: "Fee Letter Agreement", path: "#fee-letter" },
    { name: "Student Intake Questionnaire", path: "#intake-form" },
    { name: "Student Vaccination Immunization", path: "#vaccination" },
    { name: "Welcome Student Letter", path: "#welcome-letter" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-genesis-purple/10 to-white py-16">
          <NursingBackground />
          <div className="container-section relative">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold text-genesis-purple mb-6">Advanced Practice Nursing Clinicals</h1>
                <p className="text-xl text-gray-600 mb-6">
                  Supporting the next generation of healthcare professionals
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid md:grid-cols-12 gap-8">
              {/* Main Content Column */}
              <div className="md:col-span-8">
                {/* Program Overview */}
                <FadeIn>
                  <Card className="mb-8">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <GraduationCap className="text-genesis-purple mt-1" size={28} />
                        <div>
                          <h2 className="text-2xl font-bold text-genesis-purple mb-3">
                            Program Overview
                          </h2>
                          <p className="text-gray-700">
                            Genesis Healthcare Associates has established a history of supporting Advanced Practice Nurses by 
                            offering Clinical Nurses Practicums in a student-designed experience focusing on the role of the 
                            professional nurse in a variety of clinical practice specialties. These include: Internal medicine, 
                            pediatrics, family practice, and women's health. The purpose being to gain knowledge, skills, and 
                            attitudes surrounding quality (and safe) patient care. There is a nominal fee for these services.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <img 
                          src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                          alt="Advanced Practice Nursing" 
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <div className="mt-6 bg-genesis-purple/5 p-6 rounded-lg border border-genesis-purple/10">
                          <p className="text-gray-700">
                            <span className="font-semibold text-genesis-purple">Interested students</span> can contact us at{" "}
                            <a href="mailto:GenesisNPstudent@gmail.com" className="text-genesis-purple underline hover:text-genesis-lightPurple transition-colors">
                              GenesisNPstudent@gmail.com
                            </a>{" "}
                            for further information.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
                
                {/* About Our Program */}
                <FadeIn delay={100}>
                  <Card className="mb-8">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <Users className="text-genesis-purple mt-1" size={28} />
                        <div>
                          <h2 className="text-2xl font-bold text-genesis-purple mb-3">
                            About Our Advanced Nursing Clinicals
                          </h2>
                          <p className="text-gray-700">
                            Genesis Healthcare Associates is committed to supporting the professional training and 
                            development of nurse practitioner students. We offer a hands-on training experience with 
                            a variety of patients and personalized attention in assisting motivated registered nurses 
                            in their transition from bedside care to primary care provider.
                          </p>
                          <p className="text-gray-700 mt-4">
                            All students will have the opportunity to work with all of our providers while under the 
                            primary supervision of Dr. Carla Neal-Haley.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
                
                {/* Participating Schools */}
                <FadeIn delay={200}>
                  <Card className="mb-8">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <BookOpen className="text-genesis-purple mt-1" size={28} />
                        <div>
                          <h2 className="text-2xl font-bold text-genesis-purple mb-3">
                            Participating Schools
                          </h2>
                          <p className="text-gray-700 mb-4">
                            We are currently actively precepting students from the following schools:
                          </p>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {schools.map((school, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-genesis-purple"></div>
                                <span className="text-gray-700">{school}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
              
              {/* Sidebar Column */}
              <div className="md:col-span-4">
                <FadeIn delay={250}>
                  {/* Contact Card */}
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-genesis-purple mb-3 flex items-center gap-2">
                        <Heart size={18} />
                        Get Started
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Ready to begin your clinical experience with Genesis Healthcare? Contact us today to learn more about our program.
                      </p>
                      <ButtonCustom className="w-full" asChild>
                        <a href="mailto:GenesisNPstudent@gmail.com">
                          Contact Us
                        </a>
                      </ButtonCustom>
                    </CardContent>
                  </Card>
                  
                  {/* Student Forms */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-genesis-purple mb-3 flex items-center gap-2">
                        <Calendar size={18} />
                        Nursing Student Forms
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Download and complete these forms to start your clinical experience:
                      </p>
                      <div className="space-y-3">
                        {studentForms.map((form, index) => (
                          <a 
                            key={index}
                            href={form.path}
                            className="flex items-center justify-between p-3 rounded-md border border-gray-200 hover:bg-genesis-purple/5 hover:border-genesis-purple/20 transition-colors text-gray-700"
                          >
                            <span>{form.name}</span>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              className="text-genesis-purple"
                            >
                              <path d="M7 7h10v10" />
                              <path d="M7 17 17 7" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-16">
              <FadeIn>
                <div className="bg-genesis-purple/10 rounded-lg p-8 border border-genesis-purple/20 text-center">
                  <h3 className="text-xl font-bold mb-4 text-genesis-purple">Start Your Clinical Experience Today</h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Join our program to gain valuable clinical experience in various specialties.
                    We provide a supportive environment for nurse practitioners to develop their skills.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <ButtonCustom asChild>
                      <a href="mailto:GenesisNPstudent@gmail.com">
                        Apply Now
                      </a>
                    </ButtonCustom>
                    <ButtonCustom variant="outline" asChild>
                      <Link to="/about">
                        Learn More About Us
                      </Link>
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

export default NursingClinicals;
