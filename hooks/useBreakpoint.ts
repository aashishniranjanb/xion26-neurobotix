"use client";

import { useState, useEffect } from 'react';
import { BREAKPOINTS, BreakpointKey } from '@/lib/constants';

/**
 * A custom hook that detects if the current window width is smaller than the specified breakpoint.
 * 
 * @param breakpoint The breakpoint key to check against (xs, sm, md, lg, xl)
 * @returns boolean - true if window is strictly smaller than the breakpoint, false otherwise or server-side
 */
export function useBreakpoint(breakpoint: BreakpointKey = 'md'): boolean {
    // Default to false (desktop view) during SSR to avoid hydration mismatch flashes
    const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(false);

    useEffect(() => {
        const checkBreakpoint = () => {
            setIsBelowBreakpoint(window.innerWidth < BREAKPOINTS[breakpoint]);
        };

        // Check on mount
        checkBreakpoint();

        // Check on resize
        window.addEventListener('resize', checkBreakpoint);
        return () => window.removeEventListener('resize', checkBreakpoint);
    }, [breakpoint]);

    return isBelowBreakpoint;
}
