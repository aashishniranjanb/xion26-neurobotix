"use client";

import { useEffect, useRef } from "react";
import styles from "./events.module.css";

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

        for (let i = 0; i < 600; i++) {
            const r = Math.random() * 2.3 + 0.5;
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: r,
                speed: r * 0.15 + 0.05,
                alpha: Math.random() * 0.6 + 0.2,
            });
        }

        function animate() {
            if (!canvas || !ctx) return;
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, "#000000");
            gradient.addColorStop(0.5, "#050505");
            gradient.addColorStop(1, "#0a0a0a");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (const s of stars) {
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.shadowBlur = 5;
                ctx.shadowColor = `rgba(212, 175, 55, ${s.alpha * 0.5})`;
                ctx.fillStyle = `rgba(212, 175, 55, ${s.alpha})`;
                ctx.fill();
                ctx.shadowBlur = 0; // Reset for next elements

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
