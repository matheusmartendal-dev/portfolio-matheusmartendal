import React from 'react';
import { Lines, Wordmark } from '../motion';
import type { Content } from '../content';

export default function Hero({ c }: { c: Content }) {
  const h = c.hero;
  return (
    <section id="top" className="gutter relative min-h-[100svh] flex flex-col pt-[11vh] md:pt-[6.5vh] pb-[6vh]">
      {/* Wordmark gigante */}
      <Wordmark text="MARTENDAL" />

      <div className="flex-1 flex flex-col justify-end gap-10 md:gap-0 mt-[8vh]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-end">
          {/* Título */}
          <div className="md:col-span-7">
            <p className="f-mono text-[12px] md:text-[1.1vw] text-[var(--c-smoke)] mb-5 md:mb-[2.4vh]">{h.tag}</p>
            {/* Só o logo "mm"; o título fica apenas para leitores de tela e buscadores */}
            <h1 className="sr-only">{`Matheus Martendal — ${h.title}`}</h1>
            <img
              src={c.logo}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              decoding="async"
              className="hero-logo h-[24vw] md:h-[9.8vw] w-auto"
            />
          </div>

          {/* Texto mono à direita */}
          <div className="md:col-span-4 md:col-start-9 space-y-6">
            <Lines lines={h.intro} className="f-mono text-[6.4vw] md:text-[1.1vw] leading-[1.3] md:leading-[1.5] text-[var(--c-mist)]" />
            <Lines
              lines={[h.roles.join(' · ')]}
              className="f-mono uppercase text-[11px] md:text-[0.83vw] leading-[1.6] text-[var(--c-grey)]"
            />
          </div>
        </div>

        <div className="flex justify-between items-end mt-[7vh] f-mono uppercase text-[11px] md:text-[0.83vw] text-[var(--c-grey)]">
          <span className="animate-pulse">{h.scroll}</span>
          <span>{h.availability}</span>
        </div>
      </div>
    </section>
  );
}
