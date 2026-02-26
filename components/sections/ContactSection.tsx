"use client";

import Link from "next/link";
import { motion } from "motion/react";
import HoverTiltCard from "@/components/ui/HoverTiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 0.5,
        },
    }),
};

export default function ContactSection() {
    return (
        <section className="relative py-12 xs:py-16 sm:py-20 md:py-28 bg-[#020202] text-yellow-500 overflow-hidden">
            {/* Background Metallic Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#020202] to-[#000000] opacity-80 pointer-events-none" />

            <div className="relative w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-12">
                {/* ─── SECTION HEADER ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 xs:mb-10 sm:mb-14 md:mb-16"
                >
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-black tracking-wider sm:tracking-widest uppercase leading-tight">
                        Authorized Communication
                    </h2>
                    <p className="mt-2 xs:mt-3 sm:mt-4 text-zinc-400 tracking-wide text-[11px] xs:text-xs sm:text-sm md:text-base max-w-md sm:max-w-none mx-auto font-medium">
                        Official contact channels for XION 26 – NeuroBotix
                    </p>
                    <p className="text-yellow-500/50 text-[10px] xs:text-xs mt-1 tracking-wider uppercase font-bold">
                        SRM Vadapalani Campus
                    </p>
                </motion.div>

                {/* ─── CONTACT CARDS GRID ─── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-8">
                    {/* ── STUDENT ORGANIZER CARD ── */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        className="sm:col-span-2 md:col-span-1"
                    >
                        <HoverTiltCard>
                            <div className="gold-sweep relative border border-yellow-500/20 rounded-xl p-4 xs:p-5 sm:p-6 bg-[#0A0A0A]/60 sm:backdrop-blur-md hover:border-yellow-400/40 transition-colors duration-300">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-t-xl" />

                                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4">
                                    Student Organizer – XION 26
                                </h3>

                                <span className="inline-block px-2 py-0.5 text-[10px] xs:text-xs bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 tracking-widest uppercase mb-2 xs:mb-3 sm:mb-4">
                                    Primary Contact
                                </span>

                                <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 text-[11px] xs:text-xs sm:text-sm">
                                    <p className="text-yellow-500/80">
                                        Name:{" "}
                                        <span className="text-yellow-200 font-medium">Aashish Niranjan</span>
                                    </p>
                                    <p className="text-yellow-500/80">
                                        Phone:{" "}
                                        <span className="text-yellow-200 font-medium">+91 6282 585 080</span>
                                    </p>
                                    <p className="text-yellow-500/80">
                                        Email:{" "}
                                        <span className="text-yellow-200 font-medium break-all">
                                            roboticsclub.vdp@srmist.edu.in
                                        </span>
                                    </p>
                                </div>

                                <p className="mt-2 xs:mt-3 sm:mt-4 text-zinc-500 text-[10px] xs:text-xs leading-relaxed font-medium">
                                    For all event, sponsorship, and participation inquiries.
                                </p>

                                {/* Quick Action Buttons — 44px min touch */}
                                <div className="flex gap-2 xs:gap-2.5 sm:gap-3 mt-3 xs:mt-4 sm:mt-6 flex-wrap">
                                    <MagneticButton
                                        as="a"
                                        href="tel:+916282585080"
                                        className="min-h-[44px] flex items-center px-3 xs:px-4 py-2 text-[11px] xs:text-xs border border-yellow-500/30 rounded-md hover:bg-yellow-500/10 active:bg-yellow-500/15 transition text-yellow-500"
                                    >
                                        📞 Call Now
                                    </MagneticButton>

                                    <MagneticButton
                                        as="a"
                                        href="https://wa.me/916282585080"
                                        target="_blank"
                                        className="min-h-[44px] flex items-center px-3 xs:px-4 py-2 text-[11px] xs:text-xs border border-yellow-500/30 rounded-md hover:bg-yellow-500/10 active:bg-yellow-500/15 transition text-yellow-500"
                                    >
                                        💬 WhatsApp
                                    </MagneticButton>

                                    <MagneticButton
                                        as="a"
                                        href="mailto:roboticsclub.vdp@srmist.edu.in"
                                        className="min-h-[44px] flex items-center px-3 xs:px-4 py-2 text-[11px] xs:text-xs border border-yellow-500/30 rounded-md hover:bg-yellow-500/10 active:bg-yellow-500/15 transition text-yellow-500"
                                    >
                                        📧 Email
                                    </MagneticButton>
                                </div>
                            </div>
                        </HoverTiltCard>
                    </motion.div>

                    {/* ── VENUE CARD ── */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                    >
                        <HoverTiltCard>
                            <div className="gold-sweep relative border border-yellow-500/20 rounded-xl p-4 xs:p-5 sm:p-6 bg-[#0A0A0A]/60 sm:backdrop-blur-md hover:border-yellow-400/40 transition-colors duration-300 h-full">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-t-xl" />

                                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4">
                                    Event Venue
                                </h3>

                                <p className="text-[11px] xs:text-xs sm:text-sm text-yellow-300 leading-relaxed">
                                    SRM Institute of Science and Technology (SRMIST)
                                    <br />
                                    Vadapalani Campus
                                    <br />
                                    C Block, No. 1, Jawaharlal Nehru Salai
                                    <br />
                                    <span className="text-yellow-300/80">(100 Feet Road)</span>
                                    <br />
                                    Adjacent to SIMS Hospital
                                    <br />
                                    Chennai – 600026
                                </p>

                                <p className="mt-2 xs:mt-3 sm:mt-4 text-yellow-500/30 text-[10px] xs:text-xs font-bold tracking-widest uppercase">
                                    NAAC A++ Accredited · Established 2011
                                </p>

                                <MagneticButton
                                    as="a"
                                    href="https://maps.google.com/?q=SRM+University+Vadapalani+City+Campus"
                                    target="_blank"
                                    className="inline-flex items-center min-h-[44px] mt-3 xs:mt-4 sm:mt-6 px-4 xs:px-5 py-2 xs:py-2.5 text-[11px] xs:text-xs sm:text-sm bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-semibold rounded-md hover:opacity-90 active:opacity-80 shadow-lg transition"
                                >
                                    📍 Get Directions
                                </MagneticButton>
                            </div>
                        </HoverTiltCard>
                    </motion.div>

                    {/* ── OFFICIAL CHANNELS CARD ── */}
                    <motion.div
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                    >
                        <HoverTiltCard>
                            <div className="gold-sweep relative border border-yellow-500/20 rounded-xl p-4 xs:p-5 sm:p-6 bg-[#0A0A0A]/60 sm:backdrop-blur-md hover:border-yellow-400/40 transition-colors duration-300 h-full">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-t-xl" />

                                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4">
                                    Official Channels
                                </h3>

                                <p className="text-zinc-400 text-[10px] xs:text-xs sm:text-sm mb-2 xs:mb-3 sm:mb-4">
                                    Verified student-led organizing committee under SRMIST
                                    Vadapalani.
                                </p>

                                <div className="space-y-2 xs:space-y-2.5 sm:space-y-3">
                                    <Link
                                        href="https://share.google/KfXH1G6Qb4mdEJZoy"
                                        target="_blank"
                                        className="block min-h-[40px] flex items-center text-[11px] xs:text-xs sm:text-sm text-yellow-400/90 hover:text-yellow-300 active:text-yellow-200 transition underline underline-offset-4 decoration-yellow-500/30 font-medium"
                                    >
                                        🔗 View Official Campus Reference
                                    </Link>

                                    <Link
                                        href="https://www.instagram.com/roboticsclub.srmvdp/?hl=en"
                                        target="_blank"
                                        className="block min-h-[40px] flex items-center text-[11px] xs:text-xs sm:text-sm text-yellow-400/90 hover:text-yellow-300 active:text-yellow-200 transition font-medium"
                                    >
                                        📸 Instagram (@roboticsclub.srmvdp)
                                    </Link>

                                    <Link
                                        href="https://in.linkedin.com/in/ece-srmist-vadapalani-4a782a26a"
                                        target="_blank"
                                        className="block min-h-[40px] flex items-center text-[11px] xs:text-xs sm:text-sm text-yellow-400/90 hover:text-yellow-300 active:text-yellow-200 transition font-medium"
                                    >
                                        💼 LinkedIn Profile (Official)
                                    </Link>
                                </div>

                                <p className="mt-3 xs:mt-4 sm:mt-6 text-zinc-500 text-[10px] xs:text-xs font-medium">
                                    Response time: within 24 hours.
                                </p>
                            </div>
                        </HoverTiltCard>
                    </motion.div>
                </div>

                {/* ─── GOOGLE FORM / CTA ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-8 xs:mt-12 sm:mt-16 md:mt-20 text-center"
                >
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-2 xs:mb-3">
                        Transmit Message
                    </h3>
                    <p className="text-zinc-500 text-[10px] xs:text-xs mb-4 xs:mb-5 sm:mb-6 uppercase tracking-widest font-bold">
                        Response time: within 24 hours
                    </p>

                    <MagneticButton
                        as="a"
                        href="YOUR_GOOGLE_FORM_LINK"
                        target="_blank"
                        className="inline-flex items-center justify-center min-h-[48px] px-5 xs:px-6 sm:px-8 md:px-10 py-3 xs:py-3.5 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-black uppercase tracking-wider text-[11px] xs:text-xs sm:text-sm rounded-md hover:opacity-90 active:opacity-80 shadow-[0_0_20px_rgba(255,215,0,0.25)] transition-all"
                    >
                        Open Contact Form →
                    </MagneticButton>
                </motion.div>

                {/* ─── INSTITUTIONAL FOOTER LINE ─── */}
                <p className="text-center text-zinc-600 text-[9px] xs:text-[10px] sm:text-xs mt-8 xs:mt-10 sm:mt-14 md:mt-16 tracking-widest uppercase font-medium max-w-sm sm:max-w-none mx-auto opacity-50">
                    XION 26 is organized under SRMIST Vadapalani Campus · All rights
                    reserved
                </p>
            </div>
        </section>
    );
}
