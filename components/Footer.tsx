"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandGithub,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Events", href: "/events" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: IconBrandInstagram, href: "https://www.instagram.com/roboticsclub.srmvdp/", label: "Instagram" },
  { icon: IconBrandLinkedin, href: "https://in.linkedin.com/in/ece-srmist-vadapalani-4a782a26a", label: "LinkedIn" },
  { icon: IconBrandTwitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#020202] pt-20 pb-10 overflow-hidden border-t border-yellow-500/10">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent shadow-[0_0_20px_rgba(255,215,0,0.3)] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-yellow-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/home" className="inline-block group mb-6">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/xion-logo.png"
                    alt="XION logo"
                    fill
                    className="object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.5)] active:drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] active:scale-95 transition-all duration-300"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase tracking-widest gold-gradient-text leading-tight">
                    XION 2026
                  </h2>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">
                    NeuroBotix
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs font-medium mb-8">
              The premier robotics symposium. Where human neural complexity meets
              autonomous robotic precision.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-yellow-500 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} stroke={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-yellow-500/60 text-xs font-black uppercase tracking-[0.3em] mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-yellow-400 text-sm font-bold uppercase tracking-widest transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Venue & Institutional Section */}
          <div>
            <h3 className="text-yellow-500/60 text-xs font-black uppercase tracking-[0.3em] mb-8">
              Venue
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-yellow-500/80">
                  <IconMapPin size={18} />
                </div>
                <div className="text-sm">
                  <p className="text-zinc-200 font-bold mb-1 uppercase tracking-wider">Vadapalani Campus</p>
                  <p className="text-zinc-400 font-medium leading-relaxed">
                    SRMIST Vadapalani Campus, C Block, 100 Feet Road, Chennai - 26
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-yellow-500/80">
                  <IconMail size={18} />
                </div>
                <div className="text-sm">
                  <p className="text-zinc-200 font-bold mb-1 uppercase tracking-wider">Official Email</p>
                  <p className="text-zinc-400 font-medium break-all">
                    roboticsclub.vdp@srmist.edu.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Host Info */}
          <div>
            <h3 className="text-yellow-500/60 text-xs font-black uppercase tracking-[0.3em] mb-8">
              Hosted By
            </h3>
            <div className="relative group cursor-default">
              <div className="relative w-full aspect-[4/1.5] mb-4">
                <Image
                  src="/srm-logo.png"
                  alt="SRM logo"
                  fill
                  className="object-contain brightness-90 grayscale opacity-40 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-widest font-bold">
                NAAC A++ Accredited · Category 1 University
              </p>
              <p className="text-zinc-300 text-xs mt-2 font-bold uppercase tracking-wider group-hover:text-yellow-500/80 transition-colors duration-300">
                SRM Institute of Science & Technology
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-black">
              &copy; 2026 XION · The Robotics Club · All rights reserved
            </p>
            <p className="text-zinc-600 text-[9px] uppercase tracking-widest font-medium">
              Designed with neural precision for NeuroBotix
            </p>
          </div>

          <div className="flex gap-8">
            <Link href="/privacy" className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase tracking-widest font-bold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase tracking-widest font-bold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
