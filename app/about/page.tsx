"use client";

import { motion, AnimatePresence } from "motion/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { memo, useMemo, useState, useEffect, useRef } from "react";

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

/* ─────────────── SHARED ANIMATION CONFIGS ─────────────── */

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 0.5, ease: "easeOut" as const },
};

const fadeInHero = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
};

const fadeInHeroDelayed = {
    initial: { opacity: 0, y: -15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.15, ease: "easeOut" as const },
};

/* ─────────────── COMPONENTS (Memoized) ─────────────── */

// Strict Configuration Constants
const particleCount = 450;
const particleSpread = 8;
const speed = 0.40;
const particleHoverFactor = 1.00;
const particleBaseSize = 100; // Used as internal scale base
const sizeRandomness = 1.00;
const cameraDistance = 20;
const moveParticlesOnHover = true;

const ParticleField = memo(function ParticleField() {
    const ref = useRef<THREE.Points>(null!);

    // Generate 450 particles in a sphere/box hybrid distribution
    const [positions] = useState(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * particleSpread * 2.5;
            pos[i * 3 + 1] = (Math.random() - 0.5) * particleSpread * 2.5;
            pos[i * 3 + 2] = (Math.random() - 0.5) * particleSpread * 2.5;
        }
        return pos;
    });

    useFrame((state, delta) => {
        // Continuous Cinematic Motion (speed = 0.40)
        ref.current.rotation.y += delta * speed * 0.1;
        ref.current.rotation.x += delta * speed * 0.05;

        // Mouse Movement Response (particleHoverFactor = 1.00)
        if (moveParticlesOnHover) {
            const targetX = state.pointer.x * 0.2 * particleHoverFactor;
            const targetY = state.pointer.y * 0.2 * particleHoverFactor;
            ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
            ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#ffd70f"
                // Size Calibration for 8px - 11px visual appearance
                // Base size 100 scaled down for elegant R3F rendering
                size={particleBaseSize * 0.0016}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.85}
            />
        </Points>
    );
});

const ParticleBackground = memo(function ParticleBackground() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return <div className="fixed inset-0 bg-[#020202] -z-10" />;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[#020202]" style={{ zIndex: -1 }}>
            {/* High-Performance WebGL Canvas */}
            <Canvas
                camera={{ position: [0, 0, cameraDistance], fov: 60 }}
                dpr={[1, 2]} // Optimize rendering
                gl={{ antialias: true, alpha: true }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                <ParticleField />
            </Canvas>

            {/* Subtle radial depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020202_90%)]" />
        </div>
    );
});

const StatBlock = memo(function StatBlock({
    label,
    value,
}: {
    label: string,
    value: string | number,
}) {
    return (
        <div className="group/stat bg-black/40 rounded-lg p-1.5 xs:p-2 text-center border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300">
            <p className="text-[14px] xs:text-base sm:text-lg font-black gold-gradient-text leading-tight uppercase group-hover/stat:scale-105 transition-transform duration-300">
                {value}
            </p>
            <p className="text-[8px] xs:text-[9px] text-zinc-500 uppercase tracking-[0.1em] mt-0.5 leading-tight font-bold group-hover/stat:text-zinc-300 transition-colors">
                {label}
            </p>
        </div>
    );
});

const EventCard = memo(function EventCard({
    name,
    index,
}: {
    name: string;
    index: number;
}) {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -15 : 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
            viewport={{ once: true, margin: "-20px" }}
            className={`flex w-full ${isLeft ? "justify-start" : "justify-end"} md:px-1`}
        >
            <div className="group/event bg-black-charcoal/60 backdrop-blur-md border border-yellow-500/10 rounded-lg p-2 xs:p-2.5 w-[calc(100%-20px)] xs:w-[calc(100%-24px)] md:w-[48%] transition-all duration-400 hover:border-yellow-500/40 hover:bg-yellow-500/[0.06] hover:backdrop-blur-xl hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] will-change-transform">
                <div className="flex items-center gap-2 xs:gap-3">
                    <span className="w-1 h-1 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(255,215,0,0.8)] flex-shrink-0" />
                    <p className="text-[11px] xs:text-sm sm:text-base text-zinc-300 font-bold leading-tight tracking-wide group-hover/event:text-white transition-colors duration-300">
                        {name}
                    </p>
                </div>
            </div>
        </motion.div>
    );
});

const YearCard = memo(function YearCard({
    data,
    index,
    isExpanded,
    onToggle,
}: {
    data: TimelineYear;
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-15%" }}
            onClick={onToggle}
            className={`group relative bg-[#0a0a0a]/80 backdrop-blur-md border ${isExpanded ? "border-yellow-500/60 shadow-[0_0_25px_rgba(255,215,0,0.1)]" : "border-yellow-500/15"
                } rounded-xl p-3 xs:p-4 transition-all duration-400 hover:border-yellow-500/50 hover:bg-[#0a0a0a]/90 hover:backdrop-blur-xl hover:shadow-[0_0_35px_rgba(255,215,0,0.15)] cursor-pointer overflow-hidden`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
                {/* COLLAPSED HEADER (Always visible) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-12 h-12 xs:w-14 xs:h-14 rounded-full border border-yellow-500/20 flex items-center justify-center bg-yellow-500/[0.05] group-hover:bg-yellow-500/10 transition-colors">
                            <span className="text-xl xs:text-2xl font-black gold-gradient-text">
                                {data.year.toString().slice(-2)}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-sm xs:text-base font-bold text-zinc-100">
                                {data.edition}
                            </h3>
                            <p className="text-[10px] xs:text-[11px] italic text-yellow-500/70 font-medium truncate max-w-[200px] xs:max-w-none">
                                &ldquo;{data.theme}&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Stats Box (Inline) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 flex-grow sm:max-w-[400px]">
                        <StatBlock label="Participants" value={data.participants} />
                        <StatBlock label="Events" value={data.events} />
                        <StatBlock label="Colleges" value={data.colleges} />
                        <StatBlock label="Prize" value={data.prize} />
                    </div>
                </div>

                {/* EXPANDED CONTENT */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="overflow-hidden"
                        >
                            <div className="mt-4 pt-4 border-t border-yellow-500/10">
                                <p className="text-[11px] xs:text-[12px] sm:text-sm text-zinc-400 leading-relaxed font-normal border-l border-yellow-500/20 pl-3 py-0.5">
                                    {data.explanation}
                                </p>

                                <div className="mt-6 relative">
                                    {/* Vertical gold gradient line in center - Desktop */}
                                    <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-yellow-500/60 via-yellow-500/20 to-transparent -translate-x-1/2 hidden md:block shadow-[0_0_8px_rgba(255,215,0,0.3)]" />

                                    {/* Compact Mobile Vertical Line */}
                                    <div className="absolute left-[9px] top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-yellow-500/40 via-yellow-500/10 to-transparent md:hidden shadow-[0_0_5px_rgba(255,215,0,0.2)]" />

                                    <div className="space-y-1.5 md:space-y-1 relative pl-5 md:pl-0">
                                        {data.highlights.map((event, i) => (
                                            <EventCard key={event} name={event} index={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
});

/* ─────────────── PAGE ─────────────── */

export default function AboutPage() {
    const [expandedYear, setExpandedYear] = useState<number | null>(2025);

    const yearCards = useMemo(
        () =>
            timelineData.map((data, i) => (
                <YearCard
                    key={data.year}
                    data={data}
                    index={i}
                    isExpanded={expandedYear === data.year}
                    onToggle={() => setExpandedYear(expandedYear === data.year ? null : data.year)}
                />
            )),
        [expandedYear]
    );

    return (
        <main className="relative min-h-screen bg-transparent overflow-x-hidden">
            <ParticleBackground />
            <div className="max-w-[1200px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 pt-24 xs:pt-28 sm:pt-40 pb-20 xs:pb-24 sm:pb-32 relative z-10">

                {/* TOP TITLE: XION 2026 */}
                <motion.div {...fadeInHero} className="text-center will-change-transform mb-12 xs:mb-16 sm:mb-24">
                    <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tighter text-white leading-none">
                        XION <span className="gold-gradient-text drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">2026</span>
                    </h1>
                    <p className="text-[10px] xs:text-xs sm:text-base md:text-lg text-zinc-400 max-w-[280px] xs:max-w-md mx-auto leading-relaxed tracking-[0.2em] font-medium uppercase">
                        THE FUTURE OF NEUROBOTIX & AI EXCELLENCE
                    </p>
                </motion.div>

                {/* MAIN ABOUT HEADING (Semantic & Refactored) */}
                <div className="mb-12 xs:mb-16 sm:mb-24 text-center px-4">
                    <h2
                        className="inline-block text-lg xs:text-2xl sm:text-4xl md:text-5xl font-black gold-gradient-text uppercase tracking-[0.15em] xs:tracking-[0.2em] leading-tight pb-1 sm:pb-2 border-b-[2px] sm:border-b-[3px] border-yellow-500 drop-shadow-[0_2px_10px_rgba(255,183,0,0.8)]"
                    >
                        ABOUT XION 2026
                    </h2>
                </div>

                {/* DESCRIPTION (Strict Wording) */}
                <motion.div
                    {...fadeInUp}
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

                {/* TIMELINE TITLE */}
                <motion.div {...fadeInUp} className="mt-20 xs:mt-24 sm:mt-32 md:mt-40 text-center will-change-transform">
                    <h2
                        className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-black gold-gradient-text uppercase tracking-tighter leading-none"
                        style={{ filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.35))" }}
                    >
                        Timeline
                    </h2>
                </motion.div>

                {/* PAST EDITIONS SECTION */}
                <div className="mt-12 xs:mt-16 sm:mt-20 md:mt-28 space-y-3 xs:space-y-4 max-w-4xl mx-auto">
                    {yearCards}
                </div>

                {/* FOOTER LEGACY (Subtle) */}
                <motion.div
                    {...fadeInUp}
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
