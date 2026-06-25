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

const STORAGE_KEY = "bit-tech-future-tech-mode";
const GLYPHS = "01{}[]<>/\\|=+*BITTECHCORESAAS";

type FutureTechContextValue = {
  enabled: boolean;
  toggle: () => void;
};

const FutureTechContext = createContext<FutureTechContextValue | null>(null);

function applyFutureTech(enabled: boolean) {
  document.documentElement.dataset.futureTech = enabled ? "true" : "false";
}

export function useFutureTech() {
  const ctx = useContext(FutureTechContext);
  if (!ctx) {
    throw new Error("useFutureTech must be used within FutureTechShell");
  }
  return ctx;
}

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

function FutureTechAmbient() {
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

export function FutureTechToggle() {
  const { enabled, toggle } = useFutureTech();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={
        enabled
          ? "Switch to standard presentation mode"
          : "Switch to Future-Tech presentation mode"
      }
      title={
        enabled
          ? "Return to standard mode"
          : "Activate Future-Tech visual mode"
      }
      className={`group relative inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
        enabled
          ? "future-toggle-active border-accent bg-accent-glow text-accent shadow-[0_0_20px_var(--color-accent-glow-strong)]"
          : "border-surface-border bg-surface-raised/80 text-slate-400 hover:border-slate-500 hover:text-slate-200"
      }`}
    >
      <span
        className={`relative flex h-2 w-2 shrink-0 rounded-full transition-colors duration-300 ${
          enabled ? "bg-accent shadow-[0_0_8px_rgb(var(--accent-rgb))]" : "bg-slate-500"
        }`}
        aria-hidden="true"
      >
        {enabled ? (
          <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40" />
        ) : null}
      </span>
      <span className="hidden sm:inline">
        {enabled ? "Future-Tech ON" : "Future-Tech Mode"}
      </span>
      <span className="sm:hidden">{enabled ? "FT ON" : "FT Mode"}</span>
    </button>
  );
}

export function FutureTechHeroConsole() {
  const { enabled } = useFutureTech();

  if (!enabled) {
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

export function FutureTechShell({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) === "true";
    setEnabled(stored);
    applyFutureTech(stored);
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      applyFutureTech(next);
      return next;
    });
  }, []);

  return (
    <FutureTechContext.Provider value={{ enabled, toggle }}>
      <FutureTechAmbient />
      <div className="relative z-10">{children}</div>
    </FutureTechContext.Provider>
  );
}
