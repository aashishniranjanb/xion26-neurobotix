export default function ContactPage() {
    const contacts = [
        {
            role: "Faculty Coordinator",
            name: "Dr. Faculty Name",
            detail: "faculty@xion26.in",
        },
        {
            role: "Student Lead",
            name: "Student Name",
            detail: "lead@xion26.in",
        },
        {
            role: "General Enquiries",
            name: "XION 26 Command",
            detail: "info@xion26.in",
        },
    ];

    return (
        <main className="min-h-screen bg-black-core overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-12 pt-28 xs:pt-32 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28">
                {/* Header */}
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black gold-gradient-text uppercase tracking-wide leading-tight">
                    Authorized Connections
                </h1>
                <p className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-zinc-400 max-w-xl text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                    Establish a secure link with the XION 26 command center.
                </p>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mt-8 xs:mt-10 sm:mt-12 md:mt-16">
                    {contacts.map((c) => (
                        <div
                            key={c.role}
                            className="border border-yellow-500/10 bg-gradient-to-b from-[#111111]/60 to-[#020202]/80 rounded-xl p-4 xs:p-5 sm:p-6 hover:border-yellow-500/30 transition-all duration-300"
                        >
                            <p className="text-[10px] xs:text-xs sm:text-sm text-yellow-500/70 uppercase tracking-widest font-medium">
                                {c.role}
                            </p>
                            <h3 className="mt-1.5 xs:mt-2 text-base xs:text-lg sm:text-xl font-bold text-white">
                                {c.name}
                            </h3>
                            <p className="mt-1 text-zinc-400 text-xs xs:text-sm sm:text-base break-all">
                                {c.detail}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Location */}
                <div className="mt-8 xs:mt-10 sm:mt-12 md:mt-16 border border-yellow-500/10 bg-gradient-to-b from-[#111111]/40 to-[#020202]/60 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8">
                    <p className="text-[10px] xs:text-xs sm:text-sm text-yellow-500/70 uppercase tracking-widest font-medium">
                        Location
                    </p>
                    <p className="mt-2 xs:mt-3 text-white text-sm xs:text-base sm:text-lg font-medium">
                        SRM Institute of Science and Technology
                    </p>
                    <p className="text-zinc-500 text-xs xs:text-sm sm:text-base mt-1">
                        Kattankulathur, Chennai — Tamil Nadu, India
                    </p>
                </div>

                {/* Social / CTA */}
                <div className="mt-8 xs:mt-10 sm:mt-12 md:mt-16 text-center">
                    <p className="text-zinc-500 text-xs xs:text-sm sm:text-base mb-4 xs:mb-5 sm:mb-6">
                        Connect with us across neural networks
                    </p>
                    <button className="px-5 xs:px-6 sm:px-8 md:px-10 py-2.5 xs:py-3 sm:py-3.5 bg-gold-primary text-black font-black uppercase tracking-[0.15em] text-[10px] xs:text-xs sm:text-sm rounded-none hover:bg-gold-secondary transition-all hover:translate-y-[-2px] active:translate-y-[0px] shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                        Open Channel
                    </button>
                </div>
            </div>
        </main>
    );
}
