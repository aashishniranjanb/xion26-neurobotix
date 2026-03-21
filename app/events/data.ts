export interface EventData {
    id: string; // Unique slug identifier
    name: string;
    tagline: string;
    videoSrc: string | null;
    poster: string;
    videoCover?: string; // New field for video overlay thumbnail
    rules: string[];
    category: "tech" | "nontech";
    registerLink: string;
    date: string; // ISO date for countdown: "2026-03-24"
}

/* ── Technical Events ──────────────────────────────────── */
export const technicalEvents: EventData[] = [
    {
        id: "mind-forge",
        name: "Mind Forge",
        tagline: "Present your original research ideas on cutting-edge topics.",
        videoSrc: "/events/Paper Presentation mind forge.mp4",
        poster: "/posters/Mind Forge.jpeg",
        videoCover: "/cover/cover pic presentation.jpeg",
        category: "tech",
        registerLink: "https://forms.gle/QMkYGquRzghVNDu48",
        date: "2026-03-24",
        rules: [
            "Team size: 2 to 4 members per team.",
            "Participants must submit their PPT prior to the event before the deadline.",
            "Maximum of 7 slides are allowed, including the title slide if needed.",
            "Strict 5-minute presentation followed by a 3-minute Q&A session.",
            "The idea must be original, and plagiarism will lead to immediate disqualification.",
        ],
    },
    {
        id: "robo-war",
        name: "Robo War",
        tagline: "Full-contact robot combat in the neural arena.",
        videoSrc: "/events/Robot war.mp4",
        poster: "/posters/Robo War.jpeg",
        videoCover: "/cover/cover pic robo war.jpeg",
        category: "tech",
        registerLink: "https://forms.gle/PGA56Jy5bjJZ2j3b6",
        date: "2026-03-24",
        rules: [
            "Robots must fit within specified size limits before the match begins.",
            "Remote control is mandatory; autonomous robots are not allowed.",
            "Combustion engines are prohibited — batteries only.",
            "Weapons like spinners, hammers, and flippers are allowed.",
            "Flame throwers are strictly prohibited.",
            "Robots undergo safety inspections before matches.",
            "Sharp edges must be covered until combat begins.",
        ],
    },
    {
        id: "brain-wave",
        name: "Brain Wave",
        tagline: "Argue, counter, and conquer with your words in this technical debate.",
        videoSrc: "/events/brain wave debate.mp4",
        poster: "/posters/Brain-wave-debate.jpeg",
        videoCover: "/cover/cover pic brain wave debate.jpeg",
        category: "tech",
        registerLink: "https://forms.gle/xEYfCmdoV7trfNKU9",
        date: "2026-03-24",
        rules: [
            "Debaters will be given a specific technical topic and assigned a stance (for or against).",
            "Standard debate time limits for opening statements, rebuttals, and closing remarks will be enforced.",
            "Teams will be evaluated on technical accuracy, logical argumentation, and presentation skills.",
            "Respectful language is mandatory — personal attacks lead to disqualification.",
            "Judges' decision is final.",
        ],
    },
    {
        id: "line-follower",
        name: "Line Follower",
        tagline: "Autonomous navigation through unknown terrain matrices.",
        videoSrc: "/events/Line Follower.mp4",
        poster: "/posters/Line Follower.jpeg",
        videoCover: "/cover/cover pic line follower.png",
        category: "tech",
        registerLink: "https://forms.gle/sYhH8KN8AkTSRrzC9",
        date: "2026-03-24",
        rules: [
            "Robots must be fully autonomous — no remote control or human intervention once started.",
            "The robot must accurately follow a continuous black line on a white background (or vice versa).",
            "The robot must navigate from the starting point to the finish.",
            "The fastest robot to complete the track with the fewest deviations wins.",
        ],
    },
    {
        id: "decode-reality",
        name: "Decode Reality",
        tagline: "Can you tell what's real and what's AI-generated?",
        videoSrc: "/events/decode reality (2).mp4",
        poster: "/posters/Decode Reality.jpeg",
        videoCover: "/cover/cover pic decode.jpeg",
        category: "tech",
        registerLink: "https://forms.gle/TsVHciZdGqm1qqu78",
        date: "2026-03-24",
        rules: [
            "Team size: 2 members per team.",
            "Participants must join via mobile phone or laptop using the online buzzer system.",
            "Content is displayed to all teams simultaneously.",
            "The first team to hit the buzzer and give the correct answer scores the maximum points.",
            "Switching between tabs is strictly prohibited.",
        ],
    },
];

/* ── Non-Technical Events ──────────────────────────────── */
export const nonTechnicalEvents: EventData[] = [
    {
        id: "ipl-auction",
        name: "IPL Auction",
        tagline: "Bid smart, build your dream squad under budget.",
        videoSrc: "/events/ipl auction (2).mp4",
        poster: "/posters/IPL Auction.jpeg",
        videoCover: "/cover/cover pic ipl.jpeg",
        category: "nontech",
        registerLink: "https://forms.gle/DesbbLcxcS6ejEDh7",
        date: "2026-03-24",
        rules: [
            "Each team is given a fixed virtual purse to build their dream squad.",
            "Players will go under the hammer sequentially.",
            "The team with the highest bid when the hammer falls secures the player.",
            "Teams must fulfill minimum squad size requirements.",
            "Specific team balance constraints must be met within the budget.",
        ],
    },
    {
        id: "free-fire",
        name: "Free Fire Tournament",
        tagline: "Squad up and dominate the battlefield.",
        videoSrc: "/events/Free Fire.mp4",
        poster: "/posters/Free Fire Tournament.jpeg",
        videoCover: "/cover/cover pic free fire.jpeg",
        category: "nontech",
        registerLink: "https://forms.gle/vTSui3gafAxTVg6L8",
        date: "2026-03-24",
        rules: [
            "Stage 1: All players compete in a Full Map Battle Royale match.",
            "Shortlisted players move to Stage 2: 4v4 Clash Squad mode.",
            "All players must use their registered in-game IDs.",
            "Hacks, cheats, or any unfair gameplay will lead to immediate disqualification.",
            "Players must report on time; the organizer's decision is final.",
        ],
    },
    {
        id: "grandmaster-grid",
        name: "Grandmaster Grid",
        tagline: "Outsmart your opponent on the 64-square battlefield.",
        videoSrc: "/events/Grandmaster Grid.mp4",
        poster: "/posters/Grandmaster Grid.jpeg",
        videoCover: "/cover/cover pic chess.jpeg",
        category: "nontech",
        registerLink: "https://forms.gle/uMq6wmpdDAXdP1Ve7",
        date: "2026-03-24",
        rules: [
            "The tournament will strictly follow standard FIDE and Chess.com rules.",
            "In the event of a tie, the Buchholz tie-breaker system will be implemented.",
            "The arbiter's decision on the board is absolute and final.",
        ],
    },
    {
        id: "beatverse",
        name: "Beatverse",
        tagline: "Decode the beats and guess the track before anyone else.",
        videoSrc: "/events/beatverse (2).mp4",
        poster: "/posters/Beatverse.jpeg",
        videoCover: "/cover/cover pic beatverse.jpeg",
        category: "nontech",
        registerLink: "https://forms.gle/pDV5Upx8dRadk2Ff7",
        date: "2026-03-24",
        rules: [
            "The event will feature music and audio clips in Tamil, English, and Hindi.",
            "Audio clues will be played, and the first participant/team to buzz in and answer correctly wins the round.",
            "Only the fastest buzzer gets the opportunity to answer.",
            "Incorrect guesses may result in negative points or a pass to the next team.",
        ],
    },
    {
        id: "gold-rush",
        name: "Gold Rush",
        tagline: "Hunt QR codes, collect gold coins, and race to victory.",
        videoSrc: "/events/gold rush event (2).mp4",
        poster: "/posters/Gold Rush.jpeg",
        videoCover: "/cover/cover pic gold rush.jpeg",
        category: "nontech",
        registerLink: "https://forms.gle/ruq97u4LRcmkVG476",
        date: "2026-03-24",
        rules: [
            "Team size: 2 members per team.",
            "Teams scan hidden QR codes across campus to collect virtual gold coins.",
            "The team with the highest gold coin total at the end wins.",
            "Each QR code works only once per team.",
            "Trespassing into restricted areas will result in immediate disqualification.",
            "Time limits will be strictly followed.",
        ],
    },
];

export const allEvents: EventData[] = [...technicalEvents, ...nonTechnicalEvents];
