"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 bg-background py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="font-heading text-xl font-bold tracking-tighter mb-2">
              {personalInfo.name}<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon size={20} />
            </a>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-secondary/50 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-muted-foreground/60 flex items-center justify-center gap-1">
          Designed & Built with <span className="text-primary mx-1">♥</span> using Next.js & Tailwind
        </div>
      </div>
      
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] rounded-full" />
    </footer>
  );
}
