"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail, Copy, Check, ShieldCheck, Cpu, Code2, Landmark } from "lucide-react";
import { personalInfo } from "@/lib/data";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.3 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C6.1 2.7 4.9 3.1 4.9 3.1c-.7 1.7-.2 3 .1 3.3C4 10.5 3.5 11.6 3.5 13c0 5 3 6.2 6 6.5-.5.4-.9 1.1-1 2.2-.9.4-3.2 1.1-4.6-1.3 0 0-.8-1.5-2.2-1.5 0 0-1.5 0-.1 1.1 0 0 1.1 1.2 2 3.3 0 0 1.2 3.9 6.8 2.6v2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 bg-background/95 py-16 md:py-24 overflow-hidden backdrop-blur-sm">
      {/* Dynamic Animated Ambient Glow */}
      <div className="pointer-events-none absolute -bottom-48 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[300px] bg-gradient-to-t from-primary/20 via-primary/5 to-transparent blur-[120px] rounded-full animate-pulse duration-10000" />
      <div className="pointer-events-none absolute top-0 right-10 w-72 h-72 bg-yellow-500/5 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute bottom-20 left-10 w-64 h-64 bg-primary/5 blur-[90px] rounded-full" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Identity Block */}
          <div className="flex flex-col space-y-5">
            <div>
              <Link href="/" className="font-heading text-2xl font-bold tracking-tighter">
                {personalInfo.name}<span className="text-primary">.</span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Designing elegant, functional digital solutions. Crafting secure smart contracts, automated workflows, and robust financial web ecosystems.
              </p>
            </div>

            {/* Active Status Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs text-primary font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to contract roles
            </div>

            {/* Premium Social Icons */}
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-inner"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-inner"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-inner"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Sitemap Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors flex items-center group">
                  <span className="h-1.5 w-0 bg-primary rounded-full transition-all group-hover:w-1.5 group-hover:mr-2"></span>
                  About Pema
                </Link>
              </li>
              <li>
                <Link href="#tech-stack" className="text-muted-foreground hover:text-foreground transition-colors flex items-center group">
                  <span className="h-1.5 w-0 bg-primary rounded-full transition-all group-hover:w-1.5 group-hover:mr-2"></span>
                  Tech Stack & Tools
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors flex items-center group">
                  <span className="h-1.5 w-0 bg-primary rounded-full transition-all group-hover:w-1.5 group-hover:mr-2"></span>
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors flex items-center group">
                  <span className="h-1.5 w-0 bg-primary rounded-full transition-all group-hover:w-1.5 group-hover:mr-2"></span>
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Areas of Focus
            </h4>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-primary/70 shrink-0" />
                <span>Smart Contract Audits & Development</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Cpu size={16} className="text-primary/70 shrink-0" />
                <span>Automated Reconciliation Engineering</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Code2 size={16} className="text-primary/70 shrink-0" />
                <span>High-Performance Next.js Web Apps</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Landmark size={16} className="text-primary/70 shrink-0" />
                <span>Financial & Business Workflows</span>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Let&apos;s Build Together
            </h4>
            <p className="text-sm text-muted-foreground">
              Interested in collaborating on a web project or blockchain system? Drop a line anytime.
            </p>
            
            {/* Interactive Copy-to-Clipboard Widget */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between glass rounded-xl border border-border/60 p-2.5 transition-all hover:border-primary/30">
                <div className="flex items-center gap-2 text-sm text-foreground overflow-hidden">
                  <Mail size={16} className="text-primary shrink-0" />
                  <span className="truncate select-all text-xs font-mono">{personalInfo.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 hover:bg-secondary/80 rounded-lg text-muted-foreground hover:text-primary transition-all relative"
                  title="Copy email to clipboard"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                      >
                        <Check size={15} className="text-primary" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                      >
                        <Copy size={15} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-[10px] text-primary font-medium pl-1 self-start"
                  >
                    Email copied successfully!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Bottom Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent my-8"></div>

        {/* Credits & Scroll back */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start space-y-1">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              &copy; {currentYear} {personalInfo.fullName}. All rights reserved.
            </p>
            <div className="text-[11px] text-muted-foreground/60 flex items-center justify-center md:justify-start gap-1">
              Handcrafted with <span className="text-primary animate-pulse">♥</span> using Next.js & Tailwind CSS.
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary/40 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-lg hover:shadow-primary/20"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
