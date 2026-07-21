"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { useSiteTheme } from "@/components/ThemeEngine";

export function NocturneChallengePanel() {
  const { theme, setTheme } = useSiteTheme();
  const [announce, setAnnounce] = useState("");
  const liveRef = useRef<HTMLParagraphElement>(null);

  const exitNocturne = useCallback(() => {
    setTheme("core");
    setAnnounce("Nocturne theme deactivated");
    window.setTimeout(() => {
      if (liveRef.current) {
        liveRef.current.textContent = "Nocturne theme deactivated";
      }
    }, 0);
  }, [setTheme]);

  if (theme !== "nocturne") {
    return null;
  }

  return (
    <section
      className="section-shell py-8 sm:py-10"
      aria-labelledby="nocturne-challenge-heading"
    >
      <div
        className="
          relative isolate overflow-hidden
          rounded-[28px]
          border border-violet-400/35
          bg-[#070611]
          min-h-[380px]
          shadow-[0_0_80px_rgba(124,58,237,0.12)]
        "
      >
        <div
          className="pointer-events-none absolute inset-0 -z-30"
          aria-hidden="true"
        >
          <Image
            src="/nocturne/nocturne-castle.webp"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover object-[58%_center] select-none"
            priority={false}
          />
        </div>

        <div
          className="
            absolute inset-0 -z-20
            bg-gradient-to-r
            from-[#05040b]
            via-[#080611]/90
            to-[#090616]/45
          "
          aria-hidden="true"
        />

        <div
          className="
            absolute inset-0 -z-10
            bg-gradient-to-t
            from-black/70
            via-transparent
            to-violet-950/10
          "
          aria-hidden="true"
        />

        <div
          className="
            nocturne-moon-glow pointer-events-none absolute
            right-[18%] top-[10%] -z-10
            h-64 w-64 rounded-full
            bg-violet-500/15 blur-[100px]
          "
          aria-hidden="true"
        />

        <div
          className="nocturne-panel-fog pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/5"
          aria-hidden="true"
        />

        <div
          className="nocturne-panel-grid pointer-events-none absolute inset-0 opacity-[0.12]"
          aria-hidden="true"
        />

        <span className="nocturne-corner nocturne-corner-tl" aria-hidden="true" />
        <span className="nocturne-corner nocturne-corner-tr" aria-hidden="true" />
        <span className="nocturne-corner nocturne-corner-bl" aria-hidden="true" />
        <span className="nocturne-corner nocturne-corner-br" aria-hidden="true" />

        <div
          className="
            relative z-10 grid min-h-[380px]
            grid-cols-1 items-center gap-10
            px-7 py-10
            md:grid-cols-[1.2fr_0.8fr]
            md:px-12 md:py-14
            lg:px-16
          "
        >
          <div className="max-w-2xl border-l border-violet-400/40 pl-5 sm:pl-6">
            <p
              className="
                mb-5 text-xs font-medium uppercase
                tracking-[0.32em] text-violet-300
              "
            >
              Design Modes · Nocturne
            </p>

            <h2
              id="nocturne-challenge-heading"
              className="
                font-nocturne text-4xl leading-[0.98] font-semibold
                text-[#f3eee7]
                sm:text-5xl lg:text-6xl
              "
            >
              No courage?{" "}
              <span
                className="
                  bg-gradient-to-r from-violet-400 to-purple-500
                  bg-clip-text text-transparent
                "
              >
                You&apos;re in.
              </span>
            </h2>

            <p
              className="
                mt-6 max-w-xl text-base leading-7
                text-zinc-300/90 sm:text-lg
              "
            >
              Crimson Nocturne is active — same product, darker world. Exit
              anytime.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <button
              type="button"
              onClick={exitNocturne}
              aria-pressed="true"
              className="
                group inline-flex min-h-14 items-center gap-7
                rounded-xl
                border border-violet-300/60
                bg-gradient-to-r from-violet-600/90 to-purple-700/90
                px-8 py-4
                text-base font-semibold text-white
                shadow-[0_0_30px_rgba(139,92,246,0.28)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-violet-200
                hover:shadow-[0_0_45px_rgba(139,92,246,0.42)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-violet-300
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#070611]
              "
            >
              Exit Nocturne
              <span
                aria-hidden="true"
                className="
                  text-xl transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </button>

            <p
              className="
                mt-5 max-w-xs text-sm leading-6
                text-zinc-400 md:text-right
              "
            >
              Same product. Same structure.
              <br />
              Tap again to leave the dark.
            </p>
          </div>
        </div>

        <p
          ref={liveRef}
          className="sr-only"
          role="status"
          aria-live="polite"
        >
          {announce}
        </p>
      </div>
    </section>
  );
}
