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
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const close = () => {
    setOpen(false);
    window.requestAnimationFrame(() => buttonRef.current?.focus());
  };

  useEffect(() => {
    if (!open) return;
    const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>('a');
    window.requestAnimationFrame(() => firstLink?.focus());
  }, [open]);

  const handlePanelKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }

    if (event.key !== 'Tab' || !panelRef.current) return;
    const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>('button, a'));
    const first = focusable[0];
    const last = focusable.at(-1);
    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="mobile-navigation">
      <button
        ref={buttonRef}
        className="mobile-nav-toggle"
        type="button"
        aria-label={open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {open && (
        <>
          <button className="mobile-drawer-backdrop" type="button" aria-label="Fechar menu" onClick={close} />
          <div ref={panelRef} id={panelId} className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Navegação principal" onKeyDown={handlePanelKeyDown}>
            <div className="mobile-nav-panel-head">
              <span>Navegação</span>
              <button className="mobile-nav-close" type="button" aria-label="Fechar menu" onClick={close}><X size={22} aria-hidden="true" /></button>
            </div>
            <nav aria-label="Navegação móvel">
              {links.map(({ href, label }) => {
                const destination = label === 'Início' ? homeHref : href;
                const isCurrent = currentPath === href || (currentPath === '/' && label === 'Início');
                return <a key={label} href={destination} aria-current={isCurrent ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>;
              })}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
