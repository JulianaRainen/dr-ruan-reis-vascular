'use client';

import { useEffect, useRef } from 'react';

export function ScrollText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add('text-is-visible'); observer.disconnect(); }
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const segmenter = new Intl.Segmenter('pt-BR', { granularity: 'grapheme' });
  let letterIndex = 0;
  return <span ref={ref} className="scroll-text" aria-label={text}>{text.split(' ').map((word, wordIndex) => <span className="scroll-word" aria-hidden="true" key={`${word}-${wordIndex}`}>{Array.from(segmenter.segment(word), ({ segment: letter }) => { const index = letterIndex++; return <span className="scroll-letter" key={`${letter}-${index}`} style={{ transitionDelay: `${index * 22}ms` }}>{letter}</span>; })}{wordIndex < text.split(' ').length - 1 ? '\u00a0' : ''}</span>)}</span>;
}
