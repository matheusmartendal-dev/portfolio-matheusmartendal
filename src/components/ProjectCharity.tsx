import React from 'react';
import { Globe, ArrowUpRight, Award, Shield, Users, Briefcase, Eye } from 'lucide-react';

interface ProjectCharityProps {
  lang: 'pt' | 'en';
}

export default function ProjectCharity({ lang }: ProjectCharityProps) {
  const isPt = lang === 'pt';

  return (
    <section id="project-charity" className="pt-24 border-t border-neutral-200/50 dark:border-neutral-800/20">
      {/* Grid Header */}
      <div className="mb-12 text-left">
        <div className="flex items-center gap-3 mb-2 text-teal-500 dark:text-teal-300 font-mono tracking-widest text-[11px] font-bold">
          <span>04.</span>
          <span className="h-px w-8 bg-orange-500"></span>
          <span className="text-black dark:text-white uppercase font-bold text-xs">
            [Portfólio]
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#102321] dark:text-white tracking-tight leading-[1.08] mt-1 mb-4">
          Evento Instituto Empresariar
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-sm">
            {isPt ? 'Consultoria Estratégica' : 'Strategic Advisory'}
          </span>
          <span className="text-xs font-mono px-3 py-1 bg-teal-100 dark:bg-teal-950/40 border border-orange-200/50 dark:border-orange-900/30 text-teal-700 dark:text-teal-400 rounded-sm">
            {isPt ? 'Governança & Sucessão' : 'Governance & Succession'}
          </span>
          <span className="text-xs font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-sm">
            {isPt ? 'Empresas Familiares' : 'Family Businesses'}
          </span>
          <span className="text-xs font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-sm">
            {isPt ? 'Conselho de Administração' : 'Board of Directors'}
          </span>
        </div>
        <p className="copy-text">
          {isPt ? (
            <>
              Minha contratação no <strong>Instituto Empresariar</strong> partiu de um contraste muito claro: Cícero Rocha já era um profissional extremamente forte em gerar resultados fora do digital, com autoridade, relacionamento e reputação no mercado, mas a presença online ainda não traduzia essa força.
            </>
          ) : (
            <>
              My work with <strong>Instituto Empresariar</strong> started from a clear contrast: Cícero Rocha was already highly effective at generating results outside digital channels, with authority, relationships, and market reputation, but the online presence did not yet translate that strength.
            </>
          )}
        </p>
        <p className="copy-text mt-3">
          {isPt ? (
            <>
              Fui chamado junto com outros integrantes para ajudar nessa virada: melhorar a percepção digital da marca, dar mais visibilidade às filhas e aos familiares que também atuavam na empresa, e ampliar o valor institucional do negócio para além da figura central do fundador.
            </>
          ) : (
            <>
              I was brought in alongside other team members to support that shift: improve the brand's digital perception, give more visibility to his daughters and family members working in the company, and expand the institutional value of the business beyond the founder's individual authority.
            </>
          )}
        </p>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5">
          <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.045] p-6 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-teal-600 dark:text-teal-300">
              {isPt ? 'Virada digital e produtos' : 'Digital shift and products'}
            </span>
            <p className="micro-copy text-[14.5px]">
              {isPt
                ? 'O resultado não veio de uma única ação isolada. Começamos pelo básico bem feito: pesquisa com a base, revisão da narrativa, melhoria do design, análise de tráfego em Meta e Google, leitura de comportamento no Google Analytics e Hotjar, além de ajustes na copy e na experiência da landing page.'
                : 'The result did not come from a single isolated action. We started with the fundamentals: audience research, narrative review, design improvement, Meta and Google traffic analysis, behavior reading through Google Analytics and Hotjar, plus copy and landing page experience adjustments.'}
            </p>
            <p className="micro-copy text-[14.5px]">
              {isPt
                ? 'A landing page do evento, exibida aqui, foi uma das campanhas que performou bem dentro desse processo, com uma comunicação mais premium, clara e orientada a decisão. A maior virada comercial veio em outro projeto posterior: a página e campanha do curso Conselheiro de Resultados.'
                : 'The event landing page shown here was one of the campaigns that performed well within this process, with clearer, more premium, decision-oriented communication. The strongest commercial shift came later through another project: the page and campaign for the Conselheiro de Resultados course.'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {[
              ['3 turmas', isPt ? 'preenchidas rapidamente' : 'filled quickly'],
              ['30 alunos', isPt ? 'por turma do curso' : 'per course cohort'],
              ['R$ 12 mil', isPt ? 'ticket médio por aluno' : 'average ticket per student'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-teal-400/35 bg-teal-500/12 p-4 shadow-lg shadow-teal-500/10 dark:border-teal-300/25 dark:bg-teal-400/10">
                <div className="text-3xl font-display font-medium text-teal-500 dark:text-teal-300 leading-none drop-shadow-[0_0_18px_rgba(45,212,191,0.35)]">{value}</div>
                <p className="mt-2 text-[11px] font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <a 
          href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/948496228599275.68557fb39d553.png" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-500 dark:text-teal-300 hover:underline mt-4 cursor-pointer font-bold"
        >
          <Eye className="w-4 h-4" /> {isPt ? 'Visualizar Design Completo no Behance' : 'View Full Design on Behance'} <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* HIGH-FIDELITY SCROLLABLE DESKTOP PREVIEW FRAME (ONLY WEB AS REQUESTED) */}
      <div className="relative bg-neutral-100/70 dark:bg-neutral-900/40 p-4 md:p-6 rounded-3xl border border-neutral-250/50 dark:border-neutral-800/40 overflow-hidden min-h-[320px] md:min-h-[500px] lg:min-h-[600px] group/devices mb-16 shadow-inner text-left">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent pointer-events-none" />

        {/* Full-Width Desktop Web Frame Mockup */}
        <div className="relative w-full h-[230px] sm:h-[300px] md:h-[520px] lg:h-[620px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#151515] transition-all">
          {/* Browser Top Bar with Custom Gold Label for premium look */}
          <div className="h-9 bg-neutral-100 dark:bg-[#1c1c1c] border-b border-neutral-200 dark:border-neutral-900 flex items-center justify-between px-4 shrink-0 select-none">
            {/* Left Windows controls */}
            <div className="flex gap-1.5 items-center">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-teal-300 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
            </div>
            {/* Address field */}
            <div className="bg-white dark:bg-[#0c0c0c] text-[10px] text-neutral-600 dark:text-neutral-400 px-4 py-0.5 rounded border border-neutral-200/50 dark:border-neutral-700/60 w-3/5 text-center truncate font-mono">
              Instituto Empresariar / Case Preview
            </div>
            <div className="text-[10px] text-teal-500 dark:text-teal-400 font-mono font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Web Sandbox</span>
            </div>
          </div>

          {/* Interactive Scrollable Canvas with Behance High Fidelity Layout */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scroll-smooth bg-[#07090e] relative custom-device-scroll">
            <div className="w-full relative">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/948496228599275.68557fb39d553.png"
                alt="Instituto Empresariar Landing Page Portfolio Piece"
                width="1920"
                height="7907"
                className="w-full h-auto select-none block"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="md:hidden mx-auto h-8 w-[44%] max-w-[150px] -mt-1 mb-4 flex flex-col items-center pointer-events-none">
          <div className="h-6 w-4 bg-neutral-300 dark:bg-neutral-800" />
          <div className="h-2 w-full rounded-full bg-neutral-300 dark:bg-neutral-800 shadow-sm" />
        </div>

        {/* Float badge explaining role interaction */}
        <div className="hidden sm:flex absolute top-8 right-8 bg-black/90 text-white border border-white/10 px-3.5 py-1.5 rounded-xl text-[9px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold opacity-95 backdrop-blur pointer-events-none select-none z-35 flex items-center gap-2 shadow-lg">
          <span className="animate-pulse text-teal-500">●</span>
          <span>{isPt ? 'Role para navegar na Landing Page' : 'Scroll to navigate the Landing Page'}</span>
        </div>
      </div>

      {/* STRATEGIC CAPABILITIES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h4 className="text-neutral-900 dark:text-white font-sans text-sm font-semibold mb-3 flex items-center gap-2">
            <span className="text-teal-500 font-mono text-xs">[04.1]</span> {isPt ? 'Alinhamento Estratégico & Legado' : 'Strategic Alignment & Legacy'}
          </h4>
          <p className="micro-copy text-[13.5px]">
            {isPt ? (
              <>
                O trabalho combinou posicionamento, design e performance. A página precisava comunicar legado, governança e sucessão familiar sem parecer genérica ou fria. Por isso, a direção visual foi construída para dar peso institucional ao Cícero Rocha, mas também abrir espaço para as filhas e demais familiares como parte ativa da autoridade da empresa.
              </>
            ) : (
              <>
                The work combined positioning, design, and performance. The page needed to communicate legacy, governance, and family succession without feeling generic or cold. The visual direction was built to preserve Cícero Rocha's institutional authority while also giving his daughters and family members visibility as active parts of the company's value.
              </>
            )}
          </p>
          <p className="micro-copy text-[13.5px] mt-4">
            {isPt
              ? 'Essa LP do evento gerou bons resultados para a campanha apresentada no portfólio. Em paralelo, o aprendizado de pesquisa, tráfego, Google Analytics, Hotjar e leitura da base foi aplicado em outro produto da casa: o Conselheiro de Resultados, que alcançou turmas de 30 alunos, ticket médio de R$ 12 mil e três turmas preenchidas em pouco tempo.'
              : 'This event LP generated strong results for the campaign shown in the portfolio. In parallel, the learning from research, traffic, Google Analytics, Hotjar, and audience analysis was applied to another product from the company: Conselheiro de Resultados, which reached 30-student cohorts, a R$ 12k average ticket, and three cohorts filled quickly.'}
          </p>
        </div>

        {/* Technical overview */}
        <div className="bg-neutral-50 dark:bg-[#0b0b0f] rounded-2xl border border-neutral-200 dark:border-neutral-900 p-5 space-y-4 font-sans">
          <span className="text-[10px] font-mono text-teal-500 bg-teal-500/5 px-2 py-0.5 rounded-full border border-orange-500/20 uppercase tracking-widest block w-fit font-bold">
            {isPt ? 'Direcionamento de Design' : 'Design Direction'}
          </span>
          
          <div className="font-mono text-[10px] text-neutral-700 dark:text-neutral-300 space-y-2 bg-white dark:bg-[#050508] p-3 rounded-xl border border-neutral-200 dark:border-neutral-850/50">
            <div className="flex justify-between items-center text-[7.5px] text-neutral-500 dark:text-neutral-550 border-b border-neutral-200 dark:border-[#111115] pb-1.5 font-bold">
              <span>DESIGN_METRICS_SPECS</span>
              <span className="text-teal-500 font-bold">VIP_EDITORIAL</span>
            </div>
            
            <p className="leading-snug">
              <span className="text-teal-700 dark:text-teal-500">const designSystem</span> = &#123;<br />
              &nbsp;&nbsp;aesthetic: <span className="text-green-700 dark:text-green-400 font-medium font-sans">"Sober, Premium, Editorial"</span>,<br />
              &nbsp;&nbsp;targetAudience: <span className="text-green-700 dark:text-green-400 font-medium font-sans">"Family Owners, Board Members"</span>,<br />
              &nbsp;&nbsp;typography: <span className="text-green-700 dark:text-green-400 font-medium font-sans">"Elegant Display Serif &amp; Clean Sans"</span>,<br />
              &nbsp;&nbsp;visualAssets: <span className="text-[#ff50af] font-medium font-mono">"Ultra High-Res Behance Core Matte Render"</span><br />
              &#125;;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
