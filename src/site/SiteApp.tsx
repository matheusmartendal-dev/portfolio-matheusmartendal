import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './site.css';
import { getContent, type CaseId, type Lang } from './content';
import CaseModal from './sections/CaseModal';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Mosaic, { type LoopShot } from './sections/Mosaic';
import Work from './sections/Work';
import { Statement, Services, Process } from './sections/Studio';
import Automations from './sections/Automations';
import { About, Footer } from './sections/AboutFooter';
import AutomationsPage from './AutomationsPage';

type Route = '/' | '/automacoes-ia';
const ART = `${import.meta.env.BASE_URL}hero/art-produx.jpg`;

// Fotos dos projetos no Behance (versão 1400px), intercaladas para o loop da 2ª dobra.
// Sem as pranchas de texto ("About the project").
const BH = 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/';
const BASELINE = ['106112234194477.68beed933d474.png', 'e4d097234194477.68beed933c75f.png', '1e0088234194477.68beed933cf88.png', '16dca9234194477.68beed933b944.png', 'ae9177234194477.68beed933b055.png'];
const MOUNTAIN = ['2903bc234128291.68bda2f8edf78.png', 'de6ff4234128291.68bda2f8ee70d.png', '33688f234128291.68bda2f8eb89f.png', 'ea4539234128291.68bda2f8ec72c.png', 'ef6902234128291.68bda2f8ed98c.png', '76b6f1234128291.68bda2f8ec0c1.png'];
const SHOTS: LoopShot[] = MOUNTAIN.flatMap((m, i) => [
  { src: BH + m, project: 'Mountain Flow Club' },
  ...(BASELINE[i] ? [{ src: BH + BASELINE[i], project: 'Baseline Club' }] : []),
]);

function readRoute(): Route {
  return window.location.hash.replace(/^#/, '') === '/automacoes-ia' ? '/automacoes-ia' : '/';
}

export default function SiteApp() {
  const [lang, setLang] = useState<Lang>('pt');
  const [route, setRoute] = useState<Route>(readRoute);
  const pending = useRef<string | null>(null);
  const [openCase, setOpenCase] = useState<CaseId | null>(null);
  const c = getContent(lang);

  useLayoutEffect(() => {
    document.documentElement.classList.add('site-v2');
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    requestAnimationFrame(() => document.documentElement.classList.add('loaded'));
  }, [lang]);

  useEffect(() => {
    const on = () => setRoute(readRoute());
    window.addEventListener('hashchange', on);
    window.addEventListener('popstate', on);
    return () => { window.removeEventListener('hashchange', on); window.removeEventListener('popstate', on); };
  }, []);

  useEffect(() => {
    const id = pending.current;
    pending.current = null;
    if (id) requestAnimationFrame(() => scrollToId(id));
    else window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [route]);

  const scrollToId = (id: string) => {
    if (id === 'top') return window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goHome = (id?: string) => {
    if (route === '/') return id ? scrollToId(id) : scrollToId('top');
    pending.current = id ?? null;
    history.pushState(null, '', window.location.pathname + window.location.search);
    setRoute('/');
  };

  const openAutomations = () => {
    history.pushState(null, '', '#/automacoes-ia');
    setRoute('/automacoes-ia');
  };

  return (
    <div className="v2">
      <a href="#trabalhos" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] f-mono uppercase text-xs bg-[var(--c-smoke)] text-[var(--c-ink)] px-3 py-2">
        {lang === 'pt' ? 'Pular para os trabalhos' : 'Skip to work'}
      </a>
      <Header c={c} lang={lang} setLang={setLang} onNav={(id) => goHome(id)} isHome={route === '/'} />

      {route === '/' ? (
        <main>
          <Hero c={c} />
          <Mosaic image={ART} shots={SHOTS} />
          <Work c={c} onCase={setOpenCase} />
          <Statement c={c} onContact={() => scrollToId('contato')} />
          <Services c={c} />
          <Process c={c} image={ART} />
          <Automations c={c} onOpen={openAutomations} />
          <About c={c} />
        </main>
      ) : (
        <AutomationsPage c={c} lang={lang} onBack={() => goHome('automacoes')} />
      )}

      <Footer c={c} onNav={(id) => goHome(id)} />
      <CaseModal data={openCase ? c.cases[openCase] : null} c={c} onClose={() => setOpenCase(null)} />
      <div className="grain" aria-hidden="true" />
    </div>
  );
}
