
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonCustomProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-genesis-purple active:translate-y-0.5 rounded-md";
    
    const variantStyles = {
      primary: "bg-genesis-purple text-white hover:bg-genesis-lightPurple shadow-sm",
      secondary: "bg-genesis-blue text-white hover:bg-genesis-lightBlue shadow-sm",
      outline: "border border-genesis-purple text-genesis-purple hover:bg-genesis-purple/5",
      ghost: "text-genesis-purple hover:bg-genesis-purple/10",
      link: "text-genesis-purple hover:underline p-0"
    };
    
    const sizeStyles = {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3"
    };

    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          variant !== "link" && sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

export default ButtonCustom;
