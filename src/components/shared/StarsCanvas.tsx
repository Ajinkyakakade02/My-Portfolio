// src/components/shared/StarsCanvas.tsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

interface Star {
  normX: number;  // normalized 0-1 — survives resize without re-randomizing
  normY: number;
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleOffset: number;  // phase offset so stars twinkle out of sync
  twinkleSpeed: number;
}

export const StarsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Initialize stars only once — they persist across theme changes and resizes
    if (starsRef.current.length === 0) {
      starsRef.current = Array.from({ length: 300 }, () => {
        const normX = Math.random();
        const normY = Math.random();
        return {
          normX,
          normY,
          x: normX * canvas.width,
          y: normY * canvas.height,
          radius: Math.random() * 1.8 + 0.2,
          baseAlpha: Math.random() * 0.5 + 0.2,
          twinkleOffset: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
        };
      });
    }

    let animationFrameId: number;
    let time = 0;
    const alphaMultiplier = theme === "dark" ? 1 : 0.15;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      starsRef.current.forEach((star) => {
        // Each star twinkles at its own phase and speed
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.25 + 0.75;
        const finalAlpha = star.baseAlpha * twinkle * alphaMultiplier;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // On resize: scale positions proportionally — no flash from re-randomizing
    const handleResize = () => {
      setCanvasSize();
      starsRef.current.forEach((star) => {
        star.x = star.normX * canvas.width;
        star.y = star.normY * canvas.height;
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};