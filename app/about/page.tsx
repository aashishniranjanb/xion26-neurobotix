"use client";

import { memo, useMemo } from "react";
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

/* ─────────────── SHARED ANIMATION CONFIGS ─────────────── */

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" as const },
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

const StatBlock = memo(function StatBlock({
    label,
    value,
}: {
    label: string;
    value: string | number;
}) {
    return (
        <div className="group/stat bg-black-charcoal/40 rounded-lg p-2 xs:p-3 text-center border border-yellow-500/10 hover:border-yellow-500/40 hover:bg-yellow-500/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
            <p className="text-base xs:text-lg sm:text-xl font-black gold-gradient-text leading-tight uppercase">
                {value}
            </p>
            <p className="text-[8px] xs:text-[10px] text-zinc-500 uppercase tracking-[0.15em] mt-1 leading-tight font-medium">
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
            className={`flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
        >
            <div className="group/event bg-black-charcoal/60 border border-yellow-500/15 rounded-lg p-2.5 xs:p-3 w-full md:w-[48%] transition-all duration-300 hover:border-yellow-500/40 hover:bg-yellow-500/[0.02] hover:shadow-[0_0_10px_rgba(255,215,0,0.05)]">
                <div className="flex items-center gap-2 xs:gap-3">
                    <span className="w-1 h-1 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(255,215,0,0.8)] flex-shrink-0" />
                    <p className="text-[10px] xs:text-xs text-zinc-300 font-medium leading-tight">
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
}: {
    data: TimelineYear;
    index: number;
}) {
    const delay = Math.min(index * 0.08, 0.4);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true, margin: "-60px" }}
            className="group relative bg-[#0a0a0a] border border-yellow-500/20 rounded-2xl p-5 xs:p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-yellow-500/60 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(255,215,0,0.15)] overflow-hidden will-change-transform"
        >
            {/* Metallic Layered Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
                {/* YEAR (Very bold gold gradient) */}
                <h3 className="text-5xl xs:text-6xl sm:text-7xl font-black gold-gradient-text leading-none tracking-tighter">
                    {data.year}
                </h3>

                {/* Event Name and Year Held */}
                <p className="mt-2 text-sm xs:text-base sm:text-lg font-bold text-zinc-100 tracking-wide">
                    {data.edition}
                </p>

                {/* Theme (Quotes and Italic) */}
                <p className="mt-1 text-xs xs:text-sm sm:text-base italic text-yellow-500/90 font-medium leading-relaxed">
                    &ldquo;{data.theme}&rdquo;
                </p>

                {/* Focused Explanation Paragraph */}
                <p className="mt-4 text-[13px] xs:text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-2xl border-l border-yellow-500/20 pl-4 py-1">
                    {data.explanation}
                </p>

                {/* Stats Grid - Metallic Boxes */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 mt-8">
                    <StatBlock label="Participants" value={data.participants} />
                    <StatBlock label="Events" value={data.events} />
                    <StatBlock label="Colleges" value={data.colleges} />
                    <StatBlock label="Prize Money" value={data.prize} />
                </div>

                {/* Zig-Zag List of Events conducted that year */}
                <div className="mt-10 relative">
                    {/* Vertical gold gradient line in center */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-yellow-500/50 via-yellow-500/10 to-transparent -translate-x-1/2 hidden md:block" />

                    {/* Mobile vertical line - slight left */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-yellow-500/40 via-yellow-500/10 to-transparent -translate-x-1/2 md:hidden" />

                    <div className="space-y-2 md:space-y-1 relative">
                        {data.highlights.map((event, i) => (
                            <EventCard key={event} name={event} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

/* ─────────────── PAGE ─────────────── */

export default function AboutPage() {
    const yearCards = useMemo(
        () =>
            timelineData.map((data, i) => (
                <YearCard key={data.year} data={data} index={i} />
            )),
        []
    );

    return (
        <main className="min-h-screen bg-black-core overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8 pt-24 xs:pt-28 sm:pt-36 pb-20 xs:pb-24 sm:pb-32">

                {/* TOP TITLE: XION 2026 */}
                <motion.div {...fadeInHero} className="text-center">
                    <h1
                        className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black gold-gradient-text uppercase tracking-tighter leading-none"
                        style={{ filter: "drop-shadow(0 0 30px rgba(255, 215, 0, 0.4))" }}
                    >
                        XION 2026
                    </h1>
                </motion.div>

                {/* SUB TITLE: ABOUT XION 2026 */}
                <motion.div {...fadeInHeroDelayed} className="mt-4 xs:mt-5 sm:mt-6 text-center">
                    <h2
                        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold gold-gradient-text uppercase tracking-widest"
                        style={{ filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 0.3))" }}
                    >
                        About XION 2026
                    </h2>
                </motion.div>

                {/* DESCRIPTION (Strict Wording) */}
                <motion.div
                    {...fadeInUp}
                    className="mt-10 xs:mt-12 sm:mt-16 text-center space-y-5 xs:space-y-6 sm:space-y-8"
                >
                    <div className="max-w-3xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-zinc-400 leading-[1.8] font-normal tracking-wide">
                        <p>
                            XION has been conceived as a <span className="text-yellow-500/90 font-bold">National level</span> technical fest in the field of <span className="text-yellow-500/90 font-bold">Robotics</span> to provide a platform for the students to exhibit their technical knowledge and creativity. This is an annual event for students from all over India.
                        </p>
                        <p className="mt-6">
                            This event comprises of Technical competitions like <span className="text-yellow-500/90 font-bold">Robo-Wars, Path finder, Ramp Up, Robo Soccer, Robo Quiz, Paper presentation</span> and other robotic related events which will test the technical knowledge and skills of the students to a greater depth.
                        </p>
                        <p className="mt-6">
                            Apart from these, there are <span className="text-yellow-500/90 font-bold">workshops</span> that give a variety of exposure to students.
                        </p>
                    </div>
                </motion.div>

                {/* TIMELINE TITLE */}
                <motion.div {...fadeInUp} className="mt-20 xs:mt-24 sm:mt-32 md:mt-40 text-center">
                    <h2
                        className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black gold-gradient-text uppercase tracking-tighter leading-none"
                        style={{ filter: "drop-shadow(0 0 25px rgba(255, 215, 0, 0.4))" }}
                    >
                        Timeline
                    </h2>
                </motion.div>

                {/* PAST EDITIONS SECTION */}
                <div className="mt-12 xs:mt-16 sm:mt-20 md:mt-24 space-y-8 xs:space-y-10 sm:space-y-14 md:space-y-20">
                    {yearCards}
                </div>

                {/* FOOTER LEGACY (Subtle) */}
                <motion.div
                    {...fadeInUp}
                    className="mt-24 xs:mt-32 sm:mt-40 border-t border-yellow-500/10 pt-10 text-center"
                >
                    <p className="text-[10px] xs:text-xs text-zinc-500 uppercase tracking-[0.3em] font-medium">
                        End of History — XION Robotics Club
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
