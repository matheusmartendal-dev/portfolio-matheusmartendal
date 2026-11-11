import React from 'react';
import { Bracket, Split, useInView } from './motion';
import { DEMO_SRC, VIDEO_POSTER, VIDEO_SRC } from './sections/Automations';
import { getAssistenteVendas } from '../data/assistenteVendas';
import { getChatbotSuporte } from '../data/chatbotSuporte';
import type { Content, Lang } from './content';

function Steps({ steps }: { steps: { id: string; title: string; text: string }[] }) {
  const ref = useInView<HTMLOListElement>(0.15);
  return (
    <ol ref={ref} className="border-t border-[var(--c-line)] fade-up">
      {steps.map((s, i) => (
        <li key={s.id} className="svc-row items-start gap-6">
          <span className="f-mono text-[11px] md:text-[0.76vw] pt-1 w-8 shrink-0">0{i + 1}</span>
          <span className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
            <span className="f-display text-[18px] md:text-[1.4vw] text-[var(--c-smoke)] leading-snug">{s.title}</span>
            <span className="f-mono text-[12px] md:text-[0.9vw] leading-[1.6]">{s.text}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

function CaseBlock({
  index, title, tagline, stack, media, steps, extra, how,
}: {
  index: string; title: string; tagline: string; stack: string[]; media: React.ReactNode;
  steps: { id: string; title: string; text: string }[]; extra: string; how: string;
}) {
  return (
    <article className="gutter py-[12vh] border-t border-[var(--c-line)] first:border-t-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-[6vh] items-end">
        <div className="md:col-span-7">
          <span className="f-mono uppercase text-[12px] md:text-[0.97vw] text-[var(--c-grey)] block mb-5">{index}</span>
          <Split as="h2" text={title} className="f-display text-[11vw] md:text-[4.44vw] leading-[1.05]" />
        </div>
        <div className="md:col-span-4 md:col-start-9 space-y-5">
          <p className="f-mono text-[13px] md:text-[1.1vw] leading-[1.5] text-[var(--c-mist)]">{tagline}</p>
          <div className="proj-tags !static">{stack.map((s) => <span key={s}>{s}</span>)}</div>
        </div>
      </div>
      <div className="mb-[8vh]">{media}</div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <h3 className="md:col-span-4 f-display text-[8vw] md:text-[2.2vw] leading-tight">{how}</h3>
        <div className="md:col-span-7 md:col-start-6 space-y-6">
          <Steps steps={steps} />
          <p className="f-mono uppercase text-[11px] md:text-[0.76vw] leading-[1.6] text-[var(--c-grey)]">{extra}</p>
        </div>
      </div>
    </article>
  );
}

export default function AutomationsPage({ c, lang, onBack }: { c: Content; lang: Lang; onBack: () => void }) {
  const pt = lang === 'pt';
  const vendas = getAssistenteVendas(pt);
  const chatbot = getChatbotSuporte(pt);
  const how = pt ? 'Como funciona' : 'How it works';

  return (
    <main>
      <section className="gutter pt-[18vh] pb-[8vh]">
        <Bracket label={pt ? 'Voltar' : 'Back'} href="#" onClick={(e) => { e.preventDefault(); onBack(); }} />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-[8vh]">
          <Split as="h1" text={c.automations.title} className="md:col-span-8 f-display text-[13vw] md:text-[6.6vw] leading-[1] tracking-[-0.01em]" />
          <p className="md:col-span-4 md:col-start-9 f-mono text-[13px] md:text-[1.1vw] leading-[1.5] text-[var(--c-mist)]">{c.automations.sub}</p>
        </div>
      </section>

      <CaseBlock
        index="01/"
        title={vendas.title}
        tagline={vendas.tagline}
        stack={vendas.stack}
        how={how}
        steps={vendas.stages.map((s) => ({ id: s.id, title: s.title, text: s.text }))}
        extra={vendas.extra}
        media={
          <div className="relative aspect-video bg-black">
            <video className="absolute inset-0 w-full h-full object-cover" src={VIDEO_SRC} poster={VIDEO_POSTER} controls playsInline preload="metadata" />
          </div>
        }
      />

      <CaseBlock
        index="02/"
        title={chatbot.title}
        tagline={chatbot.tagline}
        stack={chatbot.stack}
        how={how}
        steps={chatbot.stages.map((s) => ({ id: s.id, title: s.title, text: s.text }))}
        extra={chatbot.extra}
        media={
          <div>
            <div className="flex justify-between items-center py-3 f-mono uppercase text-[11px] md:text-[0.76vw] text-[var(--c-grey)] border-b border-[var(--c-line)]">
              <span>{pt ? 'Demo interativa' : 'Interactive demo'}</span>
              <Bracket label={pt ? 'Tela cheia' : 'Full screen'} href={DEMO_SRC} external />
            </div>
            <iframe src={DEMO_SRC} title={chatbot.title} loading="lazy" className="block w-full h-[680px] md:h-[820px] border-0 bg-[#f4f2ee]" />
          </div>
        }
      />
    </main>
  );
}
