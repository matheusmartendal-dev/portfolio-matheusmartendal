import React, { useState, useRef, useEffect } from 'react';
import { Smartphone, Laptop, Zap, Flame, Shield, ArrowRight, Compass, ShieldCheck, Cpu } from 'lucide-react';

interface ProjectApparelProps {
  lang: 'pt' | 'en';
}

export default function ProjectApparel({ lang }: ProjectApparelProps) {
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
    <section id="project-apparel" className="pt-24 text-left border-t border-neutral-200/50 dark:border-neutral-800/20 mt-16">
      {/* Grid Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2 text-teal-500 dark:text-teal-300 font-mono tracking-widest text-[11px] font-bold">
          <span>02.</span>
          <span className="h-px w-8 bg-orange-500"></span>
          <span className="text-black dark:text-white uppercase font-bold text-xs">
            [Portfólio]
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#102321] dark:text-white tracking-tight leading-[1.08] mt-1 mb-4">
          Desafio Inova Eneva
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-sm">
            {isPt ? 'Open Innovation Landing Page' : 'Open Innovation Landing Page'}
          </span>
          <span className="text-xs font-mono px-3 py-1 bg-teal-100 dark:bg-teal-950/40 border border-orange-200/50 dark:border-orange-900/30 text-teal-600 dark:text-teal-400 rounded-sm">
            {isPt ? 'Transição Energética & Eficiência' : 'Energy Transition & Efficiency'}
          </span>
        </div>
        <p className="copy-text">
          {isPt ? (
            <>
              O <strong>Desafio Inova Eneva</strong> precisava transformar um tema técnico em uma chamada simples, confiável e capaz de gerar volume qualificado rapidamente. A meta era clara: alcançar 300 inscritos em 3 semanas, sem depender apenas de tráfego frio.
            </>
          ) : (
            <>
              The <strong>Inova Eneva Challenge</strong> needed to turn a technical topic into a simple, trustworthy, and high-volume acquisition page. The goal was clear: reach 300 registrations in 3 weeks without relying only on cold traffic.
            </>
          )}
        </p>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5">
          <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.045] p-6 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-teal-600 dark:text-teal-300">
              {isPt ? 'Pesquisa, oferta e CRO' : 'Research, offer and CRO'}
            </span>
            <p className="micro-copy text-[14.5px]">
              {isPt
                ? 'Antes do layout final, cruzamos pesquisa com a base, benchmarks de desafios de inovação e dúvidas recorrentes de startups e pesquisadores. A leitura foi direta: o público precisava entender rapidamente as áreas de interesse, o nível de maturidade esperado, o prêmio e a credibilidade institucional por trás da chamada.'
                : 'Before the final layout, we combined audience research, innovation challenge benchmarks, and recurring questions from startups and researchers. The insight was direct: people needed to quickly understand the focus areas, expected maturity level, prize, and institutional credibility behind the call.'}
            </p>
            <p className="micro-copy text-[14.5px]">
              {isPt
                ? 'Com isso, reorganizamos a narrativa da página, aumentamos o destaque do prêmio, deixamos os CTAs mais próximos dos blocos de decisão e criamos uma leitura mais orientada a conversão. O resultado foi uma jornada mais objetiva para transformar interesse técnico em inscrição.'
                : 'From there, we reorganized the page narrative, increased prize visibility, moved CTAs closer to decision blocks, and created a more conversion-oriented reading flow. The result was a clearer path from technical interest to registration.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ['300', isPt ? 'inscritos em 3 semanas' : 'registrations in 3 weeks'],
              ['+47%', isPt ? 'taxa de conversão da página' : 'page conversion rate'],
              ['-29%', isPt ? 'desistência antes do formulário' : 'pre-form drop-off'],
              ['+41%', isPt ? 'cliques em CTAs principais' : 'main CTA clicks'],
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
              Eneva / Case Preview
            </div>
            <div className="text-[10px] text-teal-500 font-mono hidden sm:block font-bold">Desktop View</div>
          </div>

          {/* Real Live Website Viewport Embed */}
          <div ref={desktopContainerRef} className="flex-1 bg-neutral-950 dark:bg-black relative p-0 text-left min-h-0 md:min-h-[380px] lg:min-h-[480px] overflow-hidden">
            <iframe
              src="https://landingpage-desafioinovaeneva.vercel.app/"
              style={{
                width: '1280px',
                height: `${100 / (desktopScale || 1)}%`,
                transform: `scale(${desktopScale || 1})`,
                transformOrigin: 'top left',
              }}
              className="absolute top-0 left-0 border-0 bg-neutral-950"
              title="Eneva Desktop Live View"
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
              src="https://landingpage-desafioinovaeneva.vercel.app/"
              style={{
                width: '390px',
                height: `${100 / (phoneScale || 1)}%`,
                transform: `scale(${phoneScale || 1})`,
                transformOrigin: 'top left',
              }}
              className="absolute top-0 left-0 border-0 bg-neutral-950"
              title="Eneva Mobile Live View"
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
            <span className="text-teal-500 font-mono text-xs">[02.1]</span> {isPt ? 'Foco em Transição Energética' : 'Focus on Energy Transition'}
          </h4>
          <p className="micro-copy text-[13.5px]">
            {isPt ? (
              <>
                Diferente de portais corporativos estáticos, a Landing Page do Desafio Inova Eneva foi concebida para alinhar tecnologia moderna com a urgência da segurança energética e descarbonização. O portal serve como canal direto para inovadores submeterem projetos nas verticais de Gás e Energia do Futuro, Operações Inteligentes e Tecnologias de Emissões Reduzidas.
              </>
            ) : (
              <>
                Unlike static corporate information hubs, the Inova Eneva Challenge Landing Page was built to pair modern technical communication with crucial energy security and net-zero agendas. This portal acts as a rapid submission gateway for projects across Smart Operations, Future Gas, and Low Carbon Solutions.
              </>
            )}
          </p>
        </div>

        {/* Dynamic code blocks and timeline representation */}
        <div className="bg-neutral-50 dark:bg-[#0b0b0f] rounded-2xl border border-neutral-200 dark:border-neutral-900 p-5 space-y-4">
          <span className="text-[10px] font-mono text-teal-500 bg-teal-500/5 px-2 py-0.5 rounded-full border border-orange-500/20 uppercase tracking-widest block w-fit">
            {isPt ? 'Arquitetura de Inovação' : 'Innovation Architecture'}
          </span>
          
          <div className="font-mono text-[10px] text-neutral-700 dark:text-neutral-300 space-y-2 bg-white dark:bg-[#050508] p-3 rounded-xl border border-neutral-200 dark:border-neutral-850/50">
            <div className="flex justify-between items-center text-[7.5px] text-neutral-500 dark:text-neutral-550 border-b border-neutral-200 dark:border-[#111115] pb-1.5">
              <span>CONFIG_STREAM_INIT</span>
              <span className="text-green-500">READY</span>
            </div>
            
            <p className="leading-snug">
              <span className="text-teal-700 dark:text-teal-500">const</span> inovaEneva = <span className="text-teal-700 dark:text-teal-400">new</span> <span className="text-orange-700 dark:text-orange-400">OpenInnovationChallenge</span>(&#123;<br />
              &nbsp;&nbsp;focus_areas: <span className="text-green-700 dark:text-green-400">["Low Carbon", "Gas-To-Power Efficiency", "ESG"]</span>,<br />
              &nbsp;&nbsp;audience: <span className="text-green-700 dark:text-green-400">["Startups", "Academic Researchers", "Scaleups"]</span>,<br />
              &nbsp;&nbsp;platform: <span className="text-[#ff50af]">"Vite + Tailwind v4 + React 18"</span><br />
              &#125;);
            </p>
          </div>
        </div>
      </div>

      {/* STRATEGIC AND IMPACT SECTION */}
      <div className="p-8 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-850/80 space-y-6">
        <h4 className="text-neutral-950 dark:text-white font-sans text-sm font-semibold flex items-center gap-2">
          <span className="text-teal-600 dark:text-white font-mono text-xs">[02.2]</span> {isPt ? 'Transformando Ideias em Matriz Eficiente' : 'Transforming Ideas into an Efficient Matrix'}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 micro-copy text-[13.5px]">
          <div className="space-y-4">
            {isPt ? (
              <>
                <p>
                  A segurança climática e a digitalização no setor industrial impõem o aperfeiçoamento constante de processos operacionais. Com parcerias de alto nível, o <strong>Desafio Inova Eneva</strong> promove a incorporação de soluções emergentes diretamente nas infraestruturas da companhia.
                </p>
                <p>
                  A Landing Page foi estruturada garantindo rápida absorção de termos técnicos relevantes e cronogramas claros, promovendo uma navegação informativa que engaja comunidades científicas da academia ao topo corporativo do ecossistema de capital de risco.
                </p>
              </>
            ) : (
              <>
                <p>
                  Sustained climate security and smart industrial operations demand constant optimization of generation assets. Through high-contrast corporate channels, the <strong>Inova Eneva Challenge</strong> fosters immediate sandbox-to-product deployment options.
                </p>
                <p>
                  The landing structure was engineered to prompt fluid technical reading, providing immediate onboarding steps that capture top-tier academics and venture partners alike.
                </p>
              </>
            )}
          </div>
          <div className="space-y-4">
            {isPt ? (
              <>
                <p>
                  Empregar ferramentas digitais adaptativas e modulares permite atingir públicos diversos com extrema clareza operacional. A interface do desafio apresenta de forma simplificada as metodologias de avaliação e etapas do programa.
                </p>
                <p>
                  As ideias de destaque abrem caminho para parcerias maduras com uma das maiores geradoras térmicas independentes do país, acelerando a concretização de projetos pilotos estruturados de descarbonização e transição consciente de matriz.
                </p>
              </>
            ) : (
              <>
                <p>
                  Employing robust, modular digital systems makes it possible to address diverse audiences with stellar visual simplicity, reducing friction when discussing rigorous corporate evaluation rules.
                </p>
                <p>
                  Outstanding selected pitches gain accelerated avenues for commercial pilots with Eneva, one of Brazil's largest independent thermal generation giants.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
