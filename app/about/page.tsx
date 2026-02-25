"use client";

import { memo, useMemo } from "react";
import { motion } from "motion/react";

/* ─────────────── TIMELINE DATA (2025 → 2011) ─────────────── */

interface TimelineYear {
    year: number;
    theme: string;
    participants: string;
    events: number;
    colleges: string;
    prize: string;
    highlights: string[];
}

const timelineData: TimelineYear[] = [
    {
        year: 2025,
        theme: "NeuroBotix",
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
            "XION Little Champs (School Students)",
            "Project Exhibition",
        ],
    },
    {
        year: 2024,
        theme: "Robolution: Unveiling the Nexus of Innovation",
        participants: "1500+",
        events: 8,
        colleges: "80+",
        prize: "₹1,50,000+",
        highlights: [
            "Robo Soccer",
            "Ramp Up (Terrain Follower)",
            "Robo War",
            "Paper Presentation",
            "XION Little Champs (School Category)",
            "Technical Paper Presentations",
            "Workshops",
            "Chief Guest: Shankar Ramachandran, AGM EV Ops, Switch Mobility, Ashok Leyland",
        ],
    },
    {
        year: 2023,
        theme: "Robomania Unleashed",
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
        theme: "Robotics Event",
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
        theme: "Online Innovation",
        participants: "500+",
        events: 7,
        colleges: "60+",
        prize: "₹25,000+",
        highlights: [
            "Bot-Thesis (Paper Presentation)",
            "Quizzard",
            "Litter-o-Bot (Bot from Trash)",
            "Protobot (Robo Designing)",
            "Robo-Dock (Project Exhibition)",
            "TinkerBot",
            "Robotics 101 Workshop",
        ],
    },
    {
        year: 2020,
        theme: "Robomania Unleashed",
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
        theme: "Robotics",
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
        theme: "National Robotics Fest",
        participants: "500+",
        events: 6,
        colleges: "35+",
        prize: "₹40,000+",
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
        year: 2017,
        theme: "IoT Controlled Robotics",
        participants: "400+",
        events: 4,
        colleges: "30+",
        prize: "₹30,000+",
        highlights: [
            "IoT Controlled Bot Workshop",
            "XION'17 National Techfest",
            "Robo Junior Workshop",
            "SRM Outreach",
        ],
    },
    {
        year: 2016,
        theme: "Brain Wave Robotics",
        participants: "300+",
        events: 2,
        colleges: "25+",
        prize: "₹20,000+",
        highlights: ["Brain Wave Control Workshop", "iSensoBots Workshop"],
    },
    {
        year: 2015,
        theme: "Advanced Robotic Systems",
        participants: "350+",
        events: 5,
        colleges: "30+",
        prize: "₹25,000+",
        highlights: [
            "Haptics (Robot Hand Control)",
            "Underwater Robotics",
            "AndroidoBots",
            "XION'15 National Techfest",
            "Android-Botix Workshop",
        ],
    },
    {
        year: 2014,
        theme: "Gesture & Biped Robotics",
        participants: "300+",
        events: 3,
        colleges: "20+",
        prize: "₹20,000+",
        highlights: [
            "AcceloRobotics — Gesture Controlled Bots",
            "Biped — Walking Robot Design",
            "SensoBots (Multisensory Robots)",
        ],
    },
    {
        year: 2013,
        theme: "Microcontroller Robotics",
        participants: "250+",
        events: 2,
        colleges: "15+",
        prize: "₹15,000+",
        highlights: [
            "PIC Microcontroller Based Robotic Design",
            "Arduino Based Robotics Workshop",
        ],
    },
    {
        year: 2012,
        theme: "Vision Robotics",
        participants: "200+",
        events: 2,
        colleges: "15+",
        prize: "₹15,000+",
        highlights: [
            "XION 12 — National Level Techfest",
            "Sixth Sense Vision Robotics Workshop",
        ],
    },
    {
        year: 2011,
        theme: "The Genesis",
        participants: "150+",
        events: 2,
        colleges: "10+",
        prize: "₹10,000+",
        highlights: [
            "BASCOM Based Robotics Workshop",
            "Arduino Based Robotics Workshop",
        ],
    },
];

/* ─────────────── SHARED ANIMATION CONFIGS ─────────────── */
/* Pre-defined animation objects to avoid re-creation on every render */

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
        <div className="bg-black-charcoal/60 rounded-lg sm:rounded-xl p-2.5 xs:p-3 sm:p-4 text-center border border-yellow-500/20 hover:border-yellow-500/40 transition-colors duration-300">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-black gold-gradient-text leading-tight">
                {value}
            </p>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider mt-0.5 sm:mt-1 leading-tight">
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
            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.5) }}
            viewport={{ once: true, margin: "-30px" }}
            className={`flex w-full ${isLeft ? "md:justify-start" : "md:justify-end"}`}
        >
            <div className="bg-black-charcoal border border-yellow-500/20 rounded-lg sm:rounded-xl p-2.5 xs:p-3 sm:p-4 w-full md:w-[46%] transition-colors duration-300 hover:border-yellow-500/50 active:border-yellow-500/50">
                <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                    <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-yellow-500 flex-shrink-0" />
                    <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-zinc-300 font-medium leading-snug">
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
    /* Cap the stagger delay so cards far down the list
       don't wait too long to appear */
    const delay = Math.min(index * 0.08, 0.4);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true, margin: "-60px" }}
            className="group relative bg-gradient-to-br from-black-surface via-black-charcoal to-black-core border border-yellow-500/20 rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 transition-colors duration-500 hover:border-[#FFD700] overflow-hidden will-change-[border-color]"
        >
            {/* Gold overlay glow — hidden on mobile for perf */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] sm:h-[2px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            {/* Content */}
            <div className="relative z-10">
                {/* Year + Theme row — side-by-side on larger screens */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:gap-4">
                    <h3 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl font-black gold-gradient-text leading-none shrink-0">
                        {data.year}
                    </h3>
                    <p className="mt-1 xs:mt-1.5 sm:mt-0 text-xs xs:text-sm sm:text-base md:text-lg italic text-yellow-400 tracking-wide sm:pb-1 md:pb-2 leading-snug break-words">
                        &ldquo;{data.theme}&rdquo;
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-4 md:gap-6 mt-4 xs:mt-5 sm:mt-6">
                    <StatBlock label="Participants" value={data.participants} />
                    <StatBlock label="Events" value={data.events} />
                    <StatBlock label="Colleges" value={data.colleges} />
                    <StatBlock label="Prize Money" value={data.prize} />
                </div>

                {/* Zig-Zag Timeline */}
                <div className="mt-5 xs:mt-6 sm:mt-8 md:mt-10 relative">
                    {/* Vertical center line — desktop only */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-yellow-400/50 via-yellow-500/20 to-transparent -translate-x-1/2" />

                    {/* Mobile: left-aligned gold line */}
                    <div className="block md:hidden absolute left-[5px] xs:left-[7px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-yellow-400/40 via-yellow-500/15 to-transparent" />

                    <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 pl-4 xs:pl-5 md:pl-0">
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
    /* Memoize the card list so React doesn't re-diff it
       on unrelated state changes */
    const yearCards = useMemo(
        () =>
            timelineData.map((data, i) => (
                <YearCard key={data.year} data={data} index={i} />
            )),
        []
    );

    return (
        <main className="min-h-screen bg-black-core overflow-hidden">
            <div className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 md:px-10 lg:px-12 pt-24 xs:pt-28 sm:pt-28 md:pt-36 pb-12 xs:pb-14 sm:pb-20 md:pb-28">
                {/* ── 1. XION 2026 Hero Title ──────────────── */}
                <motion.h1
                    {...fadeInHero}
                    className="text-[2.75rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black gold-gradient-text uppercase tracking-wider text-center leading-[0.95]"
                    style={{
                        filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))",
                    }}
                >
                    XION 2026
                </motion.h1>

                {/* ── 2. ABOUT XION 2026 Subtitle ──────────── */}
                <motion.h2
                    {...fadeInHeroDelayed}
                    className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold gold-gradient-text uppercase tracking-wide text-center leading-tight"
                    style={{
                        filter: "drop-shadow(0 0 14px rgba(255, 215, 0, 0.35))",
                    }}
                >
                    About XION 2026
                </motion.h2>

                {/* ── 3. Description ──────────────────────── */}
                <motion.div
                    {...fadeInUp}
                    className="max-w-4xl mx-auto text-center leading-relaxed text-neutral-300 mt-6 xs:mt-8 sm:mt-10 space-y-3 xs:space-y-4 sm:space-y-5"
                >
                    <p className="text-[13px] xs:text-sm sm:text-base md:text-lg leading-relaxed">
                        XION has been conceived as a{" "}
                        <span className="text-[#FFD700] font-semibold">
                            National level
                        </span>{" "}
                        technical fest in the field of{" "}
                        <span className="text-[#FFD700] font-semibold">
                            Robotics
                        </span>{" "}
                        to provide a platform for the students to exhibit their
                        technical knowledge and creativity. This is an annual
                        event for students from all over India.
                    </p>
                    <p className="text-[13px] xs:text-sm sm:text-base md:text-lg leading-relaxed">
                        This event comprises of Technical competitions like{" "}
                        <span className="text-[#FFD700] font-semibold">
                            Robo-Wars
                        </span>
                        , Path Finder, Ramp Up, Robo Soccer, Robo Quiz, Paper
                        Presentation and other robotic related events which will
                        test the technical knowledge and skills of the students
                        to a greater depth.
                    </p>
                    <p className="text-[13px] xs:text-sm sm:text-base md:text-lg leading-relaxed">
                        Apart from these, there are{" "}
                        <span className="text-[#FFD700] font-semibold">
                            Workshops
                        </span>{" "}
                        that give a variety of exposure to students — from
                        Arduino-based robotics to AI, from underwater bots to
                        brain-wave control systems.
                    </p>
                </motion.div>

                {/* ── 4. TIMELINE Title ───────────────────── */}
                <motion.h2
                    {...fadeInUp}
                    className="mt-16 xs:mt-20 sm:mt-24 md:mt-32 text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black gold-gradient-text uppercase tracking-wider text-center leading-none"
                    style={{
                        filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))",
                    }}
                >
                    Timeline
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="text-center text-zinc-500 text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 xs:mt-3 sm:mt-4 uppercase tracking-widest"
                >
                    15 Years of Innovation · 2011 — 2025
                </motion.p>

                {/* ── 5 & 6. Year Cards ───────────────────── */}
                <div className="mt-8 xs:mt-10 sm:mt-14 md:mt-20 space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-14">
                    {yearCards}
                </div>

                {/* ── Footer: Mission Statement ──────────── */}
                <motion.div
                    {...fadeInUp}
                    className="mt-10 xs:mt-14 sm:mt-20 md:mt-28 border border-yellow-500/10 bg-gradient-to-b from-[#111111]/40 to-[#020202]/60 rounded-lg sm:rounded-xl p-3.5 xs:p-4 sm:p-6 md:p-8 text-center"
                >
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-yellow-500/70 uppercase tracking-widest font-medium">
                        Our Legacy
                    </p>
                    <p className="mt-1.5 xs:mt-2 sm:mt-3 text-white text-xs xs:text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
                        From two workshops in 2011 to a national-level techfest
                        attracting 2000+ participants — XION has evolved into one
                        of the most prestigious robotics events in India.
                    </p>
                    <p className="mt-1.5 xs:mt-2 text-zinc-500 text-[10px] xs:text-xs sm:text-sm md:text-base">
                        XION Robotics Club — SRM Institute of Science and
                        Technology, Vadapalani Campus
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
