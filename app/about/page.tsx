export default function AboutPage() {
    const pillars = [
        { title: "Intelligent Systems", desc: "Machines that perceive, reason, and adapt in real-time." },
        { title: "Neural Engineering", desc: "Bio-inspired architectures driving the next generation of robotics." },
        { title: "Autonomous Evolution", desc: "Self-improving systems that evolve beyond initial programming." },
    ];

    return (
        <main className="min-h-screen bg-black-core animate-viscosity overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-black gold-gradient-text uppercase tracking-tight">
                    About NeuroBotix
                </h1>
                <p className="mt-4 sm:mt-6 text-zinc-400 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed italic">
                    Pushing the boundaries of intelligence through the fusion of biology and machinery.
                    XION 26 is not just an event — it is a convergence of minds engineering the future
                    of autonomous systems.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14 md:mt-16">
                    {pillars.map((p) => (
                        <div
                            key={p.title}
                            className="group relative border border-yellow-500/10 bg-gradient-to-b from-[#111111]/60 to-[#020202]/80 rounded-xl p-5 sm:p-6 hover:border-yellow-500/30 transition-all duration-300"
                        >
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
                            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide group-hover:text-yellow-400 transition-colors">
                                {p.title}
                            </h3>
                            <p className="mt-2 sm:mt-3 text-zinc-500 text-sm sm:text-base leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
