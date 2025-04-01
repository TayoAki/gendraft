
import React from "react";
import { CreditCard, DollarSign, Receipt, Wallet, PiggyBank } from "lucide-react";
import PageHeroBackground from "./PageHeroBackground";

const PaymentsBackground: React.FC = () => {
  const icons = [
    {
      icon: CreditCard,
      size: 120,
      position: "top-[15%] left-[10%]",
      rotation: "-rotate-12",
      color: "text-genesis-purple/10"
    },
    {
      icon: Receipt,
      size: 100,
      position: "bottom-[10%] right-[15%]",
      rotation: "rotate-12",
      color: "text-genesis-purple/10"
    },
    {
      icon: Wallet,
      size: 80,
      position: "top-[20%] right-[20%]",
      rotation: "rotate-45",
      color: "text-genesis-lightPurple/10"
    },
    {
      icon: DollarSign,
      size: 90,
      position: "bottom-[25%] left-[15%]",
      rotation: "-rotate-15",
      color: "text-genesis-lightPurple/10"
    }
  ];

  return <PageHeroBackground icons={icons} />;
};

export default PaymentsBackground;
