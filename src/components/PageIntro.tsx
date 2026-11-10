import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PageIntroProps {
  lang: 'pt' | 'en';
  onBack: () => void;
  eyebrow: string;
  title: string;
  description: string;
  count?: number;
  countLabel?: string;
}

/** Cabeçalho padrão das páginas dedicadas de portfólio (Landing Pages / Automações IA). */
export default function PageIntro({ lang, onBack, eyebrow, title, description, count, countLabel }: PageIntroProps) {
  const isPt = lang === 'pt';

  return (
    <section className="hero-grid-surface relative overflow-hidden rounded-[30px] md:rounded-[38px] border border-white/20 dark:border-white/10 px-5 md:px-10 pt-8 md:pt-10 pb-12 md:pb-14 text-left text-white shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/8 to-black/75 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-10 md:gap-16">
        <button
          onClick={onBack}
          className="group self-start py-2.5 px-5 bg-white/10 hover:bg-teal-300 text-white hover:text-[#102321] rounded-full text-xs font-sans font-medium transition-all shadow-lg shadow-black/25 inline-flex items-center gap-2 border border-white/15 cursor-pointer active:scale-98 duration-200 backdrop-blur"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          {isPt ? 'Voltar ao início' : 'Back to home'}
        </button>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 font-mono tracking-widest text-[11px] font-bold">
              <span className="h-px w-8 bg-orange-500"></span>
              <span className="uppercase text-white/80">{eyebrow}</span>
            </div>
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-7xl tracking-tight leading-[1.02] font-display font-normal">
              {title}
            </h1>
            <p className="font-copy text-base md:text-lg leading-relaxed text-white/80 max-w-2xl">
              {description}
            </p>
          </div>

          {typeof count === 'number' && (
            <div className="shrink-0 flex items-baseline gap-2 font-mono">
              <span className="text-5xl md:text-6xl font-normal tracking-tight">{String(count).padStart(2, '0')}</span>
              <span className="text-xs uppercase tracking-widest text-white/70">{countLabel}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
