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
  document.documentElement.dataset.theme = theme;
  if (theme === "future") {
    document.documentElement.dataset.futureTech = "true";
  } else {
    delete document.documentElement.dataset.futureTech;
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

function ThemeAmbient() {
  const { theme } = useSiteTheme();

  if (theme !== "future") {
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
          <span>BT</span>
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
        <span className="ft-prompt">info@bit-tech-software.co.uk</span>: future
        identity active
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
