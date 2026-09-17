"use client";

import React, { useEffect, useRef, useState } from "react";

export type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  threshold?: number; // Intersection threshold 0..1
  rootMargin?: string;
  once?: boolean;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  duration = 750,
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  once = true,
  style = {},
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentEl = elementRef.current;
    if (!currentEl) return;

    // In reduced-motion mode, CSS handles immediate display
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && currentEl) {
            observer.unobserve(currentEl);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentEl);

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  // Variant class mapping
  const variantClass =
    variant === "fade-up"
      ? "reveal-up"
      : variant === "fade-down"
        ? "reveal-down"
        : variant === "fade-left"
          ? "reveal-left"
          : variant === "fade-right"
            ? "reveal-right"
            : variant === "zoom-in"
              ? "reveal-zoom"
              : "reveal-up";

  const dynamicStyle: React.CSSProperties = {
    ...style,
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <div
      ref={elementRef}
      style={dynamicStyle}
      className={`reveal-init ${variantClass} ${isVisible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
