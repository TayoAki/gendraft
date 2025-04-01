
import React from "react";
import { FileText, ClipboardCheck, PenTool, FileCheck, Clipboard } from "lucide-react";
import PageHeroBackground from "./PageHeroBackground";

const RegistrationBackground: React.FC = () => {
  const icons = [
    {
      icon: FileText,
      size: 120,
      position: "top-[15%] left-[10%]",
      rotation: "-rotate-12",
      color: "text-genesis-purple/10"
    },
    {
      icon: ClipboardCheck,
      size: 100,
      position: "bottom-[10%] right-[15%]",
      rotation: "rotate-12",
      color: "text-genesis-purple/10"
    },
    {
      icon: PenTool,
      size: 80,
      position: "top-[20%] right-[20%]",
      rotation: "rotate-45",
      color: "text-genesis-lightPurple/10"
    },
    {
      icon: FileCheck,
      size: 90,
      position: "bottom-[25%] left-[15%]",
      rotation: "-rotate-15",
      color: "text-genesis-lightPurple/10"
    }
  ];

  return <PageHeroBackground icons={icons} />;
};

export default RegistrationBackground;
