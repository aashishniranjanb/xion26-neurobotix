"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import {
    generateSpiralPositions,
    DEFAULT_SPIRAL_CONFIG,
} from "@/lib/math/spiralGenerator";

interface SpiralVortexProps {
    charged: boolean;
}

export default function SpiralVortex({ charged }: SpiralVortexProps) {
    const ref = useRef<THREE.Points>(null!);

    // Pre-generate positions once — zero runtime allocation
    const positions = useMemo(
        () => generateSpiralPositions(DEFAULT_SPIRAL_CONFIG),
        []
    );

    // Smooth scale transition target
    const scaleTarget = useRef(1);

    useFrame((state) => {
        if (!ref.current) return;

        const time = state.clock.getElapsedTime();

        // Rotation
        const baseSpeed = 0.002;
        const speed = charged ? baseSpeed * 2.5 : baseSpeed;
        ref.current.rotation.z += speed;

        // Vertical breathing wave
        ref.current.rotation.x = Math.sin(time * 0.4) * 0.15;

        // Smooth scale interpolation (charged = slight expansion)
        scaleTarget.current = charged ? 1.05 : 1;
        const s = ref.current.scale.x;
        const newScale = s + (scaleTarget.current - s) * 0.05;
        ref.current.scale.set(newScale, newScale, newScale);
    });

    return (
        <Points ref={ref} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color={charged ? "#FFD700" : "#DAA520"}
                size={0.04}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}
