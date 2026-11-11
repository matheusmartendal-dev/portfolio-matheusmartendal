import React, { useEffect, useState } from 'react';
import { Bracket } from '../motion';
import type { Content, Lang } from '../content';

interface Props {
  c: Content;
  lang: Lang;
  setLang: (l: Lang) => void;
  onNav: (id: string) => void;
  isHome: boolean;
}

export default function Header({ c, lang, setLang, onNav, isHome }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(!isHome);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setShowLogo(!isHome || y > window.innerHeight * 0.35);
      setHidden(y > last && y > window.innerHeight * 1.2);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    onNav(id);
  };

  return (
    <>
      <header className={`site-header gutter ${scrolled ? 'scrolled' : ''} ${hidden && !open ? 'hide' : ''} ${!showLogo ? 'at-top' : ''}`}>
        <a
          href="#"
          onClick={go('top')}
          className="f-display text-[18px] md:text-[1.45vw] tracking-[0.04em] leading-none transition-opacity duration-500"
          style={{ opacity: showLogo ? 1 : 0, pointerEvents: showLogo ? 'auto' : 'none' }}
          aria-label="Matheus Martendal — início"
        >
          MARTENDAL
        </a>

        <div className="flex items-center gap-[2.2vw]">
        <nav className="hidden md:flex items-center gap-[2.2vw]" aria-label="Principal">
          {c.nav.map((n) => (
            <Bracket key={n.id} label={n.label} href={`#${n.id}`} onClick={go(n.id)} />
          ))}
        </nav>

          <div className="lang-switch flex items-center gap-2 f-mono text-[12px] md:text-[0.97vw] leading-none" role="group" aria-label="Idioma / Language">
            {(['pt', 'en'] as Lang[]).map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span className="text-[var(--c-graphite)]" aria-hidden="true">/</span>}
                <button
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`uppercase ${lang === l ? 'text-[var(--c-smoke)]' : 'text-[var(--c-graphite)] hover:text-[var(--c-grey)]'}`}
                >
                  {l}
                </button>
              </React.Fragment>
            ))}
          </div>

          <div className="md:hidden">
            <Bracket label="Menu" onClick={() => setOpen(true)} />
          </div>
        </div>

      </header>

      {/* Menu mobile em tela cheia */}
      <div className={`menu-panel gutter py-7 ${open ? 'open' : ''}`} aria-hidden={!open} role="dialog" aria-label="Menu">
        <div className="flex justify-between items-center">
          <span className="f-display text-[18px] tracking-[0.04em]">MARTENDAL</span>
          <Bracket label={lang === 'pt' ? 'Fechar' : 'Close'} onClick={() => setOpen(false)} />
        </div>
        <nav className="flex flex-col gap-2">
          {c.nav.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={go(n.id)}
              className="f-display text-[13vw] leading-[1.05] tracking-[-0.02em] flex items-baseline gap-3"
              tabIndex={open ? 0 : -1}
            >
              <span className="f-mono text-[12px] text-[var(--c-grey)]">0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex justify-between items-center f-mono text-[12px] uppercase">
          <div className="flex gap-3">
            {(['pt', 'en'] as Lang[]).map((l) => (
              <button key={l} type="button" onClick={() => setLang(l)} aria-pressed={lang === l} tabIndex={open ? 0 : -1}
                className={lang === l ? 'text-[var(--c-smoke)]' : 'text-[var(--c-graphite)]'}>
                [ {l} ]
              </button>
            ))}
          </div>
          <span className="text-[var(--c-grey)]">Florianópolis, SC</span>
        </div>
      </div>
    </>
  );
}
