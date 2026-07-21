"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  SITE_THEMES,
  THEME_SEGMENT_DEG,
  themeIndex,
  type SiteTheme,
  type ThemeId,
} from "@/lib/themes";
import { useSiteTheme } from "@/components/ThemeEngine";

function ThemeIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: SiteTheme["icon"];
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "hexagon":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z"
          />
        </svg>
      );
    case "orbit":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(-25 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(55 12 12)" />
        </svg>
      );
    case "column":
      return (
        <svg {...common}>
          <path strokeLinecap="round" d="M5 20h14M7 20V8h10v12M6 8h12M9 8V5h6v3" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h3.5l2-5 3 10 2.5-5H21"
          />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path
            strokeLinejoin="round"
            d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18"
          />
        </svg>
      );
    case "rose":
      return (
        <svg {...common}>
          <path
            strokeLinejoin="round"
            d="M12 20c0-4 3-6 3-9a3 3 0 1 0-6 0c0 3 3 5 3 9Z"
          />
          <path
            strokeLinejoin="round"
            d="M12 8c2-2 4.5-2 5.5 0S16 12 12 12c-4 0-6.5-2-5.5-4S10 6 12 8Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function normalizeAngle(deg: number) {
  const value = deg % 360;
  return value < 0 ? value + 360 : value;
}

function shortestRotation(from: number, to: number) {
  let delta = normalizeAngle(to) - normalizeAngle(from);
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return from + delta;
}

function PaletteGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3a9 9 0 0 0 0 18h1.2a2.4 2.4 0 0 0 2.2-3.4 2.2 2.2 0 0 1 1.9-3.3H18a3 3 0 0 0 0-6h-.3A9 9 0 0 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="7.5" cy="10" r="1.1" fill="currentColor" />
      <circle cx="10.5" cy="7.2" r="1.1" fill="currentColor" />
      <circle cx="14.2" cy="7.8" r="1.1" fill="currentColor" />
      <circle cx="8.2" cy="13.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function ThemeDial() {
  const { theme, setTheme } = useSiteTheme();
  const [open, setOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const dragRef = useRef<{
    active: boolean;
    startAngle: number;
    startRotation: number;
  }>({ active: false, startAngle: 0, startRotation: 0 });
  const dialRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const current = SITE_THEMES[themeIndex(theme)] ?? SITE_THEMES[0];

  const syncRotationToTheme = useCallback((id: ThemeId, animate = true) => {
    const index = Math.max(0, themeIndex(id));
    const target = -index * THEME_SEGMENT_DEG;
    setRotation((prev) =>
      animate ? shortestRotation(prev, target) : target,
    );
  }, []);

  useEffect(() => {
    if (open) {
      syncRotationToTheme(theme, false);
    }
  }, [open, theme, syncRotationToTheme]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selectTheme = (id: ThemeId) => {
    syncRotationToTheme(id, true);
    setTheme(id);
  };

  const angleFromPointer = (clientX: number, clientY: number) => {
    const node = dialRef.current;
    if (!node) {
      return 0;
    }
    const rect = node.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return (Math.atan2(clientY - cy, clientX - cx) * 180) / Math.PI;
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      active: true,
      startAngle: angleFromPointer(event.clientX, event.clientY),
      startRotation: rotation,
    };
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) {
      return;
    }
    const currentAngle = angleFromPointer(event.clientX, event.clientY);
    const delta = currentAngle - dragRef.current.startAngle;
    setRotation(dragRef.current.startRotation + delta);
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) {
      return;
    }
    dragRef.current.active = false;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* ignore */
    }

    const snappedIndex =
      ((Math.round(-rotation / THEME_SEGMENT_DEG) % SITE_THEMES.length) +
        SITE_THEMES.length) %
      SITE_THEMES.length;
    const next = SITE_THEMES[snappedIndex];
    if (next) {
      selectTheme(next.id);
    }
  };

  return (
    <>
      <button
        type="button"
        className="theme-dial-trigger"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        title="Design Modes — six visual identities"
      >
        <PaletteGlyph />
        <span className="hidden sm:inline">Design Modes</span>
      </button>

      {open ? (
        <div className="theme-dial-overlay" role="presentation">
          <button
            type="button"
            className="theme-dial-backdrop"
            aria-label="Close Design Modes"
            onClick={() => setOpen(false)}
          />

          <div
            className="theme-dial-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="theme-dial-modal-head">
              <div>
                <p className="theme-dial-kicker">Design Modes</p>
                <h2 id={titleId} className="theme-dial-title">
                  One product. Six visual worlds.
                </h2>
                <p className="theme-dial-sub">
                  Explore the same product across six visual identities. Same
                  content — different skins.
                </p>
              </div>
              <button
                type="button"
                className="theme-dial-close"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="theme-dial-body">
              <div className="theme-dial-stage">
                <div className="theme-dial-marker" aria-hidden>
                  ▼
                </div>

                <div
                  ref={dialRef}
                  className="theme-dial-wheel"
                  style={{ transform: `rotate(${rotation}deg)` }}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                >
                  <div className="theme-dial-ring" aria-hidden />
                  {SITE_THEMES.map((item, index) => {
                    const angle = index * THEME_SEGMENT_DEG;
                    const active = item.id === theme;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`theme-dial-segment ${active ? "is-active" : ""}`}
                        style={{
                          transform: `rotate(${angle}deg) translateY(-6.6rem) rotate(${-angle}deg)`,
                        }}
                        aria-label={`${item.label}: ${item.tagline}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          selectTheme(item.id);
                        }}
                      >
                        <span
                          className="theme-dial-segment-inner"
                          style={{
                            transform: `rotate(${-rotation}deg)`,
                          }}
                        >
                          <ThemeIcon icon={item.icon} />
                          <strong>{item.label}</strong>
                          <small>{item.tagline}</small>
                        </span>
                      </button>
                    );
                  })}
                  <div className="theme-dial-hub" aria-hidden>
                    <span>BT</span>
                  </div>
                </div>

                <p className="theme-dial-hint">
                  Drag to rotate · Click to select
                </p>
              </div>

              <aside className="theme-dial-detail" data-theme-preview={theme}>
                <p className="theme-dial-detail-label">{current.label}</p>
                <p className="theme-dial-detail-blurb">{current.blurb}</p>
                <ul>
                  <li>{current.tagline}</li>
                  <li>Same structure & CTAs</li>
                  <li>Tokens, type & atmosphere only</li>
                  <li>Saved for your next visit</li>
                </ul>
              </aside>
            </div>

            <div className="theme-dial-mobile">
              <p className="theme-dial-mobile-label">Pick a visual identity</p>
              <div className="theme-dial-mobile-grid">
                {SITE_THEMES.map((item) => (
                  <button
                    key={`sheet-${item.id}`}
                    type="button"
                    className={`theme-dial-chip ${item.id === theme ? "is-active" : ""}`}
                    onClick={() => selectTheme(item.id)}
                  >
                    <ThemeIcon icon={item.icon} className="h-4 w-4" />
                    <span>
                      <strong>{item.label}</strong>
                      <small>{item.tagline}</small>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Header alias */
export function ThemeRosette() {
  return <ThemeDial />;
}
