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
import {
  LEGACY_FUTURE_KEY,
  THEME_STORAGE_KEY,
  resolveStoredTheme,
  type ThemeId,
} from "@/lib/themes";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
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
  // Force style recalc so CSS variable skins apply immediately
  root.style.colorScheme = "";
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let width = 0;
    let height = 0;
    let frameId = 0;
    type Drop = {
      x: number;
      y: number;
      speed: number;
      len: number;
      w: number;
      sway: number;
      phase: number;
    };
    let drops: Drop[] = [];

    const spawn = (x: number, y?: number): Drop => ({
      x,
      y: y ?? -Math.random() * height,
      speed: 1.6 + Math.random() * 3.4,
      len: 14 + Math.random() * 38,
      w: 1.4 + Math.random() * 2.4,
      sway: (Math.random() - 0.5) * 0.35,
      phase: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      // Matrix-style columns of blood streams (overlay-dense, still readable)
      const columns = Math.max(22, Math.floor(width / 42));
      drops = [];
      for (let i = 0; i < columns; i++) {
        const baseX = (i + 0.5) * (width / columns) + (Math.random() - 0.5) * 18;
        drops.push(spawn(baseX, Math.random() * height));
        if (Math.random() > 0.55) {
          drops.push(spawn(baseX + (Math.random() - 0.5) * 10, Math.random() * height));
        }
      }
    };

    const draw = () => {
      // Soft trail wash — like bloody-drops stream overlays
      ctx.fillStyle = "rgba(7, 6, 9, 0.07)";
      ctx.fillRect(0, 0, width, height);

      for (const drop of drops) {
        drop.phase += 0.04;
        const x = drop.x + Math.sin(drop.phase) * drop.sway * 6;
        const gradient = ctx.createLinearGradient(
          x,
          drop.y,
          x,
          drop.y + drop.len,
        );
        gradient.addColorStop(0, "rgba(208, 29, 63, 0)");
        gradient.addColorStop(0.25, "rgba(208, 29, 63, 0.45)");
        gradient.addColorStop(0.7, "rgba(163, 15, 45, 0.9)");
        gradient.addColorStop(1, "rgba(90, 6, 22, 0.95)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = drop.w;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x, drop.y);
        ctx.lineTo(x, drop.y + drop.len);
        ctx.stroke();

        // Tip bead / splash head
        ctx.fillStyle = "rgba(232, 48, 78, 0.9)";
        ctx.beginPath();
        ctx.ellipse(
          x,
          drop.y + drop.len,
          drop.w * 1.25,
          drop.w * 1.85,
          0,
          0,
          Math.PI * 2,
        );
        ctx.fill();

        drop.y += drop.speed;
        if (drop.y > height + 50) {
          Object.assign(drop, spawn(drop.x + (Math.random() - 0.5) * 24, -40));
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
      className="nocturne-blood-canvas pointer-events-none fixed inset-0 z-[1] opacity-[0.42]"
      aria-hidden="true"
      ref={canvasRef}
    />
  );
}

function NocturneAmbient() {
  return (
    <>
      <BloodDripCanvas />
      <div className="nocturne-fog" aria-hidden="true" />
      <div className="nocturne-skull nocturne-skull-a" aria-hidden="true">
        💀
      </div>
      <div className="nocturne-skull nocturne-skull-b" aria-hidden="true">
        💀
      </div>
      <div className="nocturne-bat nocturne-bat-a" aria-hidden="true">
        🦇
      </div>
      <div className="nocturne-bat nocturne-bat-b" aria-hidden="true">
        🦇
      </div>
      <div className="nocturne-bat nocturne-bat-c" aria-hidden="true">
        🦇
      </div>
    </>
  );
}

function ThemeAmbient() {
  const { theme } = useSiteTheme();

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

  if (theme === "nocturne") {
    return <NocturneAmbient />;
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

  useEffect(() => {
    const initial = resolveStoredTheme();
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    applyTheme(id);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
      localStorage.setItem(LEGACY_FUTURE_KEY, id === "future" ? "true" : "false");
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeAmbient />
      <div className="relative z-10">{children}</div>
    </ThemeContext.Provider>
  );
}

export function FutureTechShell({ children }: { children: ReactNode }) {
  return <ThemeShell>{children}</ThemeShell>;
}
