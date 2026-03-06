"use client";
import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

const rand = (n: number) => n * Math.random();
const lerp = (n1: number, n2: number, s: number) => (1 - s) * n1 + s * n2;
const fade = (t: number, m: number) => Math.abs(((t + 0.5 * m) % m) - 0.5 * m) / (0.5 * m);

export const Engine = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number>(undefined);
    const noise3D = useMemo(() => createNoise3D(), []);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    const pCountRef = useRef(0);
    const pDataRef = useRef<Float32Array | null>(null);

    const init = useCallback((i: number, w: number, h: number) => {
        if (!pDataRef.current) return;
        const isBig = Math.random() < 0.16;
        pDataRef.current.set([rand(w), 0.5 * h + (rand(200) - 100), 0, 0, 0, 50 + rand(150), 0.5 + rand(1.5), isBig ? 4 : 1.2, 40 + rand(20)], i);
    }, []);

    useEffect(() => {
        let tick = 0;
        const iRange = (w: number, h: number) => {
            if (!pDataRef.current) return;
            for (let i = 0; i < pDataRef.current.length; i += 9) init(i, w, h);
        };

        const update = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
            if (!pDataRef.current || pCountRef.current === 0) return;
            tick++;
            ctx.clearRect(0, 0, w, h);
            const pData = pDataRef.current;
            const isMobile = w < 768;

            ctx.save();
            ctx.lineWidth = 0.5;
            const step = isMobile ? 72 : 36;
            for (let i = 0; i < pData.length; i += 9) {
                const x1 = pData[i], y1 = pData[i + 1], life1 = pData[i + 4], ttl1 = pData[i + 5];
                const opacity1 = fade(life1, ttl1);
                if (opacity1 < 0.1) continue;
                for (let j = i + step; j < pData.length; j += step) {
                    const x2 = pData[j], y2 = pData[j + 1], life2 = pData[j + 4], ttl2 = pData[j + 5];
                    const dx = x1 - x2, dy = y1 - y2;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < 10000) {
                        const opacity2 = fade(life2, ttl2);
                        const meshOpacity = (1 - Math.sqrt(distSq) / 100) * Math.min(opacity1, opacity2) * (isMobile ? 0.1 : 0.15);
                        ctx.strokeStyle = `rgba(212, 175, 55, ${meshOpacity})`;
                        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
                    }
                }
            }
            ctx.restore();

            for (let i = 0; i < pData.length; i += 9) {
                const x = pData[i], y = pData[i + 1], life = pData[i + 4], ttl = pData[i + 5], spd = pData[i + 6], rad = pData[i + 7], hue = pData[i + 8];
                let vx = pData[i + 2], vy = pData[i + 3];
                const n = noise3D(x * 0.001, y * 0.001, tick * 0.0005) * 3 * Math.PI * 2;
                vx = lerp(vx, Math.cos(n), 0.5); vy = lerp(vy, Math.sin(n), 0.5);
                const dx = x - mouseRef.current.x, dy = y - mouseRef.current.y, dist = Math.sqrt(dx * dx + dy * dy);
                let fSpd = spd, fRad = rad, fHue = hue;
                if (dist < 200) {
                    const en = (200 - dist) / 200; fSpd *= (1 + en * 3); fRad *= (1 + en * 2); fHue += (en * 40);
                }
                const x2 = x + vx * fSpd, y2 = y + vy * fSpd;
                ctx.save(); ctx.lineWidth = fRad; ctx.strokeStyle = `hsla(${fHue},100%,60%,${fade(life, ttl)})`;
                ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke(); ctx.restore();
                pData[i] = x2; pData[i + 1] = y2; pData[i + 2] = vx; pData[i + 3] = vy; pData[i + 4] = life + 1;
                if (x > w || x < 0 || y > h || y < 0 || life > ttl) init(i, w, h);
            }
            animationFrameId.current = requestAnimationFrame(() => update(ctx, w, h));
        };

        const canvas = canvasRef.current, ctx = canvas?.getContext("2d");
        if (canvas && ctx) {
            const isMobile = window.innerWidth < 768;
            const isSmallMobile = window.innerWidth < 480;
            const count = isSmallMobile ? 200 : isMobile ? 300 : 750;
            pCountRef.current = count;
            pDataRef.current = new Float32Array(count * 9);
            const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
            resize();
            iRange(canvas.width, canvas.height);
            update(ctx, canvas.width, canvas.height);
            const move = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }; };
            window.addEventListener("resize", resize); window.addEventListener("mousemove", move);
            return () => { window.removeEventListener("resize", resize); window.removeEventListener("mousemove", move); if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current); };
        }
    }, [init, noise3D]);

    return (
        <div className="relative h-full w-full">
            <div className="absolute inset-0 flex items-center justify-center bg-transparent"><canvas ref={canvasRef}></canvas></div>
            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
