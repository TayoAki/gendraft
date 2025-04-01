
// Central storage for healthcare team member data

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  expandedBio: string;
  imagePath: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Carla Y. Neal-Haley",
    title: "M.D.",
    bio: "Dr. Neal-Haley specializes in internal medicine and pediatrics. She received her medical degree from the University of Pittsburgh School of Medicine in 1991. She completed her residency in internal medicine and pediatrics at Wayne State University and Detroit Medical Center.",
    expandedBio: `Being board certified in both internal medicine and pediatrics, Dr. Neal-Haley has a special interest in adolescent medicine, preventive health care, and obesity/metabolic syndrome. Dr. Neal-Haley opened Genesis Healthcare Associates P.C., after nine years at the Emory Clinic of Smyrna, where she was Medical Director for four years.

She served as Clinical Instructor of Pediatrics and Internal Medicine at Children's Hospital of Michigan and Wayne State University before moving to Atlanta in 1997.

She has 3 adult children and has served on the board of the Lovett School and as the Chief of staff at Emory Adventist Hospital. She currently holds an adjunct professor title at several Universities associated with her clinical teaching responsibilities for Medical and Nurse Practitioner students.`,
    imagePath: "public/lovable-uploads/2c8bb872-5cdc-4751-ae27-b17ba3be4171.png"
  },
  {
    id: 2,
    name: "Christine Wasilewski",
    title: "FNP - BC",
    bio: "Christine Wasilewski cares for patients of all ages. She is originally from New Hampshire and moved to Georgia in 1996. She completed her Bachelor of Science Degree from the University of New Hampshire in 1996 and her Master of Science in Nursing from Georgia State University in 2001.",
    expandedBio: `She has specialized in primary care of adults and children since 2004 working with Dr. Carla Neal-Haley at the Emory Clinic as well as Genesis HCA. She has a special interest in preventative health care and pediatric and adolescent medicine. Prior to that, she cared for adults and children with cancer and blood disorders. 

Christine lives in Marietta, GA with her husband and two children. She is active in the community and serves on the Foundation Board at Kincaid Elementary School. When not at work she enjoys spending time running and relaxing with her family.`,
    imagePath: "public/lovable-uploads/656f2ed2-ebed-471f-bce2-8ce2282defc9.png"
  },
  {
    id: 3,
    name: "Crystal Johnson",
    title: "FNP - BC",
    bio: "Crystal Johnson is an award-winning, Board Certified Family Nurse Practitioner. She began her career in the cardiovascular intensive care unit as a Registered Nurse 16 years ago at Emory University Hospital Midtown. She received her Bachelor of Science degree in Nursing from Emory University. She received her Masters of Science degree and training as a Family Nurse Practitioner from Walden University in Minnesota in conjunction with Dr. Carla Neal-Haley of Genesis Healthcare.",
    expandedBio: `Crystal is the recipient of The Emory Medal. This is the highest honor presented to Emory Alumni for outstanding service. Crystal was part of the healthcare team at Emory University Hospital's Serious Health and Communicable Diseases Unit that successfully and safely treated patients with Ebola virus disease in 2014. She was one of the healthcare professionals honored by Time Magazine's "Person of the Year" and acknowledged by President Obama. She received the Emory School of Nursing Excellence in Nursing Award in 2015.

Crystal has a unique combination of strong nursing skills and strives to provide the best health care possible. She believes in building a long lasting and trusting relationship with her patients and families. She strives to acquire a comprehensive evaluation of every patient by taking time to listen and understand their particular needs. Her true desire is to enhance a positive healing experience and confidence to those in need.`,
    imagePath: "public/lovable-uploads/efdf5911-4bf1-4a56-b8e3-b063e8f83e94.png"
  },
  {
    id: 4,
    name: "Vonnie Cesar",
    title: "MSN, APRN, FNP-BC",
    bio: "Vonnie Cesar is a Family Nurse Practitioner that cares for pediatric and adult patients across the lifespan. She began her career in healthcare as LPN (1991) and completed a series of nursing degrees which include an Associate of Science in Nursing (2005) from Excelsior College in Albany, New York; Bachelor of Science in Nursing with honors (2016) from the University of Texas at Arlington; Master of Science in Nursing (2020) from Walden University in Minnesota; Doctor of Nursing Practice Degree (expected 2025) from Nell Hodgson Woodruff School of Nursing at Emory University.",
    expandedBio: `Throughout her career she has mainly worked inpatient pediatrics, ambulatory care, and neonatal intensive care. She has been practicing as an APRN for the past three years in internal medicine/primary care and as adjunct clinical instructor and faculty for Nell Hodgson Woodruff School of Nursing at Emory University.

Vonnie is nationally certified by The American Academy of Nurse Practitioners and licensed to practice in the state of Georgia. She has a special interest in Preventive Health and Wellness, hypertension, diabetes, hematology, rare diseases, and obesity medicine. She strives to maintain a trusting, and caring relationship with her patients that includes making healthcare more equitable and inclusive for people of all sexes, sexual orientations, gender identities, and gender expressions. 

Vonnie and her husband, Brian live in the Atlanta area, have one grown daughter, Emily and a grandog, Violet. In her spare time, she enjoys traveling, cooking, genealogy and history.`,
    imagePath: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop"
  }
];
