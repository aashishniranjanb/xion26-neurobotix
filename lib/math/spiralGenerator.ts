/**
 * Deterministic spiral vortex generator using Archimedean spiral.
 * r = a + b * theta mapped to a 3D helix.
 *
 * Performance: Pre-generates a single Float32Array — zero runtime allocation.
 */

export interface SpiralConfig {
    particleCount: number;
    thetaIncrement: number;
    spiralConstantA: number;
    spiralConstantB: number;
    verticalWaveAmplitude: number;
}

export const DEFAULT_SPIRAL_CONFIG: SpiralConfig = {
    particleCount: 120,
    thetaIncrement: 0.25,
    spiralConstantA: 0.5,
    spiralConstantB: 0.15,
    verticalWaveAmplitude: 0.6,
};

export function generateSpiralPositions(
    config: SpiralConfig = DEFAULT_SPIRAL_CONFIG
): Float32Array {
    const {
        particleCount,
        thetaIncrement,
        spiralConstantA,
        spiralConstantB,
        verticalWaveAmplitude,
    } = config;

    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const theta = i * thetaIncrement;
        const radius = spiralConstantA + spiralConstantB * theta;

        const x = Math.cos(theta) * radius;
        const y = Math.sin(theta) * radius;
        const z = Math.sin(theta * 0.3) * verticalWaveAmplitude;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }

    return positions;
}
