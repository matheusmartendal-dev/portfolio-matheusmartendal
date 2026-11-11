import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Bracket } from '../motion';
import type { CaseStudy, Content } from '../content';

/** Site real dentro de uma moldura, interativo (o visitante rola dentro da tela). */
function LiveFrame({ src, virtualWidth, title }: { src: string; virtualWidth: number; title: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / virtualWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, [virtualWidth]);
  return (
    <div ref={box} className="absolute inset-0 overflow-hidden">
      {scale > 0 && (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer"
          style={{
            width: `${virtualWidth}px`,
            height: `${100 / scale}%`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            border: 0,
            position: 'absolute',
            inset: 0,
          }}
        />
      )}
    </div>
  );
}

export default function CaseModal({ data, c, onClose }: { data: CaseStudy | null; c: Content; onClose: () => void }) {
  const [shown, setShown] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const ui = c.caseUi;

  useEffect(() => {
    if (!data) return;
    lastFocus.current = document.activeElement as HTMLElement;
    panel.current?.scrollTo(0, 0);
    document.documentElement.style.overflow = 'hidden';
    const raf = requestAnimationFrame(() => setShown(true));
    const t = window.setTimeout(() => panel.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus(), 450);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab' && panel.current) {
        // mantém o foco dentro do modal
        const f = Array.from(panel.current.querySelectorAll('a[href],button,iframe,[tabindex]:not([tabindex="-1"])')) as HTMLElement[];
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const close = () => {
    setShown(false);
    window.setTimeout(() => {
      onClose();
      lastFocus.current?.focus();
    }, 550);
  };

  if (!data) return null;

  return createPortal(
    <div
      className={`case-modal ${shown ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
    >
      <div ref={panel} className="case-panel v2" onClick={(e) => e.stopPropagation()}>
        {/* Barra fixa */}
        <div className="case-bar gutter">
          <span className="f-mono uppercase text-[11px] md:text-[0.83vw] text-[var(--c-grey)]">
            {data.index} {data.client}
          </span>
          <Bracket label={ui.close} onClick={close} className="" />
          <button type="button" data-autofocus onClick={close} className="sr-only">{ui.close}</button>
        </div>

        <div className="case-body">
          {/* Título */}
          <header className="gutter pt-[10vh] pb-[7vh] grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <h2 id="case-title" className="md:col-span-8 f-display text-[11vw] md:text-[5.2vw] leading-[1.02] tracking-[-0.01em] case-rise">
              {data.title}
            </h2>
            <dl className="md:col-span-4 grid grid-cols-2 gap-x-6 gap-y-5 f-mono uppercase text-[11px] md:text-[0.83vw] case-rise" style={{ ['--d' as any]: '120ms' }}>
              <div><dt className="text-[var(--c-grey)] mb-1">{ui.client}</dt><dd>{data.client}</dd></div>
              <div><dt className="text-[var(--c-grey)] mb-1">{ui.place}</dt><dd>{data.year}</dd></div>
              <div className="col-span-2"><dt className="text-[var(--c-grey)] mb-1">{ui.role}</dt><dd>{data.role}</dd></div>
            </dl>
          </header>

          {/* Mockup principal */}
          <div className="gutter case-rise" style={{ ['--d' as any]: '220ms' }}>
            <div className="relative overflow-hidden bg-black">
              <img src={data.cover} alt={`Mockup do site ${data.title}`} className="w-full h-auto block" decoding="async" />
              <div className="proj-tags">{data.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </div>

          {/* Contexto */}
          <section className="gutter py-[12vh] grid grid-cols-1 md:grid-cols-12 gap-8">
            <p className="md:col-span-9 f-display text-[6.2vw] md:text-[2.2vw] leading-[1.3] text-[var(--c-smoke)]">{data.intro}</p>
          </section>

          {/* Números */}
          <section className="gutter pb-[12vh]">
            <span className="f-mono uppercase text-[12px] md:text-[0.97vw] text-[var(--c-grey)] block mb-6">{ui.results}</span>
            <div className={`grid grid-cols-2 border-t border-[var(--c-line)] ${data.metrics.length === 4 ? 'md:grid-cols-4' : data.metrics.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
              {data.metrics.map(([v, l], i) => (
                <div key={v} className={`py-8 pr-6 ${i > 0 ? 'md:border-l md:pl-6' : ''} ${i % 2 === 1 ? 'border-l pl-6 md:pl-6' : ''} border-[var(--c-line)] border-b md:border-b-0`}>
                  <div className={`f-display leading-none tracking-[-0.02em] ${v.length > 6 ? 'text-[8vw] md:text-[2.8vw]' : 'text-[13vw] md:text-[5.2vw]'}`}>{v}</div>
                  <p className="f-mono uppercase text-[11px] md:text-[0.83vw] leading-[1.5] text-[var(--c-grey)] mt-4 max-w-[22ch]">{l}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mockups interativos: web + smartphone (site no ar) ou página completa rolável */}
          <section className="gutter pb-[12vh]">
            <div className="flex justify-between items-center gap-4 pb-4 border-b border-[var(--c-line)] mb-6 f-mono uppercase text-[11px] md:text-[0.83vw] text-[var(--c-grey)]">
              <span>{data.liveUrl ? ui.liveLabel : ui.shotLabel}</span>
              {data.liveUrl ? (
                <Bracket label={ui.live} href={data.liveUrl} external />
              ) : data.behanceUrl ? (
                <Bracket label={ui.behance} href={data.behanceUrl} external />
              ) : null}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className={data.liveUrl ? 'md:col-span-9' : 'md:col-span-12'}>
                <div className="bg-[#1a1a1a]">
                  <div className="flex items-center gap-1.5 px-3 h-7 border-b border-[var(--c-line)]">
                    <i className="w-2 h-2 bg-[var(--c-graphite)]" /><i className="w-2 h-2 bg-[var(--c-graphite)]" /><i className="w-2 h-2 bg-[var(--c-graphite)]" />
                    <span className="f-mono text-[10px] text-[var(--c-grey)] ml-3 truncate">
                      {data.liveUrl ? data.liveUrl.replace('https://', '') : data.title}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10]">
                    {data.liveUrl ? (
                      <LiveFrame src={data.liveUrl} virtualWidth={1440} title={`${data.title} — desktop`} />
                    ) : (
                      <div className="absolute inset-0 overflow-y-auto overscroll-contain" tabIndex={0} aria-label={`${data.title} — página completa`}>
                        <img src={data.screenshot} alt={`Página completa do site ${data.title}`} className="w-full h-auto block" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {data.liveUrl && (
                <div className="md:col-span-3 max-w-[300px] w-full mx-auto">
                  <div className="bg-[#1a1a1a] p-2">
                    <div className="relative aspect-[9/19.5]">
                      <LiveFrame src={data.liveUrl} virtualWidth={390} title={`${data.title} — smartphone`} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Mockups extras */}
          {data.gallery?.map((g) => (
            <div key={g} className="gutter pb-[12vh]">
              <img src={g} alt={`Mockup do site ${data.title}`} className="w-full h-auto block" loading="lazy" decoding="async" />
            </div>
          ))}

          {/* Textos */}
          <section className="gutter pb-[14vh] space-y-[9vh]">
            {data.sections.map((s) => (
              <div key={s.label} className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-[var(--c-line)] pt-8">
                <h3 className="md:col-span-4 f-mono uppercase text-[12px] md:text-[0.97vw] text-[var(--c-grey)]">{s.label}</h3>
                <div className="md:col-span-7 md:col-start-6 space-y-5">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)} className="f-display text-[16px] md:text-[1.25vw] leading-[1.6] text-[var(--c-mist)]">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Rodapé do case */}
          <div className="gutter pb-10 flex flex-wrap justify-between items-center gap-6 border-t border-[var(--c-line)] pt-8">
            <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className="u-link">{ui.live}</a>
            <Bracket label={ui.close} onClick={close} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
