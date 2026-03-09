"use client";

import { useEffect, useRef } from "react";
import styles from "./events.module.css";

const STAR_COUNT = 200; // reduced from 600

export default function GalaxyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;

        function resize() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;

            // Kickstart animation again if it was halted but is now visible
            if (getComputedStyle(canvas).display !== "none" && !animationId) {
                animate();
            }
        }

        resize();
        window.addEventListener("resize", resize);

        const stars: {
            x: number;
            y: number;
            r: number;
            speed: number;
            alpha: number;
        }[] = [];

        for (let i = 0; i < STAR_COUNT; i++) {
            const r = Math.random() * 1.8 + 0.3;
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: r,
                speed: r * 0.12 + 0.03,
                alpha: Math.random() * 0.5 + 0.15,
            });
        }

        function animate() {
            if (!canvas || !ctx) return;

            // Completely halt JS execution on mobile (display: none in CSS)
            if (getComputedStyle(canvas).display === "none") {
                animationId = 0;
                return;
            }

            // Simple solid fill — cheaper than gradient
            ctx.fillStyle = "#030303";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw all stars WITHOUT shadowBlur (massive perf gain)
            for (const s of stars) {
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${s.alpha})`;
                ctx.fill();

                s.y += s.speed;
                if (s.y > canvas.height) {
                    s.y = 0;
                    s.x = Math.random() * canvas.width;
                }
            }

            animationId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
