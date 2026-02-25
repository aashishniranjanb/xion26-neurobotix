export default function SponsorsPage() {
    const tiers = [
        {
            tier: "Neural Core",
            tagline: "Primary Intelligence Partners",
            benefits: ["Logo on main stage", "Exclusive branding", "VIP access", "Social media feature"],
        },
        {
            tier: "Synapse",
            tagline: "Strategic Signal Amplifiers",
            benefits: ["Logo on event materials", "Booth space", "Social mention", "Certificate"],
        },
        {
            tier: "Signal",
            tagline: "Supporting Network Nodes",
            benefits: ["Logo on website", "Shout-out at event", "Certificate of appreciation"],
        },
    ];

    return (
        <main className="min-h-screen bg-black-core animate-viscosity overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-black gold-gradient-text uppercase tracking-tight sm:tracking-[0.1em]">
                    Powering Intelligence
                </h1>
                <p className="mt-4 sm:mt-6 text-zinc-400 max-w-xl text-sm sm:text-base md:text-lg">
                    Our strategic partners in cyber-organic research.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14 md:mt-16">
                    {tiers.map((t) => (
                        <div
                            key={t.tier}
                            className="border border-yellow-500/10 bg-gradient-to-b from-[#111111]/60 to-[#020202]/80 rounded-xl p-5 sm:p-6 md:p-8 hover:border-yellow-500/30 transition-all duration-300"
                        >
                            <h3 className="text-xl sm:text-2xl font-black text-yellow-400 uppercase tracking-wide">
                                {t.tier}
                            </h3>
                            <p className="mt-1 text-zinc-500 text-xs sm:text-sm italic">{t.tagline}</p>
                            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                                {t.benefits.map((b) => (
                                    <li key={b} className="flex items-start gap-2 text-zinc-300 text-sm sm:text-base">
                                        <span className="text-yellow-500 mt-0.5">▸</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 text-center">
                    <button className="px-6 py-3 sm:px-10 sm:py-4 bg-gold-primary text-black font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm hover:bg-gold-secondary transition-all hover:translate-y-[-2px] active:translate-y-[0px] shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                        Become a Sponsor
                    </button>
                </div>
            </div>
        </main>
    );
}
