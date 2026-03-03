"use client";

import { memo, useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";

/* ─────────────── TIMELINE DATA (2025 → 2011) ─────────────── */

interface TimelineYear {
    year: number;
    edition: string;
    theme: string;
    explanation: string;
    participants: string;
    events: number;
    colleges: string;
    prize: string;
    highlights: string[];
}

const timelineData: TimelineYear[] = [
    {
        year: 2025,
        edition: "NeuroBotix '25",
        theme: "The Neural Nexus of Robotics",
        explanation: "The 2025 edition, NeuroBotix, focuses on the intersection of neuroscience and robotics. It explores how neural networks and biological intelligence inspire the next generation of autonomous systems and human-robot interaction.",
        participants: "2000+",
        events: 10,
        colleges: "100+",
        prize: "₹2,00,000+",
        highlights: [
            "Robo-Wars",
            "Robo Soccer",
            "Path Finder",
            "Ramp Up",
            "Paper Presentation",
            "Robo Quiz",
            "Workshops on AI & Robotics",
            "Keynote by Industry Leaders",
            "XION Little Champs",
            "Project Exhibition",
        ],
    },
    {
        year: 2024,
        edition: "Abhigyan '24",
        theme: "Digital Revolution & Green Innovation",
        explanation: "The 2024 edition focused on merging digital transformation with environmental consciousness. This edition showcased cutting-edge technologies while emphasizing sustainable practices.",
        participants: "1500+",
        events: 8,
        colleges: "80+",
        prize: "₹1,50,000+",
        highlights: [
            "Robo Soccer",
            "Ramp Up (Terrain)",
            "Robo War",
            "Paper Presentation",
            "XION Little Champs",
            "Technical Papers",
            "Workshops",
            "Industry Keynotes",
        ],
    },
    {
        year: 2023,
        edition: "XION '23",
        theme: "Robomania Unleashed",
        explanation: "XION 2023 celebrated the raw power of mechanical engineering and the thrill of competitive robotics. It marked a significant return to large-scale, high-intensity physical competitions after the hybrid years.",
        participants: "800+",
        events: 6,
        colleges: "50+",
        prize: "₹75,000+",
        highlights: [
            "Robo-Wars",
            "Path Finder",
            "Ramp Up",
            "Robo Soccer",
            "Robo Quiz",
            "Paper Presentation",
        ],
    },
    {
        year: 2022,
        edition: "XION '22",
        theme: "Synchronized Intelligence",
        explanation: "The 2022 edition emphasized the importance of connectivity and swarm intelligence. It showcased how multiple robotic units can work in harmony to solve complex architectural and logistics problems.",
        participants: "600+",
        events: 5,
        colleges: "40+",
        prize: "₹50,000+",
        highlights: [
            "Robo Soccer",
            "Ramp Up",
            "Path Finder",
            "Paper Presentation",
            "Robo Quiz",
        ],
    },
    {
        year: 2021,
        edition: "XION '21",
        theme: "Virtual Horizons",
        explanation: "A pivotal online edition that transitioned physical challenges into robust virtual simulations. XION 2021 proved that technical excellence and competitive spirit know no physical bounds, reaching students across the globe.",
        participants: "500+",
        events: 7,
        colleges: "60+",
        prize: "₹25,000+",
        highlights: [
            "Bot-Thesis",
            "Quizzard",
            "Litter-o-Bot",
            "Protobot",
            "Robo-Dock",
            "TinkerBot",
            "Robotics 101",
        ],
    },
    {
        year: 2020,
        edition: "XION '20",
        theme: "Resilient Engineering",
        explanation: "Held during a period of global transition, the 2020 edition focused on adaptability and remote automation. It highlighted the role of robotics in maintaining essential systems and fostering human connection through technology.",
        participants: "700+",
        events: 8,
        colleges: "45+",
        prize: "₹60,000+",
        highlights: [
            "Electroclick",
            "Code Ya Bot",
            "E-Expo",
            "Bot Assembler",
            "Paper Presentation",
            "Robo Soccer",
            "Path Finder",
            "Exposion",
        ],
    },
    {
        year: 2019,
        edition: "XION '19",
        theme: "Industrial Frontiers",
        explanation: "XION 2019 brought industrial-grade robotics to the academic stage. It challenged students to design solutions that could directly impact manufacturing, logistics, and precision healthcare sectors.",
        participants: "600+",
        events: 6,
        colleges: "40+",
        prize: "₹50,000+",
        highlights: [
            "Robotics Workshop",
            "Robowar",
            "Robosoccer",
            "Pick and Place Bot",
            "Robo E Junk",
            "Paper Presentation",
        ],
    },
    {
        year: 2018,
        edition: "XION '18",
        theme: "Autonomous Realms",
        explanation: "This edition was dedicated to the advancement of autonomous navigation and decision-making. From self-driving micro-bots to complex pathfinders, it pushed the limits of independent machine intelligence.",
        participants: "500+",
        events: 6,
        colleges: "35+",
        prize: "₹40,000+",
        highlights: [
            "Robotics Workshop",
            "Robowar",
            "Robosoccer",
            "Pick and Place",
            "Robo E Junk",
            "Paper Presentation",
        ],
    },
    {
        year: 2017,
        edition: "XION '17",
        theme: "IoT Controlled Robotics",
        explanation: "XION 2017 explored the burgeoning world of the Internet of Things (IoT). It demonstrated how pervasive connectivity allows for the remote control and monitoring of sophisticated robotic systems from anywhere in the world.",
        participants: "400+",
        events: 4,
        colleges: "30+",
        prize: "₹30,000+",
        highlights: [
            "IoT Workshop",
            "National Techfest",
            "Robo Junior",
            "SRM Outreach",
        ],
    },
    {
        year: 2016,
        edition: "XION '16",
        theme: "Brain Wave Robotics",
        explanation: "A highly experimental year that ventured into Brain-Computer Interfaces (BCI). Students explored how human thought and neural signals could be harnessed to control robotic hardware directly.",
        participants: "300+",
        events: 2,
        colleges: "25+",
        prize: "₹20,000+",
        highlights: ["Brain Wave Control", "iSensoBots", "EEG Dynamics"],
    },
    {
        year: 2015,
        edition: "XION '15",
        theme: "Advanced Robotic Systems",
        explanation: "This edition focused on secondary robotic functions like haptics and underwater maneuvering. It expanded the scope of XION beyond terrestrial bots into more challenging environments.",
        participants: "350+",
        events: 5,
        colleges: "30+",
        prize: "₹25,000+",
        highlights: [
            "Haptics Control",
            "Underwater Bots",
            "AndroidoBots",
            "National Techfest",
            "Android-Botix",
        ],
    },
    {
        year: 2014,
        edition: "XION '14",
        theme: "Gesture & Biped Robotics",
        explanation: "XION 2014 was a study in biomimicry and natural interfaces. It focused on bipedal movement and gesture-based control systems that made robot interaction more intuitive and human-like.",
        participants: "300+",
        events: 3,
        colleges: "20+",
        prize: "₹20,000+",
        highlights: [
            "AcceloRobotics",
            "Biped Walking",
            "SensoBots Design",
        ],
    },
    {
        year: 2013,
        edition: "XION '13",
        theme: "Microcontroller Robotics",
        explanation: "The 2013 edition centered on the brains behind the bots—microcontrollers. It provided foundational knowledge in PIC and Arduino architectures, empowering students to build more intelligent systems.",
        participants: "250+",
        events: 2,
        colleges: "15+",
        prize: "₹15,000+",
        highlights: [
            "PIC Controller",
            "Arduino Systems",
            "Embedded Logic",
        ],
    },
    {
        year: 2012,
        edition: "XION '12",
        theme: "Vision Robotics",
        explanation: "XION 2012 introduced the concept of 'Sixth Sense' and machine vision. It challenged participants to create robots that could perceive and react to their visual environment in real-time.",
        participants: "200+",
        events: 2,
        colleges: "15+",
        prize: "₹15,000+",
        highlights: [
            "National Techfest",
            "Sixth Sense Vision",
            "Image Processing",
        ],
    },
    {
        year: 2011,
        edition: "XION '11",
        theme: "The Genesis",
        explanation: "The inaugural edition of XION that laid the cornerstone for a decade of innovation. Starting with foundational workshops, it established the vision of a national-level platform for robotics enthusiasts across India.",
        participants: "150+",
        events: 2,
        colleges: "10+",
        prize: "₹10,000+",
        highlights: [
            "BASCOM Systems",
            "Inaugural Workshop",
            "Project Demo",
        ],
    },
];

/* ─────────────── PARTICLE BACKGROUND ─────────────── */

const ParticleBackground = memo(function ParticleBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const orbs = useMemo(() => {
        if (!mounted) return [];
        return Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            size: Math.random() * 50 + 30,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: i % 2 === 0 ? "#ffd70f" : "#ecdd7e",
            duration: Math.random() * 15 + 15,
            delay: Math.random() * -30,
            drift: Math.random() * 100 - 50,
        }));
    }, [mounted]);

    if (!mounted) return null;

    return (
        <div
            className="fixed inset-0 pointer-events-none overflow-hidden bg-[#020202]"
            style={{ zIndex: -1, width: '100vw', height: '100vh', top: 0, left: 0 }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black opacity-98" />
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className="absolute rounded-full"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: orb.left,
                        top: orb.top,
                        backgroundColor: orb.color,
                        filter: `blur(0.8px)`,
                        boxShadow: `0 0 30px ${orb.color}, 0 0 60px ${orb.color}33`,
                        willChange: 'transform, opacity'
                    }}
                    animate={{
                        y: [0, -120, 0],
                        x: [0, orb.drift, 0],
                        opacity: [0.7, 1, 0.7],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        delay: orb.delay,
                        ease: "easeInOut",
                    }}
                >
                    <motion.div
                        className="w-full h-full rounded-full"
                        animate={{
                            x: mousePosition.x * 1,
                            y: mousePosition.y * 1,
                        }}
                        transition={{ type: "spring", damping: 15 }}
                    />
                </motion.div>
            ))}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffd70f]/[0.02] blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ecdd7e]/[0.02] blur-[180px] rounded-full" />
        </div>
    );
});

/* ─────────────── STAT PILL ─────────────── */

function StatPill({ label, value }: { label: string; value: string | number }) {
    return (
        <div className="bg-black/60 border border-yellow-500/15 rounded-lg px-3 py-2 text-center hover:border-yellow-500/40 transition-colors duration-300">
            <p className="text-sm xs:text-base font-black gold-gradient-text leading-tight">{value}</p>
            <p className="text-[8px] xs:text-[9px] text-zinc-500 uppercase tracking-[0.15em] mt-0.5 font-bold">{label}</p>
        </div>
    );
}

/* ─────────────── TIMELINE CARD ─────────────── */

function TimelineCard({ data, index }: { data: TimelineYear; index: number }) {
    const isLeft = index % 2 === 0;

    return (
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8 group/row">

            {/* ── CENTRAL SPINE NODE (Desktop only) ── */}
            <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20 flex-col items-center">
                <div className="relative">
                    {/* Ping animation */}
                    <span className="absolute inset-0 rounded-full bg-yellow-500/40 animate-ping" style={{ animationDuration: '3s' }} />
                    {/* Core dot */}
                    <span className="relative block w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_0_12px_rgba(255,215,0,0.6)] border-2 border-black" />
                </div>
            </div>

            {/* ── LEFT COLUMN ── */}
            <div className={`${isLeft ? 'block' : 'hidden md:block'} ${isLeft ? '' : 'md:order-1'}`}>
                {isLeft ? (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <CardContent data={data} align="right" />
                    </motion.div>
                ) : (
                    <div className="hidden md:block" />
                )}
            </div>

            {/* ── CENTER SPINE (Desktop structural spacer) ── */}
            <div className="hidden md:block w-px" />

            {/* ── RIGHT COLUMN ── */}
            <div className={`${!isLeft ? 'block' : 'hidden md:block'} ${!isLeft ? '' : 'md:order-3'}`}>
                {!isLeft ? (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <CardContent data={data} align="left" />
                    </motion.div>
                ) : (
                    <div className="hidden md:block" />
                )}
            </div>

            {/* ── MOBILE CARD (shown only on mobile for the "wrong" side) ── */}
            {!isLeft && (
                <motion.div
                    className="block md:hidden"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <CardContent data={data} align="left" />
                </motion.div>
            )}
        </div>
    );
}

/* ─────────────── CARD CONTENT ─────────────── */

function CardContent({ data, align }: { data: TimelineYear; align: "left" | "right" }) {
    return (
        <div
            className={`
                relative bg-[#0a0a0a]/80 backdrop-blur-md border border-yellow-500/15
                rounded-xl p-4 xs:p-5 sm:p-6
                transition-all duration-500
                hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(255,215,0,0.08)]
                ${align === "right" ? "md:text-right" : "md:text-left"}
            `}
        >
            {/* Gold top bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-500/60 via-yellow-400 to-yellow-500/60 rounded-t-xl" />

            {/* HEADER: Year Badge + Edition + Theme */}
            <div className={`flex items-center gap-3 xs:gap-4 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-shrink-0 w-14 h-14 xs:w-16 xs:h-16 rounded-full border-2 border-yellow-500/30 flex items-center justify-center bg-yellow-500/[0.06]">
                    <span className="text-xl xs:text-2xl font-black gold-gradient-text">
                        {data.year.toString().slice(-2)}
                    </span>
                </div>
                <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-black text-white tracking-wide">{data.edition}</h3>
                    <p className="text-[10px] xs:text-xs italic text-yellow-500/70 font-semibold mt-0.5">
                        &ldquo;{data.theme}&rdquo;
                    </p>
                </div>
            </div>

            {/* DESCRIPTION */}
            <p className={`mt-4 text-xs xs:text-sm text-zinc-400 leading-relaxed font-normal border-l-2 border-yellow-500/20 pl-3 ${align === "right" ? "md:border-l-0 md:border-r-2 md:pl-0 md:pr-3" : ""}`}>
                {data.explanation}
            </p>

            {/* STATS GRID */}
            <div className="mt-4 grid grid-cols-2 xs:grid-cols-4 gap-2">
                <StatPill label="Participants" value={data.participants} />
                <StatPill label="Events" value={data.events} />
                <StatPill label="Colleges" value={data.colleges} />
                <StatPill label="Prize Pool" value={data.prize} />
            </div>

            {/* HIGHLIGHTS CHIPS */}
            <div className={`mt-4 flex flex-wrap gap-1.5 xs:gap-2 ${align === "right" ? "md:justify-end" : ""}`}>
                {data.highlights.map((h) => (
                    <span
                        key={h}
                        className="inline-block px-2.5 py-1 text-[9px] xs:text-[10px] sm:text-xs bg-yellow-500/[0.06] border border-yellow-500/15 rounded-full text-yellow-400/90 font-semibold tracking-wide hover:bg-yellow-500/15 hover:border-yellow-500/30 transition-all duration-300"
                    >
                        {h}
                    </span>
                ))}
            </div>
        </div>
    );
}

/* ─────────────── PAGE ─────────────── */

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-transparent overflow-x-hidden">
            <ParticleBackground />
            <div className="max-w-[1200px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 pt-24 xs:pt-28 sm:pt-40 pb-20 xs:pb-24 sm:pb-32 relative z-10">

                {/* ═══════ HERO ═══════ */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center will-change-transform mb-12 xs:mb-16 sm:mb-24"
                >
                    <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tighter text-white leading-none">
                        XION <span className="gold-gradient-text drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">2026</span>
                    </h1>
                    <p className="text-[10px] xs:text-xs sm:text-base md:text-lg text-zinc-400 max-w-[280px] xs:max-w-md mx-auto leading-relaxed tracking-[0.2em] font-medium uppercase">
                        THE FUTURE OF NEUROBOTIX & AI EXCELLENCE
                    </p>
                </motion.div>

                {/* ═══════ ABOUT HEADING ═══════ */}
                <div className="mb-12 xs:mb-16 sm:mb-24 text-center px-2">
                    <h2 className="text-lg xs:text-2xl sm:text-4xl md:text-5xl font-black gold-gradient-text uppercase tracking-[0.15em] xs:tracking-[0.2em] leading-tight">
                        About <span className="relative pb-1 sm:pb-2 whitespace-nowrap">
                            XION 2026
                            <span className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[2.5px] bg-yellow-500 shadow-[0_0_8px_#ffb700,0_0_15px_#ffb700] rounded-full" />
                        </span>
                    </h2>
                </div>

                {/* ═══════ DESCRIPTION ═══════ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-10 xs:mt-12 sm:mt-16 text-center space-y-4 xs:space-y-6 sm:space-y-8 will-change-transform"
                >
                    <div className="max-w-3xl mx-auto text-xs xs:text-sm sm:text-base md:text-xl text-zinc-400 leading-relaxed xs:leading-loose font-normal tracking-wide">
                        <p>
                            XION has been conceived as a <span className="text-yellow-500/90 font-bold">National level</span> technical fest in the field of <span className="text-yellow-500/90 font-bold">Robotics</span> to provide a platform for the students to exhibit their technical knowledge and creativity. This is an annual event for students from all over India.
                        </p>
                        <p className="mt-5 xs:mt-6">
                            This event comprises of Technical competitions like <span className="text-yellow-500/90 font-bold">Robo-Wars, Path finder, Ramp Up, Robo Soccer, Robo Quiz, Paper presentation</span> and other robotic related events which will test the technical knowledge and skills of the students to a greater depth.
                        </p>
                        <p className="mt-5 xs:mt-6">
                            Apart from these, there are <span className="text-yellow-500/90 font-bold">workshops</span> that give a variety of exposure to students.
                        </p>
                    </div>
                </motion.div>

                {/* ═══════ TIMELINE TITLE ═══════ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-20 xs:mt-24 sm:mt-32 md:mt-40 text-center will-change-transform"
                >
                    <h2
                        className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-black gold-gradient-text uppercase tracking-tighter leading-none"
                        style={{ filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.35))" }}
                    >
                        Timeline
                    </h2>
                    <p className="mt-3 text-[10px] xs:text-xs text-zinc-500 uppercase tracking-[0.3em] font-bold">
                        15 Years of Innovation · 2011 — 2025
                    </p>
                </motion.div>

                {/* ═══════ ALTERNATING TIMELINE ═══════ */}
                <div className="relative mt-16 xs:mt-20 sm:mt-28 max-w-5xl mx-auto">

                    {/* ── CENTRAL GOLD SPINE (Desktop) ── */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-10">
                        <div className="w-full h-full bg-gradient-to-b from-yellow-500/60 via-yellow-500/20 to-yellow-500/5 shadow-[0_0_10px_rgba(255,215,0,0.2)]" />
                    </div>

                    {/* ── MOBILE SPINE (Left edge) ── */}
                    <div className="block md:hidden absolute left-4 top-0 bottom-0 w-[2px] z-10">
                        <div className="w-full h-full bg-gradient-to-b from-yellow-500/50 via-yellow-500/15 to-transparent" />
                    </div>

                    {/* ── TIMELINE CARDS ── */}
                    <div className="space-y-8 xs:space-y-10 md:space-y-16 pl-10 md:pl-0">
                        {timelineData.map((data, i) => (
                            <div key={data.year} className="relative">
                                {/* Mobile spine node */}
                                <div className="md:hidden absolute -left-[26px] top-6 z-20">
                                    <span className="block w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_0_8px_rgba(255,215,0,0.5)] border-2 border-black" />
                                </div>
                                <TimelineCard data={data} index={i} />
                            </div>
                        ))}
                    </div>

                    {/* ── SPINE TERMINUS ── */}
                    <div className="hidden md:flex absolute left-1/2 -bottom-4 -translate-x-1/2 z-20 items-center justify-center">
                        <span className="block w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/20" />
                    </div>
                </div>

                {/* ═══════ FOOTER LEGACY ═══════ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-24 xs:mt-32 sm:mt-40 border-t border-yellow-500/10 pt-10 text-center will-change-transform"
                >
                    <p className="text-[9px] xs:text-[10px] text-zinc-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
                        End of History — XION Robotics Club
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
