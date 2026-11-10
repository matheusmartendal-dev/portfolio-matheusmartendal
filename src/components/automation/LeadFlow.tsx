import React from 'react';
import { Inbox, Copy, Sparkles, UserCheck, MessageCircle, BarChart3, Filter, BookOpen, Table2, BellRing, Info } from 'lucide-react';
import type { FlowStage, StageIcon } from '../../data/assistenteVendas';

const ICONS: Record<StageIcon, typeof Inbox> = {
  inbox: Inbox,
  copy: Copy,
  sparkles: Sparkles,
  'user-check': UserCheck,
  message: MessageCircle,
  filter: Filter,
  book: BookOpen,
  table: Table2,
  bell: BellRing,
};

/** Fluxo simplificado: horizontal no desktop, linha do tempo vertical no celular. */
export default function LeadFlow({ stages, extra, extraIcon = 'chart' }: { stages: FlowStage[]; extra: string; extraIcon?: 'chart' | 'info' }) {
  const ExtraIcon = extraIcon === 'info' ? Info : BarChart3;
  return (
    <div className="premium-card rounded-[28px] border border-[#e7dccf] dark:border-white/10 bg-white/80 dark:bg-white/[0.035] p-6 sm:p-8 backdrop-blur">
      <ol className="grid grid-cols-1 lg:grid-cols-5">
        {stages.map((stage, i) => {
          const Icon = ICONS[stage.icon];
          const isLast = i === stages.length - 1;
          return (
            <li key={stage.id} className="relative grid grid-cols-[44px_1fr] gap-x-4 pb-7 last:pb-0 lg:flex lg:flex-col lg:gap-0 lg:pb-0 lg:pr-5">
              {!isLast && (
                <>
                  <span aria-hidden className="lg:hidden absolute left-[21px] top-12 bottom-1 w-px bg-orange-500/35" />
                  <span aria-hidden className="hidden lg:block absolute left-[52px] right-2 top-[21px] h-px bg-orange-500/35" />
                </>
              )}
              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4eadc] dark:bg-black/40 border border-[#e7dccf] dark:border-white/15 text-orange-500">
                <Icon className="w-5 h-5" />
              </span>
              <div className="lg:mt-4">
                <span className="block text-[11px] font-mono font-bold tracking-widest text-teal-600 dark:text-teal-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-1 text-lg font-display font-medium tracking-tight text-[#102321] dark:text-white">{stage.title}</h4>
                <p className="mt-1 micro-copy text-[14px] leading-relaxed">{stage.text}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-8 pt-6 border-t border-[#e7dccf] dark:border-white/10 flex items-start gap-2.5 micro-copy text-[14px]">
        <ExtraIcon className="w-4 h-4 mt-0.5 shrink-0 text-orange-500" />
        {extra}
      </p>
    </div>
  );
}
