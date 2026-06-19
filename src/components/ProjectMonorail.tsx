import React, { useState, useRef, useEffect } from 'react';
import { Smartphone, Laptop, Zap, Rocket, Users, Target, ArrowRight, Award, Megaphone, CheckCircle } from 'lucide-react';

interface ProjectMonorailProps {
  lang: 'pt' | 'en';
}

export default function ProjectMonorail({ lang }: ProjectMonorailProps) {
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const [desktopScale, setDesktopScale] = useState(1);

  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const [phoneScale, setPhoneScale] = useState(1);

  const isPt = lang === 'pt';

  useEffect(() => {
    const dEl = desktopContainerRef.current;
    if (dEl) {
      const updateDesktopScale = () => {
        const containerWidth = dEl.clientWidth;
        if (containerWidth > 0) {
          setDesktopScale(containerWidth / 1280);
        }
      };
      updateDesktopScale();
      const dObserver = new ResizeObserver(() => updateDesktopScale());
      dObserver.observe(dEl);
      return () => dObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    const pEl = phoneContainerRef.current;
    if (pEl) {
      const updatePhoneScale = () => {
        const containerWidth = pEl.clientWidth;
        if (containerWidth > 0) {
          setPhoneScale(containerWidth / 390);
        }
      };
      updatePhoneScale();
      const pObserver = new ResizeObserver(() => updatePhoneScale());
      pObserver.observe(pEl);
      return () => pObserver.disconnect();
    }
  }, []);

  return (
    <section id="project-monorail" className="pt-24 text-left border-t border-neutral-200/50 dark:border-neutral-800/20 mt-16">
      {/* Grid Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2 text-teal-500 dark:text-teal-300 font-mono tracking-widest text-[11px] font-bold">
          <span>03.</span>
          <span className="h-px w-8 bg-orange-500"></span>
          <span className="text-black dark:text-white uppercase font-bold text-xs">
            [Portfólio]
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#102321] dark:text-white tracking-tight leading-[1.08] mt-1 mb-4">
          Sai do Papel | Open Innovation
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-sm">
            {isPt ? 'Atração de Clientes & Growth' : 'Client Acquisition & Growth'}
          </span>
          <span className="text-xs font-mono px-3 py-1 bg-teal-100 dark:bg-teal-950/40 border border-teal-200/50 dark:border-teal-950/30 text-teal-600 dark:text-teal-400 rounded-sm">
            {isPt ? 'Hackathon & Open Innovation' : 'Hackathon & Open Innovation'}
          </span>
        </div>
        <p className="copy-text">
          {isPt ? (
            <>
              A <strong>Sai do Papel</strong> precisava gerar novos clientes para projetos de hackathon e inovação aberta. O desafio não era apenas criar uma página bonita: era transformar uma dor comercial em um funil capaz de atrair empresas com verba, urgência e abertura para comprar esse tipo de serviço.
            </>
          ) : (
            <>
              <strong>Sai do Papel</strong> needed to generate new clients for hackathon and open innovation projects. The challenge was not simply building a good-looking page: it was turning a sales problem into a funnel capable of attracting companies with budget, urgency, and readiness to buy this type of service.
            </>
          )}
        </p>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5">
          <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.045] p-6 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-teal-600 dark:text-teal-300">
              {isPt ? 'Funil comercial e timing de mercado' : 'Sales funnel and market timing'}
            </span>
            <p className="micro-copy text-[14.5px]">
              {isPt
                ? 'Ao pesquisar a própria base de leads de hackathon, encontramos um padrão importante: entre outubro e dezembro, muitas empresas revisam orçamento, encerram planejamento anual e procuram iniciativas rápidas de inovação aberta para usar verba remanescente com impacto visível.'
                : 'By researching the existing hackathon lead base, we found an important pattern: between October and December, many companies review budgets, close annual planning, and look for fast open innovation initiatives to allocate remaining budget with visible impact.'}
            </p>
            <p className="micro-copy text-[14.5px]">
              {isPt
                ? 'A partir disso, a página foi reposicionada para vender clareza executiva: problema, formato, prazo, entregáveis e prova de capacidade. Em paralelo, ajustamos anúncios, analisamos mapas de calor e pontos de desistência no Hotjar, qualificamos os leads com o time de vendas e refinamos os CTAs para gerar reuniões mais próximas da compra.'
                : 'From there, the page was repositioned to sell executive clarity: problem, format, timeline, deliverables, and proof of capability. In parallel, we refined ads, analyzed heatmaps and drop-off points in Hotjar, qualified leads with the sales team, and adjusted CTAs to generate meetings closer to purchase intent.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ['4', isPt ? 'clientes fechados pelo funil' : 'clients closed from the funnel'],
              ['2.8x', isPt ? 'aumento em reuniões qualificadas' : 'qualified meetings lift'],
              ['-34%', isPt ? 'abandono no formulário' : 'form abandonment'],
              ['+63%', isPt ? 'leads com fit comercial' : 'sales-fit leads'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-teal-400/35 bg-teal-500/12 p-4 shadow-lg shadow-teal-500/10 dark:border-teal-300/25 dark:bg-teal-400/10">
                <div className="text-3xl font-display font-medium text-teal-500 dark:text-teal-300 leading-none drop-shadow-[0_0_18px_rgba(45,212,191,0.35)]">{value}</div>
                <p className="mt-2 text-[11px] font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HIGH-FIDELITY WEB & MOBILE SCROLLABLE PREVIEW FRAME */}
      <div className="relative bg-neutral-100/70 dark:bg-neutral-900/40 p-4 md:p-6 rounded-3xl border border-neutral-250/50 dark:border-neutral-800/40 overflow-hidden flex flex-col md:flex-row items-stretch justify-start min-h-[380px] lg:min-h-[490px] group/devices mb-16 shadow-inner">
        <div className="absolute inset-0 bg-radial from-teal-500/5 to-transparent pointer-events-none" />

        {/* Desktop Web Frame Mockup */}
        <div className="hidden md:flex relative w-full md:w-[72%] h-[230px] sm:h-[300px] md:h-auto md:min-h-[390px] flex-col rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#151515] transition-transform">
          {/* Browser Top Bar */}
          <div className="h-8 bg-neutral-100 dark:bg-[#1c1c1c] border-b border-neutral-200 dark:border-neutral-900 flex items-center justify-between px-4 shrink-0 select-none">
            {/* Left Dots */}
            <div className="flex gap-1.5 items-center">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-teal-300 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
            </div>
            {/* Address field */}
            <div className="bg-white dark:bg-[#0c0c0c] text-[9px] text-neutral-600 dark:text-neutral-400 px-4 py-0.5 rounded border border-neutral-200/50 dark:border-neutral-700/60 w-3/5 text-center truncate font-mono">
              Sai do Papel / Case Preview
            </div>
            <div className="text-[10px] text-teal-500 font-mono hidden sm:block font-bold">Desktop View</div>
          </div>

          {/* Real Live Website Viewport Embed */}
          <div ref={desktopContainerRef} className="flex-1 bg-neutral-950 dark:bg-black relative p-0 text-left min-h-0 md:min-h-[380px] lg:min-h-[480px] overflow-hidden">
            <iframe
              src="https://landingpage-hackathon-saidopapel.vercel.app/"
              style={{
                width: '1280px',
                height: `${100 / (desktopScale || 1)}%`,
                transform: `scale(${desktopScale || 1})`,
                transformOrigin: 'top left',
              }}
              className="absolute top-0 left-0 border-0 bg-neutral-950"
              title="Sai do Papel Desktop Live View"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="hidden mx-auto h-8 w-[44%] max-w-[150px] -mt-1 mb-4 flex flex-col items-center pointer-events-none">
          <div className="h-6 w-4 bg-neutral-300 dark:bg-neutral-800" />
          <div className="h-2 w-full rounded-full bg-neutral-300 dark:bg-neutral-800 shadow-sm" />
        </div>

        {/* Smartphone Device Mockup */}
        <div className="relative md:absolute md:bottom-6 md:right-8 w-full max-w-[300px] mx-auto md:mx-0 md:w-[195px] lg:w-[225px] h-[640px] md:h-[410px] lg:h-[450px] rounded-[32px] border-[6px] border-neutral-850 dark:border-neutral-900 bg-neutral-950 shadow-3xl flex flex-col z-20 overflow-hidden md:group-hover/devices:scale-105 transition-all duration-300 mt-4 md:mt-0">
          {/* Device Notch Speaker */}
          <div className="h-4 w-full bg-black flex justify-center items-center shrink-0">
            <div className="w-14 h-1.5 bg-neutral-850 rounded-full" />
          </div>

          {/* Device viewport - Live Mobile Viewport Embed - Self-adjusts to 375px mobile breakpoint */}
          <div ref={phoneContainerRef} className="flex-1 bg-neutral-950 relative p-0 text-left overflow-hidden">
            <iframe
              src="https://landingpage-hackathon-saidopapel.vercel.app/"
              style={{
                width: '390px',
                height: `${100 / (phoneScale || 1)}%`,
                transform: `scale(${phoneScale || 1})`,
                transformOrigin: 'top left',
              }}
              className="absolute top-0 left-0 border-0 bg-neutral-950"
              title="Sai do Papel Mobile Live View"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Device Bottom Home Bar */}
          <div className="h-2.5 bg-black shrink-0 flex items-center justify-center p-0.5">
            <div className="h-1.5 w-16 bg-neutral-750 rounded-full" />
          </div>
        </div>

        {/* Float badge explaining role interaction */}
        <div className="hidden sm:flex absolute top-4 right-4 bg-black/85 text-white border border-white/10 px-2.5 py-1 rounded-lg text-[8px] sm:text-[10px] font-mono uppercase tracking-wider font-semibold opacity-90 backdrop-blur pointer-events-none select-none z-35 flex items-center gap-1">
          <span className="animate-pulse text-teal-500">●</span>
          <span>{isPt ? 'Interaja nos mockups interativos' : 'Interact with mockup frames'}</span>
        </div>
      </div>

      {/* TECH ARCHITECTURE COMPARISON */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h4 className="text-neutral-900 dark:text-white font-sans text-sm font-semibold mb-3 flex items-center gap-2">
            <span className="text-teal-500 font-mono text-xs">[03.1]</span> {isPt ? 'Foco em Atração e Conversão' : 'Focus on Acquisition & Conversion'}
          </h4>
          <p className="micro-copy text-[13.5px]">
            {isPt ? (
              <>
                Desenvolvido sob rígidos critérios de performance e SEO, o projeto traz uma arquitetura centrada na atração e captação de novos clientes empresariais. Através de CTAs persuasivos, blocos informativos estruturados e total adaptação mobile, a Landing Page garante taxas superiores de conversão de leads para o Hackathon e ecossistema de investimentos da Sai do Papel.
              </>
            ) : (
              <>
                Developed under strict performance and SEO metrics, the project features an architecture centered on acquisition and capture of corporate partners. Through persuasive CTAs, clear content structure, and mobile responsiveness, the landing page secures higher lead conversion rates for Sai do Papel's innovation campaigns.
              </>
            )}
          </p>
        </div>

        {/* Dynamic code blocks and timeline representation */}
        <div className="bg-neutral-50 dark:bg-[#0b0b0f] rounded-2xl border border-neutral-200 dark:border-neutral-900 p-5 space-y-4">
          <span className="text-[10px] font-mono text-teal-500 bg-teal-500/5 px-2 py-0.5 rounded-full border border-teal-500/20 uppercase tracking-widest block w-fit font-bold font-bold">
            {isPt ? 'Pipeline de Growth' : 'Growth Pipeline'}
          </span>
          
          <div className="font-mono text-[10px] text-neutral-700 dark:text-neutral-300 space-y-2 bg-white dark:bg-[#050508] p-3 rounded-xl border border-neutral-200 dark:border-neutral-850/50">
            <div className="flex justify-between items-center text-[7.5px] text-neutral-500 dark:text-neutral-550 border-b border-neutral-200 dark:border-[#111115] pb-1.5 font-bold font-bold">
              <span>METRIC_CAPTURE_NODE</span>
              <span className="text-teal-500 font-bold font-bold">ACTIVE</span>
            </div>
            
            <p className="leading-snug">
              <span className="text-teal-700 dark:text-teal-500 font-bold font-bold">const</span> saidoPapelCampaign = <span className="text-teal-700 dark:text-teal-400">new</span> <span className="text-orange-700 dark:text-orange-400">AcquisitionTunnel</span>(&#123;<br />
              &nbsp;&nbsp;target: <span className="text-green-700 dark:text-green-400">"New Corporate Partners &amp; Startups"</span>,<br />
              &nbsp;&nbsp;channel: <span className="text-green-700 dark:text-green-400">"Hackathon Registration &amp; Venture Lead"</span>,<br />
              &nbsp;&nbsp;optimizedFor: <span className="text-green-700 dark:text-green-400">["Conversion Rate", "Loading Performance"]</span>,<br />
              &nbsp;&nbsp;stack: <span className="text-[#ff50af]">"React 18 • Vite-powered • Tailwind CSS V4"</span><br />
              &#125;);
            </p>
          </div>
        </div>
      </div>

      {/* STRATEGIC AND IMPACT SECTION */}
      <div className="p-8 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-850/80 space-y-6">
        <h4 className="text-neutral-950 dark:text-white font-sans text-sm font-semibold flex items-center gap-2">
          <span className="text-teal-600 dark:text-white font-mono text-xs">[03.2]</span> {isPt ? 'Ecossistema Integrado de Inovação Aberta' : 'Integrated Open Innovation Ecosystem'}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 micro-copy text-[13.5px]">
          <div className="space-y-4">
            {isPt ? (
              <>
                <p>
                  O ecossistema da <strong>Sai do Papel</strong> une de forma pioneira startups em busca de validação de mercado, escala e venture capital com médias e grandes corporações sedentas por soluções focadas em novos canais de receita e eficiência interna.
                </p>
                <p>
                  A Landing Page do Hackathon funciona como um ponto focal catalisador. Através de um funil claro de informações, regulamentos acessíveis e cronogramas destacados de forma estritamente legível, ela remove qualquer fricção para a inscrição de talentos.
                </p>
              </>
            ) : (
              <>
                <p>
                  The <strong>Sai do Papel</strong> ecosystem pioneers the bridge linking startups seeking validation, scale, and venture capital with mid-to-large corporates hungry for digital efficiency and new revenue channels.
                </p>
                <p>
                  The Hackathon Landing Page serves as a central catalyst. Through a clear marketing funnel, approachable regulations, and readable timelines, it removes onboarding friction for top builders.
                </p>
              </>
            )}
          </div>
          <div className="space-y-4">
            {isPt ? (
              <>
                <p>
                  O uso estratégico de elementos visuais de alta fidelidade e micro-interações responsivas garante uma experiência impecável em qualquer dipositivo de acesso, do smartphone na rua ao monitor ultra-wide da gerência corporativa.
                </p>
                <p>
                  Como resultado técnico direto, a plataforma potencializa o positioning de novos produtos digitais ou desafios industriais, acelerando a fase de ideação das startups para sua inclusão em rodadas reais de mentoria, aceitação de projetos e coinvestimento estruturado.
                </p>
              </>
            ) : (
              <>
                <p>
                  Strategic usage of high-fidelity visual mockups and micro-interactions ensures an impeccable user journey from handheld smartphones to executive widescreen setups.
                </p>
                <p>
                  As a direct technical benefit, the platform amplifies industrial challenge communication, accelerating startups from pure ideation toward actual mentoring programs, validation pilots, and co-investment.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
