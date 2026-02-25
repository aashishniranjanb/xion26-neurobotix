import { useState, useCallback } from "react";

export type ChargeState = "idle" | "charged";

export function useChargeState() {
    const [state, setState] = useState<ChargeState>("idle");

    const charge = useCallback(() => setState("charged"), []);
    const release = useCallback(() => setState("idle"), []);

    return {
        chargeState: state,
        isCharged: state === "charged",
        charge,
        release,
    } as const;
}
