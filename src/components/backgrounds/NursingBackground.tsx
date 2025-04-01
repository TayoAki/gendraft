
import React from "react";
import { GraduationCap, BookOpen, FileText, Stethoscope, Award } from "lucide-react";
import PageHeroBackground from "./PageHeroBackground";

const NursingBackground: React.FC = () => {
  const icons = [
    {
      icon: GraduationCap,
      size: 120,
      position: "top-[15%] left-[10%]",
      rotation: "-rotate-12",
      color: "text-genesis-purple/10"
    },
    {
      icon: BookOpen,
      size: 100,
      position: "bottom-[10%] right-[15%]",
      rotation: "rotate-12",
      color: "text-genesis-purple/10"
    },
    {
      icon: Stethoscope,
      size: 80,
      position: "top-[20%] right-[20%]",
      rotation: "rotate-45",
      color: "text-genesis-lightPurple/10"
    },
    {
      icon: Award,
      size: 90,
      position: "bottom-[25%] left-[15%]",
      rotation: "-rotate-15",
      color: "text-genesis-lightPurple/10"
    }
  ];

  return <PageHeroBackground icons={icons} />;
};

export default NursingBackground;
