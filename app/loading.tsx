export default function GlobalLoading() {
    return (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#020202]">
            {/* Radial depth glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,215,0,0.12) 0%, rgba(255,184,0,0.04) 40%, transparent 70%)",
                        animation: "loadingPulseGlow 2.4s ease-in-out infinite",
                    }}
                />
            </div>

            {/* XION Logo Text */}
            <div className="relative flex flex-col items-center gap-6">
                <h1
                    className="text-5xl sm:text-7xl font-black tracking-[0.2em] uppercase select-none"
                    style={{
                        background:
                            "linear-gradient(180deg, #fff4b0 0%, #ffd700 30%, #ffb800 60%, #b8860b 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: "drop-shadow(0 0 25px rgba(255,215,0,0.35))",
                        animation: "loadingLogoPulse 2.4s ease-in-out infinite",
                    }}
                >
                    XION
                </h1>

                {/* Shimmer Bar */}
                <div className="relative w-48 h-[2px] rounded-full overflow-hidden bg-yellow-500/10">
                    <div
                        className="absolute inset-y-0 w-1/3 rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, #ffd700, #ffb800, transparent)",
                            animation: "loadingShimmerSlide 1.4s ease-in-out infinite",
                        }}
                    />
                </div>

                <p
                    className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-bold"
                    style={{
                        color: "rgba(255,215,0,0.45)",
                        animation: "loadingLogoPulse 2.4s ease-in-out infinite 0.3s",
                    }}
                >
                    NeuroBotix
                </p>
            </div>

            {/* Keyframe Animations */}
            <style>{`
                @keyframes loadingPulseGlow {
                    0%, 100% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.6; }
                    50%      { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
                }
                @keyframes loadingLogoPulse {
                    0%, 100% { opacity: 0.7; }
                    50%      { opacity: 1; }
                }
                @keyframes loadingShimmerSlide {
                    0%   { left: -33%; }
                    100% { left: 100%; }
                }
            `}</style>
        </div>
    );
}
