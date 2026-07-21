"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  LEGACY_FUTURE_KEY,
  NOCTURNE_FX_KEY,
  THEME_STORAGE_KEY,
  resolveStoredTheme,
  type ThemeId,
} from "@/lib/themes";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  /** Special Nocturne atmosphere: blood, bats, spider */
  nocturneFx: boolean;
  setNocturneFx: (on: boolean) => void;
  toggleNocturneFx: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: ThemeId) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  if (theme === "future") {
    root.dataset.futureTech = "true";
  } else {
    delete root.dataset.futureTech;
  }
  root.style.colorScheme = "";
}

function applyNocturneFx(on: boolean) {
  const root = document.documentElement;
  if (on) {
    root.dataset.nocturneFx = "on";
  } else {
    delete root.dataset.nocturneFx;
  }
}

function readStoredNocturneFx(theme: ThemeId): boolean {
  if (theme !== "nocturne") {
    return false;
  }
  try {
    const raw = localStorage.getItem(NOCTURNE_FX_KEY);
    if (raw === null) {
      return true;
    }
    return raw === "true";
  } catch {
    return true;
  }
}

export function useSiteTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useSiteTheme must be used within ThemeShell");
  }
  return ctx;
}

/** @deprecated Prefer useSiteTheme */
export function useFutureTech() {
  const { theme, setTheme } = useSiteTheme();
  return {
    enabled: theme === "future",
    toggle: () => setTheme(theme === "future" ? "core" : "future"),
  };
}

const GLYPHS = "01{}[]<>/\\|=+*BITTECHCORESAAS";

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
    let drops: number[] = [];
    let frameId = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const columns = Math.floor(width / 18);
      drops = Array.from({ length: columns }, () => Math.random() * height);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(3, 6, 13, 0.065)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        ctx.fillStyle =
          Math.random() > 0.985
            ? "rgba(255,79,216,0.95)"
            : "rgba(99,246,255,0.65)";
        ctx.fillText(text, i * 18, drops[i] * 18);

        if (drops[i] * 18 > height && Math.random() > 0.975) {
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
      id="matrix"
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.24]"
      aria-hidden="true"
      ref={canvasRef}
    />
  );
}

function BloodDripCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      return;
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frameId = 0;

    type Rivule = {
      x: number;
      y: number;
      speed: number;
      len: number;
      w: number;
      sway: number;
      phase: number;
      curve: number;
      thick: number;
      life: number;
    };
    type Bead = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
    };

    let rivulets: Rivule[] = [];
    let beads: Bead[] = [];

    const spawnRivule = (x: number, y?: number): Rivule => {
      const thick = 0.35 + Math.random() * 0.65;
      return {
        x,
        y: y ?? -20 - Math.random() * 80,
        // Viscosity: thicker = slower
        speed: (1.1 + Math.random() * 2.4) * (1.35 - thick * 0.55),
        len: 40 + Math.random() * 110 * thick,
        w: 1.6 + thick * 4.2,
        sway: (Math.random() - 0.5) * 0.22,
        phase: Math.random() * Math.PI * 2,
        curve: (Math.random() - 0.5) * 18,
        thick,
        life: 0,
      };
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(18, Math.floor(width / 70));
      rivulets = [];
      for (let i = 0; i < count; i++) {
        const x = (Math.random() * 0.92 + 0.04) * width;
        rivulets.push(spawnRivule(x, Math.random() * height * 0.7));
      }
      beads = [];
    };

    const drawTeardrop = (
      tipX: number,
      tipY: number,
      radius: number,
      dark: string,
      mid: string,
      gloss: string,
    ) => {
      // Organic teardrop: round bulb + taper upward into the stream
      ctx.beginPath();
      ctx.moveTo(tipX, tipY - radius * 2.4);
      ctx.bezierCurveTo(
        tipX - radius * 1.15,
        tipY - radius * 1.1,
        tipX - radius * 1.25,
        tipY + radius * 0.15,
        tipX,
        tipY + radius * 1.05,
      );
      ctx.bezierCurveTo(
        tipX + radius * 1.25,
        tipY + radius * 0.15,
        tipX + radius * 1.15,
        tipY - radius * 1.1,
        tipX,
        tipY - radius * 2.4,
      );
      ctx.closePath();

      const fill = ctx.createRadialGradient(
        tipX - radius * 0.25,
        tipY - radius * 0.2,
        radius * 0.1,
        tipX,
        tipY,
        radius * 1.4,
      );
      fill.addColorStop(0, gloss);
      fill.addColorStop(0.35, mid);
      fill.addColorStop(1, dark);
      ctx.fillStyle = fill;
      ctx.fill();

      // Wet highlight
      ctx.beginPath();
      ctx.ellipse(
        tipX - radius * 0.28,
        tipY - radius * 0.35,
        radius * 0.28,
        radius * 0.18,
        -0.5,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = "rgba(255, 210, 210, 0.28)";
      ctx.fill();
    };

    const draw = () => {
      // Soft trail wash — wet glass persistence
      ctx.fillStyle = "rgba(7, 6, 9, 0.085)";
      ctx.fillRect(0, 0, width, height);

      for (const r of rivulets) {
        r.life += 1;
        r.phase += 0.028 + r.thick * 0.01;
        const wobble = Math.sin(r.phase) * r.sway * 10;
        const headX = r.x + wobble + r.curve * 0.15;
        const headY = r.y + r.len;
        const tailX = r.x + wobble * 0.35;
        const tailY = r.y;
        const midX = (tailX + headX) / 2 + r.curve;

        // Shadow / clotting edge
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.quadraticCurveTo(midX + 1.2, (tailY + headY) / 2, headX + 0.8, headY);
        ctx.strokeStyle = "rgba(40, 4, 10, 0.55)";
        ctx.lineWidth = r.w * 1.35;
        ctx.lineCap = "round";
        ctx.stroke();

        // Main venous crimson stream (tapers)
        const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        grad.addColorStop(0, "rgba(70, 8, 16, 0)");
        grad.addColorStop(0.12, "rgba(110, 12, 24, 0.45)");
        grad.addColorStop(0.45, "rgba(140, 16, 32, 0.88)");
        grad.addColorStop(0.78, "rgba(105, 10, 22, 0.98)");
        grad.addColorStop(1, "rgba(55, 5, 12, 1)");

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.quadraticCurveTo(midX, (tailY + headY) / 2, headX, headY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = r.w;
        ctx.lineCap = "round";
        ctx.stroke();

        // Inner brighter arterial core
        ctx.beginPath();
        ctx.moveTo(tailX, tailY + r.len * 0.2);
        ctx.quadraticCurveTo(
          midX - 0.5,
          (tailY + headY) / 2 + 4,
          headX,
          headY - 2,
        );
        ctx.strokeStyle = "rgba(180, 28, 42, 0.55)";
        ctx.lineWidth = Math.max(0.8, r.w * 0.35);
        ctx.stroke();

        drawTeardrop(
          headX,
          headY,
          r.w * (0.95 + r.thick * 0.35),
          "rgba(48, 4, 10, 0.98)",
          "rgba(130, 14, 28, 0.98)",
          "rgba(170, 35, 48, 0.95)",
        );

        // Occasional detached satellite bead
        if (r.life > 40 && Math.random() > 0.992) {
          beads.push({
            x: headX + (Math.random() - 0.5) * 6,
            y: headY + 2,
            vx: (Math.random() - 0.5) * 0.8,
            vy: 1.2 + Math.random() * 2.2,
            r: 1.2 + Math.random() * 2.4,
            life: 55 + Math.random() * 40,
          });
        }

        r.y += r.speed;
        // Stream grows a little as it runs (gravity stretch)
        r.len += 0.04 * r.speed;

        if (r.y > height + 40) {
          Object.assign(
            r,
            spawnRivule(r.x + (Math.random() - 0.5) * 40, -30 - Math.random() * 50),
          );
        }
      }

      for (let i = beads.length - 1; i >= 0; i--) {
        const b = beads[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vy += 0.06;
        b.life -= 1;

        const beadGrad = ctx.createRadialGradient(
          b.x - b.r * 0.3,
          b.y - b.r * 0.3,
          0,
          b.x,
          b.y,
          b.r,
        );
        beadGrad.addColorStop(0, "rgba(190, 40, 52, 0.95)");
        beadGrad.addColorStop(0.55, "rgba(120, 12, 24, 0.95)");
        beadGrad.addColorStop(1, "rgba(40, 4, 10, 0.9)");
        ctx.beginPath();
        ctx.ellipse(b.x, b.y, b.r, b.r * 1.25, 0, 0, Math.PI * 2);
        ctx.fillStyle = beadGrad;
        ctx.fill();

        if (b.life <= 0 || b.y > height + 20) {
          beads.splice(i, 1);
        }
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
      className="nocturne-blood-canvas"
      aria-hidden="true"
      ref={canvasRef}
    />
  );
}

function NocturneAmbientLayer() {
  return (
    <div className="nocturne-fx-root" aria-hidden="true">
      <BloodDripCanvas />
      {/* CSS fallback streaks — visible even if canvas is blocked */}
      <div className="nocturne-blood-css" />
      <div className="nocturne-fog" />
      <div className="nocturne-skull nocturne-skull-a">💀</div>
      <div className="nocturne-skull nocturne-skull-b">💀</div>
      <div className="nocturne-bat nocturne-bat-a">🦇</div>
      <div className="nocturne-bat nocturne-bat-b">🦇</div>
      <div className="nocturne-bat nocturne-bat-c">🦇</div>
      <div className="nocturne-bat nocturne-bat-d">🦇</div>
      <div className="nocturne-bat nocturne-bat-e">🦇</div>
      <div className="nocturne-spider">
        <span className="nocturne-web-thread" />
        <span className="nocturne-spider-body">🕷️</span>
      </div>
    </div>
  );
}

function ThemeAmbient() {
  const { theme, nocturneFx } = useSiteTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (theme === "future") {
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

  if (theme === "nocturne" && nocturneFx && mounted) {
    return createPortal(<NocturneAmbientLayer />, document.body);
  }

  return null;
}

export function FutureTechHeroConsole() {
  const { theme } = useSiteTheme();

  if (theme !== "future") {
    return null;
  }

  return (
    <aside
      className="ft-hero-console hidden lg:block"
      aria-label="Bit-Tech systems console"
    >
      <div className="ft-console-top">
        <div className="ft-lights">
          <span />
          <span />
          <span />
        </div>
        <div className="ft-console-label">BIT-TECH // ONLINE</div>
      </div>

      <div className="ft-holo-core">
        <div className="ft-rings" />
        <div className="ft-sigil">
          <span>😈</span>
        </div>
      </div>

      <div className="ft-telemetry">
        <div>
          <small>Mode</small>
          <b>SaaS Architect</b>
        </div>
        <div>
          <small>Stack</small>
          <b>Full-Production</b>
        </div>
        <div>
          <small>Status</small>
          <b>Systems Live</b>
        </div>
      </div>

      <div className="ft-terminal">
        <span className="ft-prompt">info@bit-tech-software.co.uk</span>: future-tech
        interface active
        <br />
        <span className="ft-prompt">route</span>: consulting + football_ai +
        pipelines
        <br />
        <span className="ft-prompt">signal</span>: controlled weirdness enabled
        <span className="ft-cursor" />
      </div>
    </aside>
  );
}

export function ThemeShell({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>("core");
  const [nocturneFx, setNocturneFxState] = useState(false);

  useEffect(() => {
    const initial = resolveStoredTheme();
    setThemeState(initial);
    applyTheme(initial);
    const fx = readStoredNocturneFx(initial);
    setNocturneFxState(fx);
    applyNocturneFx(fx);
  }, []);

  const setNocturneFx = useCallback((on: boolean) => {
    setNocturneFxState(on);
    applyNocturneFx(on);
    try {
      localStorage.setItem(NOCTURNE_FX_KEY, on ? "true" : "false");
    } catch {
      /* ignore */
    }
  }, []);

  const toggleNocturneFx = useCallback(() => {
    setNocturneFxState((prev) => {
      const next = !prev;
      applyNocturneFx(next);
      try {
        localStorage.setItem(NOCTURNE_FX_KEY, next ? "true" : "false");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const setTheme = useCallback(
    (id: ThemeId) => {
      setThemeState(id);
      applyTheme(id);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, id);
        localStorage.setItem(
          LEGACY_FUTURE_KEY,
          id === "future" ? "true" : "false",
        );
      } catch {
        /* ignore */
      }

      if (id === "nocturne") {
        // Entering Nocturne turns atmosphere on by default
        setNocturneFx(true);
      } else {
        setNocturneFx(false);
      }
    },
    [setNocturneFx],
  );

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, nocturneFx, setNocturneFx, toggleNocturneFx }}
    >
      <div className="relative z-10">{children}</div>
      <ThemeAmbient />
    </ThemeContext.Provider>
  );
}

export function FutureTechShell({ children }: { children: ReactNode }) {
  return <ThemeShell>{children}</ThemeShell>;
}
