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
  return <div className="intro-reveal" aria-label="Dr. Ruan Reis, Cirurgião Vascular"><div className="intro-rule"/><div className="intro-content"><img src="/logo.png" alt=""/><p>Dr. Ruan Reis</p><span>Cirurgia vascular</span><strong>Precisão para cuidar do que te move.</strong></div><div className="intro-rule intro-rule-bottom"/></div>;
}
