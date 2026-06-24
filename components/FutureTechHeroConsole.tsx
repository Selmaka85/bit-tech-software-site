"use client";

import { siteConfig } from "@/lib/site-data";
import { useFutureTech } from "./future-tech-context";

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
        <span className="ft-prompt">{siteConfig.email}</span>: future-tech
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
