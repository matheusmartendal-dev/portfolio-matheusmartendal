import React from 'react';
import { Bracket, Lines, Split, Wordmark, useInView } from '../motion';
import type { Content } from '../content';

/** Sobre — seção oliva (#303930), como a faixa de depoimentos da referência. */
export function About({ c }: { c: Content }) {
  const ref = useInView<HTMLDivElement>(0.15);
  const a = c.about;
  return (
    <section id="sobre" className="bg-[var(--c-olive)] gutter pt-[16vh] pb-[14vh]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
        <div ref={ref} className="md:col-span-4 fade-up">
          <div className="relative aspect-[3/4] overflow-hidden bg-[var(--c-khaki)]">
            <img
              src={c.portrait}
              alt="Retrato de Matheus Martendal"
              className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-[1.05]"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="f-mono uppercase text-[11px] md:text-[0.76vw] text-[var(--c-grey)] mt-4 flex justify-between">
            <span>Matheus Martendal</span><span>Florianópolis, SC</span>
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6 flex flex-col">
          <span className="f-mono uppercase text-[12px] md:text-[0.97vw] text-[var(--c-grey)] mb-6">{a.label}</span>
          <Split as="h2" text={a.title} className="f-display text-[9vw] md:text-[3.2vw] leading-[1.15] max-w-[18ch] mb-[6vh]" />
          <div className="space-y-5 max-w-[60ch]">
            {a.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="f-display text-[16px] md:text-[1.2vw] leading-[1.6] text-[var(--c-mist)]">{p}</p>
            ))}
          </div>
          <div className="mt-auto pt-[8vh]">
            <span className="f-mono uppercase text-[12px] md:text-[0.97vw] text-[var(--c-grey)] block mb-4">{a.stackLabel}</span>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 f-mono uppercase text-[12px] md:text-[0.97vw] text-[var(--c-mist)]">
              {a.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Contato + rodapé com wordmark gigante. */
export function Footer({ c, onNav }: { c: Content; onNav: (id: string) => void }) {
  const f = c.footer;
  const go = (id: string) => (e: React.MouseEvent) => { e.preventDefault(); onNav(id); };
  return (
    <footer id="contato" className="relative">
      {/* Contato */}
      <div className="gutter pt-[18vh] pb-[14vh] grid grid-cols-1 md:grid-cols-12 gap-10 items-end border-b border-[var(--c-line)]">
        <Split as="h2" text={c.contact.title} className="md:col-span-8 f-display text-[12vw] md:text-[5.6vw] leading-[1.02] max-w-[12ch]" />
        <div className="md:col-span-4 flex flex-col md:items-end gap-5">
          <a href={`mailto:${c.contact.email}`} className="u-link normal-case">{c.contact.email}</a>
          <div className="flex gap-6">
            <Bracket label="E-mail" href={`mailto:${c.contact.email}`} />
            <Bracket label="WhatsApp" href={c.contact.whatsapp} external />
          </div>
        </div>
      </div>

      {/* Colunas */}
      <div className="gutter pt-[8vh] grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-6 f-mono uppercase text-[12px] md:text-[0.83vw]">
        <div className="md:col-span-3 space-y-4">
          <span className="text-[var(--c-grey)] block">{f.menu}</span>
          <div className="flex flex-col items-start gap-3">
            {c.nav.map((n) => <Bracket key={n.id} label={n.label} href={`#${n.id}`} onClick={go(n.id)} />)}
          </div>
        </div>
        <div className="md:col-span-3 space-y-4">
          <span className="text-[var(--c-grey)] block">{f.base}</span>
          <Lines lines={f.baseText} className="normal-case text-[var(--c-mist)] leading-[1.6]" />
        </div>
        <div className="md:col-span-3 space-y-4">
          <span className="text-[var(--c-grey)] block">{f.contact}</span>
          <a href={`mailto:${c.contact.email}`} className="normal-case text-[var(--c-mist)] hover:text-[var(--c-smoke)] break-all">{c.contact.email}</a>
        </div>
        <div className="md:col-span-3 space-y-4">
          <span className="text-[var(--c-grey)] block">{f.socials}</span>
          <div className="flex flex-col items-start gap-3">
            {c.socials.map((s) => <Bracket key={s.label} label={s.label} href={s.href} external />)}
          </div>
        </div>
      </div>

      {/* Wordmark */}
      <div className="gutter pt-[10vh] pb-[3vh]">
        <Wordmark text="MARTENDAL" />
      </div>
      <div className="gutter pb-6 flex flex-wrap justify-between gap-4 f-mono uppercase text-[11px] md:text-[0.76vw] text-[var(--c-grey)]">
        <span>{f.rights}</span>
        <button type="button" onClick={() => onNav('top')} className="hover:text-[var(--c-smoke)] transition-colors duration-100 cursor-pointer uppercase">
          {f.top} ↑
        </button>
      </div>
    </footer>
  );
}
