"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll state for navbar background
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));

      // Active section highlight
      const sections = navLinks.map((link) => link.href.substring(1));
      
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-40 w-full transition-all duration-300",
          isScrolled 
            ? "bg-background/80 py-4 backdrop-blur-md border-b border-border/40" 
            : "bg-transparent py-6"
        )}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-primary"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="group relative font-heading text-xl font-bold tracking-tighter">
            {personalInfo.name}
            <span className="text-primary">.</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-foreground",
                  activeSection === link.href.substring(1)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl md:hidden pt-24"
          >
            <nav className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-heading font-medium transition-colors",
                      activeSection === link.href.substring(1)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
