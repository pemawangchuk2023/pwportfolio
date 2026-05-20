"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

export function TechStackSection() {
  // Double the array for seamless infinite scrolling
  const infiniteStack = [...techStack, ...techStack];

  return (
    <section id="tech-stack" className="py-24 overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold md:text-5xl text-gradient-primary">
            Technologies & Tools
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            The core technologies I use to bring ideas to life.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden flex py-8 flex-col gap-8">
        {/* Fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Row 1 - Marquee left */}
        <div className="flex w-fit">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
            className="flex gap-8 px-4"
          >
            {infiniteStack.map((tech, index) => (
              <div 
                key={`row1-${index}`} 
                className="glass flex flex-col items-center justify-center gap-4 min-w-[160px] h-[160px] rounded-2xl p-6 transition-transform hover:scale-105 hover:-translate-y-2 group"
              >
                <div className="relative w-16 h-16 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Marquee right (reversed) */}
        <div className="flex w-fit ml-[-50%]">
          <motion.div
            animate={{ x: ["0%", "50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
            className="flex gap-8 px-4"
          >
            {[...infiniteStack].reverse().map((tech, index) => (
              <div 
                key={`row2-${index}`} 
                className="glass flex flex-col items-center justify-center gap-4 min-w-[160px] h-[160px] rounded-2xl p-6 transition-transform hover:scale-105 hover:-translate-y-2 group"
              >
                <div className="relative w-16 h-16 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
