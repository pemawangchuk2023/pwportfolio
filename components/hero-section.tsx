"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "math/random/dist/mappers";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

// Type definitions to avoid math/random import issues
const generatePoints = () => {
  const points = new Float32Array(5000 * 3);
  for (let i = 0; i < 5000; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(Math.random() * 2 - 1);
    const r = Math.cbrt(Math.random()) * 1.5;

    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
};

function ParticleField(props: any) {
  const ref = useRef<any>();
  // Pre-calculate random points inside a sphere
  const sphere = generatePoints();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f5a623"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-background pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleField />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }} // Delay for preloader
          className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="font-heading text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m <span className="text-primary">{personalInfo.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl lg:text-2xl"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="mt-10 flex gap-4"
        >
          <button 
            onClick={scrollToAbout}
            className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Explore My Work
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center"
      >
        <span className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-primary"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
}
