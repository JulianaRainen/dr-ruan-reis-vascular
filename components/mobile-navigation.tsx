'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

type MobileNavigationProps = {
  currentPath: string;
  homeHref?: string;
};

const links = [
  { href: '/', label: 'Início' },
  { href: '/o-medico', label: 'O médico' },
  { href: '/tratamentos', label: 'Tratamentos' },
  { href: '/r-veins', label: 'R-Veins' },
];

export function MobileNavigation({ currentPath, homeHref = '/' }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        ref={buttonRef}
        className="mobile-nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? 'Fechar menu' : 'Abrir menu'}</span>
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>
      <nav id={panelId} className="mobile-nav-panel" aria-label="Navegação móvel" hidden={!open}>
        {links.map(({ href, label }) => {
          const destination = label === 'Início' ? homeHref : href;
          const isCurrent = currentPath === href || (currentPath === '/' && label === 'Início');
          return (
            <a key={label} href={destination} aria-current={isCurrent ? 'page' : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
