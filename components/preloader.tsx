"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="relative flex overflow-hidden text-5xl font-bold tracking-tighter md:text-7xl font-heading">
            {["P", "E", "M", "A"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: index * 0.1,
                }}
                className="text-foreground"
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.4,
              }}
              className="absolute -bottom-2 -right-4 h-3 w-3 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
