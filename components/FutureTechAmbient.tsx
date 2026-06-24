"use client";

import { useEffect, useRef } from "react";
import { useFutureTech } from "./future-tech-context";

const GLYPHS = "01λ{}[]<>/\\|=+*BITTECHCORESAAS";

function MatrixRainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    let frameId = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 18);
      drops = Array.from({ length: columns }, () => Math.random() * height);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(3, 6, 13, 0.065)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * 18;
        const y = drops[i] * 18;

        ctx.fillStyle =
          Math.random() > 0.985
            ? "rgba(255,79,216,0.95)"
            : "rgba(99,246,255,0.65)";
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      frameId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="matrix"
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.24]"
      aria-hidden="true"
    />
  );
}

export function FutureTechAmbient() {
  const { enabled } = useFutureTech();

  if (!enabled) {
    return null;
  }

  return (
    <>
      <MatrixRainCanvas />
      <div className="ft-orb ft-orb-cyan" aria-hidden="true" />
      <div className="ft-orb ft-orb-violet" aria-hidden="true" />
      <div className="ft-orb ft-orb-magenta" aria-hidden="true" />
      <div
        className="ft-body-grid pointer-events-none fixed inset-0 z-[0]"
        aria-hidden="true"
      />
      <div
        className="ft-body-scanlines pointer-events-none fixed inset-0 z-[5]"
        aria-hidden="true"
      />
    </>
  );
}
