
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 500,
  once = true,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const initialStyles = {
    opacity: 0,
    transform: {
      up: "translateY(20px)",
      down: "translateY(-20px)",
      left: "translateX(20px)",
      right: "translateX(-20px)",
      none: "none",
    }[direction],
  };

  const animatedStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0)" : initialStyles.transform,
    transition: `opacity ${duration}ms, transform ${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={animatedStyles}
    >
      {children}
    </div>
  );
};

export default FadeIn;
