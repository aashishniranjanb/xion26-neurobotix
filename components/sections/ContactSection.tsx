"use client";

import Link from "next/link";
import { motion } from "motion/react";
import HoverTiltCard from "@/components/ui/HoverTiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

const reveal = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
        },
    }),
};

export default function ContactSection() {
    return (
        <section className="relative py-16 xs:py-20 md:py-28 bg-[#020202] text-yellow-500 overflow-hidden">
            {/* Background Metallic Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#020202] to-[#000000] opacity-80 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-12">
                {/* ─── SECTION HEADER ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-10 xs:mb-12 sm:mb-16"
                >
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-widest uppercase">
                        Authorized Communication
                    </h2>
                    <p className="mt-3 xs:mt-4 text-yellow-700 tracking-wide text-xs xs:text-sm sm:text-base">
                        Official contact channels for XION 26 – NeuroBotix
                    </p>
                    <p className="text-yellow-700/60 text-[10px] xs:text-xs mt-1 tracking-wider">
                        SRM Vadapalani Campus
                    </p>
                </motion.div>

                {/* ─── CONTACT CARDS GRID ─── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                    {/* ── STUDENT ORGANIZER CARD ── */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                    >
                        <HoverTiltCard>
                            <div className="gold-sweep relative border border-yellow-500/20 rounded-xl p-4 xs:p-5 sm:p-6 bg-[#0A0A0A]/60 backdrop-blur-md hover:border-yellow-400/40 transition-all duration-300">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-t-xl" />

                                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4">
                                    Student Organizer – XION 26
                                </h3>

                                <span className="inline-block px-2.5 py-0.5 text-[10px] xs:text-xs bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 tracking-widest uppercase mb-3 xs:mb-4">
                                    Primary Contact
                                </span>

                                <div className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm">
                                    <p>
                                        Name:{" "}
                                        <span className="text-yellow-300">[To Be Updated]</span>
                                    </p>
                                    <p>
                                        Phone:{" "}
                                        <span className="text-yellow-300">+91 XXXXXXXXXX</span>
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <span className="text-yellow-300 break-all">
                                            xion@srm.edu
                                        </span>
                                    </p>
                                </div>

                                <p className="mt-3 xs:mt-4 text-yellow-700 text-[10px] xs:text-xs leading-relaxed">
                                    For all event, sponsorship, and participation inquiries.
                                </p>

                                {/* Quick Action Buttons */}
                                <div className="flex gap-2 xs:gap-3 mt-4 xs:mt-6 flex-wrap">
                                    <MagneticButton
                                        as="a"
                                        href="tel:+91XXXXXXXXXX"
                                        className="px-3 xs:px-4 py-1.5 xs:py-2 text-[10px] xs:text-xs border border-yellow-500/30 rounded-md hover:bg-yellow-500/10 transition text-yellow-500"
                                    >
                                        📞 Call Now
                                    </MagneticButton>

                                    <MagneticButton
                                        as="a"
                                        href="https://wa.me/91XXXXXXXXXX"
                                        target="_blank"
                                        className="px-3 xs:px-4 py-1.5 xs:py-2 text-[10px] xs:text-xs border border-yellow-500/30 rounded-md hover:bg-yellow-500/10 transition text-yellow-500"
                                    >
                                        💬 WhatsApp
                                    </MagneticButton>

                                    <MagneticButton
                                        as="a"
                                        href="mailto:xion@srm.edu"
                                        className="px-3 xs:px-4 py-1.5 xs:py-2 text-[10px] xs:text-xs border border-yellow-500/30 rounded-md hover:bg-yellow-500/10 transition text-yellow-500"
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
                            <div className="gold-sweep relative border border-yellow-500/20 rounded-xl p-4 xs:p-5 sm:p-6 bg-[#0A0A0A]/60 backdrop-blur-md hover:border-yellow-400/40 transition-all duration-300">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-t-xl" />

                                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4">
                                    Event Venue
                                </h3>

                                <p className="text-xs xs:text-sm text-yellow-300 leading-relaxed">
                                    SRM Institute of Science and Technology (SRMIST)
                                    <br />
                                    Vadapalani Campus
                                    <br />
                                    C Block, No. 1, Jawaharlal Nehru Salai (100 Feet Road)
                                    <br />
                                    Adjacent to SIMS Hospital
                                    <br />
                                    Chennai – 600026
                                </p>

                                <p className="mt-3 xs:mt-4 text-yellow-700 text-[10px] xs:text-xs">
                                    NAAC A++ Accredited Institution · Established 2011
                                </p>

                                <MagneticButton
                                    as="a"
                                    href="https://maps.google.com/?q=SRM+University+Vadapalani+City+Campus"
                                    target="_blank"
                                    className="inline-block mt-4 xs:mt-6 px-4 xs:px-5 py-2 xs:py-2.5 text-[10px] xs:text-sm bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-semibold rounded-md hover:opacity-90 shadow-lg hover:shadow-yellow-500/30 transition"
                                >
                                    Get Directions
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
                            <div className="gold-sweep relative border border-yellow-500/20 rounded-xl p-4 xs:p-5 sm:p-6 bg-[#0A0A0A]/60 backdrop-blur-md hover:border-yellow-400/40 transition-all duration-300">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-t-xl" />

                                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4">
                                    Official Channels
                                </h3>

                                <p className="text-yellow-700 text-[10px] xs:text-xs sm:text-sm mb-3 xs:mb-4">
                                    Verified student-led organizing committee under SRMIST
                                    Vadapalani.
                                </p>

                                <div className="space-y-2 xs:space-y-3 text-xs xs:text-sm">
                                    <Link
                                        href="https://share.google/KfXH1G6Qb4mdEJZoy"
                                        target="_blank"
                                        className="block hover:text-yellow-300 transition underline underline-offset-4 decoration-yellow-500/30"
                                    >
                                        View Official Campus Reference
                                    </Link>

                                    <Link
                                        href="#"
                                        className="block hover:text-yellow-300 transition"
                                    >
                                        📸 Instagram (To Be Updated)
                                    </Link>

                                    <Link
                                        href="#"
                                        className="block hover:text-yellow-300 transition"
                                    >
                                        💼 LinkedIn Page (To Be Updated)
                                    </Link>
                                </div>

                                <p className="mt-4 xs:mt-6 text-yellow-700 text-[10px] xs:text-xs">
                                    Response time: within 24 hours.
                                </p>
                            </div>
                        </HoverTiltCard>
                    </motion.div>
                </div>

                {/* ─── GOOGLE FORM / CTA ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-12 xs:mt-16 sm:mt-20 text-center"
                >
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-2 xs:mb-3">
                        Transmit Message
                    </h3>
                    <p className="text-yellow-700 text-[10px] xs:text-xs mb-5 xs:mb-6">
                        Response time: within 24 hours
                    </p>

                    <MagneticButton
                        as="a"
                        href="YOUR_GOOGLE_FORM_LINK"
                        target="_blank"
                        className="inline-block px-6 xs:px-8 sm:px-10 py-3 xs:py-3.5 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-black uppercase tracking-[0.15em] text-[10px] xs:text-xs sm:text-sm rounded-none hover:opacity-90 shadow-[0_0_25px_rgba(255,215,0,0.3)] hover:shadow-[0_0_35px_rgba(255,215,0,0.5)] transition-all"
                    >
                        Open Contact Form →
                    </MagneticButton>
                </motion.div>

                {/* ─── INSTITUTIONAL FOOTER LINE ─── */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-center text-yellow-700/50 text-[9px] xs:text-[10px] sm:text-xs mt-10 xs:mt-12 sm:mt-16 tracking-wider"
                >
                    XION 26 is organized under SRMIST Vadapalani Campus · All rights
                    reserved
                </motion.p>
            </div>
        </section>
    );
}
