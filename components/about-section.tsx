"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            About Me
          </h2>
          <div className="h-px flex-1 bg-border/50"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto aspect-square w-full max-w-md lg:mx-0"
          >
            {/* Decorative elements behind image */}
            <div className="absolute -inset-4 z-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent blur-2xl"></div>
            <div className="absolute inset-0 z-0 translate-x-4 translate-y-4 rounded-2xl border border-primary/30"></div>

            <motion.div
              style={{ y: imageY }}
              className="glass relative z-10 h-full w-full overflow-hidden rounded-2xl"
            >
              <Image
                src="/assets/me.png"
                alt={personalInfo.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="mb-6 font-heading text-2xl font-bold text-primary md:text-3xl">
                Designing with purpose, building with passion.
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                {personalInfo.bio}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                I always strive to deliver secure, scalable, and user-focused
                solutions, combining technical expertise with a strong
                understanding of business logic.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {personalInfo.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass flex flex-col p-4 rounded-xl border border-border/40 hover:border-primary/30 transition-all cursor-default"
                  >
                    <span className="font-heading text-3xl font-extrabold text-gradient-primary">
                      {stat.value}+
                    </span>
                    <span className="mt-1.5 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
