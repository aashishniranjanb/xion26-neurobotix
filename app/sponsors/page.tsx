"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import HoverTiltCard from "@/components/ui/HoverTiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

/* ─── Animated Counter (uses rAF, mobile-safe) ─── */
function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 1000;
                    const startTime = performance.now();

                    const tick = (now: number) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
                        setCount(Math.floor(eased * value));
                        if (progress < 1) requestAnimationFrame(tick);
                    };

                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text">
            {count}{suffix}
        </div>
    );
}

export default function SponsorPage() {
    const pulseRef = useRef<HTMLDivElement>(null);
    const nodesRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<SVGSVGElement>(null);
    const [isMobile, setIsMobile] = useState(true);

    /* ─── Detect mobile once on mount ─── */
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMobile(window.innerWidth < 768);
    }, []);

    /* ─── Cursor-Reactive Depth (desktop only) ─── */
    const handleMove = useCallback((e: MouseEvent) => {
        if (isMobile) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;

        if (pulseRef.current)
            pulseRef.current.style.transform = `translate(calc(-50% + ${x * 0.4}px), calc(-50% + ${y * 0.4}px))`;
        if (linesRef.current)
            linesRef.current.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px)`;
        if (nodesRef.current)
            nodesRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }, [isMobile]);

    useEffect(() => {
        if (isMobile) return;
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [isMobile, handleMove]);

    return (
        <section className="relative min-h-screen bg-[#020202] text-yellow-500 overflow-hidden">
            {/* ═══════ Neural Background (hidden on mobile for perf) ═══════ */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#020202] to-black opacity-90" />

                {!isMobile && (
                    <>
                        {/* Deep: Pulse */}
                        <div
                            ref={pulseRef}
                            className="neural-layer absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(255,215,0,0.5) 0%, rgba(255,215,0,0.12) 40%, transparent 70%)",
                                filter: "blur(80px)",
                                animation: "neuralPulse 10s ease-in-out infinite",
                            }}
                        />

                        {/* Mid: Lines */}
                        <svg
                            ref={linesRef}
                            className="neural-layer absolute inset-0 w-full h-full"
                            viewBox="0 0 1000 600"
                            preserveAspectRatio="none"
                        >
                            <line x1="200" y1="150" x2="500" y2="300" stroke="rgba(255,215,0,0.12)" strokeWidth="1" style={{ animation: "neuralLineFlow 8s ease-in-out infinite" }} />
                            <line x1="500" y1="300" x2="800" y2="120" stroke="rgba(255,215,0,0.12)" strokeWidth="1" style={{ animation: "neuralLineFlow 8s ease-in-out 2s infinite" }} />
                            <line x1="500" y1="300" x2="700" y2="500" stroke="rgba(255,215,0,0.12)" strokeWidth="1" style={{ animation: "neuralLineFlow 8s ease-in-out 4s infinite" }} />
                            <line x1="200" y1="150" x2="700" y2="500" stroke="rgba(255,215,0,0.08)" strokeWidth="0.5" style={{ animation: "neuralLineFlow 8s ease-in-out 1s infinite" }} />
                        </svg>

                        {/* Front: Nodes */}
                        <div
                            ref={nodesRef}
                            className="neural-layer absolute inset-0"
                            style={{
                                backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,215,0,0.25) 2px, transparent 2px), radial-gradient(circle at 70% 60%, rgba(255,215,0,0.25) 2px, transparent 2px), radial-gradient(circle at 40% 80%, rgba(255,215,0,0.2) 1.5px, transparent 1.5px), radial-gradient(circle at 85% 20%, rgba(255,215,0,0.2) 1.5px, transparent 1.5px)",
                                backgroundRepeat: "no-repeat",
                                animation: "nodeFlicker 6s ease-in-out infinite",
                            }}
                        />
                    </>
                )}

                {/* Mobile: Simple subtle glow (no blur, no animations) */}
                {isMobile && (
                    <div
                        className="absolute w-[300px] h-[300px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
                        style={{
                            background: "radial-gradient(circle, rgba(255,215,0,0.6) 0%, transparent 70%)",
                        }}
                    />
                )}
            </div>

            {/* ═══════ Page Content ═══════ */}
            <div className="relative w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-12 pt-24 xs:pt-28 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-28">

                {/* ═══════ ACT 1: HERO ═══════ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 xs:mb-16 sm:mb-20 md:mb-24"
                >
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-wider sm:tracking-wide uppercase leading-tight">
                        Strategic <span className="gold-gradient-text">Alliance</span>
                    </h1>

                    <p className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-yellow-500/80 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl text-xs xs:text-sm md:text-lg leading-relaxed font-medium">
                        Partner with NeuroBotix 2026 — a national-level robotics and intelligent
                        systems platform hosted at SRMIST Vadapalani Campus, Chennai.
                    </p>

                    <div className="mt-2 xs:mt-3 text-yellow-500/80 text-[10px] xs:text-xs space-y-1 uppercase font-bold tracking-widest">
                        <p>📅 24th March 2026</p>
                        <p>📍 SRMIST Vadapalani Campus, Chennai</p>
                        <p>🏆 National-Level Engineering Techfest</p>
                    </div>

                    <div className="mt-5 xs:mt-6 sm:mt-8 flex gap-2.5 xs:gap-3 sm:gap-4 md:gap-6 flex-wrap">
                        <MagneticButton
                            as="a"
                            href="/XION_26_BROCHURE.pdf"
                            target="_blank"
                            className="min-h-[46px] flex-1 xs:flex-none flex items-center justify-center px-5 py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold text-xs xs:text-sm uppercase tracking-wider rounded-lg hover:scale-105 active:scale-100 shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all"
                        >
                            Brochure
                        </MagneticButton>

                        <MagneticButton
                            as="a"
                            href="/contact"
                            className="min-h-[46px] flex-1 xs:flex-none flex items-center justify-center px-5 py-3 border border-yellow-500/40 text-yellow-500 font-bold text-xs xs:text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-500/10 active:bg-yellow-500/15 transition-all"
                        >
                            Contact
                        </MagneticButton>
                    </div>
                </motion.div>

                {/* ═══════ ACT 2: METRICS ═══════ */}
                <div className="grid grid-cols-2 gap-2.5 xs:gap-3 sm:gap-5 md:gap-8 mb-12 xs:mb-16 sm:mb-24 md:mb-32">
                    {[
                        { value: 2000, label: "Participants" },
                        { value: 100, label: "Colleges" },
                        { value: 25, label: "States Reach" },
                        { value: 15, label: "Years Legacy" },
                    ].map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                        >
                            <div className="border border-yellow-500/20 p-4 xs:p-6 sm:p-5 md:p-8 rounded-xl bg-[#0A0A0A]/60 sm:backdrop-blur-md text-center h-full flex flex-col justify-center">
                                <Counter value={m.value} />
                                <p className="text-yellow-500/90 mt-1.5 text-[10px] xs:text-xs md:text-sm uppercase tracking-widest font-bold">
                                    {m.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ═══════ ACT 3: INDUSTRY ALIGNMENT ═══════ */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 xs:mb-16 sm:mb-24 md:mb-32"
                >
                    <p className="text-center text-zinc-200 text-[10px] xs:text-xs uppercase tracking-wider sm:tracking-[0.3em] mb-3 xs:mb-4 sm:mb-6 font-black">
                        Industries We Align With
                    </p>
                    <div className="flex gap-x-3 gap-y-1.5 xs:gap-x-4 xs:gap-y-2 sm:gap-x-6 sm:gap-y-3 md:gap-x-12 justify-center flex-wrap text-zinc-300 text-[10px] xs:text-xs sm:text-sm uppercase tracking-widest font-bold">
                        {["Robotics", "AI & ML", "Embedded Systems", "Automation", "Drone Tech", "IoT"].map((ind) => (
                            <span key={ind} className="py-1">{ind}</span>
                        ))}
                    </div>
                </motion.div>

                {/* ═══════ ACT 4: WHY PARTNER ═══════ */}
                <div className="mb-12 xs:mb-16 sm:mb-24 md:mb-32">
                    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 uppercase tracking-wider">
                        Why Partner With XION 26
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-8">
                        {[
                            { title: "Brand Visibility", desc: "Campus-wide brand placement across digital platforms, on-ground event assets, and all promotional materials." },
                            { title: "Talent Pipeline", desc: "Direct engagement with robotics, AI, and embedded systems innovators — India's next-gen engineering talent." },
                            { title: "Product Demo", desc: "On-site technology showcase to engineering students, faculty, and industry guests attending the event." },
                            { title: "Digital Amplification", desc: "Event promotion through social media campaigns, post-event highlight reels, and digital coverage across platforms." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                            >
                                <HoverTiltCard>
                                    <div className="gold-sweep relative border border-yellow-500/20 rounded-xl p-4 xs:p-6 sm:p-5 md:p-8 bg-[#0A0A0A]/60 sm:backdrop-blur-md hover:border-yellow-400/40 transition-colors duration-300 h-full">
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-t-xl" />
                                        <h3 className="text-base xs:text-lg md:text-xl font-bold mb-2 xs:mb-3 md:mb-4 text-yellow-400">{item.title}</h3>
                                        <p className="text-yellow-200/80 text-xs xs:text-sm md:text-base leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </HoverTiltCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ═══════ ACT 5: SPONSORSHIP TIERS ═══════ */}
                <div className="mb-12 xs:mb-16 sm:mb-24 md:mb-32">
                    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 uppercase tracking-wider">
                        Sponsorship Tiers
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-8">
                        {/* Title Partner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                            className="sm:col-span-2 md:col-span-1"
                        >
                            <HoverTiltCard>
                                <div className="gold-sweep relative border border-yellow-500 rounded-xl p-4 xs:p-5 sm:p-6 md:p-10 bg-[#0A0A0A]/80 sm:backdrop-blur-md shadow-[0_0_30px_rgba(255,215,0,0.06)] transition-all duration-300">
                                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 rounded-t-xl" />
                                    <span className="inline-block px-2 py-0.5 text-[9px] xs:text-[10px] bg-yellow-500/15 border border-yellow-500/25 rounded-full text-yellow-400 tracking-widest uppercase mb-2 xs:mb-3 sm:mb-4">
                                        1 Exclusive Slot
                                    </span>
                                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">Title Partner</h3>
                                    <ul className="space-y-2 xs:space-y-3 text-yellow-200/90 text-xs xs:text-sm md:text-base font-semibold">
                                        <li>• Logo on main event backdrop</li>
                                        <li>• On-stage acknowledgment</li>
                                        <li>• Social media feature series</li>
                                        <li>• Campus banner presence</li>
                                        <li>• Dedicated brand mention in media</li>
                                    </ul>
                                </div>
                            </HoverTiltCard>
                        </motion.div>

                        {/* Event Partner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <HoverTiltCard>
                                <div className="gold-sweep relative border border-yellow-500/20 rounded-xl p-4 xs:p-5 sm:p-6 md:p-10 bg-[#0A0A0A]/60 sm:backdrop-blur-md hover:border-yellow-400/40 transition-colors duration-300 h-full">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-t-xl" />
                                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">Event Partner</h3>
                                    <ul className="space-y-2 xs:space-y-3 text-yellow-200/90 text-xs xs:text-sm md:text-base font-semibold">
                                        <li>• Branding for specific competition</li>
                                        <li>• Logo on certificates</li>
                                        <li>• Booth space access</li>
                                        <li>• Digital promotion mentions</li>
                                    </ul>
                                </div>
                            </HoverTiltCard>
                        </motion.div>

                        {/* Support Partner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <HoverTiltCard>
                                <div className="gold-sweep relative border border-yellow-500/20 rounded-xl p-4 xs:p-5 sm:p-6 md:p-10 bg-[#0A0A0A]/60 sm:backdrop-blur-md hover:border-yellow-400/40 transition-colors duration-300 h-full">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-t-xl" />
                                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">Support Partner</h3>
                                    <ul className="space-y-2 xs:space-y-3 text-yellow-200/90 text-xs xs:text-sm md:text-base font-semibold">
                                        <li>• Website logo placement</li>
                                        <li>• Digital channel mentions</li>
                                        <li>• Sponsor reel inclusion</li>
                                    </ul>
                                </div>
                            </HoverTiltCard>
                        </motion.div>
                    </div>
                </div>

                {/* ═══════ ACT 6: INSTITUTION CREDIBILITY ═══════ */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 xs:mb-16 sm:mb-24 md:mb-32 border border-yellow-500/10 rounded-xl p-4 xs:p-5 sm:p-6 md:p-10 bg-[#0A0A0A]/40"
                >
                    <p className="text-yellow-500/80 text-[9px] xs:text-[10px] uppercase tracking-[0.4em] mb-2 xs:mb-3 sm:mb-4 font-black">
                        Hosted By
                    </p>
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 leading-snug">
                        SRM Institute of Science and Technology
                    </h2>
                    <p className="text-yellow-200/80 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto text-xs xs:text-sm leading-relaxed font-semibold">
                        NAAC A++ Accredited · Established 2011 · Vadapalani Campus, Chennai.
                        A premier engineering institution fostering innovation in robotics, AI,
                        and emerging technologies.
                    </p>
                    <p className="mt-2 xs:mt-3 sm:mt-4 text-yellow-700 text-[9px] xs:text-[10px] tracking-wider">
                        Collaborated with research labs and emerging tech startups.
                    </p>
                </motion.div>

                {/* ═══════ ACT 7: CONVERSION CTA ═══════ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center border border-yellow-500/30 rounded-xl p-5 xs:p-6 sm:p-8 md:p-14 bg-[#0A0A0A]/70 sm:backdrop-blur-md"
                >
                    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-black mb-3 xs:mb-4 sm:mb-6 uppercase tracking-wider leading-snug">
                        Become a Strategic Partner
                    </h2>

                    <p className="text-yellow-200/90 mb-1.5 xs:mb-2 sm:mb-3 text-[11px] xs:text-xs sm:text-sm md:text-base max-w-xs sm:max-w-none mx-auto font-medium">
                        Join us in shaping the next generation of intelligent systems.
                    </p>
                    <p className="text-yellow-500 mb-5 xs:mb-6 sm:mb-8 text-[11px] xs:text-xs max-w-sm sm:max-w-none mx-auto uppercase tracking-widest font-black">
                        Limited strategic slots available.
                    </p>

                    <div className="flex justify-center gap-2.5 xs:gap-3 sm:gap-4 md:gap-6 flex-wrap">
                        <MagneticButton
                            as="a"
                            href="/XION_26_BROCHURE.pdf"
                            target="_blank"
                            className="min-h-[48px] flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-10 py-2.5 xs:py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-black uppercase tracking-wider text-[11px] xs:text-xs sm:text-sm rounded-md hover:scale-105 active:scale-100 shadow-[0_0_20px_rgba(255,215,0,0.25)] transition-all"
                        >
                            Download Brochure
                        </MagneticButton>

                        <MagneticButton
                            as="a"
                            href="/contact"
                            className="min-h-[48px] flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-10 py-2.5 xs:py-3 sm:py-4 border border-yellow-500/40 text-yellow-500 font-medium uppercase tracking-wider text-[11px] xs:text-xs sm:text-sm rounded-md hover:bg-yellow-500/10 active:bg-yellow-500/15 transition-all"
                        >
                            Schedule Discussion
                        </MagneticButton>
                    </div>

                    <p className="mt-5 xs:mt-6 sm:mt-8 text-zinc-300/80 text-[9px] xs:text-[10px] font-medium tracking-widest uppercase">
                        Dedicated sponsor response within 24 hours.
                    </p>
                </motion.div>

                {/* ═══════ FOOTER CREDIBILITY LINE ═══════ */}
                <p className="text-center text-zinc-400 text-[8px] xs:text-[9px] sm:text-[10px] mt-8 xs:mt-10 sm:mt-14 md:mt-16 tracking-widest max-w-xs sm:max-w-none mx-auto uppercase font-medium">
                    Engage directly with India&apos;s emerging robotics innovators · XION 26 — SRMIST Vadapalani Campus
                </p>
            </div>
        </section>
    );
}
