"use client";

import { Canvas } from "@react-three/fiber";
import { useChargeState } from "@/hooks/useChargeState";
import SpiralVortex from "./SpiralVortex";
import RippleShockwave from "./RippleShockwave";

export default function VortexCanvas() {
    const { isCharged, charge, release } = useChargeState();

    return (
        <div
            className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[600px] overflow-hidden"
            onTouchStart={charge}
            onTouchEnd={release}
            onMouseDown={charge}
            onMouseUp={release}
        >
            <Canvas
                camera={{ position: [0, 0, 6] }}
                dpr={[1, 1.5]}
                gl={{ antialias: false }}
            >
                <ambientLight intensity={0.5} />
                <SpiralVortex charged={isCharged} />
                <RippleShockwave active={isCharged} />
            </Canvas>
        </div>
    );
}
