"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Let&apos;s Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I&apos;m currently available
              for freelance work and new opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xl md:text-2xl font-heading hover:text-primary transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                  Socials
                </h3>
                <div className="flex flex-col gap-3">
                  {Object.entries(personalInfo.socials).map(
                    ([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg hover:text-primary transition-colors w-fit capitalize flex items-center gap-2 group"
                      >
                        <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4"></span>
                        {platform}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-3 glass p-6 md:p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Pema Wangchuk"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="pemawangchugbtc@gmail.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                  ) : isSubmitted ? (
                    "Message Sent!"
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
