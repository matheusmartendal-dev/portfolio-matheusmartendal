import React from 'react';
import PageIntro from '../components/PageIntro';
import LeadFlow from '../components/automation/LeadFlow';
import { ExternalLink, MousePointerClick } from 'lucide-react';
import { getAssistenteVendas } from '../data/assistenteVendas';
import { getChatbotSuporte } from '../data/chatbotSuporte';

interface AutomacoesIAProps {
  lang: 'pt' | 'en';
  onBack: () => void;
}

const base = import.meta.env.BASE_URL;
const VIDEO_SRC = `${base}videos/assistente-vendas-ia.mp4`;
const VIDEO_POSTER = `${base}videos/assistente-vendas-ia-poster.jpg`;
const DEMO_SRC = `${base}demos/chatbot-cs-nola/index.html`;

function CaseHeader({ index, title, tagline, stack }: { index: string; title: string; tagline: string; stack: string[] }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <SectionTitle index={index} eyebrow="[Case]" title={title} />
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[#e6d8c9] dark:border-white/10 bg-white/80 dark:bg-white/[0.045] px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <p className="copy-text max-w-2xl">{tagline}</p>
    </>
  );
}

function FlowHeading({ label }: { label: string }) {
  return (
    <h4 className="pt-4 flex items-center gap-3 text-xl md:text-2xl font-display font-medium tracking-tight text-[#102321] dark:text-white">
      <span className="h-px w-8 bg-orange-500" />
      {label}
    </h4>
  );
}

function SectionTitle({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2 text-teal-500 dark:text-teal-300 font-mono tracking-widest text-[11px] font-bold">
        <span>{index}</span>
        <span className="h-px w-8 bg-orange-500"></span>
        <span className="text-black dark:text-white uppercase font-bold text-xs">{eyebrow}</span>
      </div>
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-normal text-black dark:text-white tracking-tight leading-[1.08] mt-1">
        {title}
      </h3>
    </div>
  );
}

export default function AutomacoesIA({ lang, onBack }: AutomacoesIAProps) {
  const isPt = lang === 'pt';
  const whatsappIcon = new URL('../assets/whatsapp-icon.svg', import.meta.url).href;
  const vendas = getAssistenteVendas(isPt);
  const chatbot = getChatbotSuporte(isPt);
  const howItWorks = isPt ? 'Como funciona' : 'How it works';

  return (
    <div className="flex flex-col space-y-16 md:space-y-24">
      <PageIntro
        lang={lang}
        onBack={onBack}
        eyebrow={isPt ? '[Portfólio · Automações IA]' : '[Portfolio · AI Automations]'}
        title={isPt ? 'Automações IA' : 'AI Automations'}
        description={isPt
          ? 'Fluxos com inteligência artificial que fazem o trabalho repetitivo pela sua equipe.'
          : 'AI-powered flows that handle repetitive work for your team.'}
        count={2}
        countLabel={isPt ? 'projetos' : 'projects'}
      />

      {/* CASE 01 — Assistente de Vendas IA */}
      <section className="space-y-6 text-left">
        <CaseHeader index="01." title={vendas.title} tagline={vendas.tagline} stack={vendas.stack} />
        <div className="premium-card relative overflow-hidden rounded-[22px] md:rounded-[30px] border border-[#e7dccf] dark:border-white/10 bg-black aspect-video">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={VIDEO_SRC}
            poster={VIDEO_POSTER}
            controls
            playsInline
            preload="metadata"
          />
        </div>
        <FlowHeading label={howItWorks} />
        <LeadFlow stages={vendas.stages} extra={vendas.extra} />
      </section>

      {/* CASE 02 — Chatbot de Suporte */}
      <section className="space-y-6 text-left pt-16 md:pt-24 border-t border-[#e7dccf] dark:border-white/10">
        <CaseHeader index="02." title={chatbot.title} tagline={chatbot.tagline} stack={chatbot.stack} />

        <div className="premium-card overflow-hidden rounded-[22px] md:rounded-[30px] border border-[#e7dccf] dark:border-white/10 bg-[#f4f2ee]">
          {/* Browser bar */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#102321] text-white/80">
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              </span>
              <span className="flex items-center gap-1.5 truncate text-[11px] font-mono uppercase tracking-widest">
                <MousePointerClick className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                {isPt ? 'Demo interativa' : 'Interactive demo'}
              </span>
            </div>
            <a
              href={DEMO_SRC}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 shrink-0 text-[11px] font-mono uppercase tracking-widest hover:text-orange-400 transition-colors"
            >
              {isPt ? 'Tela cheia' : 'Full screen'} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Demo completa (index.html do projeto), interativa em todas as telas */}
          <iframe
            src={DEMO_SRC}
            title={chatbot.title}
            loading="lazy"
            className="block w-full h-[680px] md:h-[760px] lg:h-[820px] border-0 bg-[#f4f2ee]"
          />
        </div>

        <FlowHeading label={howItWorks} />
        <LeadFlow stages={chatbot.stages} extra={chatbot.extra} extraIcon="info" />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden rounded-[28px] border border-orange-500/30 bg-white/60 dark:bg-white/[0.03] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-left">
        <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <h4 className="relative text-2xl md:text-3xl font-display font-medium text-[#102321] dark:text-white tracking-tight max-w-xl">
          {isPt ? 'Quer automatizar algo no seu negócio?' : 'Want to automate something in your business?'}
        </h4>
        <a
          href="https://wa.me/5548988025100"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group shrink-0 py-3 px-6 bg-orange-500 hover:bg-teal-300 text-white hover:text-[#102321] rounded-full text-xs font-sans font-medium transition-all shadow-lg shadow-black/25 inline-flex items-center gap-2 border border-white/15 cursor-pointer hover:scale-105 active:scale-98 duration-200 self-start md:self-center"
        >
          <img src={whatsappIcon} alt="" className="w-4 h-4 invert group-hover:invert-0" aria-hidden="true" />
          {isPt ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}
        </a>
      </section>
    </div>
  );
}
