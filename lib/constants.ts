/**
 * Centralized Design Tokens & Magic Numbers
 * 
 * Keep this synchronized with Tailwind (globals.css/tailwind.config).
 */

export const BREAKPOINTS = {
    xs: 360,
    sm: 390,
    md: 768,
    lg: 1024,
    xl: 1280,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

export const VIDEO_INTRO_TIMINGS = {
    /** Time until the semantic exit sequence concludes and unmounts */
    FADE_OUT_DURATION_MS: 1000,
    /** Absolute maximum time the video overlay can exist before force skipping */
    SAFETY_TIMEOUT_MS: 12000,
    /** Quick delay after an autoplay block/failure before skipping */
    AUTOPLAY_ERROR_SKIP_MS: 600,
} as const;
