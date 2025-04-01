
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import ButtonCustom from "@/components/ui/ButtonCustom";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Heart } from "lucide-react";

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-genesis-purple/10 to-white py-16">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold text-genesis-purple mb-6">Community Initiatives</h1>
                <p className="text-xl text-gray-600 mb-6">
                  Making a positive impact in our community through partnerships and outreach.
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
                {/* Partnership Section */}
                <FadeIn>
                  <Card className="mb-8">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <Users className="text-genesis-purple mt-1" size={28} />
                        <div>
                          <h2 className="text-2xl font-bold text-genesis-purple mb-3">
                            Our Community Partnerships
                          </h2>
                          <p className="text-gray-700">
                            In partnership with 40 Mustard Seed - a non-profit run by Gabriel Tobin.
                            Teachers had a Chik-Fil-A breakfast during pre-planning and students
                            received backpacks for Monday August 1st School Start.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <img 
                          src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                          alt="Community Partnership" 
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                          <div className="bg-genesis-purple/5 p-4 rounded-lg border border-genesis-purple/10">
                            <h3 className="font-semibold text-genesis-purple mb-2">
                              Teacher Support Program
                            </h3>
                            <p className="text-gray-700">
                              We provide resources and appreciation events for local teachers who are making a difference in our community.
                            </p>
                          </div>
                          <div className="bg-genesis-purple/5 p-4 rounded-lg border border-genesis-purple/10">
                            <h3 className="font-semibold text-genesis-purple mb-2">
                              Student Backpack Initiative
                            </h3>
                            <p className="text-gray-700">
                              We help prepare students for success by providing necessary school supplies in partnership with local organizations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
                
                {/* Recommended Reading Section */}
                <FadeIn delay={100}>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <BookOpen className="text-genesis-purple mt-1" size={28} />
                        <div>
                          <h2 className="text-2xl font-bold text-genesis-purple mb-3">
                            Recommended Reading
                          </h2>
                          <p className="text-gray-700">
                            Below you will find a curated list of recommended readings on the topic of healthcare.
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mt-6">
                        <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <h3 className="font-semibold text-genesis-purple">The Body Keeps the Score</h3>
                          <p className="text-gray-600 text-sm">By Bessel van der Kolk</p>
                          <p className="text-gray-700 mt-2">
                            Explores how trauma affects the body and mind, and innovative treatments that help patients reclaim their lives.
                          </p>
                        </div>
                        
                        <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <h3 className="font-semibold text-genesis-purple">How Not to Die</h3>
                          <p className="text-gray-600 text-sm">By Michael Greger, MD</p>
                          <p className="text-gray-700 mt-2">
                            Examines the role diet plays in preventing, treating, and reversing diseases.
                          </p>
                        </div>
                        
                        <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <h3 className="font-semibold text-genesis-purple">Being Mortal</h3>
                          <p className="text-gray-600 text-sm">By Atul Gawande</p>
                          <p className="text-gray-700 mt-2">
                            A thoughtful exploration of aging, death, and the goals of medicine in enhancing life.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
              
              {/* Sidebar Column */}
              <div className="md:col-span-4">
                <FadeIn delay={200}>
                  {/* Get Involved Card */}
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-genesis-purple mb-3 flex items-center gap-2">
                        <Heart size={18} />
                        Get Involved
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Want to contribute to our community initiatives? There are many ways you can help make a difference.
                      </p>
                      <ButtonCustom className="w-full">
                        Contact Us
                      </ButtonCustom>
                    </CardContent>
                  </Card>
                  
                  {/* Upcoming Events */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-genesis-purple mb-3">Upcoming Events</h3>
                      <div className="space-y-4">
                        <div className="border-b border-gray-100 pb-3">
                          <p className="font-medium text-genesis-purple">Health Education Workshop</p>
                          <p className="text-gray-600 text-sm">October 15, 2024 • 10:00 AM</p>
                        </div>
                        <div className="border-b border-gray-100 pb-3">
                          <p className="font-medium text-genesis-purple">Community Health Fair</p>
                          <p className="text-gray-600 text-sm">November 5, 2024 • 9:00 AM</p>
                        </div>
                        <div>
                          <p className="font-medium text-genesis-purple">Holiday Donation Drive</p>
                          <p className="text-gray-600 text-sm">December 1-20, 2024</p>
                        </div>
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
                  <h3 className="text-xl font-bold mb-4 text-genesis-purple">Join Us in Making a Difference</h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    We believe in the power of community to create positive change. Whether through volunteering, 
                    donations, or spreading awareness, every contribution helps us build a healthier community.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <ButtonCustom>
                      Volunteer Opportunities
                    </ButtonCustom>
                    <ButtonCustom variant="outline">
                      Make a Donation
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

export default Community;
