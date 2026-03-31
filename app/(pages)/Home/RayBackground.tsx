'use client';
import { useEffect, useRef } from 'react';

export default function RayBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;

        // Увеличил до 150, чтобы было очень густо, как на фото
        const NUM_RAYS = 150;

        function mkRay() {
            // Угол наклона лучей (от -5 до 85 градусов для заполнения четверти круга)
            const angle = (Math.random() * 90 - 5) * (Math.PI / 180);
            return {
                angle,
                // Медленная, плавная скорость
                speed: 0.15 + Math.random() * 0.35,
                length: 0,
                maxLen: 0.6 + Math.random() * 0.7,
                opacity: 0,
                phase: 'grow' as 'grow' | 'fade',
                delay: Math.floor(Math.random() * 120),
                width: 0.2 + Math.random() * 0.7,
            };
        }

        const rays = Array.from({ length: NUM_RAYS }, () => {
            const r = mkRay();
            r.length = Math.random() * r.maxLen;
            r.opacity = Math.random() * 0.4;
            return r;
        });

        let animId: number;

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            const parent = canvas!.parentElement;
            if (parent) {
                canvas!.width = parent.offsetWidth * dpr;
                canvas!.height = parent.offsetHeight * dpr;
                ctx.scale(dpr, dpr);
            }
        }

        resize();
        window.addEventListener('resize', resize);

        function draw() {
            const w = canvas!.offsetWidth;
            const h = canvas!.offsetHeight;
            ctx.clearRect(0, 0, w, h);

            // КООРДИНАТЫ: Строго 0,0 для выхода из самого угла
            const ox = 0;
            const oy = 0;

            // 1. РИСУЕМ ЛУЧИ
            for (const r of rays) {
                if (r.delay > 0) { r.delay--; continue; }

                if (r.phase === 'grow') {
                    r.length += r.speed * 0.003;
                    r.opacity = Math.min(0.5, r.opacity + 0.01);
                    if (r.length >= r.maxLen) r.phase = 'fade';
                } else {
                    r.opacity -= 0.006;
                    if (r.opacity <= 0) {
                        Object.assign(r, mkRay());
                    }
                }

                const ex = ox + Math.cos(r.angle) * r.length * w;
                const ey = oy + Math.sin(r.angle) * r.length * w;

                const grad = ctx.createLinearGradient(ox, oy, ex, ey);
                // Мягкий белый свет
                grad.addColorStop(0, `rgba(255, 255, 255, ${r.opacity})`);
                grad.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.beginPath();
                ctx.moveTo(ox, oy);
                ctx.lineTo(ex, ey);
                ctx.strokeStyle = grad;
                ctx.lineWidth = r.width;
                ctx.stroke();
            }

            // 2. РИСУЕМ "СОЛНЦЕ" (Ядро свечения в углу)
            const sunGrad = ctx.createRadialGradient(ox, oy, 0, ox, oy, 100);
            sunGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
            sunGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
            sunGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.fillStyle = sunGrad;
            ctx.beginPath();
            ctx.arc(ox, oy, 100, 0, Math.PI * 2);
            ctx.fill();

            animId = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            // pointer-events-none чтобы кнопки под фоном работали
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
}