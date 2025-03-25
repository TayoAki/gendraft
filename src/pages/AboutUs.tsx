
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import { Users } from "lucide-react";

const AboutUs = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-genesis-purple mb-4">
                About Genesis
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                A high-touch, family-centered healthcare experience.
              </p>
            </div>
          </div>
        </section>

        {/* Genesis Origin Section */}
        <section className="py-12 bg-white">
          <div className="container-section">
            <FadeIn>
              <div className="bg-genesis-purple text-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">The Start Of Genesis...</h2>
                <p className="leading-relaxed">
                  Genesis Healthcare Associates P.C. was founded in 2006 as part of a vision that Dr. Carla Neal-Haley had for a high-touch, family-centered care experience. The vision has evolved to bring us to our current reality: Genesis offers an excellent patient experience, combined with high clinical competence provided by a highly engaged healthcare team that is accountable to you and your family.
                </p>
                <p className="leading-relaxed mt-4">
                  Genesis actively works to make the patient an integral part of their own care. We realize that each patient must be empowered to take charge of their own healthcare. We realize that our healthcare team and each patient we serve must work together to maintain and improve the healthcare condition of every patient.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-genesis-purple mb-4 flex items-center justify-center gap-2">
                <Users className="h-8 w-8" />
                <span>Meet Our Healthcare Providers</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team of dedicated healthcare professionals is committed to providing you with exceptional care.
              </p>
            </div>

            {/* Team Members */}
            <div className="space-y-12">
              {providers.map((provider, index) => (
                <FadeIn key={provider.name} direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:shrink-0 flex justify-center items-center p-6 bg-genesis-purple/5">
                        <div className="h-48 w-48 rounded-full overflow-hidden bg-genesis-purple/10 border-4 border-genesis-purple/20">
                          <img 
                            className="h-full w-full object-cover" 
                            src={provider.image} 
                            alt={provider.name}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://via.placeholder.com/150?text=Provider";
                            }}
                          />
                        </div>
                      </div>
                      <div className="p-6 md:p-8">
                        <div className="text-genesis-purple text-2xl font-bold">{provider.name}</div>
                        <div className="text-gray-500 font-medium mb-4">{provider.credentials}</div>
                        <div className="space-y-4">
                          <p className="text-gray-700">{provider.shortBio}</p>
                          <details className="group">
                            <summary className="list-none flex items-center cursor-pointer">
                              <span className="text-genesis-purple font-medium">Read more</span>
                              <svg className="ml-2 h-5 w-5 text-genesis-purple transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </summary>
                            <div className="mt-4 text-gray-700 space-y-3">
                              {provider.fullBio.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                              ))}
                            </div>
                          </details>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Provider data
const providers = [
  {
    name: "Carla Y. Neal-Haley",
    credentials: "M.D.",
    image: "/carlaa.jpg", // Placeholder - replace with actual image path
    shortBio: "Dr. Neal-Haley specializes in internal medicine and pediatrics. She received her medical degree from the University of Pittsburgh School of Medicine in 1991. She completed her residency in internal medicine and pediatrics at Wayne State University and Detroit Medical Center.",
    fullBio: [
      "Being board certified in both internal medicine and pediatrics, Dr. Neal-Haley has a special interest in adolescent medicine, preventive health care, and obesity/metabolic syndrome. Dr. Neal-Haley opened Genesis Healthcare Associates P.C., after nine years at the Emory Clinic of Smyrna, where she was Medical Director for four years.",
      "She served as Clinical Instructor of Pediatrics and Internal Medicine at Children's Hospital of Michigan and Wayne State University before moving to Atlanta in 1997.",
      "She has 3 adult children and has served on the board of the Lovett School and as the Chief of staff at Emory Adventist Hospital. She currently holds an adjunct professor title at several Universities associated with her clinical teaching responsibilities for Medical and Nurse Practitioner students."
    ]
  },
  {
    name: "Christine Wasilewski",
    credentials: "FNP - BC",
    image: "/Christine-Wasilewski-NP-244396-zoom.jpg", // Placeholder - replace with actual image path
    shortBio: "Christine Wasilewski cares for patients of all ages. She is originally from New Hampshire and moved to Georgia in 1996. She completed her Bachelor of Science Degree from the University of New Hampshire in 1996 and her Master of Science in Nursing from Georgia State University in 2001.",
    fullBio: [
      "She has specialized in primary care of adults and children since 2004 working with Dr. Carla Neal-Haley at the Emory Clinic as well as Genesis HCA. She has a special interest in preventative health care and pediatric and adolescent medicine. Prior to that, she cared for adults and children with cancer and blood disorders.",
      "Christine lives in Marietta, GA with her husband and two children. She is active in the community and serves on the Foundation Board at Kincaid Elementary School. When not at work she enjoys spending time running and relaxing with her family."
    ]
  },
  {
    name: "Crystal Johnson",
    credentials: "FNP - BC",
    image: "/Crystal.jpg", // Placeholder - replace with actual image path
    shortBio: "Crystal Johnson is an award-winning, Board Certified Family Nurse Practitioner. She began her career in the cardiovascular intensive care unit as a Registered Nurse 16 years ago at Emory University Hospital Midtown. She received her Bachelor of Science degree in Nursing from Emory University. She received her Masters of Science degree and training as a Family Nurse Practitioner from Walden University in Minnesota in conjunction with Dr. Carla Neal-Haley of Genesis Healthcare.",
    fullBio: [
      "Crystal is the recipient of The Emory Medal. This is the highest honor presented to Emory Alumni for outstanding service. Crystal was part of the healthcare team at Emory University Hospital's Serious Health and Communicable Diseases Unit that successfully and safely treated patients with Ebola virus disease in 2014. She was one of the healthcare professionals honored by Time Magazine's \"Person of the Year\" and acknowledged by President Obama. She received the Emory School of Nursing Excellence in Nursing Award in 2015.",
      "Crystal has a unique combination of strong nursing skills and strives to provide the best health care possible. She believes in building a long lasting and trusting relationship with her patients and families. She strives to acquire a comprehensive evaluation of every patient by taking time to listen and understand their particular needs. Her true desire is to enhance a positive healing experience and confidence to those in need."
    ]
  },
  {
    name: "Vonnie Cesar",
    credentials: "MSN, APRN, FNP-BC",
    image: "/HeadshotVC.jpeg", // Placeholder - replace with actual image path
    shortBio: "Vonnie Cesar is a Family Nurse Practitioner that cares for pediatric and adult patients across the lifespan. She began her career in healthcare as LPN (1991) and completed a series of nursing degrees which include an Associate of Science in Nursing (2005) from Excelsior College in Albany, New York; Bachelor of Science in Nursing with honors (2016) from the University of Texas at Arlington; Master of Science in Nursing (2020) from Walden University in Minnesota; Doctor of Nursing Practice Degree (expected 2025) from Nell Hodgson Woodruff School of Nursing at Emory University.",
    fullBio: [
      "Throughout her career she has mainly worked inpatient pediatrics, ambulatory care, and neonatal intensive care. She has been practicing as an APRN for the past three years in internal medicine/primary care and as adjunct clinical instructor and faculty for Nell Hodgson Woodruff School of Nursing at Emory University.",
      "Vonnie is nationally certified by The American Academy of Nurse Practitioners and licensed to practice in the state of Georgia. She has a special interest in Preventive Health and Wellness, hypertension, diabetes, hematology, rare diseases, and obesity medicine. She strives to maintain a trusting, and caring relationship with her patients that includes making healthcare more equitable and inclusive for people of all sexes, sexual orientations, gender identities, and gender expressions.",
      "Vonnie and her husband, Brian live in the Atlanta area, have one grown daughter, Emily and a grandog, Violet. In her spare time, she enjoys traveling, cooking, genealogy and history."
    ]
  }
];

export default AboutUs;
