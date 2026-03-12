"use client";

import { useEffect, useRef } from "react";

interface LightRaysProps {
  raysColor?: string;
  raysSpeed?: number;
  rayCount?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  fadeDistance?: number;
}

export default function LightRays({
  raysColor = "#b4a71d",
  raysSpeed = 2.4,
  rayCount = 18,
  lightSpread = 1.5,
  rayLength = 3,
  pulsating = false,
  fadeDistance = 1.5,
}: LightRaysProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Parse hex color to RGB
    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };

    const rgb = hexToRgb(raysColor);

    const animate = () => {
      time += 0.005 * raysSpeed;
      const { width, height } = canvas;

      ctx.clearRect(0, 0, width, height);

      const originX = width / 2;
      const originY = 0;

      for (let i = 0; i < rayCount; i++) {
        const angle =
          ((i / rayCount) * Math.PI * lightSpread) -
          (Math.PI * lightSpread) / 2 +
          Math.PI / 2;

        const wobble = Math.sin(time + i * 0.7) * 0.08;
        const finalAngle = angle + wobble;

        const length = height * rayLength;
        const endX = originX + Math.cos(finalAngle) * length;
        const endY = originY + Math.sin(finalAngle) * length;

        // Pulsating alpha
        let alpha = 0.06 + Math.sin(time * 1.5 + i * 0.5) * 0.03;
        if (pulsating) {
          alpha += Math.sin(time * 3) * 0.02;
        }

        // Fade based on distance
        const grad = ctx.createLinearGradient(originX, originY, endX, endY);
        grad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 1.5})`);
        grad.addColorStop(0.3 / fadeDistance, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`);
        grad.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

        // Draw ray as triangle
        const spreadWidth = (i % 3 === 0 ? 80 : 40) + Math.sin(time + i) * 15;
        const perpX = Math.cos(finalAngle + Math.PI / 2) * spreadWidth;
        const perpY = Math.sin(finalAngle + Math.PI / 2) * spreadWidth;

        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(endX + perpX, endY + perpY);
        ctx.lineTo(endX - perpX, endY - perpY);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Center glow
      const glowRadius = Math.min(width, height) * 0.3;
      const glowAlpha = 0.15 + Math.sin(time * 2) * 0.05;
      const glow = ctx.createRadialGradient(originX, originY, 0, originX, originY, glowRadius);
      glow.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${glowAlpha})`);
      glow.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      animFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, [raysColor, raysSpeed, rayCount, lightSpread, rayLength, pulsating, fadeDistance]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
