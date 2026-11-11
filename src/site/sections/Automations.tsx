import React, { useRef } from 'react';
import { Split, useInView } from '../motion';
import { LiveThumb } from './Work';
import type { Content } from '../content';

const base = import.meta.env.BASE_URL;
export const VIDEO_SRC = `${base}videos/assistente-vendas-ia.mp4`;
export const VIDEO_POSTER = `${base}videos/assistente-vendas-ia-poster.jpg`;
export const DEMO_SRC = `${base}demos/chatbot-cs-nola/index.html`;

function AutoCard({ item, onOpen, view }: { item: Content['automations']['items'][number]; onOpen: () => void; view: string }) {
  const ref = useInView<HTMLAnchorElement>(0.15);
  const vid = useRef<HTMLVideoElement>(null);
  return (
    <a
      ref={ref}
      href="#/automacoes-ia"
      onClick={(e) => { e.preventDefault(); onOpen(); }}
      onMouseEnter={() => vid.current?.play().catch(() => {})}
      onMouseLeave={() => vid.current?.pause()}
      className="proj fade-up"
    >
      <div className="proj-media aspect-[16/10]">
        {item.media === 'video' ? (
          <video ref={vid} src={VIDEO_SRC} poster={VIDEO_POSTER} muted loop playsInline preload="none" aria-hidden="true" />
        ) : (
          <LiveThumb src={DEMO_SRC} virtualWidth={1240} title={item.title} />
        )}
        <div className="pixel-hover" />
        <div className="proj-tags">{item.tags.map((t) => <span key={t}>{t}</span>)}</div>
      </div>
      <div className="flex justify-between items-start gap-6 pt-5">
        <div className="space-y-3 max-w-[38ch]">
          <h3 className="f-display text-[22px] md:text-[1.67vw] leading-tight"><Split text={item.title} /></h3>
          <p className="f-mono uppercase text-[11px] md:text-[0.83vw] leading-[1.6] text-[var(--c-grey)]">{item.desc}</p>
        </div>
        <span className="proj-cta shrink-0 pt-2"><i aria-hidden="true" /> {view}</span>
      </div>
    </a>
  );
}

export default function Automations({ c, onOpen }: { c: Content; onOpen: () => void }) {
  return (
    <section id="automacoes" className="gutter pt-[12vh] pb-[16vh]">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-[8vh]">
        <div className="space-y-4">
          <Split as="h2" text={c.automations.title} className="f-display text-[11vw] md:text-[4.44vw] leading-[1.05]" />
          <p className="f-mono text-[13px] md:text-[1.1vw] text-[var(--c-grey)]">{c.automations.sub}</p>
        </div>
        <a href="#/automacoes-ia" onClick={(e) => { e.preventDefault(); onOpen(); }} className="u-link">{c.automations.open}</a>
      </div>
      <div className="proj-grid grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[10vh]">
        {c.automations.items.map((it, i) => (
          <div key={it.id} className={i === 1 ? 'md:mt-[16vh]' : ''}>
            <AutoCard item={it} onOpen={onOpen} view={c.work.view} />
          </div>
        ))}
      </div>
    </section>
  );
}
