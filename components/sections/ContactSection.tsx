"use client";

import Link from "next/link";
import { motion } from "motion/react";
import HoverTiltCard from "@/components/ui/HoverTiltCard";
import MagneticButton from "@/components/ui/MagneticButton";
import {
    IconPhone,
    IconBrandWhatsapp,
    IconMail,
    IconMapPin,
    IconLink,
    IconBrandInstagram,
    IconBrandLinkedin
} from "@tabler/icons-react";

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
        <section className="relative py-12 xs:py-16 sm:py-20 md:py-28 bg-[#020202] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#020202] to-black opacity-90 pointer-events-none" />

            <div className="relative w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 xs:mb-10 sm:mb-14 md:mb-16"
                >
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-black tracking-wider sm:tracking-widest uppercase leading-tight text-white">
                        Authorized <span className="gold-gradient-text">Communication</span>
                    </h2>
                    <p className="mt-2 xs:mt-3 sm:mt-4 text-white/60 tracking-wide text-xs xs:text-sm md:text-base max-w-md sm:max-w-none mx-auto font-medium">
                        Official contact channels for XION 26 – NeuroBotix
                    </p>
                    <p className="text-gold-primary/80 text-[10px] xs:text-xs mt-1.5 tracking-wider uppercase font-bold">
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
                            <div className="relative border border-gold-primary/10 hover:border-gold-primary/30 rounded-xl p-4 xs:p-5 sm:p-6 bg-white/[0.02] sm:backdrop-blur-md transition-all duration-300 h-full group">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                                <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-3 sm:mb-4 text-white">
                                    Student Organizer – XION 26
                                </h3>

                                <span className="inline-block px-2 py-0.5 text-[10px] xs:text-xs bg-gold-primary/10 border border-gold-primary/20 rounded-full text-gold-primary tracking-widest uppercase mb-1 xs:mb-1.5 sm:mb-2">
                                    Primary Contact
                                </span>

                                <div className="space-y-1 text-[12px] xs:text-sm leading-tight">
                                    <p className="text-white/40">
                                        Contact:{" "}
                                        <span className="text-white font-semibold text-[13px] xs:text-base">
                                            Talha V R A — +91 81482 63558
                                        </span>
                                    </p>

                                    <p className="text-white/40">
                                        Contact:{" "}
                                        <span className="text-white font-semibold text-[13px] xs:text-base">
                                            M Akhilesh — +91 6282 585 080
                                        </span>
                                    </p>

                                    <p className="text-white/40">
                                        Email:{" "}
                                        <span className="text-white font-semibold text-[11px] xs:text-xs sm:text-sm break-all">
                                            roboticsclub.vdp@srmist.edu.in
                                        </span>
                                    </p>
                                </div>

                                <p className="mt-1 xs:mt-1.5 text-white/50 text-[11px] xs:text-xs leading-relaxed font-semibold">
                                    For all event, sponsorship, and participation inquiries.
                                </p>

                                <div className="flex gap-2 xs:gap-3 mt-2 xs:mt-3 flex-wrap">
                                    <MagneticButton
                                        as="a"
                                        href="tel:+918148263558"
                                        className="min-h-[46px] flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[12px] xs:text-sm border border-gold-primary/30 rounded-lg hover:bg-gold-primary/10 active:bg-gold-primary/15 transition text-gold-primary font-bold"
                                    >
                                        <IconPhone size={16} stroke={2.5} /> Call
                                    </MagneticButton>

                                    <MagneticButton
                                        as="a"
                                        href="https://wa.me/918148263558"
                                        target="_blank"
                                        className="min-h-[46px] flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[12px] xs:text-sm border border-gold-primary/30 rounded-lg hover:bg-gold-primary/10 active:bg-gold-primary/15 transition text-gold-primary font-bold"
                                    >
                                        <IconBrandWhatsapp size={16} stroke={2.5} /> WhatsApp
                                    </MagneticButton>

                                    <MagneticButton
                                        as="a"
                                        href="mailto:roboticsclub.vdp@srmist.edu.in"
                                        className="min-h-[46px] w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-[12px] xs:text-sm border border-gold-primary/30 rounded-lg hover:bg-gold-primary/10 active:bg-gold-primary/15 transition text-gold-primary font-bold"
                                    >
                                        <IconMail size={16} stroke={2.5} /> Email Inquiry
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
                            <div className="relative border border-gold-primary/10 hover:border-gold-primary/30 rounded-xl p-4 xs:p-5 sm:p-6 bg-white/[0.02] sm:backdrop-blur-md transition-all duration-300 h-full group">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                                <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-3 sm:mb-4 text-white">
                                    Event Venue
                                </h3>

                                <p className="text-[12px] xs:text-sm text-white/60 leading-relaxed font-medium">
                                    SRM Institute of Science and Technology (SRMIST)
                                    <br />
                                    Vadapalani Campus
                                    <br />
                                    C Block, No. 1, Jawaharlal Nehru Salai
                                    <br />
                                    <span className="text-white/40 font-normal">
                                        (100 Feet Road)
                                    </span>
                                    <br />
                                    Adjacent to SIMS Hospital
                                    <br />
                                    Chennai – 600026
                                </p>

                                <p className="mt-2 xs:mt-3 sm:mt-4 text-gold-primary text-[10px] xs:text-xs font-bold tracking-widest uppercase">
                                    NAAC A++ Accredited · Established 2011
                                </p>

                                <MagneticButton
                                    as="a"
                                    href="https://maps.google.com/?q=SRM+University+Vadapalani+City+Campus"
                                    target="_blank"
                                    className="inline-flex items-center gap-1.5 min-h-[44px] mt-3 xs:mt-4 sm:mt-6 px-4 xs:px-5 py-2 xs:py-2.5 text-[11px] xs:text-xs sm:text-sm border border-gold-primary/30 text-gold-primary bg-gold-primary/5 hover:bg-gold-primary/15 font-semibold rounded-md transition"
                                >
                                    <IconMapPin size={16} stroke={2.5} /> Get Directions
                                </MagneticButton>
                            </div>
                        </HoverTiltCard>
                    </motion.div>

                    {/* OFFICIAL CHANNELS CARD */}
                    <motion.div
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                    >
                        <HoverTiltCard>
                            <div className="relative border border-gold-primary/10 hover:border-gold-primary/30 rounded-xl p-4 xs:p-5 sm:p-6 bg-white/[0.02] sm:backdrop-blur-md transition-all duration-300 h-full group">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                                <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-3 sm:mb-4 text-white">
                                    Official Channels
                                </h3>

                                <p className="text-white/60 text-[12px] xs:text-sm mb-3 xs:mb-4 leading-relaxed">
                                    Verified student-led organizing committee under SRMIST
                                    Vadapalani.
                                </p>

                                <div className="space-y-3 xs:space-y-4">
                                    <Link
                                        href="https://share.google/KfXH1G6Qb4mdEJZoy"
                                        target="_blank"
                                        className="block min-h-[40px] flex items-center gap-2 text-[12px] xs:text-sm text-gold-primary/90 hover:text-white transition underline underline-offset-4 decoration-gold-primary/30 font-semibold"
                                    >
                                        <IconLink size={18} stroke={2} aria-hidden="true" /> Official Campus Reference
                                    </Link>

                                    <Link
                                        href="https://www.instagram.com/roboticsclub.srmvdp/?hl=en"
                                        target="_blank"
                                        className="block min-h-[40px] flex items-center gap-2 text-[12px] xs:text-sm text-gold-primary/90 hover:text-white transition font-semibold"
                                    >
                                        <IconBrandInstagram size={18} stroke={2} aria-hidden="true" /> Instagram (@roboticsclub.srmvdp)
                                    </Link>

                                    <Link
                                        href="https://in.linkedin.com/in/ece-srmist-vadapalani-4a782a26a"
                                        target="_blank"
                                        className="block min-h-[40px] flex items-center gap-2 text-[12px] xs:text-sm text-gold-primary/90 hover:text-white transition font-semibold"
                                    >
                                        <IconBrandLinkedin size={18} stroke={2} aria-hidden="true" /> LinkedIn Profile (Official)
                                    </Link>
                                </div>

                                <p className="mt-3 xs:mt-4 sm:mt-6 text-white/40 text-[10px] xs:text-xs font-medium">
                                    Response time: within 24 hours.
                                </p>
                            </div>
                        </HoverTiltCard>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 xs:mt-16 sm:mt-20 md:mt-24 text-center max-w-2xl mx-auto"
                >
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-5 tracking-wide uppercase text-white">
                        Transmit Message
                    </h3>
                    <p className="text-white/60 text-[12px] xs:text-sm mb-6 xs:mb-8 md:mb-10 leading-relaxed font-medium">
                        <br className="hidden sm:block" />
                        <span className="text-gold-primary font-bold mt-2 inline-block">RESPONSE TIME: WITHIN 24 HOURS.</span>
                    </p>

                    <MagneticButton
                        as="a"
                        href="/404"
                        target="_blank"
                        className="inline-flex items-center justify-center min-h-[50px] sm:min-h-[56px] px-8 xs:px-10 sm:px-12 py-3 xs:py-3.5 sm:py-4 text-[13px] xs:text-sm sm:text-base border border-gold-primary/30 text-gold-primary font-black uppercase tracking-widest rounded-md hover:bg-gold-primary/10 active:opacity-80 transition-all"
                    >
                        OPEN CONTACT FORM →
                    </MagneticButton>
                </motion.div>

                <p className="text-center text-zinc-200 text-[9px] xs:text-[10px] sm:text-xs mt-12 xs:mt-16 sm:mt-20 md:mt-24 tracking-widest uppercase font-medium max-w-sm sm:max-w-none mx-auto opacity-50">
                    XION 26 is organized under SRMIST Vadapalani Campus · All rights reserved
                </p>
            </div>
        </section>
    );
}