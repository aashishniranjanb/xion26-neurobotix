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
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#020202] to-[#000000] opacity-80 pointer-events-none" />

            <div className="relative w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-12">

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

                    <p className="mt-2 xs:mt-3 sm:mt-4 text-zinc-200 tracking-wide text-xs xs:text-sm md:text-base max-w-md sm:max-w-none mx-auto font-medium">
                        Official contact channels for XION 26 – NeuroBotix
                    </p>

                    <p className="text-yellow-400/80 text-[10px] xs:text-xs mt-1.5 tracking-wider uppercase font-bold">
                        SRM Vadapalani Campus
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-8">

                    {/* STUDENT ORGANIZER CARD */}
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

                                <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-3 sm:mb-4">
                                    Student Organizer – XION 26
                                </h3>

                                <span className="inline-block px-2 py-0.5 text-[10px] xs:text-xs bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 tracking-widest uppercase mb-2 xs:mb-3 sm:mb-4">
                                    Primary Contact
                                </span>

                                {/* ONLY THIS BLOCK WAS MODIFIED */}
                                <div className="space-y-1 text-[12px] xs:text-sm leading-tight">
                                    <p className="text-yellow-500/80">
                                        Contact:{" "}
                                        <span className="text-yellow-200 font-semibold text-[13px] xs:text-base">
                                            Talha V R A — +91 81482 63558
                                        </span>
                                    </p>

                                    <p className="text-yellow-500/80">
                                        Contact:{" "}
                                        <span className="text-yellow-200 font-semibold text-[13px] xs:text-base">
                                            M Akhilesh — +91 6282 585 080
                                        </span>
                                    </p>

                                    <p className="text-yellow-500/80">
                                        Email:{" "}
                                        <span className="text-yellow-200 font-semibold text-[11px] xs:text-xs sm:text-sm break-all">
                                            roboticsclub.vdp@srmist.edu.in
                                        </span>
                                    </p>
                                </div>

                                <p className="mt-3 xs:mt-4 text-zinc-200/80 text-[11px] xs:text-xs leading-relaxed font-semibold">
                                    For all event, sponsorship, and participation inquiries.
                                </p>

                                <div className="flex gap-2 xs:gap-3 mt-4 xs:mt-6 flex-wrap">

                                    <MagneticButton
                                        as="a"
                                        href="tel:+918148263558"
                                        className="min-h-[46px] flex-1 flex items-center justify-center px-4 py-2.5 text-[12px] xs:text-sm border border-yellow-500/30 rounded-lg hover:bg-yellow-500/10 active:bg-yellow-500/15 transition text-yellow-500 font-bold"
                                    >
                                        📞 Call
                                    </MagneticButton>

                                    <MagneticButton
                                        as="a"
                                        href="https://wa.me/918148263558"
                                        target="_blank"
                                        className="min-h-[46px] flex-1 flex items-center justify-center px-4 py-2.5 text-[12px] xs:text-sm border border-yellow-500/30 rounded-lg hover:bg-yellow-500/10 active:bg-yellow-500/15 transition text-yellow-500 font-bold"
                                    >
                                        💬 WA
                                    </MagneticButton>

                                    <MagneticButton
                                        as="a"
                                        href="mailto:roboticsclub.vdp@srmist.edu.in"
                                        className="min-h-[46px] w-full flex items-center justify-center px-4 py-2.5 text-[12px] xs:text-sm border border-yellow-500/30 rounded-lg hover:bg-yellow-500/10 active:bg-yellow-500/15 transition text-yellow-500 font-bold"
                                    >
                                        📧 Email Inquiry
                                    </MagneticButton>

                                </div>

                            </div>
                        </HoverTiltCard>
                    </motion.div>

                    {/* VENUE CARD */}
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

                                <p className="text-[12px] xs:text-sm text-yellow-300 leading-relaxed font-medium">
                                    SRM Institute of Science and Technology (SRMIST)
                                    <br />
                                    Vadapalani Campus
                                    <br />
                                    C Block, No. 1, Jawaharlal Nehru Salai
                                    <br />
                                    <span className="text-yellow-300/80 font-normal">(100 Feet Road)</span>
                                    <br />
                                    Adjacent to SIMS Hospital
                                    <br />
                                    Chennai – 600026
                                </p>

                                <p className="mt-2 xs:mt-3 sm:mt-4 text-yellow-500 text-[10px] xs:text-xs font-bold tracking-widest uppercase">
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

                </div>

                <p className="text-center text-zinc-200 text-[9px] xs:text-[10px] sm:text-xs mt-8 xs:mt-10 sm:mt-14 md:mt-16 tracking-widest uppercase font-medium max-w-sm sm:max-w-none mx-auto opacity-50">
                    XION 26 is organized under SRMIST Vadapalani Campus · All rights reserved
                </p>

            </div>
        </section>
    );
}