import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Target, Wallet, Heart, Code2, Globe, Command, ArrowDown, ChevronRight, Share2, Smartphone, Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import PortfolioHub from './components/PortfolioHub';
import LandingPages from './pages/LandingPages';
import AutomacoesIA from './pages/AutomacoesIA';
import type { Route } from './types';

const ROUTES: Route[] = ['/', '/landing-pages', '/automacoes-ia'];

function getRouteFromHash(): Route {
  const path = window.location.hash.replace(/^#/, '') || '/';
  return (ROUTES as string[]).includes(path) ? (path as Route) : '/';
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [currentTime, setCurrentTime] = useState('');
  const whatsappIcon = new URL('./assets/whatsapp-icon.svg', import.meta.url).href;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setCurrentTime(`${timeStr} UTC-03:00`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simple hash router: #/landing-pages, #/automacoes-ia (works on any static host)
  const [route, setRoute] = useState<Route>(getRouteFromHash);
  const pendingAnchor = useRef<string | null>(null);

  useEffect(() => {
    const onLocationChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onLocationChange);
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('hashchange', onLocationChange);
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  // After a page change: jump to the requested anchor, or to the top of the new page
  useEffect(() => {
    const anchor = pendingAnchor.current;
    pendingAnchor.current = null;
    if (anchor) {
      requestAnimationFrame(() => document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [route]);

  const navigate = (to: Route, anchor?: string) => {
    if (to === route) {
      if (anchor) {
        document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    pendingAnchor.current = anchor ?? null;
    const url = to === '/' ? window.location.pathname + window.location.search : `#${to}`;
    window.history.pushState(null, '', url);
    setRoute(to);
  };

  const handleScrollToProjects = () => navigate('/', '#portfolio');

  const isPt = lang === 'pt';


  return (
    <div
      className="min-h-screen w-full relative overflow-hidden p-2 sm:p-5 md:p-8 lg:p-12 flex justify-center items-stretch font-sans selection:bg-orange-500 selection:text-white transition-colors duration-500"
      style={{
        background: darkMode
          ? 'radial-gradient(circle at 80% 0%, rgba(184, 107, 67, 0.3), transparent 34rem), radial-gradient(circle at 18% 0%, rgba(90, 128, 118, 0.22), transparent 30rem), linear-gradient(180deg, #102321 0%, #060908 46%, #050507 100%)'
          : 'radial-gradient(circle at 78% 0%, rgba(184, 107, 67, 0.18), transparent 34rem), radial-gradient(circle at 12% 0%, rgba(90, 128, 118, 0.2), transparent 28rem), linear-gradient(180deg, #fff6eb 0%, #f4eadc 48%, #fffaf1 100%)',
      }}
    >
      {/* Floating high-fidelity rounded internal studio canvas container */}
      <div
        className={`premium-card relative z-10 w-full max-w-[1240px] rounded-[30px] md:rounded-[46px] border p-3 sm:p-6 md:p-9 lg:p-11 flex flex-col justify-between transition-all duration-500 ${
          darkMode ? 'border-white/10' : 'border-white/70'
        }`}
        style={{
          backgroundColor: darkMode ? 'rgba(3, 6, 15, 0.92)' : 'rgba(255, 255, 255, 0.82)',
          color: darkMode ? '#fff6eb' : '#16221f',
          backdropFilter: 'blur(24px)',
        }}
      >
        
        {/* Universal header layout */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} route={route} onNavigate={navigate} />

        {/* Main Workspace Frame container */}
        <div className="flex-1 flex flex-col space-y-16 md:space-y-24">

          {route === '/landing-pages' && (
            <LandingPages lang={lang} darkMode={darkMode} onBack={() => navigate('/', '#portfolio')} />
          )}

          {route === '/automacoes-ia' && (
            <AutomacoesIA lang={lang} onBack={() => navigate('/', '#portfolio')} />
          )}

          {route === '/' && (<>
          {/* HERO GRID BLOCK (Brand Direction Studio premium layout reference) */}
          <section className="hero-grid-surface relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 min-h-[calc(100svh-128px)] md:min-h-[640px] pt-10 md:pt-12 pb-12 md:pb-14 px-5 md:px-8 lg:px-10 rounded-[30px] md:rounded-[38px] border border-white/20 dark:border-white/10 items-center lg:items-stretch text-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/8 to-black/75 pointer-events-none" />
            
            {/* Left Portion: Welcome Message, Navigation Trigger, and Giant Bold Typography signature */}
            <div className="relative z-10 hidden lg:flex lg:col-span-8 flex-col justify-between text-left space-y-12 order-2 lg:order-1">
              
              {/* Context and Narrative Tagline */}
              <div className="space-y-2">
                <span className="text-[11px] tracking-widest uppercase font-mono font-bold text-[#4f625d] dark:text-white/70 block leading-none">
                  Florianópolis, SC<span className="hidden sm:inline"> · </span>
                  <span className="block sm:inline mt-1.5 sm:mt-0">{isPt ? 'Disponível para remoto, híbrido e presencial' : 'Available for remote, hybrid & on-site'}</span>
                </span>
              </div>

              {/* Elegant Golden Suisse® styled main title section */}
              <div className="pt-0 md:pt-2 space-y-2">
                <h1 className="text-[2.35rem] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.02] font-display font-normal text-white">
                  Matheus Martendal<span className="font-light text-white/45 text-xl sm:text-2xl lg:text-3xl align-super ml-1">™</span>
                </h1>
                <h1 className="text-[1.45rem] sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-[1.14] font-display font-light text-white/95 max-w-4xl">
                  {/* Barra antes de cada cargo; a da 1ª posição de cada linha fica escondida pela margem negativa + overflow */}
                  <span className="block overflow-hidden">
                    <span className="flex flex-wrap -ml-[1.1em]">
                      {['AI Product Designer', 'AI Builder', 'Web & UI Design', 'AI Automation & Solutions', 'Digital Products'].map((role) => (
                        <span key={role} className="whitespace-nowrap before:content-['|'] before:inline-block before:w-[1.1em] before:text-center before:text-white/35 before:font-light">
                          {role}
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
              </div>

              {/* See Selected Projects Block */}
              <div className="flex flex-wrap items-center gap-4 pt-1 pb-1 md:gap-6 md:pt-2 md:pb-6">
                <button 
                  onClick={handleScrollToProjects}
                  className="py-3 px-6 bg-orange-500 hover:bg-teal-300 text-white hover:text-[#102321] rounded-full text-xs font-sans font-medium transition-all shadow-lg shadow-black/25 flex items-center gap-1 border border-white/15 cursor-pointer hover:scale-105 active:scale-98 duration-200"
                >
                  <span className="font-medium text-[13px] mr-0.5">+</span> {isPt ? 'Ver projetos' : 'See projects'}
                </button>
                <a
                  href="https://wa.me/5548988025100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-3 px-6 bg-white/10 hover:bg-teal-300 text-white hover:text-[#102321] rounded-full text-xs font-sans font-medium transition-all shadow-lg shadow-black/25 flex items-center gap-2 border border-white/15 cursor-pointer hover:scale-105 active:scale-98 duration-200 backdrop-blur"
                >
                  <img src={whatsappIcon} alt="" className="w-4 h-4 invert group-hover:invert-0" aria-hidden="true" /> WhatsApp
                </a>
              </div>

            </div>

            {/* Portrait and mobile introduction */}
            <div className="relative z-10 lg:col-span-4 flex flex-col justify-center items-start lg:items-stretch order-1 lg:order-2">
              <div className="hidden lg:block relative w-full max-w-[245px] sm:max-w-none lg:max-w-none mx-0 lg:mx-0 h-[330px] sm:h-auto sm:aspect-[4/5] lg:aspect-[3/4] rounded-[30px] md:rounded-[38px] overflow-hidden border border-white/15 shadow-2xl group bg-black/50 transition-all duration-500 hover:border-orange-500/60">
                <img
                  src="https://i.imgur.com/nl92NXC.png"
                  alt={isPt ? 'Retrato de Matheus Martendal' : 'Portrait of Matheus Martendal'}
                  width="896"
                  height="1195"
                  className="w-full h-full object-cover object-top grayscale brightness-80 group-hover:brightness-105 group-hover:grayscale-0 transition-all duration-700 hover:scale-103"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102321]/60 via-transparent to-white/10 pointer-events-none" />
              </div>

              <div className="block lg:hidden text-left max-w-[360px]">
                <span className="text-[11px] tracking-widest uppercase font-mono font-bold text-[#4f625d] dark:text-white/70 block mb-5">
                  Florianópolis, SC<span className="hidden sm:inline"> · </span>
                  <span className="block sm:inline mt-1.5 sm:mt-0">{isPt ? 'Disponível para remoto, híbrido e presencial' : 'Available for remote, hybrid & on-site'}</span>
                </span>
                <h1 className="text-[3.55rem] tracking-tight leading-[1.02] font-display font-normal text-white">
                  Matheus Martendal
                </h1>
                <h2 className="text-[1.45rem] sm:text-[1.65rem] tracking-tight leading-[1.14] font-display font-light text-white/95 mt-4">
                  {/* Barra antes de cada cargo; a da 1ª posição de cada linha fica escondida pela margem negativa + overflow */}
                  <span className="block overflow-hidden">
                    <span className="flex flex-wrap -ml-[1.1em]">
                      {['AI Product Designer', 'AI Builder', 'Web & UI Design', 'AI Automation & Solutions', 'Digital Products'].map((role) => (
                        <span key={role} className="whitespace-nowrap before:content-['|'] before:inline-block before:w-[1.1em] before:text-center before:text-white/35 before:font-light">
                          {role}
                        </span>
                      ))}
                    </span>
                  </span>
                </h2>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleScrollToProjects}
                    className="py-3 px-6 bg-orange-500 hover:bg-teal-300 text-white hover:text-[#102321] rounded-full text-xs font-sans font-medium transition-all shadow-lg shadow-black/25 inline-flex items-center gap-1 border border-white/15 cursor-pointer active:scale-98 duration-200"
                  >
                    <span className="font-medium text-[13px] mr-0.5">+</span> {isPt ? 'Ver projetos' : 'See projects'}
                  </button>
                  <a
                    href="https://wa.me/5548988025100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-3 px-6 bg-white/10 hover:bg-teal-300 text-white hover:text-[#102321] rounded-full text-xs font-sans font-medium transition-all shadow-lg shadow-black/25 inline-flex items-center gap-2 border border-white/15 cursor-pointer active:scale-98 duration-200 backdrop-blur"
                  >
                    <img src={whatsappIcon} alt="" className="w-4 h-4 invert group-hover:invert-0" aria-hidden="true" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

           {/* SEÇÃO 02 - TECH STACKS & ECOSYSTEM */}
          <section id="tech-stack" className="space-y-8 pt-10 pb-12 border-b border-[#e7dccf] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 text-left">
              <div>
                <div className="flex items-center gap-3 mb-2 text-teal-500 dark:text-teal-300 font-mono tracking-widest text-[11px] font-bold">
                  <span>02.</span>
                  <span className="h-px w-8 bg-orange-500"></span>
                  <span className="text-black dark:text-white uppercase font-bold text-xs">[Ecosystem]</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-normal text-black dark:text-white tracking-tight leading-[1.08] mt-1">
                  {isPt ? 'Stacks de Design & Engenharia' : 'Design & Engineering Stacks'}
                </h3>
              </div>
            </div>

            {/* Clean mono stack items layout without descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch">
              
              {/* Category 1: Frontend & Foundations */}
              <div className="premium-card bg-white/80 dark:bg-white/[0.045] rounded-[24px] border border-[#e7dccf] dark:border-white/10 p-6 flex h-full min-h-[220px] flex-col justify-start items-start space-y-4 backdrop-blur">
                <div className="min-h-[48px]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-orange-500"></span>
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-800 dark:text-white">
                      {isPt ? 'Desenvolvimento Front-end & Fundações' : 'Frontend Dev & Foundations'}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'React JS',
                    'TypeScript',
                    'WordPress',
                    'Webflow',
                    'Framer',
                    'GitHub'
                  ].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-xl border border-[#e6d8c9] dark:border-white/10 text-xs font-semibold bg-white/90 dark:bg-black/35 font-sans text-[#374741] dark:text-neutral-200 active:scale-95 transition-all shadow-sm hover:border-orange-500/50 hover:text-teal-500 dark:hover:text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2: Design Suite & Prototyping */}
              <div className="premium-card bg-white/80 dark:bg-white/[0.045] rounded-[24px] border border-[#e7dccf] dark:border-white/10 p-6 flex h-full min-h-[220px] flex-col justify-start items-start space-y-4 backdrop-blur">
                <div className="min-h-[48px]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-orange-500"></span>
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-800 dark:text-white">
                      {isPt ? 'Design & Prototipagem' : 'Design & Prototyping'}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    'Figma',
                    'Adobe Photoshop',
                    'Adobe Illustrator',
                    'Adobe InDesign',
                    'Adobe Lightroom',
                    'Adobe XD'
                  ].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-xl border border-[#e6d8c9] dark:border-white/10 text-xs font-semibold bg-white/90 dark:bg-black/35 font-sans text-[#374741] dark:text-neutral-200 active:scale-95 transition-all shadow-sm hover:border-orange-500/50 hover:text-teal-500 dark:hover:text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3: Cognitive Assistants & AI Studio */}
              <div className="premium-card bg-white/80 dark:bg-white/[0.045] rounded-[24px] border border-[#e7dccf] dark:border-white/10 p-6 flex h-full min-h-[220px] flex-col justify-start items-start space-y-4 backdrop-blur">
                <div className="min-h-[48px]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-orange-500"></span>
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-800 dark:text-white">
                      {isPt ? 'Círculos Cognitivos & IA' : 'Cognitive Loops & AI'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 w-full">
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Claude AI',
                      'AI Studio',
                      'ChatGPT',
                      'Antigravity',
                      'Higgsfield',
                      'Gemini AI',
                      'n8n'
                    ].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 rounded-xl border border-[#e6d8c9] dark:border-white/10 text-xs font-semibold bg-white/90 dark:bg-black/35 font-sans text-[#374741] dark:text-neutral-200 active:scale-95 transition-all shadow-sm hover:border-orange-500/50 hover:text-teal-500 dark:hover:text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

        {/* 03. PORTFOLIO HUB — cards para as páginas dedicadas */}
        <PortfolioHub lang={lang} darkMode={darkMode} onNavigate={navigate} />
          </>)}

        {/* ABOUT ME BIOGRAPHY & INTERACTIVE DIRECT EMAIL ACTION DESK */}
        <About lang={lang} />

        </div>

        {/* Floating back-to-top segment with sunset/night mode icons */}
        <footer className="footer-grid-surface w-full pt-12 md:pt-16 pb-10 md:pb-12 mt-6 md:mt-8 rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/15 text-center text-xs font-mono text-white/70 flex flex-col justify-center items-center gap-3">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
          <div className="relative z-10 flex justify-center mb-1">
            <img 
              src="https://i.imgur.com/JRc2tPW.png" 
              alt="Matheus Martendal Logo" 
              width="1292"
              height="1268"
              className="logo-cinema-hover h-10 md:h-12 w-auto object-contain select-none transition-all duration-300 hover:scale-110 brightness-0 invert cursor-pointer"
              onClick={() => navigate('/')}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10">
            © 2026 Matheus Martendal.
          </div>
        </footer>

      </div>

      {/* FIXED FLOATING DARK MODE TOGGLE (Acccompanies visitor on the entire page in the bottom-right corner) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed bottom-6 right-6 z-50 rounded-full border shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-orange-500/20
          ${darkMode 
            ? 'h-14 w-14 md:h-16 md:w-16 bg-orange-500 border-orange-500/20 text-white' 
            : 'h-14 w-14 md:h-16 md:w-16 bg-[#1a1a1e] border-neutral-700/80'
          }`}
        title={darkMode 
          ? (isPt ? 'Alternar para Modo Claro' : 'Switch to Light Mode') 
          : (isPt ? 'Alternar para Modo Escuro' : 'Switch to Dark Mode')
        }
      >
        {darkMode ? (
          <Sun className="w-6 h-6 md:w-7 md:h-7 text-white" />
        ) : (
          <Moon className="w-6 h-6 md:w-7 md:h-7 text-teal-500 dark:text-teal-300" />
        )}
      </button>

    </div>
  );
}
