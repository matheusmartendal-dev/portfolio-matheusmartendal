import React, { useEffect, useRef, useState } from 'react';
import { Split, useInView } from '../motion';
import type { CaseId, Content, Work as WorkItem } from '../content';

/** Site real renderizado em miniatura (iframe escalado, sem interação). */
export function LiveThumb({ src, virtualWidth, title }: { src: string; virtualWidth: number; title: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / virtualWidth));
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { rootMargin: '400px' });
    io.observe(el);
    return () => { ro.disconnect(); io.disconnect(); };
  }, [virtualWidth]);

  return (
    <div ref={box} className="absolute inset-0 overflow-hidden">
      {visible && scale > 0 && (
        <iframe
          src={src}
          title={title}
          tabIndex={-1}
          aria-hidden="true"
          loading="lazy"
          referrerPolicy="no-referrer"
          style={{
            width: `${virtualWidth}px`,
            height: `${100 / scale}%`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            pointerEvents: 'none',
            border: 0,
            position: 'absolute',
            inset: 0,
          }}
        />
      )}
      <div className="shield" />
    </div>
  );
}

function Card({ w, view, openLabel, variant, onCase }: { w: WorkItem; view: string; openLabel: string; variant: 'wide' | 'tall'; onCase: (id: CaseId) => void }) {
  const ref = useInView<HTMLAnchorElement>(0.15);
  const href = w.caseId ? `#case-${w.caseId}` : w.url ?? 'https://www.behance.net/matheusmartend';
  const linkProps = w.caseId
    ? { onClick: (e: React.MouseEvent) => { e.preventDefault(); onCase(w.caseId!); }, 'aria-haspopup': 'dialog' as const }
    : { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <a ref={ref} href={href} {...linkProps} className="proj fade-up group">
      <div className={`proj-media ${variant === 'wide' ? 'aspect-[16/11]' : 'aspect-[3/4]'}`}>
        {w.cover ? (
          <img src={w.cover} alt={`Mockup do site ${w.title}`} loading="lazy" decoding="async" style={{ objectPosition: w.coverPos ?? '50% 50%' }} />
        ) : w.url ? (
          <LiveThumb src={w.url} virtualWidth={variant === 'wide' ? 1440 : 390} title={w.title} />
        ) : (
          <img src={w.image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" className="object-top" />
        )}
        <div className="pixel-hover" />
        <div className="proj-tags">
          {w.tags.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
      <div className="flex justify-between items-start gap-6 pt-5">
        <div className="space-y-3 max-w-[34ch]">
          <h3 className="f-display text-[22px] md:text-[1.67vw] leading-tight">
            <Split text={w.title} />
          </h3>
          <p className="f-mono uppercase text-[11px] md:text-[0.83vw] leading-[1.6] text-[var(--c-grey)]">{w.desc}</p>
        </div>
        <span className="proj-cta shrink-0 pt-2"><i aria-hidden="true" /> {w.caseId ? openLabel : view}</span>
      </div>
    </a>
  );
}

export default function Work({ c, onCase }: { c: Content; onCase: (id: CaseId) => void }) {
  const items = c.work.items;
  // pares: grande à esquerda + vertical deslocado à direita, depois invertido
  const rows: [WorkItem, WorkItem | undefined][] = [];
  for (let i = 0; i < items.length; i += 2) rows.push([items[i], items[i + 1]]);

  return (
    <section id="trabalhos" className="gutter pt-[15vh] pb-[12vh]">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-[9vh]">
        <Split as="h2" text={c.work.title} className="f-display text-[11vw] md:text-[4.44vw] leading-[1.05] max-w-[10ch]" />
        <a href="https://www.behance.net/matheusmartend" target="_blank" rel="noopener noreferrer" className="u-link">
          {c.work.all}
        </a>
      </div>

      <div className="proj-grid space-y-[14vh]">
        {rows.map(([a, b], i) => {
          const flip = i % 2 === 1;
          return (
            <div key={a.id} className="grid grid-cols-1 md:grid-cols-12 gap-y-[10vh] md:gap-x-6">
              <div className={`md:col-span-7 ${flip ? 'md:col-start-6 md:order-2' : ''}`}>
                <Card w={a} view={c.work.view} openLabel={c.caseUi.open} variant="wide" onCase={onCase} />
              </div>
              {b && (
                <div className={`md:col-span-4 ${flip ? 'md:col-start-1 md:order-1 md:mt-[22vh]' : 'md:col-start-9 md:mt-[22vh]'}`}>
                  <Card w={b} view={c.work.view} openLabel={c.caseUi.open} variant="tall" onCase={onCase} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
