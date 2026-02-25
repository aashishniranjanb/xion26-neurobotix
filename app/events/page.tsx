export default function EventsPage() {
    const events = [
        { name: "Robo Wars", desc: "Full-contact autonomous combat in the neural arena." },
        { name: "Robo Soccer", desc: "Multi-agent coordination under adversarial pressure." },
        { name: "Path Finder", desc: "Autonomous navigation through unknown terrain matrices." },
        { name: "Ramp Up", desc: "Vertical ascent challenge — power meets precision." },
        { name: "Paper Presentation", desc: "Present your research on neural-robotic systems." },
        { name: "Workshops", desc: "Hands-on sessions on embedded AI and sensor fusion." },
    ];

    return (
        <main className="min-h-screen bg-black-core animate-viscosity overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-black gold-gradient-text uppercase tracking-[0.1em] sm:tracking-[0.2em]">
                    Event Matrix
                </h1>
                <p className="mt-4 sm:mt-6 text-zinc-400 max-w-xl text-sm sm:text-base md:text-lg">
                    Explore the neural challenges and robotics engineering tracks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14 md:mt-16">
                    {events.map((event) => (
                        <div
                            key={event.name}
                            className="group border border-yellow-500/10 bg-gradient-to-b from-[#111111]/60 to-[#020202]/80 rounded-xl p-5 sm:p-6 hover:border-yellow-500/30 transition-all duration-300"
                        >
                            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide group-hover:text-yellow-400 transition-colors">
                                {event.name}
                            </h3>
                            <p className="mt-2 text-zinc-500 text-sm sm:text-base leading-relaxed">
                                {event.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
