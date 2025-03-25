
import React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Contact Information</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our facility or connect with us virtually. We're here to help with all your healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <FadeIn direction="left" className="h-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
              <div className="relative w-full h-72">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.3853536657377!2d-84.48196368478715!3d33.86654388065408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f505c6ff0cf34f%3A0x9e0195344ebb7451!2s3200%20Highlands%20Pkwy%20SE%2C%20Smyrna%2C%20GA%2030082!5e0!3m2!1sen!2sus!4v1620144321645!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  className="absolute inset-0"
                  title="Genesis Healthcare Location Map"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-genesis-purple/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-genesis-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-700">3200 Highlands Pkwy SE</p>
                    <p className="text-gray-700">Smyrna, GA 30082</p>
                    <a 
                      href="https://maps.google.com/?q=3200+Highlands+Pkwy+SE,+Smyrna,+GA+30082" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-genesis-purple font-medium hover:underline mt-2 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-genesis-purple/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-genesis-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">(678) 555-1234</p>
                    <p className="text-sm text-gray-500">For appointments and inquiries</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <div className="bg-genesis-purple text-white rounded-xl p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold">Lab Appointments</h3>
              </div>
              <div className="mt-2 space-y-2 flex-grow">
                <p><span className="font-medium">AM:</span> 8 AM to 12:30 PM</p>
                <p><span className="font-medium">PM:</span> 1:30 PM to 4:30 PM</p>
              </div>
              <a
                href="tel:+16785551234"
                className="mt-4 inline-flex items-center justify-center bg-white text-genesis-purple font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Call for Booking
              </a>
            </div>

            <div className="bg-genesis-lightPurple text-white rounded-xl p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold">Saturday Appointments</h3>
              </div>
              <div className="mt-2 space-y-2 flex-grow">
                <p className="font-medium">8AM to 12PM</p>
                <p className="text-sm">Available on select dates:</p>
                <p>2/10 | 3/9 | 4/13 | 5/18</p>
              </div>
              <a
                href="mailto:appointments@genesishealthcare.com"
                className="mt-4 inline-flex items-center justify-center bg-white text-genesis-lightPurple font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Email for Info
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 col-span-1 md:col-span-2 flex flex-col">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 mr-3 text-genesis-purple" />
                <h3 className="text-xl font-semibold text-gray-900">Working Hours</h3>
              </div>
              <div className="mt-2 space-y-3 flex-grow">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">8AM to 5PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">8AM to 12PM (Select dates)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">CLOSED</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-500 text-sm">
                  * Emergency services available 24/7 through our partner hospitals.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
