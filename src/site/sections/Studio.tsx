import React from 'react';
import { Lines, ScrubText, Split, useInView } from '../motion';
import type { Content } from '../content';

/** Frase de posicionamento + CTA (como o "We intentionally limit..." da referência). */
export function Statement({ c, onContact }: { c: Content; onContact: () => void }) {
  return (
    <section className="gutter py-[16vh] grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
      <div className="md:col-span-8">
        <Lines lines={c.statement.text} className="f-display text-[6.4vw] md:text-[2.2vw] leading-[1.3] text-[var(--c-smoke)]" />
      </div>
      <div className="md:col-span-3 md:col-start-10 md:text-right">
        <a href="#contato" onClick={(e) => { e.preventDefault(); onContact(); }} className="u-link">{c.statement.cta}</a>
      </div>
    </section>
  );
}

/** Lista numerada "Onde eu contribuo". */
export function Services({ c }: { c: Content }) {
  const ref = useInView<HTMLUListElement>(0.2);
  return (
    <section className="gutter py-[14vh] grid grid-cols-1 md:grid-cols-12 gap-10">
      <h2 className="md:col-span-4 f-display text-[11vw] md:text-[3.2vw] leading-[1.1]">
        <Split text={c.services.title[0]} />
        <br />
        <Split text={c.services.title[1]} />
      </h2>
      <ul ref={ref} className="md:col-span-7 md:col-start-6 border-t border-[var(--c-line)] fade-up">
        {c.services.items.map((s, i) => (
          <li key={s} className="svc-row f-mono text-[13px] md:text-[1.1vw]">
            <span>{s}</span>
            <span className="text-[11px] md:text-[0.76vw]">0{i + 1}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Frase que acende com o scroll, com a arte ao lado (como o bloco da pedra na referência). */
export function Process({ c, image }: { c: Content; image: string }) {
  const ref = useInView<HTMLDivElement>(0.1);
  return (
    <section className="relative min-h-[120vh] flex items-end overflow-hidden">
      <div ref={ref} className="fade-up absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute right-[-12vw] top-[8vh] w-[95vw] md:w-[78vw] max-w-none opacity-90"
          style={{ objectPosition: 'center', maskImage: 'radial-gradient(closest-side, black 55%, transparent)', WebkitMaskImage: 'radial-gradient(closest-side, black 55%, transparent)' }}
          loading="lazy"
        />
      </div>
      <div className="gutter relative pb-[16vh] w-full">
        <ScrubText text={c.process} className="f-display text-[8vw] md:text-[2.9vw] leading-[1.15] max-w-[22ch]" />
      </div>
    </section>
  );
}
