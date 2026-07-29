// src/components/shared/StarsCanvas.tsx
import { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleOffset: number;
  twinkleSpeed: number;
  vx: number;   // velocity in x direction (pixels per frame)
  vy: number;   // velocity in y direction
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

    // Initialize stars only once
    if (starsRef.current.length === 0) {
      const starCount = 300;
      starsRef.current = Array.from({ length: starCount }, () => {
        // Random position within the canvas
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        // Random velocity: between -0.3 and 0.3 pixels per frame (slow drift)
        const vx = (Math.random() - 0.5) * 0.6;
        const vy = (Math.random() - 0.5) * 0.6;
        return {
          x,
          y,
          radius: Math.random() * 1.8 + 0.2,
          baseAlpha: Math.random() * 0.5 + 0.2,
          twinkleOffset: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          vx,
          vy,
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
        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkle
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

    // On resize: update canvas size and reposition stars proportionally
    // (we keep them inside the new bounds, and adjust their positions
    //  so they don't teleport – we scale them relative to the old size)
    const handleResize = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      setCanvasSize();
      const scaleX = canvas.width / oldWidth;
      const scaleY = canvas.height / oldHeight;
      starsRef.current.forEach((star) => {
        // Scale positions to keep them within the new bounds
        star.x *= scaleX;
        star.y *= scaleY;
        // Ensure they don't go out of bounds (wrap if necessary)
        if (star.x > canvas.width) star.x = canvas.width;
        if (star.y > canvas.height) star.y = canvas.height;
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