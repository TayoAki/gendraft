
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, Calendar, ArrowRight, User, UserCircle, MapPin, Phone, Clock } from "lucide-react";

const IndexBootstrap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Service features for the services section
  const serviceFeatures = [
    {
      title: "Primary Care",
      description: "Comprehensive primary healthcare services for all ages, from routine check-ups to chronic disease management.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
    },
    {
      title: "Specialist Referrals",
      description: "Access to a network of specialists to ensure comprehensive care for complex medical conditions.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 22h2a2 2 0 0 0 2-2v-1a7 7 0 0 0-7-7H11a7 7 0 0 0-7 7v1a2 2 0 0 0 2 2h2" /><rect x="10" y="6" width="4" height="6" rx="2" /><path d="M3 9v1" /><path d="M21 9v1" /><path d="M12 16v3" /></svg>
    },
    {
      title: "Preventive Care",
      description: "Proactive health screenings and wellness programs designed to prevent illness and promote long-term health.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 2v6h6M21.5 22v-6h-6" /><path d="M22 8.5c0 7.18-5.82 13-13 13C8.46 21.5 7.96 20 7.96 20" /><path d="M2 15.5c0-7.18 5.82-13 13-13 0.54 0 1.04 1.5 1.04 1.5" /></svg>
    },
    {
      title: "Direct Primary Care",
      description: "Membership-based care model offering dedicated provider access, extended appointments, and simplified healthcare without insurance barriers.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 1.9-1.1l.3-.6" /><path d="M8.8 8.7a4.5 4.5 0 0 1 3.1 2.4l.2.5" /><path d="M7 9H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1Z" /><path d="M16 21h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1Z" /><path d="M16 5h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1Z" /></svg>
    }
  ];

  return (
    <>
      {/* Bootstrap CSS */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      {/* Custom CSS */}
      <style>
        {`
          .genesis-purple {
            color: #7e22ce;
          }
          .bg-genesis-purple {
            background-color: #7e22ce;
          }
          .bg-genesis-blue {
            background-color: #4f46e5;
          }
          .bg-genesis-purple-light {
            background-color: rgba(126, 34, 206, 0.1);
          }
          .btn-genesis {
            background-color: #7e22ce;
            color: white;
          }
          .btn-genesis:hover {
            background-color: #6d28d9;
            color: white;
          }
          .btn-outline-genesis {
            border-color: #7e22ce;
            color: #7e22ce;
          }
          .btn-outline-genesis:hover {
            background-color: rgba(126, 34, 206, 0.1);
            color: #7e22ce;
          }
          .text-gradient {
            background: linear-gradient(to right, #7e22ce, #9333ea);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .glass-card {
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .hero-bg {
            position: relative;
            background: linear-gradient(to bottom, #ffffff, #f8f9fa);
            overflow: hidden;
          }
          .hero-bg::before {
            content: "";
            position: absolute;
            top: -40px;
            right: -40px;
            width: 200px;
            height: 200px;
            background-color: rgba(126, 34, 206, 0.05);
            border-radius: 50%;
            filter: blur(40px);
            z-index: 0;
          }
          .hero-bg::after {
            content: "";
            position: absolute;
            bottom: -40px;
            left: -40px;
            width: 200px;
            height: 200px;
            background-color: rgba(147, 51, 234, 0.05);
            border-radius: 50%;
            filter: blur(40px);
            z-index: 0;
          }
          .fade-in-animation {
            animation: fadeIn 1s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .carousel-custom .carousel-control-prev,
          .carousel-custom .carousel-control-next {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0.8;
            margin: 0 10px;
          }
          .carousel-custom .carousel-control-prev-icon,
          .carousel-custom .carousel-control-next-icon {
            filter: invert(1) grayscale(100%) brightness(0.5);
          }
          .carousel-img-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
            color: white;
            padding: 20px;
          }
          .feature-icon {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            margin-bottom: 16px;
          }
        `}
      </style>

      {/* Navbar will be handled by the routes */}
      
      <main>
        {/* Hero Section */}
        <section className="hero-bg pt-5 pb-5">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6 fade-in-animation">
                <div className="mb-4">
                  <span className="badge bg-genesis-purple-light genesis-purple rounded-pill px-3 py-2">Excellence in Healthcare</span>
                </div>
                <h1 className="display-4 fw-bold mb-3">
                  <span className="text-dark">GENESIS</span><br />
                  <span className="text-gradient">HEALTHCARE</span>
                </h1>
                <p className="lead text-secondary mb-4">
                  Professional healthcare services designed around your needs.
                  Experience personalized care with our team of experts.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <a href="/portal" className="btn btn-genesis px-4 py-2">Patient Portal Access</a>
                  <a href="/registration" className="btn btn-outline-genesis px-4 py-2">New Patient Registration</a>
                </div>
              </div>
              
              <div className="col-lg-6 mt-4 mt-lg-0 fade-in-animation">
                <div className="p-1 rounded-3" style={{background: "linear-gradient(to bottom right, rgba(126, 34, 206, 0.2), rgba(147, 51, 234, 0.2))"}}>
                  <div id="announcementsCarousel" className="carousel slide carousel-custom rounded-3 overflow-hidden shadow-lg" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      {announcements.map((item, index) => (
                        <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <div className="position-relative">
                            <img 
                              src={item.image} 
                              className="d-block w-100" 
                              alt={item.title}
                              style={{height: "300px", objectFit: "cover"}}
                            />
                            <div className="position-absolute top-0 start-0 p-3 d-flex gap-2">
                              <span className="badge bg-genesis-purple d-flex align-items-center gap-1">
                                <Bell size={14} /> Announcement
                              </span>
                              <span className="badge bg-dark bg-opacity-50 d-flex align-items-center gap-1">
                                <Calendar size={14} /> {item.date}
                              </span>
                            </div>
                            <div className="carousel-img-overlay">
                              <h3 className="fs-4 fw-bold mb-2">{item.title}</h3>
                              <p className="mb-3 small">{item.description}</p>
                              <a 
                                href={item.link}
                                className="btn btn-sm btn-genesis d-inline-flex align-items-center"
                              >
                                View Details <ArrowRight size={16} className="ms-1" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#announcementsCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#announcementsCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row mt-5 pt-3">
              <div className="col-md-4 mb-4 fade-in-animation">
                <div className="glass-card rounded-3 p-4 h-100">
                  <div className="feature-icon bg-genesis-purple-light genesis-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                  </div>
                  <h3 className="fs-5 fw-semibold mb-2">Patient-Centered Care</h3>
                  <p className="text-secondary small">Personalized attention and treatment plans designed specifically for your needs.</p>
                </div>
              </div>
              
              <div className="col-md-4 mb-4 fade-in-animation">
                <div className="glass-card rounded-3 p-4 h-100">
                  <div className="feature-icon bg-genesis-purple-light genesis-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                  </div>
                  <h3 className="fs-5 fw-semibold mb-2">Health Education</h3>
                  <p className="text-secondary small">Empowering you with knowledge to make informed decisions about your health.</p>
                </div>
              </div>
              
              <div className="col-md-4 mb-4 fade-in-animation">
                <div className="glass-card rounded-3 p-4 h-100">
                  <div className="feature-icon bg-genesis-purple-light genesis-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <h3 className="fs-5 fw-semibold mb-2">Community Support</h3>
                  <p className="text-secondary small">Building a network of healthcare resources to support your journey to wellness.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-5 bg-white">
          <div className="container py-4">
            <div className="text-center mb-5 fade-in-animation">
              <h2 className="display-5 fw-bold mb-3">Our Services</h2>
              <p className="lead text-secondary mx-auto" style={{maxWidth: "700px"}}>
                Comprehensive healthcare solutions designed to address your unique needs
                with a focus on quality, accessibility, and personalized care.
              </p>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-md-6 fade-in-animation">
                <div className="position-relative rounded-3 overflow-hidden h-100">
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-genesis-purple opacity-75"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Advanced Nursing"
                    className="w-100 h-100 object-fit-cover"
                    style={{height: "300px", objectFit: "cover"}}
                  />
                  <div className="position-absolute bottom-0 start-0 end-0 p-4">
                    <h3 className="text-white fs-4 fw-bold mb-2">Advance Nursing Clinicals</h3>
                    <p className="text-white-50 mb-3 small">
                      Specialized nursing services providing advanced clinical care and support for patients with complex needs.
                    </p>
                    <a href="/nursing" className="btn btn-light text-genesis-purple shadow-sm">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 fade-in-animation">
                <div className="position-relative rounded-3 overflow-hidden h-100">
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-genesis-blue opacity-75"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Medical Cannabis"
                    className="w-100 h-100 object-fit-cover"
                    style={{height: "300px", objectFit: "cover"}}
                  />
                  <div className="position-absolute bottom-0 start-0 end-0 p-4">
                    <h3 className="text-white fs-4 fw-bold mb-2">Medical Cannabis</h3>
                    <p className="text-white-50 mb-3 small">
                      Expert guidance on medical cannabis treatments and therapies tailored to your specific health conditions.
                    </p>
                    <a href="/medical-cannabis" className="btn btn-light text-genesis-purple shadow-sm">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              {serviceFeatures.map((feature, index) => (
                <div key={feature.title} className="col-md-6 col-lg-3 mb-4 fade-in-animation">
                  <div className="border border-light rounded-3 p-4 h-100 hover-shadow">
                    <div className="feature-icon bg-light text-genesis-purple">
                      {feature.icon}
                    </div>
                    <h3 className="fs-5 fw-semibold mb-2">{feature.title}</h3>
                    <p className="text-secondary small">{feature.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="col-12 text-center mt-4">
                <a href="/direct-primary-care" className="btn btn-genesis px-4 py-2 d-inline-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2"><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M9 12l2 2l4 -4"></path></svg>
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5 bg-light">
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">
                <span className="text-gradient">Contact Information</span>
              </h2>
              <p className="lead text-secondary mx-auto" style={{maxWidth: "700px"}}>
                Visit our facility or connect with us virtually. We're here to help with all your healthcare needs.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-6 mb-4 fade-in-animation">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-0">
                    <div style={{height: "300px"}}>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.3853536657377!2d-84.48196368478715!3d33.86654388065408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f505c6ff0cf34f%3A0x9e0195344ebb7451!2s3200%20Highlands%20Pkwy%20SE%2C%20Smyrna%2C%20GA%2030082!5e0!3m2!1sen!2sus!4v1620144321645!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{border: 0}} 
                        allowFullScreen={false} 
                        loading="lazy"
                        title="Genesis Healthcare Location Map"
                      />
                    </div>
                    <div className="p-4">
                      <div className="d-flex gap-3 mb-4">
                        <div className="bg-genesis-purple-light rounded-circle p-3">
                          <MapPin size={20} className="genesis-purple" />
                        </div>
                        <div>
                          <h3 className="fs-5 fw-bold mb-1">Our Location</h3>
                          <p className="mb-1">3200 Highlands Pkwy SE</p>
                          <p className="mb-1">Smyrna, GA 30082</p>
                          <a 
                            href="https://maps.google.com/?q=3200+Highlands+Pkwy+SE,+Smyrna,+GA+30082" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="genesis-purple text-decoration-none"
                          >
                            Get Directions
                          </a>
                        </div>
                      </div>
                      
                      <div className="d-flex gap-3">
                        <div className="bg-genesis-purple-light rounded-circle p-3">
                          <Phone size={20} className="genesis-purple" />
                        </div>
                        <div>
                          <h3 className="fs-5 fw-bold mb-1">Phone</h3>
                          <p className="mb-1">(678) 555-1234</p>
                          <p className="text-secondary small">For appointments and inquiries</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 fade-in-animation">
                <div className="row g-4 h-100">
                  <div className="col-md-6">
                    <div className="card bg-genesis-purple text-white h-100 border-0">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <Phone size={24} className="me-2" />
                          <h3 className="fs-5 fw-bold mb-0">Lab Appointments</h3>
                        </div>
                        <div className="mb-4">
                          <p className="mb-1"><span className="fw-medium">AM:</span> 8 AM to 12:30 PM</p>
                          <p className="mb-1"><span className="fw-medium">PM:</span> 1:30 PM to 4:30 PM</p>
                        </div>
                        <a
                          href="tel:+16785551234"
                          className="btn btn-light text-genesis-purple fw-medium rounded-pill"
                        >
                          Call for Booking
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card bg-info text-white h-100 border-0" style={{backgroundColor: "#9333ea!important"}}>
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <Calendar size={24} className="me-2" />
                          <h3 className="fs-5 fw-bold mb-0">Saturday Appointments</h3>
                        </div>
                        <div className="mb-4">
                          <p className="fw-medium mb-1">8AM to 12PM</p>
                          <p className="small mb-1">Available on select dates:</p>
                          <p>2/10 | 3/9 | 4/13 | 5/18</p>
                        </div>
                        <a
                          href="mailto:appointments@genesishealthcare.com"
                          className="btn btn-light text-genesis-purple fw-medium rounded-pill"
                        >
                          Email for Info
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card border h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <Clock size={24} className="me-2 genesis-purple" />
                          <h3 className="fs-5 fw-bold mb-0">Working Hours</h3>
                        </div>
                        <div className="mb-4">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-secondary">Monday - Friday</span>
                            <span className="fw-medium">8AM to 5PM</span>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-secondary">Saturday</span>
                            <span className="fw-medium">8AM to 12PM (Select dates)</span>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-secondary">Sunday</span>
                            <span className="fw-medium">CLOSED</span>
                          </div>
                        </div>
                        <p className="text-secondary small border-top pt-3">
                          * Emergency services available 24/7 through our partner hospitals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-5 bg-light">
          <div className="container py-4">
            <div className="text-center mb-5 fade-in-animation">
              <h2 className="display-5 fw-bold mb-3">Resources</h2>
              <p className="lead text-secondary mx-auto" style={{maxWidth: "700px"}}>
                Explore our curated collection of healthcare resources designed to empower
                and inform your health journey.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4 mb-4 fade-in-animation">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <img 
                      src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Be Not Afraid"
                      className="card-img-top"
                      style={{height: "200px", objectFit: "cover"}}
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-white p-3">
                      <h3 className="fs-5 fw-bold mb-0">Be Not Afraid</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-secondary small mb-3">
                      Overcome healthcare anxiety with our supportive resources and guidance
                      designed to make your medical journey less intimidating.
                    </p>
                    <a href="/resources/be-not-afraid" className="btn btn-outline-genesis w-100">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4 fade-in-animation">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <img 
                      src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Recommended Readings"
                      className="card-img-top"
                      style={{height: "200px", objectFit: "cover"}}
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-white p-3">
                      <h3 className="fs-5 fw-bold mb-0">Recommended Readings</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-secondary small mb-3">
                      Discover curated books and articles that provide valuable insights into
                      healthcare topics and personal wellness strategies.
                    </p>
                    <a href="/resources/recommended-readings" className="btn btn-outline-genesis w-100">
                      View Reading List
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4 fade-in-animation">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <img 
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="5 Years of Changing Lives"
                      className="card-img-top"
                      style={{height: "200px", objectFit: "cover"}}
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-white p-3">
                      <h3 className="fs-5 fw-bold mb-0">5 Years of Changing Lives</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-secondary small mb-3">
                      Celebrating our five-year milestone of providing exceptional healthcare
                      services and making a positive impact in our community.
                    </p>
                    <a href="/resources/our-impact" className="btn btn-outline-genesis w-100">
                      See Our Impact
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 fade-in-animation">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                      <h3 className="fs-4 fw-bold mb-3">Join Our Health Community</h3>
                      <p className="text-secondary mb-4">
                        Subscribe to our newsletter to receive the latest health tips, resources,
                        and updates from Genesis Healthcare Associates.
                      </p>
                      <div className="input-group">
                        <input 
                          type="email" 
                          className="form-control"
                          placeholder="Enter your email"
                        />
                        <button className="btn btn-genesis">Subscribe</button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="position-relative rounded-3 overflow-hidden" style={{height: "250px"}}>
                        <img 
                          src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=2939&auto=format&fit=crop&ixlib=rb-4.0.3" 
                          alt="Healthcare community"
                          className="w-100 h-100"
                          style={{objectFit: "cover"}}
                        />
                        <div className="position-absolute top-0 right-0 bottom-0 left-0" 
                          style={{background: "linear-gradient(to right, rgba(126, 34, 206, 0.3), rgba(79, 70, 229, 0.3))"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer will be handled by the routes */}

      {/* Bootstrap JavaScript */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default IndexBootstrap;
