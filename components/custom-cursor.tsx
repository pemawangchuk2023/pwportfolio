"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Use motion values for better performance
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for smooth outer circle movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    // Delay slightly to avoid state update during effect warning
    const initTimeout = setTimeout(() => {
      setIsHidden(false);
    }, 100);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Handle interactive elements
    const handleInteractiveEnter = () => setIsHovered(true);
    const handleInteractiveLeave = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter);
      el.addEventListener("mouseleave", handleInteractiveLeave);
    });

    // We need a mutation observer to attach events to dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          const newInteractiveElements = document.querySelectorAll(
            'a, button, [role="button"], input, textarea, select'
          );
          
          newInteractiveElements.forEach((el) => {
            // Remove first to avoid duplicates
            el.removeEventListener("mouseenter", handleInteractiveEnter);
            el.removeEventListener("mouseleave", handleInteractiveLeave);
            
            el.addEventListener("mouseenter", handleInteractiveEnter);
            el.addEventListener("mouseleave", handleInteractiveLeave);
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
      });
      
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (isHidden) return null;

  return (
    <>
      {/* Outer Circle (Springy) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary mix-blend-difference hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(245, 166, 35, 0.1)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Inner Dot (Instant) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
