import React, { useState, useRef, useEffect } from 'react';
import { Smartphone, Laptop, Zap, Sparkles, Building2, MapPin, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface ProjectSoloBLVProps {
  lang: 'pt' | 'en';
}

export default function ProjectSoloBLV({ lang }: ProjectSoloBLVProps) {
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
    <section id="project-soloblv" className="pt-24 text-left border-t border-neutral-200/50 dark:border-neutral-800/20 mt-16">
      {/* Grid Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2 text-teal-500 dark:text-teal-300 font-mono tracking-widest text-[11px] font-bold">
          <span>05.</span>
          <span className="h-px w-8 bg-orange-500"></span>
          <span className="text-black dark:text-white uppercase font-bold text-xs">
            [Portfólio]
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#102321] dark:text-white tracking-tight leading-[1.08] mt-1 mb-4">
          Empreendimento Solo BLVD
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-sm">
            {isPt ? 'Arquitetura Boutique' : 'Boutique Architecture'}
          </span>
          <span className="text-xs font-mono px-3 py-1 bg-teal-100 dark:bg-teal-950/40 border border-orange-200/50 dark:border-orange-900/30 text-teal-700 dark:text-teal-400 rounded-sm">
            {isPt ? 'Mercado Imobiliário Premium' : 'Real Estate & Premium Living'}
          </span>
          <span className="text-xs font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-sm">
            {isPt ? 'LP de Alta Conversão' : 'High-End Conversion LP'}
          </span>
        </div>
        <p className="copy-text">
          {isPt ? (
            <>
              O <strong>Solo BLVD</strong> já tinha uma boa captação de contatos via formulário, mas o problema estava na qualidade: muitos leads chegavam sem fit real para um empreendimento premium. Os anúncios performavam em volume, mas a comunicação visual transmitia uma percepção mais próxima de um produto de baixo custo.
            </>
          ) : (
            <>
              <strong>Solo BLVD</strong> already had good form lead volume, but the problem was quality: many leads did not have real fit for a premium real estate product. Ads were generating volume, but the visual communication made the project feel closer to a low-cost offer.
            </>
          )}
        </p>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5">
          <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.045] p-6 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-teal-600 dark:text-teal-300">
              {isPt ? 'Reposicionamento premium' : 'Premium repositioning'}
            </span>
            <p className="micro-copy text-[14.5px]">
              {isPt
                ? 'A solução foi alinhar a promessa dos anúncios com a experiência da página. Redesenhamos as artes de Google Ads e Meta Ads, elevamos a direção visual da landing page e deixamos imagem, espaçamento, copy e hierarquia mais compatíveis com um produto imobiliário de alto padrão.'
                : 'The solution was to align ad promise with landing page experience. We redesigned Google Ads and Meta Ads creatives, elevated the landing page art direction, and made imagery, spacing, copy, and hierarchy feel compatible with a high-end real estate product.'}
            </p>
            <p className="micro-copy text-[14.5px]">
              {isPt
                ? 'O objetivo não era simplesmente aumentar o número bruto de formulários, mas preservar a captação e melhorar a intenção. Os números de volume se mantiveram estáveis, enquanto o time comercial passou a receber conversas mais maduras, com maior percepção de valor e melhor aderência ao perfil de compra.'
                : 'The goal was not simply increasing raw form volume, but preserving acquisition while improving intent. Lead volume remained stable, while the sales team started receiving more mature conversations, higher perceived value, and better purchase-profile fit.'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {[
              ['volume mantido', isPt ? 'captação via formulário preservada' : 'form acquisition preserved'],
              ['lead qualificado', isPt ? 'maior aderência ao perfil premium' : 'stronger premium-profile fit'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-teal-400/35 bg-teal-500/12 p-4 shadow-lg shadow-teal-500/10 dark:border-teal-300/25 dark:bg-teal-400/10">
                <div className="text-2xl font-display font-medium text-teal-500 dark:text-teal-300 leading-none drop-shadow-[0_0_18px_rgba(45,212,191,0.35)]">{value}</div>
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
              Solo BLVD / Case Preview
            </div>
            <div className="text-[10px] text-teal-500 font-mono hidden sm:block font-bold">Desktop View</div>
          </div>

          {/* Real Live Website Viewport Embed */}
          <div ref={desktopContainerRef} className="flex-1 bg-neutral-950 dark:bg-black relative p-0 text-left min-h-0 md:min-h-[380px] lg:min-h-[480px] overflow-hidden">
            <iframe
              src="https://landingpage-soloblv-x8ot.vercel.app/"
              style={{
                width: '1280px',
                height: `${100 / (desktopScale || 1)}%`,
                transform: `scale(${desktopScale || 1})`,
                transformOrigin: 'top left',
              }}
              className="absolute top-0 left-0 border-0 bg-neutral-950"
              title="Solo BLVD Desktop Live View"
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
              src="https://landingpage-soloblv-x8ot.vercel.app/"
              style={{
                width: '390px',
                height: `${100 / (phoneScale || 1)}%`,
                transform: `scale(${phoneScale || 1})`,
                transformOrigin: 'top left',
              }}
              className="absolute top-0 left-0 border-0 bg-neutral-950"
              title="Solo BLVD Mobile Live View"
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
            <span className="text-teal-500 font-mono text-xs">[05.1]</span> {isPt ? 'Identidade Minimalista e Performance' : 'Minimalist Identity & Performance'}
          </h4>
          <p className="micro-copy text-[13.5px]">
            {isPt ? (
              <>
                A Landing Page do <strong>Solo BLVD</strong> foi reposicionada para sustentar uma percepção premium desde o primeiro contato. Cada imagem, transição, espaçamento e bloco de copy passou a trabalhar para qualificar o desejo antes do formulário, filtrando melhor o interesse e reduzindo ruído para o time comercial.
              </>
            ) : (
              <>
                The <strong>Solo BLVD</strong> Landing Page was repositioned to sustain a premium perception from the first touchpoint. Every image, transition, spacing decision, and copy block works to qualify desire before the form, improving intent and reducing noise for the sales team.
              </>
            )}
          </p>
        </div>

        {/* Dynamic code blocks and timeline representation */}
        <div className="bg-neutral-50 dark:bg-[#0b0b0f] rounded-2xl border border-neutral-200 dark:border-neutral-900 p-5 space-y-4">
          <span className="text-[10px] font-mono text-teal-500 bg-teal-500/5 px-2 py-0.5 rounded-full border border-orange-500/20 uppercase tracking-widest block w-fit font-bold">
            {isPt ? 'Diretrizes de Marca' : 'Brand Guidelines'}
          </span>
          
          <div className="font-mono text-[10px] text-neutral-700 dark:text-neutral-300 space-y-2 bg-white dark:bg-[#050508] p-3 rounded-xl border border-neutral-200 dark:border-neutral-850/50">
            <div className="flex justify-between items-center text-[7.5px] text-neutral-500 dark:text-neutral-550 border-b border-neutral-200 dark:border-[#111115] pb-1.5 font-bold">
              <span>BRAND_IDENTITY_CONFIG</span>
              <span className="text-green-500">VALIDATED</span>
            </div>
            
            <p className="leading-snug">
              <span className="text-teal-700 dark:text-teal-500">const</span> soloBlvdLanding = <span className="text-teal-700 dark:text-teal-400">new</span> <span className="text-orange-700 dark:text-orange-400">HighEndRealEstateLP</span>(&#123;<br />
              &nbsp;&nbsp;aesthetic: <span className="text-green-700 dark:text-green-400 font-medium">"Sophisticated, Autoral, Minimalist"</span>,<br />
              &nbsp;&nbsp;focus: <span className="text-green-700 dark:text-green-400">"Qualified Lead Acquisition"</span>,<br />
              &nbsp;&nbsp;resolutionPriority: <span className="text-green-700 dark:text-green-400">"Retina-ready Visual Assets"</span>,<br />
              &nbsp;&nbsp;technology: <span className="text-[#ff50af]">"Modern UI Components &amp; Animations"</span><br />
              &#125;);
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
