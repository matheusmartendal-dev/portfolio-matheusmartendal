import React from 'react';
import { ArrowUpRight, LayoutTemplate, Workflow } from 'lucide-react';
import type { Route } from '../types';

interface PortfolioHubProps {
  lang: 'pt' | 'en';
  darkMode: boolean;
  onNavigate: (route: Route) => void;
}

export default function PortfolioHub({ lang, darkMode, onNavigate }: PortfolioHubProps) {
  const isPt = lang === 'pt';

  const cards: {
    route: Route;
    index: string;
    title: string;
    description: string;
    tags: string[];
    meta: string;
    Icon: typeof LayoutTemplate;
    visual: 'pages' | 'flow';
  }[] = [
    {
      route: '/landing-pages',
      index: '01',
      title: 'Landing Pages',
      description: isPt
        ? 'Páginas de alta conversão para eventos, hackathons, inovação aberta e imobiliário premium.'
        : 'High-conversion pages for events, hackathons, open innovation and premium real estate.',
      tags: isPt ? ['UI/UX', 'Front-end', 'Conversão'] : ['UI/UX', 'Front-end', 'Conversion'],
      meta: isPt ? '05 projetos' : '05 projects',
      Icon: LayoutTemplate,
      visual: 'pages',
    },
    {
      route: '/automacoes-ia',
      index: '02',
      title: isPt ? 'Automações IA' : 'AI Automations',
      description: isPt
        ? 'Fluxos inteligentes e agentes de IA que eliminam tarefas repetitivas e conectam ferramentas do dia a dia.'
        : 'Smart workflows and AI agents that remove repetitive tasks and connect everyday tools.',
      tags: isPt ? ['Agentes IA', 'Workflows', 'Integrações'] : ['AI Agents', 'Workflows', 'Integrations'],
      meta: isPt ? '02 projetos' : '02 projects',
      Icon: Workflow,
      visual: 'flow',
    },
  ];

  return (
    <section id="portfolio" className="space-y-6 text-left pt-10">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 text-left">
        <div>
          <div className="flex items-center gap-3 mb-2 text-teal-500 dark:text-teal-300 font-mono tracking-widest text-[11px] font-bold">
            <span>03.</span>
            <span className="h-px w-8 bg-orange-500"></span>
            <span className="text-black dark:text-white uppercase font-bold text-xs">
              {isPt ? '[Portfólio]' : '[Portfolio]'}
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-normal text-black dark:text-white tracking-tight leading-[1.08] mt-1">
            {isPt ? 'Escolha uma área' : 'Choose an area'}
          </h3>
        </div>
        <span className="text-xs font-mono text-white bg-orange-500 px-3 py-1.5 rounded-full border border-white/20 select-none font-bold shadow-lg shadow-orange-500/20 self-start">
          {isPt ? '[Clique no card para abrir]' : '[Click a card to open]'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6">
        {cards.map(({ route, index, title, description, tags, meta, Icon, visual }) => (
          <button
            key={route}
            onClick={() => onNavigate(route)}
            className={`premium-card group relative text-left cursor-pointer rounded-[28px] border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 active:scale-99 ${
              darkMode
                ? 'bg-white/[0.045] hover:bg-white/[0.075] border-white/10 hover:border-orange-500/55'
                : 'bg-white/85 hover:bg-white border-[#e7dccf] hover:border-orange-500/45'
            }`}
          >
            {/* Visual preview */}
            <div className="hero-grid-surface relative h-[210px] md:h-[240px] overflow-hidden border-b border-[#e7dccf] dark:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/45 pointer-events-none" />
              {visual === 'pages' ? <PagesVisual /> : <FlowVisual />}
              <span className="absolute top-5 left-5 z-10 font-mono text-xs font-bold tracking-widest text-white/85">{index}</span>
              <span className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 border border-white/20 text-white backdrop-blur transition-all duration-300 group-hover:bg-orange-500 group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>

            {/* Copy */}
            <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f4eadc] dark:bg-black/35 border border-[#e7dccf] dark:border-white/10 text-orange-500">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h4 className="text-2xl md:text-[1.75rem] font-display font-medium text-[#102321] dark:text-white tracking-tight leading-tight">
                    {title}
                  </h4>
                </div>
                <span className="shrink-0 text-[11px] font-mono font-bold uppercase tracking-widest text-teal-600 dark:text-teal-300">
                  {meta}
                </span>
              </div>

              <p className="micro-copy text-[15px]">{description}</p>

              <div className="mt-auto flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#e6d8c9] dark:border-white/10 bg-white/80 dark:bg-white/[0.045] px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 transition-colors group-hover:border-orange-500/45 group-hover:text-teal-600 dark:group-hover:text-teal-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

/** Mini browser windows stacked — represents landing pages. */
function PagesVisual() {
  const frame = 'absolute rounded-xl border border-white/25 bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden transition-transform duration-500';
  const bar = (
    <div className="flex items-center gap-1 px-2.5 py-2 border-b border-white/15">
      <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
    </div>
  );
  return (
    <>
      <div className={`${frame} left-[14%] top-[30%] w-[52%] h-[78%] rotate-[-5deg] group-hover:-translate-y-1 group-hover:rotate-[-7deg]`}>
        {bar}
        <div className="p-3 space-y-2">
          <div className="h-2 w-2/3 rounded-full bg-white/45" />
          <div className="h-2 w-1/2 rounded-full bg-white/25" />
          <div className="h-5 w-1/3 rounded-full bg-orange-500/90 mt-3" />
        </div>
      </div>
      <div className={`${frame} right-[10%] top-[22%] w-[50%] h-[80%] rotate-[4deg] group-hover:-translate-y-2 group-hover:rotate-[6deg]`}>
        {bar}
        <div className="p-3 space-y-2">
          <div className="h-12 rounded-lg bg-gradient-to-br from-teal-300/60 to-orange-400/60" />
          <div className="h-2 w-3/4 rounded-full bg-white/40" />
          <div className="h-2 w-1/2 rounded-full bg-white/25" />
        </div>
      </div>
    </>
  );
}

/** Node graph — represents AI automation workflows. */
function FlowVisual() {
  const node = 'absolute flex items-center gap-1.5 rounded-xl border border-white/25 bg-white/12 backdrop-blur-md px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-xl transition-transform duration-500';
  return (
    <>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 240" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 88 120 C 140 120, 140 70, 190 70" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
        <path d="M 88 120 C 140 120, 140 170, 190 170" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
        <path d="M 250 70 C 290 70, 290 120, 320 120" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
        <path d="M 250 170 C 290 170, 290 120, 320 120" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      </svg>
      <div className={`${node} left-[6%] top-1/2 -translate-y-1/2 group-hover:scale-105`}>
        <span className="h-2 w-2 rounded-full bg-teal-300" /> Trigger
      </div>
      <div className={`${node} left-[46%] top-[22%] -translate-x-1/2 -translate-y-1/2 bg-orange-500/80 border-orange-300/50 group-hover:-translate-y-[60%]`}>
        <span className="h-2 w-2 rounded-full bg-white" /> AI Agent
      </div>
      <div className={`${node} left-[46%] top-[72%] -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[40%]`}>
        <span className="h-2 w-2 rounded-full bg-white/70" /> API
      </div>
      <div className={`${node} right-[5%] top-1/2 -translate-y-1/2 group-hover:scale-105`}>
        <span className="h-2 w-2 rounded-full bg-teal-300" /> Output
      </div>
    </>
  );
}
