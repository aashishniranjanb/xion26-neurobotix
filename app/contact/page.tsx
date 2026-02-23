export default function ContactPage() {
    const contacts = [
        { role: "Faculty Coordinator", name: "Dr. Faculty Name", detail: "faculty@xion26.in" },
        { role: "Student Lead", name: "Student Name", detail: "lead@xion26.in" },
        { role: "General Enquiries", name: "XION 26 Command", detail: "info@xion26.in" },
    ];

    return (
        <main className="min-h-screen bg-black-core animate-viscosity overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-black gold-gradient-text uppercase tracking-wide sm:tracking-widest">
                    Authorized Connections
                </h1>
                <p className="mt-4 sm:mt-6 text-zinc-400 max-w-xl text-sm sm:text-base md:text-lg">
                    Establish a secure link with the XION 26 command center.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14 md:mt-16">
                    {contacts.map((c) => (
                        <div
                            key={c.role}
                            className="border border-yellow-500/10 bg-gradient-to-b from-[#111111]/60 to-[#020202]/80 rounded-xl p-5 sm:p-6 hover:border-yellow-500/30 transition-all duration-300"
                        >
                            <p className="text-xs sm:text-sm text-yellow-500/70 uppercase tracking-widest font-medium">
                                {c.role}
                            </p>
                            <h3 className="mt-2 text-lg sm:text-xl font-bold text-white">
                                {c.name}
                            </h3>
                            <p className="mt-1 text-zinc-400 text-sm sm:text-base">
                                {c.detail}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 sm:mt-14 md:mt-16 border border-yellow-500/10 bg-gradient-to-b from-[#111111]/40 to-[#020202]/60 rounded-xl p-5 sm:p-6 md:p-8">
                    <p className="text-xs sm:text-sm text-yellow-500/70 uppercase tracking-widest font-medium">Location</p>
                    <p className="mt-2 text-white text-base sm:text-lg font-medium">
                        College Campus Name
                    </p>
                    <p className="text-zinc-500 text-sm sm:text-base">
                        City, State — India
                    </p>
                </div>
            </div>
        </main>
    );
}
