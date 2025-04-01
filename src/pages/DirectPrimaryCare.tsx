
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DirectPrimaryCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Hero Section with Video Component */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container-section">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl font-bold text-genesis-purple mb-4">
                  Take advantage of Direct Primary Care!
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Genesis Healthcare Associates is now offering Direct Primary Care (DPC) to continue the quality, accessible care we are known for.
                </p>
              </div>
              
              {/* Video Component moved here */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-genesis-purple/90 to-genesis-lightPurple/90 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-genesis-purple rounded-full flex items-center justify-center">
                        <Video className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Dr. Neal-Haley Video</h3>
                    <Button className="bg-white text-genesis-purple hover:bg-gray-100">
                      Video Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container-section">
            <div className="bg-genesis-purple/5 rounded-xl p-8 border border-genesis-purple/20">
              <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-6 text-center">
                All with Reduced Overall Costs
              </h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                By focusing on preventative care and reducing the need for specialist and emergency services, 
                this model can lead to lower overall healthcare costs for patients over time.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-6 text-center">
                20 Years of Excellence in Healthcare
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                For nearly 20 years, Genesis has continued to offer excellent patient experience, 
                combined with high clinical competence from its highly engaged healthcare team.
              </p>
              <p className="text-lg text-gray-700 mb-8 text-center">
                By enrolling, you will receive direct communication and streamlined access to a dedicated provider 
                without any insurance claims filing issues or required paperwork.
              </p>
            </div>
          </div>
        </section>

        {/* Enrollment Section */}
        <section className="py-16 bg-white">
          <div className="container-section">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-6">
                Enroll in DPC today!
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Existing Genesis Healthcare patients can enroll in this novel program.
              </p>
              <div className="bg-genesis-purple/5 rounded-xl p-8 border border-genesis-purple/20 mb-8">
                <div className="space-y-4 mb-6">
                  <p className="text-xl font-semibold text-genesis-purple">Individual rates: starting at $199/month</p>
                  <p className="text-lg text-gray-700">Discounted family plans and discounted annual payment options available</p>
                </div>
                <Button className="bg-genesis-purple hover:bg-genesis-lightPurple text-white px-8 py-2 text-lg rounded-md">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container-section">
            <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-8 text-center">
              Services included in Direct Primary Care plan:
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow hover:border-genesis-purple/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-genesis-purple h-6 w-6 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{service}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience the Difference Section */}
        <section className="py-16 bg-genesis-purple text-white">
          <div className="container-section">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Experience the difference:
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {differences.map((item, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <p className="text-white text-center font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hours Section */}
        <section className="py-16 bg-white">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-6">
                Availability
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="text-genesis-purple h-6 w-6" />
                <p className="text-lg text-gray-700">
                  One hour appointments are available Monday through Friday from 9 a.m. - 4 p.m.
                </p>
              </div>
              <Button className="bg-genesis-purple hover:bg-genesis-lightPurple text-white px-8 py-2 text-lg rounded-md">
                Schedule an Appointment
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Services included in DPC
const services = [
  "Comprehensive annual physical exams.",
  "Simple wound care.",
  "No co-pay for office visits.",
  "Chronic disease management, adjusting treatments and providing continuous patient and caregiver support.",
  "Basic in-office procedures and tests at no extra cost.",
  "On-demand telemedicine consultations, as needed.",
  "Same or next-day urgent care appointments.",
  "Mental health and wellness recommendations.",
  "Direct communication with her DPC team via a dedicated phone line or text / email via the Healow portal."
];

// Experience the difference items
const differences = [
  "Membership-based personalized care",
  "More provider time",
  "Dedicated DPC phone line and staff",
  "Elimination of in-office insurance mandated fee collection (co-pay and deductible)"
];

export default DirectPrimaryCare;
