"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable if pointer is fine (mouse/trackpad, not touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let animationFrameId: number;
    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        glow.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      glow.style.opacity = "0";
    };

    const render = () => {
      // Smooth linear interpolation (lerp) for organic trailing motion
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      id="cursor-glow"
      style={{
        left: 0,
        top: 0,
        opacity: 0,
      }}
      aria-hidden="true"
    />
  );
}
