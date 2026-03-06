"use client";

import { motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Events", href: "#events" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden border-t border-gold-primary/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div>
            <div className="text-2xl font-black uppercase tracking-widest gold-gradient-text mb-3">
              XION 2026
            </div>
            <div className="text-white/30 text-xs tracking-[0.3em] uppercase mb-5">
              NeuroBotix
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs">
              The premier robotics symposium. Where neural complexity meets
              autonomous precision.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-gold-primary/50 text-[10px] tracking-[0.4em] uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="nav-link text-white/40 hover:text-white text-sm uppercase tracking-[0.15em] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + Contact */}
          <div>
            <p className="text-gold-primary/50 text-[10px] tracking-[0.4em] uppercase mb-5">
              Connect
            </p>
            <ul className="space-y-3 mb-8">
              {socials.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.href}
                    className="nav-link text-white/40 hover:text-white text-sm uppercase tracking-[0.15em] transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-gold-primary/50 text-[10px] tracking-[0.4em] uppercase mb-3">
              Contact
            </p>
            <p className="text-white/30 text-sm">neurobotix@xion.edu.in</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold-primary/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-[0.3em] uppercase">
            © 2026 XION · The Robotics Club · All rights reserved
          </p>
          <p className="text-gold-primary/30 text-xs tracking-[0.2em] uppercase font-mono">
            SRM Institute of Science & Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
