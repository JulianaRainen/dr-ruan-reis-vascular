'use client';

import { useEffect } from 'react';

export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    reveals.forEach((section) => {
      if (section.classList.contains('is-visible')) return;
      const items = Array.from(section.querySelectorAll<HTMLElement>('p, h2, h3, .text-link, .button, li'))
        .filter((item) => !item.closest('.scroll-reveal') || item.closest('.scroll-reveal') === section);
      items.forEach((item, index) => {
        item.classList.add('reveal-child');
        item.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
      });
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting));
    }, { threshold: 0.16 });
    reveals.forEach((element) => observer.observe(element));

    const portrait = document.querySelector<HTMLElement>('[data-portrait]');
    let frame = 0;
    const update = () => {
      frame = 0;
      if (portrait) {
        const offset = Math.max(-18, Math.min(18, window.scrollY * -0.028));
        portrait.style.setProperty('--portrait-shift', `${offset}px`);
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return null;
}
