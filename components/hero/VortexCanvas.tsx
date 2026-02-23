"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

function ParticleField({ charged }: { charged: boolean }) {
    const ref = useRef<THREE.Points>(null!);
    const count = 100;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const radius = Math.random() * 2 + 1;
            const angle = Math.random() * Math.PI * 2;
            pos[i * 3] = Math.cos(angle) * radius;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 2;
            pos[i * 3 + 2] = Math.sin(angle) * radius;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const speed = charged ? 2.5 : 1;

        if (ref.current) {
            ref.current.rotation.y += 0.002 * speed;
            ref.current.rotation.x = Math.sin(time * 0.3) * 0.2;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color={charged ? "#FFD700" : "#DAA520"}
                size={0.03}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

export default function VortexCanvas() {
    const [charged, setCharged] = useState(false);

    return (
        <div
            className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[600px]"
            onTouchStart={() => setCharged(true)}
            onTouchEnd={() => setCharged(false)}
            onMouseDown={() => setCharged(true)}
            onMouseUp={() => setCharged(false)}
        >
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <ParticleField charged={charged} />
            </Canvas>
        </div>
    );
}
