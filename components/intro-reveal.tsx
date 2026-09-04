'use client';

import { useEffect, useState } from 'react';

export function IntroReveal() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeout = window.setTimeout(() => setVisible(false), reduced ? 350 : 2350);
    return () => window.clearTimeout(timeout);
  }, []);
  if (!visible) return null;
  return (
    <div className="intro-reveal" aria-label="Dr. Ruan Reis, Cirurgião Vascular">
      <div className="intro-rule" />
      <div className="intro-content intro-content-logo-only">
        <img src="/logo.png" alt="Dr. Ruan Reis, Cirurgião Vascular" />
        <p>Devolvendo sua saúde e leveza para suas pernas.</p>
      </div>
      <div className="intro-rule intro-rule-bottom" />
    </div>
  );
}
