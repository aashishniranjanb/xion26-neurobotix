"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the exact error to the console
        console.error("EXACT APP ROUTER ERROR:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-white">
            <h2 className="text-xl font-bold text-red-500 mb-4">Something went wrong!</h2>
            <pre className="bg-black/50 p-4 rounded text-sm text-red-200 whitespace-pre-wrap max-w-full overflow-auto mb-4 border border-red-500/20">
                {error.message || "Unknown error occurred"}
            </pre>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-yellow-500 text-black font-bold rounded"
            >
                Try again
            </button>
        </div>
    );
}
