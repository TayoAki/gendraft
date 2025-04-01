
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import ButtonCustom from "../ui/ButtonCustom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, Bell, Calendar } from "lucide-react";

// Announcements items for the carousel
const announcements = [
  {
    id: 1,
    title: "New Telehealth Services",
    description: "Connect with our healthcare professionals from the comfort of your home.",
    image: "/lovable-uploads/53a93b24-c109-459a-92d6-3159910c2b00.png",
    date: "May 15, 2023",
    link: "/services/telehealth"
  },
  {
    id: 2,
    title: "COVID-19 Vaccination Available",
    description: "Schedule your vaccination appointment today. Walk-ins also welcome.",
    image: "https://images.unsplash.com/photo-1584634731131-8dd47f35a3a1?q=80&w=1000&auto=format&fit=crop",
    date: "June 2, 2023",
    link: "/resources/covid"
  },
  {
    id: 3,
    title: "Mental Health Support Groups",
    description: "Weekly support groups now available. Join us every Wednesday at 6pm.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    date: "April 28, 2023",
    link: "/services/mental-health"
  }
];

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-genesis-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-genesis-lightPurple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-section relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeIn direction="left" className="space-y-6">
            <div className="inline-block rounded-full bg-genesis-purple/10 px-3 py-1 text-sm font-medium text-genesis-purple">
              Excellence in Healthcare
            </div>
            <h1 className="font-bold">
              <span className="text-gray-900">GENESIS</span>
              <br />
              <span className="text-gradient">HEALTHCARE</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Professional healthcare services designed around your needs.
              Experience personalized care with our team of experts.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://mycw220.ecwcloud.com/portal26586/jsp/100mp/login_otp.jsp" target="_blank" rel="noopener noreferrer">
                <ButtonCustom size="lg">
                  Patient Portal Access
                </ButtonCustom>
              </a>
              <Link to="/registration">
                <ButtonCustom variant="outline" size="lg">
                  New Patient Registration
                </ButtonCustom>
              </Link>
            </div>
          </FadeIn>
          
          <FadeIn 
            direction="right" 
            delay={200}
            className="relative order-first md:order-last"
          >
            <div className="p-1 rounded-2xl bg-gradient-to-br from-genesis-purple/20 to-genesis-lightPurple/20">
              <Carousel className="w-full max-w-xl mx-auto rounded-xl overflow-hidden">
                <CarouselContent>
                  {announcements.map((item) => (
                    <CarouselItem key={item.id}>
                      <Card className="border-0 bg-transparent">
                        <CardContent className="p-0">
                          <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-lg">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute top-4 left-4 flex items-center space-x-2">
                              <div className="flex items-center text-xs font-medium text-white/90 bg-genesis-purple/80 px-3 py-1 rounded-full">
                                <Bell className="h-3 w-3 mr-1.5" />
                                <span>Announcement</span>
                              </div>
                              <div className="flex items-center text-xs text-white/90 bg-black/30 px-2 py-1 rounded-full">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{item.date}</span>
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <h3 className="text-xl font-bold mb-2 leading-tight">{item.title}</h3>
                              <p className="mb-4 text-sm text-gray-200 line-clamp-2">{item.description}</p>
                              <Link 
                                to={item.link}
                                className="inline-flex items-center text-sm font-medium text-white bg-genesis-purple/80 hover:bg-genesis-purple transition-colors px-4 py-2 rounded-full"
                              >
                                View Details
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-genesis-purple border-none" />
                <CarouselNext className="right-2 bg-white/80 hover:bg-white text-genesis-purple border-none" />
              </Carousel>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <FadeIn delay={300} className="glass-card rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-genesis-purple/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-genesis-purple"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Patient-Centered Care</h3>
            <p className="text-gray-600">Personalized attention and treatment plans designed specifically for your needs.</p>
          </FadeIn>
          
          <FadeIn delay={400} className="glass-card rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-genesis-purple/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-genesis-purple"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Health Education</h3>
            <p className="text-gray-600">Empowering you with knowledge to make informed decisions about your health.</p>
          </FadeIn>
          
          <FadeIn delay={500} className="glass-card rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-genesis-purple/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-genesis-purple"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">Building a network of healthcare resources to support your journey to wellness.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
