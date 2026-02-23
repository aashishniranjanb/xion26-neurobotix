"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface RippleShockwaveProps {
    active: boolean;
}

/**
 * Single expanding ring that fades out on activation.
 * Reuses a single mesh — no stacking, no dynamic creation.
 */
export default function RippleShockwave({ active }: RippleShockwaveProps) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const materialRef = useRef<THREE.MeshBasicMaterial>(null!);
    const scaleRef = useRef(0.5);
    const opacityRef = useRef(0);
    const wasActive = useRef(false);

    useFrame(() => {
        if (!meshRef.current || !materialRef.current) return;

        // Trigger reset on new activation
        if (active && !wasActive.current) {
            scaleRef.current = 0.5;
            opacityRef.current = 0.6;
        }
        wasActive.current = active;

        // Expand and fade
        if (opacityRef.current > 0) {
            scaleRef.current += 0.05;
            opacityRef.current -= 0.02;

            if (opacityRef.current < 0) opacityRef.current = 0;
            if (scaleRef.current > 3) scaleRef.current = 3;

            meshRef.current.scale.set(
                scaleRef.current,
                scaleRef.current,
                scaleRef.current
            );
            materialRef.current.opacity = opacityRef.current;
        }
    });

    return (
        <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.8, 1, 32]} />
            <meshBasicMaterial
                ref={materialRef}
                color="#FFD700"
                transparent
                opacity={0}
                side={THREE.DoubleSide}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </mesh>
    );
}
