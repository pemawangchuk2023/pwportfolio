"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center justify-between"
        >
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Selected Works
          </h2>
          <span className="text-muted-foreground font-medium">
            ({projects.length})
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="glass overflow-hidden rounded-2xl aspect-[4/3] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/20 text-primary px-2 py-1 rounded border border-primary/20 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2 rounded-full opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight size={20} className="text-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-background/50 hover:bg-background backdrop-blur p-2 rounded-full transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>

              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto h-64 md:h-auto border-b md:border-b-0 md:border-r border-border/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                      <h3 className="font-heading text-3xl font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-sm bg-secondary px-3 py-1 rounded-full border border-border"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 mt-auto">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 text-center bg-primary text-primary-foreground py-3 rounded-lg font-medium transition-transform hover:scale-105"
                        >
                          Visit Live
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 text-center bg-secondary text-secondary-foreground py-3 rounded-lg font-medium border border-border transition-transform hover:scale-105"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
