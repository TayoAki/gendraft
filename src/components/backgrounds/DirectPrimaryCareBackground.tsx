
import React from "react";
import { Stethoscope, Clock, Calendar, Heart, User, Clipboard } from "lucide-react";
import PageHeroBackground from "./PageHeroBackground";

const DirectPrimaryCareBackground: React.FC = () => {
  const icons = [
    {
      icon: Stethoscope,
      size: 120,
      position: "top-[15%] left-[10%]",
      rotation: "-rotate-12",
      color: "text-genesis-purple/10"
    },
    {
      icon: Clock,
      size: 100,
      position: "bottom-[10%] right-[15%]",
      rotation: "rotate-12",
      color: "text-genesis-purple/10"
    },
    {
      icon: Calendar,
      size: 80,
      position: "top-[20%] right-[20%]",
      rotation: "rotate-45",
      color: "text-genesis-lightPurple/10"
    },
    {
      icon: User,
      size: 90,
      position: "bottom-[25%] left-[15%]",
      rotation: "-rotate-15",
      color: "text-genesis-lightPurple/10"
    },
    {
      icon: Clipboard,
      size: 70,
      position: "top-[40%] left-[30%]",
      rotation: "rotate-25",
      color: "text-genesis-purple/10"
    }
  ];

  return <PageHeroBackground icons={icons} />;
};

export default DirectPrimaryCareBackground;
