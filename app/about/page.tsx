export default function AboutPage() {
    const pillars = [
        {
            title: "Intelligent Systems",
            desc: "Machines that perceive, reason, and adapt in real-time. Our autonomous systems push the limits of what robots can achieve independently.",
        },
        {
            title: "Neural Engineering",
            desc: "Bio-inspired architectures driving the next generation of robotics. We bridge neuroscience and engineering to create truly adaptive machines.",
        },
        {
            title: "Autonomous Evolution",
            desc: "Self-improving systems that evolve beyond initial programming. Through iterative learning, our robots grow smarter with every interaction.",
        },
    ];

    return (
        <main className="min-h-screen bg-black-core overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-12 pt-28 xs:pt-32 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28">
                {/* Header */}
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black gold-gradient-text uppercase tracking-tight leading-tight">
                    About NeuroBotix
                </h1>
                <p className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-zinc-400 max-w-2xl text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed italic">
                    Pushing the boundaries of intelligence through the fusion of biology
                    and machinery. XION 26 is not just an event — it is a convergence
                    of minds engineering the future of autonomous systems.
                </p>

                {/* Pillar Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mt-8 xs:mt-10 sm:mt-12 md:mt-16">
                    {pillars.map((p) => (
                        <div
                            key={p.title}
                            className="group relative border border-yellow-500/10 bg-gradient-to-b from-[#111111]/60 to-[#020202]/80 rounded-xl p-4 xs:p-5 sm:p-6 hover:border-yellow-500/30 transition-all duration-300"
                        >
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
                            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white uppercase tracking-wide group-hover:text-yellow-400 transition-colors">
                                {p.title}
                            </h3>
                            <p className="mt-2 sm:mt-3 text-zinc-500 text-xs xs:text-sm sm:text-base leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mission Statement */}
                <div className="mt-8 xs:mt-10 sm:mt-12 md:mt-16 border border-yellow-500/10 bg-gradient-to-b from-[#111111]/40 to-[#020202]/60 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8">
                    <p className="text-[10px] xs:text-xs sm:text-sm text-yellow-500/70 uppercase tracking-widest font-medium">
                        Our Mission
                    </p>
                    <p className="mt-2 xs:mt-3 text-white text-sm xs:text-base sm:text-lg font-medium leading-relaxed">
                        To cultivate a generation of engineers who think beyond conventional
                        boundaries and build machines that learn, adapt, and evolve.
                    </p>
                    <p className="mt-2 text-zinc-500 text-xs xs:text-sm sm:text-base">
                        XION Robotics Club — SRM Institute of Science and Technology
                    </p>
                </div>
            </div>
        </main>
    );
}
