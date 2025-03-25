
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DirectPrimaryCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-genesis-purple mb-4">
                Take advantage of Direct Primary Care!
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Genesis Healthcare Associates is now offering Direct Primary Care (DPC) to continue the quality, accessible care we are known for.
              </p>
              <Button 
                className="bg-genesis-purple hover:bg-genesis-lightPurple text-white px-8 py-6 text-lg rounded-md"
                onClick={() => {
                  const enrollSection = document.getElementById('enroll');
                  enrollSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More About DPC
              </Button>
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
        <section id="enroll" className="py-16 bg-white">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-6">
                Enroll in DPC today!
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Existing Genesis Healthcare patients can enroll in this novel program.
              </p>
              <div className="bg-genesis-purple/5 rounded-xl p-8 border border-genesis-purple/20 mb-8">
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-genesis-purple mb-2">Individual Rate</h3>
                    <p className="text-3xl font-bold text-genesis-purple mb-1">$199<span className="text-base font-normal">/month</span></p>
                    <p className="text-sm text-gray-600">Starting price</p>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-genesis-purple mb-2">Family Plans</h3>
                    <p className="text-lg font-medium text-genesis-purple mb-1">Discounted Rates</p>
                    <p className="text-sm text-gray-600">Contact for details</p>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-genesis-purple mb-2">Annual Payment</h3>
                    <p className="text-lg font-medium text-genesis-purple mb-1">Discounted Options</p>
                    <p className="text-sm text-gray-600">Save by paying annually</p>
                  </div>
                </div>
                <Button className="bg-genesis-purple hover:bg-genesis-lightPurple text-white px-8 py-2 text-lg rounded-md w-full md:w-auto">
                  Contact Us to Enroll
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - Placeholder */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-6">
                Dr. Neal-Haley Explains Direct Primary Care
              </h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl flex items-center justify-center mb-8">
                <div className="text-gray-500">
                  <p className="text-lg">Video coming soon</p>
                </div>
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
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
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
                <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
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
              <p className="text-lg text-gray-700 mb-8">
                One hour appointments are available Monday through Friday from 9 a.m. - 4 p.m.
              </p>
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
