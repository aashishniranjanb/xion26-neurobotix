export default function EventsLoading() {
    return (
        <div className="min-h-screen bg-[#020202] pt-28 pb-16 px-4 sm:px-6 md:px-12">
            {/* Hero Skeleton */}
            <div className="flex flex-col items-center gap-4 mb-12">
                <div className="skeleton-gold w-64 h-12 rounded-lg" />
                <div className="skeleton-gold w-80 h-5 rounded-md" />
            </div>

            {/* Tab Bar Skeleton */}
            <div className="flex justify-center gap-3 mb-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="skeleton-gold w-28 h-9 rounded-full" />
                ))}
            </div>

            {/* Event Count Skeleton */}
            <div className="flex justify-center mb-10">
                <div className="skeleton-gold w-36 h-5 rounded-md" />
            </div>

            {/* Card Grid Skeleton — 6 placeholder cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                        key={i}
                        className="rounded-xl border border-yellow-500/10 bg-[#0a0a0a]/80 overflow-hidden"
                        style={{ animationDelay: `${i * 0.08}s` }}
                    >
                        {/* Video / Poster area */}
                        <div className="skeleton-gold w-full aspect-[16/10]" />

                        {/* Card body */}
                        <div className="p-4 space-y-3">
                            {/* Category tag */}
                            <div className="skeleton-gold w-20 h-4 rounded-full" />
                            {/* Title */}
                            <div className="skeleton-gold w-3/4 h-5 rounded-md" />
                            {/* Tagline */}
                            <div className="skeleton-gold w-full h-4 rounded-md" />
                            {/* Buttons */}
                            <div className="flex gap-2 pt-2">
                                <div className="skeleton-gold flex-1 h-9 rounded-lg" />
                                <div className="skeleton-gold flex-1 h-9 rounded-lg" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Shimmer Keyframes */}
            <style>{`
                .skeleton-gold {
                    position: relative;
                    background: #0f0f0f;
                    overflow: hidden;
                }
                .skeleton-gold::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        105deg,
                        transparent 30%,
                        rgba(255, 215, 0, 0.06) 42%,
                        rgba(255, 184, 0, 0.10) 50%,
                        rgba(255, 215, 0, 0.06) 58%,
                        transparent 70%
                    );
                    animation: skeletonShimmer 1.8s ease-in-out infinite;
                }
                @keyframes skeletonShimmer {
                    0%   { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}
