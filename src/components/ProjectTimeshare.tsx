import React, { useState, useRef, useEffect } from 'react';
import { Smartphone, Laptop, Users, MapPin, Calendar, Star, HelpCircle, Award, CheckCircle2, Target, ChevronRight, Send, ShieldCheck, Cpu } from 'lucide-react';

interface ProjectTimeshareProps {
  lang: 'pt' | 'en';
}

export default function ProjectTimeshare({ lang }: ProjectTimeshareProps) {
  const [activeTheme, setActiveTheme] = useState(0);
  const [emailInput, setEmailInput] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');
  const [mobileEmailInput, setMobileEmailInput] = useState('');
  const [mobileNewsletterStatus, setMobileNewsletterStatus] = useState<'idle' | 'success'>('idle');

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

  const themes = isPt ? [
    {
      id: "Tema 01",
      title: "Desbancarização e Acesso",
      highlight: "Foco em canais amigáveis e UX inclusiva.",
      desc: "Desenvolvimento de interfaces simplificadas que operem de forma leve em celulares de baixa performance ou canais acessíveis (como WhatsApp ou SMS) para integrar populações desprovidas de serviços financeiros tradicionais.",
      challenges: ["Onboarding sem atrito", "Operação offline parcial", "Linguagem simples, sem jargões bancários"]
    },
    {
      id: "Tema 02",
      title: "Crédito Consciencioso",
      highlight: "Gamificação de saúde financeira preventiva.",
      desc: "Sistemas inteligentes que acompanham o microempreendedor após a liberação do crédito. Ajuda nas decisões cotidianas de precificação, fluxo de caixa simplificado e lembretes de metas para prevenir o endividamento nocivo.",
      challenges: ["Dashboards intuitivos", "Assistentes virtuais de negócios", "Alertas proativos baseados em IA"]
    },
    {
      id: "Tema 03",
      title: "Capilaridade Humana",
      highlight: "Apoio a agentes comunitários locais.",
      desc: "Ferramentas que capacitam os agentes de crédito em campo a coletar dados fidedignos, validar identidades e fornecer orientação direta nas comunidades, estendendo a presença física do BNDES através de cooperação mútua.",
      challenges: ["Coleta segura de documentos", "Sincronização de dados em campo", "Georreferenciamento de pontos comerciais"]
    }
  ] : [
    {
      id: "Theme 01",
      title: "Unbanking & Access",
      highlight: "Focus on friendly channels and inclusive UX.",
      desc: "Development of simplified interfaces that operate efficiently on low-performance smartphones or highly accessible channels (like WhatsApp or SMS) to integrate unbanked populations into the financial system.",
      challenges: ["Frictionless Onboarding", "Partial Offline Operation", "Plain Language, No Banking Jargon"]
    },
    {
      id: "Theme 02",
      title: "Conscientious Credit",
      highlight: "Gamified preventive financial wellness.",
      desc: "Intelligent systems that support micro-entrepreneurs post-disbursement. Helps with daily pricing decisions, clean cash-flow summaries, and proactively preventing toxic levels of debt.",
      challenges: ["Intuitive Dashboards", "Virtual Business Assistants", "Proactive AI-driven Alerts"]
    },
    {
      id: "Theme 03",
      title: "Human Capillarity",
      highlight: "Empowering local community field agents.",
      desc: "Mobile tools empowering field credit agents to safely gather reliable data, validate identity structures, and provide direct localized guidance across developing neighborhoods.",
      challenges: ["Secure Document Intake", "Field Data Synchronization", "Commercial Georeferencing"]
    }
  ];

  const winners = isPt ? [
    { place: "1º Lugar", project: "CredInclusivo", tag: "WhatsApp Onboarding", score: "98.5 pts", premio: "R$ 20.000,00" },
    { place: "2º Lugar", project: "MicroRadar BNDES", tag: "Georreferenciamento", score: "94.2 pts", premio: "R$ 12.000,00" },
    { place: "3º Lugar", project: "AgroFomento Verde", tag: "Crédito Agro Coletivo", score: "91.8 pts", premio: "R$ 8.000,00" }
  ] : [
    { place: "1st Place", project: "CredInclusivo", tag: "WhatsApp Onboarding", score: "98.5 pts", premio: "R$ 20,000.00" },
    { place: "2nd Place", project: "MicroRadar BNDES", tag: "Georeferencing", score: "94.2 pts", premio: "R$ 12,000.00" },
    { place: "3rd Place", project: "AgroFomento Verde", tag: "Collective Agribusiness", score: "91.8 pts", premio: "R$ 8,000.00" }
  ];

  const handleRegister = (e: React.FormEvent, isMobile: boolean) => {
    e.preventDefault();
    if (isMobile) {
      if (!mobileEmailInput) return;
      setMobileNewsletterStatus('success');
      setTimeout(() => {
        setMobileNewsletterStatus('idle');
        setMobileEmailInput('');
      }, 3000);
    } else {
      if (!emailInput) return;
      setNewsletterStatus('success');
      setTimeout(() => {
        setNewsletterStatus('idle');
        setEmailInput('');
      }, 3000);
    }
  };

  return (
    <section id="project-timeshare" className="pt-24 text-left border-t border-neutral-200/50 dark:border-neutral-800/20">
      {/* Grid Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2 text-teal-500 dark:text-teal-300 font-mono tracking-widest text-[11px] font-bold">
          <span>01.</span>
          <span className="h-px w-8 bg-orange-500"></span>
          <span className="text-black dark:text-white uppercase font-bold text-xs">
            [Portfólio]
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#102321] dark:text-white tracking-tight leading-[1.08] mt-1 mb-4">
          Hackathon BNDES
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-sm">
            {isPt ? 'Landing Page de Alta Performance' : 'High Performance Landing Page'}
          </span>
          <span className="text-xs font-mono px-3 py-1 bg-orange-100 dark:bg-orange-950/40 border border-orange-200/50 dark:border-orange-900/30 text-orange-600 dark:text-orange-400 rounded-sm">
            Framer Motion &amp; Responsive Layout
          </span>
        </div>
        <p className="copy-text">
          {isPt ? (
            <>
              O projeto nasceu de um problema claro: em uma edição anterior, o hackathon enfrentou dificuldade para atingir a marca mínima de inscritos. A página antiga carregava devagar, tinha fricção de usabilidade no mobile e perdia potenciais participantes antes mesmo de explicar o valor da maratona.
            </>
          ) : (
            <>
              This project started from a clear acquisition problem: in a previous edition, the hackathon struggled to reach the minimum registration target. The old landing page loaded slowly, created mobile usability friction, and lost potential participants before the challenge value was fully understood.
            </>
          )}
        </p>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5">
          <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.045] p-6 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-teal-600 dark:text-teal-300">
              {isPt ? 'Problema e solução' : 'Problem and solution'}
            </span>
            <p className="micro-copy text-[14.5px]">
              {isPt
                ? 'Reposicionamos a landing page para falar diretamente com desenvolvedores, designers e especialistas em IA: proposta de valor na primeira dobra, hierarquia visual mais objetiva, blocos de recompensa e critérios técnicos mais claros, além de uma arquitetura mais leve para reduzir abandono no carregamento.'
                : 'We repositioned the landing page to speak directly to developers, designers, and AI specialists: first-fold value proposition, clearer visual hierarchy, reward and technical criteria blocks, plus a lighter architecture to reduce load-related abandonment.'}
            </p>
            <p className="micro-copy text-[14.5px]">
              {isPt
                ? 'Também estruturamos parcerias com empresas e comunidades que já possuíam bases qualificadas para hackathons, conectando mídia paga, UTMs, Google Analytics e Hotjar para entender origem do tráfego, profundidade de rolagem, cliques nos CTAs e pontos de desistência.'
                : 'We also structured partnerships with companies and communities that already had qualified hackathon audiences, connecting paid media, UTMs, Google Analytics, and Hotjar to understand traffic source, scroll depth, CTA clicks, and drop-off points.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ['-38%', isPt ? 'abandono no carregamento inicial' : 'initial load abandonment'],
              ['+52%', isPt ? 'conversão em clique para inscrição' : 'click-to-registration conversion'],
              ['1.9s', isPt ? 'tempo médio até a primeira dobra' : 'average first-fold load'],
              ['+31%', isPt ? 'profundidade média de scroll' : 'average scroll depth'],
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
        <div className="absolute inset-0 bg-radial from-orange-500/5 to-transparent pointer-events-none" />

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
              BNDES / Case Preview
            </div>
            <div className="text-[10px] text-orange-400 font-mono hidden sm:block font-bold">Desktop View</div>
          </div>

          {/* Real Live Website Viewport Embed */}
          <div ref={desktopContainerRef} className="flex-1 bg-neutral-950 dark:bg-black relative p-0 text-left min-h-0 md:min-h-[380px] lg:min-h-[480px] overflow-hidden">
            <iframe
              src="https://landingpage-hackathon-bndes.vercel.app/"
              style={{
                width: '1280px',
                height: `${100 / (desktopScale || 1)}%`,
                transform: `scale(${desktopScale || 1})`,
                transformOrigin: 'top left',
              }}
              className="absolute top-0 left-0 border-0 bg-neutral-950"
              title="BNDES Desktop Live View"
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
        <div className="relative md:absolute md:bottom-6 md:right-8 w-full max-w-[300px] mx-auto md:mx-0 md:w-[195px] lg:w-[225px] h-[640px] md:h-[410px] lg:h-[450px] rounded-[32px] border-[6px] border-neutral-800 dark:border-neutral-900 bg-neutral-950 shadow-3xl flex flex-col z-20 overflow-hidden md:group-hover/devices:scale-105 transition-all duration-300 mt-4 md:mt-0">
          {/* Device Notch Speaker */}
          <div className="h-4 w-full bg-black flex justify-center items-center shrink-0">
            <div className="w-14 h-1.5 bg-neutral-850 rounded-full" />
          </div>

          {/* Device viewport - Live Mobile Viewport Embed - Self-adjusts to 375px mobile breakpoint */}
          <div ref={phoneContainerRef} className="flex-1 bg-neutral-950 relative p-0 text-left overflow-hidden">
            <iframe
              src="https://landingpage-hackathon-bndes.vercel.app/"
              style={{
                width: '390px',
                height: `${100 / (phoneScale || 1)}%`,
                transform: `scale(${phoneScale || 1})`,
                transformOrigin: 'top left',
              }}
              className="absolute top-0 left-0 border-0 bg-neutral-950"
              title="BNDES Mobile Live View"
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
          <span className="animate-pulse text-orange-400">●</span>
          <span>{isPt ? 'Interaja nos mockups interativos' : 'Interact with mockup frames'}</span>
        </div>
      </div>

      {/* TECH ARCHITECTURE COMPARISON */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h4 className="text-neutral-900 dark:text-white font-sans text-sm font-semibold mb-3 flex items-center gap-2">
            <span className="text-teal-500 dark:text-teal-300 font-mono text-xs">[01.1]</span> {isPt ? 'Foco no Público Desenvolvedor' : 'Developer-Oriented Focus'}
          </h4>
          <p className="micro-copy text-[13.5px]">
            {isPt ? (
              <>
                Diferente de portais corporativos burocráticos, a Landing Page do Hackathon BNDES foi modelada para estabelecer um diálogo de alto nível técnico ("Dev-Oriented"). Com código-fonte acessível, diagramação limpa, blocos de especificações detalhados e paleta contrastante, o layout engaja o ecossistema tecnológico desde a primeira dobra.
              </>
            ) : (
              <>
                Unlike complex public-sector legacy portals, the BNDES Hackathon Landing Page is designed specifically to speak directly to developers ('Dev-Oriented'). Embellished with structured micro-specs, clean layouts, and high-contrast palettes, the viewport is highly engaging from the immediate landing fold.
              </>
            )}
          </p>
        </div>

        {/* Dynamic code blocks and timeline representation */}
        <div className="bg-neutral-50 dark:bg-[#0b0b0f] rounded-2xl border border-neutral-200 dark:border-neutral-900 p-5 space-y-4">
          <span className="text-[10px] font-mono text-orange-400 bg-orange-500/5 px-2 py-0.5 rounded-full border border-orange-500/20 uppercase tracking-widest block w-fit">
            {isPt ? 'Arquitetura de Inovação' : 'Innovation Architecture'}
          </span>
          
          <div className="font-mono text-[10px] text-neutral-700 dark:text-neutral-300 space-y-2 bg-white dark:bg-[#050508] p-3 rounded-xl border border-neutral-200 dark:border-neutral-850/50">
            <div className="flex justify-between items-center text-[7.5px] text-neutral-500 dark:text-neutral-550 border-b border-neutral-200 dark:border-[#111115] pb-1.5">
              <span>CONFIG_STREAM_INIT</span>
              <span className="text-teal-500">READY</span>
            </div>
            
            <p className="leading-snug">
              <span className="text-orange-700 dark:text-orange-400">const</span> maratonaBndes = <span className="text-teal-700 dark:text-teal-400">new</span> <span className="text-orange-700 dark:text-orange-400">InnovationChallenge</span>(&#123;<br />
              &nbsp;&nbsp;rewardPool: <span className="text-teal-700 dark:text-teal-400">"R$ 30.000,00"</span>,<br />
              &nbsp;&nbsp;audience: <span className="text-teal-700 dark:text-teal-400">"Full-stack, Designers &amp; IA Specialists"</span>,<br />
              &nbsp;&nbsp;compliance: <span className="text-orange-500">"LGPD Compliant"</span><br />
              &#125;);
            </p>
          </div>
        </div>
      </div>

      {/* STRATEGIC AND IMPACT SECTION */}
      <div className="p-8 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-850/80 space-y-6">
        <h4 className="text-neutral-950 dark:text-white font-sans text-sm font-semibold flex items-center gap-2">
          <span className="text-teal-500 dark:text-teal-300 font-mono text-xs">[01.2]</span> {isPt ? 'Impacto Social e Desenvolvimento' : 'Social Impact & Development'}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 micro-copy text-[13.5px]">
          <div className="space-y-4">
            {isPt ? (
              <>
                <p>
                  A democratização do crédito no Brasil depende fortemente de canais fluidos e inclusivos de ponta a ponta. Através da união entre o <strong>BNDES</strong> e a aceleradora <strong>Sai do Papel</strong>, a maratona buscou ativamente desvendar desafios de desbancarização e inclusão produtiva.
                </p>
                <p>
                  As soluções avaliadas baseiam-se em tecnologias leves e escaláveis, prontas para atingirem milhões de microempreendedores informais, autônomos e cooperativas que representam a real força produtiva regional de baixa renda.
                </p>
              </>
            ) : (
              <>
                <p>
                  The democratization of microcredit in Brazil heavily relies on smooth, accessible, and inclusive end-to-end user interfaces. In partnership between the <strong>BNDES</strong> bank and accelerator <strong>Sai do Papel</strong>, this hackathon tackled critical unbanking and registration problems.
                </p>
                <p>
                  Developed solutions targeted lightweight, highly scalable technologies capable of supporting millions of independent micro-entrepreneurs and business owners, who represent the regional low-income economic power.
                </p>
              </>
            )}
          </div>
          <div className="space-y-4">
            {isPt ? (
              <>
                <p>
                  No ecossistema do desenvolvedor, participar de tal iniciativa fomenta o desenvolvimento de produtos orientados a impacto real ("Tech for Good").
                </p>
                <p>
                  Todos os prêmios da maratona foram integralmente pagos aos projetos de destaque após validação direta das equipes do BNDES, consolidando parcerias vitais para transformar linhas de financiamento em ferramentas utilizáveis na base comunitária.
                </p>
              </>
            ) : (
              <>
                <p>
                  For the tech ecosystem, deploying solutions of such scale builds professional confidence and shapes future standard frameworks focused on "Tech for Good".
                </p>
                <p>
                  All hackathon grand prizes were fully paid out directly to outstanding projects upon rigorous verification by BNDES, converting official funding streams into immediate community assets.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
