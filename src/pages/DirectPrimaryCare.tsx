
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Clock, Users, Heart, Phone, Video, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const DirectPrimaryCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState(1);
  const [showFullTestimonial, setShowFullTestimonial] = useState(null);

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
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-genesis-purple hover:bg-genesis-lightPurple text-white px-8 py-6 text-lg rounded-md"
                  onClick={() => {
                    const enrollSection = document.getElementById('enroll');
                    enrollSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn About DPC Benefits
                </Button>
                <Button 
                  variant="outline"
                  className="border-genesis-purple text-genesis-purple hover:bg-genesis-purple/5 px-8 py-6 text-lg rounded-md"
                  onClick={() => {
                    const enrollSection = document.getElementById('comparison');
                    enrollSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  See How DPC Compares
                </Button>
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

        {/* Comparison Chart Section */}
        <section id="comparison" className="py-16 bg-gray-50">
          <div className="container-section">
            <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-8 text-center">
              Traditional Insurance vs. Direct Primary Care
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-genesis-purple text-white">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Traditional Insurance</th>
                    <th className="py-4 px-6 text-center bg-genesis-lightPurple">Direct Primary Care</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-6 font-medium">{item.feature}</td>
                      <td className="py-3 px-6 text-center">{item.traditional}</td>
                      <td className="py-3 px-6 text-center bg-genesis-purple/5">{item.dpc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white">
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

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-8 text-center">
              What Our DPC Members Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 flex-grow">
                        {showFullTestimonial === index 
                          ? testimonial.text 
                          : `${testimonial.text.substring(0, 150)}${testimonial.text.length > 150 ? '...' : ''}`}
                      </p>
                      {testimonial.text.length > 150 && (
                        <button 
                          onClick={() => setShowFullTestimonial(showFullTestimonial === index ? null : index)}
                          className="text-genesis-purple font-medium mb-4 hover:underline"
                        >
                          {showFullTestimonial === index ? 'Show less' : 'Read more'}
                        </button>
                      )}
                      <div className="flex items-center mt-auto">
                        <div className="w-10 h-10 rounded-full bg-genesis-purple text-white flex items-center justify-center font-bold flex-shrink-0">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">DPC Member since {testimonial.memberSince}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Section with Process */}
        <section id="enroll" className="py-16 bg-white">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-6 text-center">
                Enroll in DPC today!
              </h2>
              <p className="text-lg text-gray-700 mb-4 text-center">
                Existing Genesis Healthcare patients can enroll in this novel program.
              </p>
              
              {/* Enrollment Steps */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-genesis-purple mb-6 text-center">
                  Simple 3-Step Enrollment Process
                </h3>
                <div className="relative">
                  <div className="hidden md:block absolute left-0 right-0 top-24 h-1 bg-genesis-purple/20 z-0"></div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {enrollmentSteps.map((step, index) => (
                      <div key={index} className="flex flex-col items-center text-center relative z-10">
                        <div className="w-16 h-16 rounded-full bg-genesis-purple text-white flex items-center justify-center text-2xl font-bold mb-4">
                          {index + 1}
                        </div>
                        <h4 className="text-lg font-semibold text-genesis-purple mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Pricing Cards */}
              <div className="bg-genesis-purple/5 rounded-xl p-8 border border-genesis-purple/20 mb-8">
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                    <div className="absolute -top-3 right-0 left-0 mx-auto w-max bg-genesis-purple text-white px-4 py-1 text-sm rounded-full">
                      Most Popular
                    </div>
                    <h3 className="text-xl font-semibold text-genesis-purple mb-2 mt-3">Individual Rate</h3>
                    <p className="text-3xl font-bold text-genesis-purple mb-1">$199<span className="text-base font-normal">/month</span></p>
                    <p className="text-sm text-gray-600 mb-4">Starting price</p>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="text-genesis-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>All basic DPC services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-genesis-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Unlimited primary care visits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-genesis-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Direct provider communication</span>
                      </li>
                    </ul>
                    <Button className="bg-genesis-purple hover:bg-genesis-lightPurple text-white px-6 py-2 text-base rounded-md w-full">
                      Choose Individual Plan
                    </Button>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                    <h3 className="text-xl font-semibold text-genesis-purple mb-2">Family Plans</h3>
                    <p className="text-3xl font-bold text-genesis-purple mb-1">$349<span className="text-base font-normal">/month</span></p>
                    <p className="text-sm text-gray-600 mb-4">Up to 4 family members</p>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="text-genesis-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>All individual benefits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-genesis-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Coverage for entire family</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-genesis-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Family health coordination</span>
                      </li>
                    </ul>
                    <Button className="bg-genesis-purple hover:bg-genesis-lightPurple text-white px-6 py-2 text-base rounded-md w-full">
                      Choose Family Plan
                    </Button>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                    <h3 className="text-xl font-semibold text-genesis-purple mb-2">Annual Payment</h3>
                    <p className="text-3xl font-bold text-genesis-purple mb-1">15%<span className="text-base font-normal"> off</span></p>
                    <p className="text-sm text-gray-600 mb-4">Pay yearly and save</p>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="text-genesis-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>All standard benefits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-genesis-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Significant cost savings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-genesis-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Annual health review</span>
                      </li>
                    </ul>
                    <Button className="bg-genesis-purple hover:bg-genesis-lightPurple text-white px-6 py-2 text-base rounded-md w-full">
                      Choose Annual Payment
                    </Button>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-genesis-purple mb-4 text-center">Get More Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input id="email" type="email" placeholder="Your email address" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                    <div>
                      <label htmlFor="memberStatus" className="block text-sm font-medium text-gray-700 mb-1">Current Patient?</label>
                      <select id="memberStatus" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                        <option value="">Please select</option>
                        <option value="yes">Yes, I'm a current patient</option>
                        <option value="no">No, I'm new to Genesis</option>
                      </select>
                    </div>
                  </div>
                  <Button className="bg-genesis-purple hover:bg-genesis-lightPurple text-white px-6 py-2 text-base rounded-md w-full">
                    Request Information
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - Improved */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-6">
                Dr. Neal-Haley Explains Direct Primary Care
              </h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl flex items-center justify-center mb-8 overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-genesis-purple/90 to-genesis-lightPurple/90 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-genesis-purple rounded-full flex items-center justify-center">
                        <Video className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Watch Dr. Neal-Haley's DPC Explanation</h3>
                    <p className="max-w-md mx-auto mb-4">Learn how Direct Primary Care can transform your healthcare experience in this informative video.</p>
                    <Button className="bg-white text-genesis-purple hover:bg-gray-100">
                      Video Coming Soon
                    </Button>
                  </div>
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

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <h2 className="text-2xl md:text-3xl font-bold text-genesis-purple mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300"
                  >
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left font-medium text-genesis-purple hover:bg-genesis-purple/5"
                      onClick={() => setActiveTab(activeTab === index ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="transition-transform duration-300 transform">
                        {activeTab === index ? '−' : '+'}
                      </span>
                    </button>
                    <div 
                      className={`px-4 overflow-hidden transition-all duration-300 ${
                        activeTab === index ? 'max-h-96 pb-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
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

// Comparison data
const comparisonData = [
  {
    feature: "Access to Doctor",
    traditional: "Limited appointments, often weeks of waiting",
    dpc: "Same or next day appointments, direct access"
  },
  {
    feature: "Appointment Length",
    traditional: "15-20 minutes, rushed",
    dpc: "60-minute appointments, thorough care"
  },
  {
    feature: "Communication",
    traditional: "Through office staff, limited direct contact",
    dpc: "Direct access via phone, text, or email"
  },
  {
    feature: "Costs",
    traditional: "Co-pays, deductibles, unpredictable costs",
    dpc: "Transparent monthly fee, no surprise bills"
  },
  {
    feature: "Focus",
    traditional: "Treating illness",
    dpc: "Preventing illness, overall wellness"
  },
  {
    feature: "Paperwork",
    traditional: "Significant administrative burden",
    dpc: "Minimal paperwork, focus on care"
  }
];

// Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Switching to DPC was the best healthcare decision I've made. With my chronic condition, I need regular check-ins, and now I can reach my doctor directly without waiting weeks for appointments. The comprehensive care and personal attention have dramatically improved my quality of life.",
    memberSince: "2022"
  },
  {
    name: "Michael Rodriguez",
    text: "As a busy professional with a family, DPC has been a game-changer. No more taking time off work to sit in waiting rooms! My whole family gets the care they need when they need it, and the monthly cost is actually less than what we were paying with traditional insurance co-pays.",
    memberSince: "2021"
  },
  {
    name: "Eleanor Thompson",
    text: "At my age, I have complex health needs that require coordination between specialists. My DPC doctor takes the time to understand the whole picture and advocates for me with other providers. The peace of mind is worth every penny of the membership fee.",
    memberSince: "2023"
  }
];

// FAQ data
const faqs = [
  {
    question: "What is Direct Primary Care (DPC)?",
    answer: "Direct Primary Care is a membership-based healthcare model where patients pay a monthly or annual fee directly to their primary care provider. This fee covers all or most primary care services, including clinical, laboratory, and consultative services, as well as care coordination and comprehensive care management."
  },
  {
    question: "Do I still need health insurance if I join DPC?",
    answer: "While DPC covers your primary care needs, we recommend maintaining a high-deductible health insurance plan for catastrophic events, hospitalizations, and specialist care. DPC is not insurance but complements your existing coverage by providing affordable primary care."
  },
  {
    question: "What's included in the membership fee?",
    answer: "Your membership fee covers comprehensive annual physical exams, chronic disease management, simple wound care, basic in-office procedures and tests, on-demand telemedicine consultations, same or next-day urgent care appointments, and direct communication with your DPC team."
  },
  {
    question: "How do I communicate with my doctor?",
    answer: "DPC members receive direct access to their healthcare team through a dedicated phone line, text messaging, email via the Healow portal, and telemedicine consultations, allowing for quick and convenient communication."
  },
  {
    question: "Can my whole family join?",
    answer: "Yes! We offer family plans at discounted rates. Each family member will receive the same comprehensive care and benefits as individual members."
  },
  {
    question: "What if I need to see a specialist?",
    answer: "Your DPC provider will coordinate specialist care when needed. While specialist visits are not covered by the DPC membership fee, your provider will help navigate referrals and follow up on specialist recommendations."
  }
];

// Enrollment steps
const enrollmentSteps = [
  {
    title: "Contact Us",
    description: "Fill out our enrollment form or call our office to express interest in our DPC program."
  },
  {
    title: "Consultation",
    description: "Schedule a meet-and-greet with your potential DPC provider to discuss your health needs and goals."
  },
  {
    title: "Join & Begin",
    description: "Complete membership paperwork, set up your payment plan, and start experiencing the benefits of DPC."
  }
];

export default DirectPrimaryCare;
