import styles from "./events.module.css";
import GalaxyCanvas from "./GalaxyCanvas";
import EventCard from "./EventCard";
import Image from "next/image";

/* ── Event data ────────────────────────────────────────── */

const technicalEvents = [
    {
        name: "Robo War",
        tagline: "Full-contact robot combat in the neural arena.",
        videoSrc: "/robo war webm.webm",
        poster: "robo-war.png",
        rules: [
            "Team size: 2–5 members.",
            "Robot must fit within specified dimensions (to be announced).",
            "Maximum weight limit will be strictly enforced.",
            "Judges' decision is final.",
            "Fair play mandatory.",
        ],
    },
    {
        name: "Line Follower",
        tagline: "Autonomous navigation through unknown terrain matrices.",
        videoSrc: "/line follower (2).webm",
        poster: "line-follower.png",
        rules: [
            "Team size: 2–4 members.",
            "Robot must be autonomous (no manual control).",
            "Robot must start within designated start box.",
            "Time-based scoring.",
            "If robot leaves track, 2 chances will be given.",
            "Modification after race start is not allowed.",
        ],
    },
    {
        name: "Brain Wave – Debate",
        tagline: "Argue, counter, and conquer with your words.",
        videoSrc: "/debate.webm",
        poster: "/debate poster.png",
        rules: [
            "Team size: 2–4 members.",
            "Topic given 10 minutes before round.",
            "No internet during preparation.",
            "Strict time limit per speaker.",
            "Respectful language mandatory.",
            "Personal attacks or offensive remarks lead to disqualification.",
            "Judges' decision is final.",
        ],
    },
    {
        name: "Neuro Twin",
        tagline: "Sketch and present your original robot concept on paper.",
        videoSrc: "/neurobotix.webm",
        poster: "neuro-twin.png",
        rules: [
            "Maximum 2 members per team.",
            "Participants must bring required materials (A3 chart, colour pencils, sketch pens etc.).",
            "No pre-made or printed designs allowed.",
            "2 hours creation + 2–3 minutes explanation.",
            "Must clearly define bot name, traits, core function & unique feature.",
            "Judges' decision is final.",
        ],
    },
    {
        name: "Mind Forge – Paper Presentation",
        tagline: "Present your original research ideas on cutting-edge topics.",
        videoSrc: "/Paper Presentation.webm",
        poster: "mind-forge.png",
        rules: [
            "Team size: 2–4 members.",
            "PPT must be submitted prior to the event (deadline will be announced).",
            "Maximum 6 slides (excluding title slide if needed).",
            "Strict 5 minutes presentation + 3 minutes Q&A.",
            "Idea must be original and aligned with theme.",
            "No plagiarism.",
            "Judges' decision will be final.",
            "Late submissions will not be accepted.",
        ],
    },
    {
        name: "Decode Reality – AI or Human",
        tagline: "Can you tell what's real and what's AI-generated?",
        videoSrc: "/robo war.mp4",
        poster: "decode-reality.png",
        rules: [
            "Team of 2.",
            "Participants must decide if content is AI-generated or real.",
            "Points shall be awarded based on the number of correct answers.",
        ],
    },
];

const nonTechnicalEvents = [
    {
        name: "Free Fire",
        tagline: "Squad up and dominate the battlefield.",
        videoSrc: "/Free Fire.webm",
        poster: "free-fire.png",
        rules: [
            "Team size: Squad (4 members).",
            "Only registered players allowed.",
            "Use of hacks or third-party tools = immediate disqualification.",
            "Room ID will be shared for the registered players.",
        ],
    },
    {
        name: "Beatverse",
        tagline: "Argue, counter, and conquer with your words.",
        videoSrc: "/robo war.mp4",
        poster: "beatverse.png",
        rules: [
            "Team size: 2–4 members.",
            "Topic given 10 minutes before round.",
            "No internet during preparation.",
            "Strict time limit per speaker.",
            "Respectful language mandatory.",
            "Personal attacks or offensive remarks lead to disqualification.",
            "Judges' decision is final.",
        ],
    },
    {
        name: "IPL Auction",
        tagline: "Bid smart, build your dream squad under budget.",
        videoSrc: "/robo war.mp4",
        poster: "ipl-auction.png",
        rules: [
            "Team size: 2–3 members.",
            "Each team gets a fixed virtual budget.",
            "Time limit per bidding round.",
            "No exceeding budget.",
            "Strategy discussion allowed only within team.",
            "Final squad strength must meet minimum player requirement.",
        ],
    },
    {
        name: "Gold Rush",
        tagline: "Hunt QR codes, collect gold coins, and race to victory.",
        videoSrc: "/robo war.mp4",
        poster: "gold-rush.png",
        rules: [
            "Team size: 2–4 members.",
            "QR codes must not be removed or tampered with.",
            "Each QR works only once per team.",
            "Time limit will be strictly followed.",
            "Trespassing into restricted areas leads to disqualification.",
            "Team with maximum gold coins wins.",
        ],
    },
    {
        name: "Battle of 64 – Chess",
        tagline: "Outsmart your opponent on the grandmaster grid.",
        videoSrc: "/chess.webm",
        poster: "battle-of-64.png",
        rules: [
            "Team of 2 (1 player, 1 strategist).",
            "Matches played in official software platform.",
            "Time control format will be announced.",
            "No external assistance.",
            "Fair play policy strictly enforced.",
        ],
    },
    {
        name: "Ultimate Rage Run",
        tagline: "Survive the rage — highest progress wins.",
        videoSrc: "/robo war.mp4",
        poster: "ultimate-rage-run.png",
        rules: [
            "Individual participation.",
            "Predefined level will be selected by organizers.",
            "Each participant gets 3 attempts only.",
            "Highest progress wins (distance covered or time survived).",
            "No restarting outside allowed attempts.",
            "Rage quitting = attempt counted.",
            "Unsportsmanlike behaviour leads to disqualification.",
        ],
    },
    {
        name: "The Hidden Verdict",
        tagline: "Decode the crime scene and trace the truth.",
        videoSrc: "/THE HIDDEN VERDICT.webm",
        poster: "hidden-verdict.png",
        rules: [
            "Team size: 3–4 members.",
            "No external help allowed.",
            "Time-based completion.",
            "First team to correctly solve wins.",
        ],
    },
];

/* ── Page ───────────────────────────────────────────────── */

export default function EventsPage() {
    return (
        <main className="min-h-screen relative pt-28">
            <GalaxyCanvas />

            {/* Title */}
            <h1 className={styles.title}>XION 2026</h1>

            {/* Technical Events */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Technical Events</h2>
                <div className={styles.grid}>
                    {technicalEvents.map((event, i) => (
                        <EventCard
                            key={i}
                            name={event.name}
                            tagline={event.tagline}
                            videoSrc={event.videoSrc}
                            rules={event.rules}
                            variant="tech"
                            poster={event.poster}
                        />
                    ))}
                </div>
            </section>

            {/* Non-Technical Events */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Non-Technical Events</h2>
                <div className={styles.grid}>
                    {nonTechnicalEvents.map((event, i) => (
                        <EventCard
                            key={i}
                            name={event.name}
                            tagline={event.tagline}
                            videoSrc={event.videoSrc}
                            rules={event.rules}
                            variant="nontech"
                            poster={event.poster}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
