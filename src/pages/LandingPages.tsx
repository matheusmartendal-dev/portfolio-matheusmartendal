import React from 'react';
import ProjectTimeshare from '../components/ProjectTimeshare';
import ProjectApparel from '../components/ProjectApparel';
import ProjectMonorail from '../components/ProjectMonorail';
import ProjectCharity from '../components/ProjectCharity';
import ProjectSoloBLV from '../components/ProjectSoloBLV';
import PageIntro from '../components/PageIntro';

interface LandingPagesProps {
  lang: 'pt' | 'en';
  darkMode: boolean;
  onBack: () => void;
}

export default function LandingPages({ lang, darkMode, onBack }: LandingPagesProps) {
  const isPt = lang === 'pt';

  const handleScrollToSegment = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const accordionProjects = [
    {
      id: '01',
      title: 'Hackathon BNDES',
      industry: isPt ? 'Microcrédito & Inclusão Produtiva' : 'Microcredit & Productive Inclusion',
      type: isPt ? 'Hackathon BNDES & Sai do Papel' : 'BNDES & Sai do Papel Hackathon',
      location: 'Rio de Janeiro, Brasil',
      target: '#project-timeshare',
      tag: 'Official LP',
      previewText: isPt ? 'Página da Maratona de Microcrédito.' : 'Microcredit Marathon Page.',
      description: isPt 
        ? 'Landing Page de alta performance desenvolvida para a Maratona de Inovação de Microcrédito BNDES & Sai do Papel, engajando desenvolvedores e designers no fomento ao impacto social no país.'
        : 'High-performance Landing Page developed for the BNDES & Sai do Papel Microcredit Innovation Marathon, engaging developers and designers in fostering social impact.',
      visualType: 'resort'
    },
    {
      id: '02',
      title: 'Desafio Inova Eneva',
      industry: isPt ? 'Energia, ESG & Baixo Carbono' : 'Energy, ESG & Low Carbon',
      type: isPt ? 'Desafio de Inovação Aberta' : 'Open Innovation Challenge',
      location: 'Rio de Janeiro, Brasil',
      target: '#project-apparel',
      tag: 'Official LP',
      previewText: isPt ? 'Acelerando a transição energética.' : 'Accelerating the energy transition.',
      description: isPt
        ? 'Landing Page oficial projetada para o Desafio Inova Eneva, engajando pesquisadores e inovadores na busca de soluções de eficiência, redução de pegada de carbono e novos horizontes na transição energética.'
        : 'Official Landing Page designed for the Inova Eneva Challenge, engaging researchers and innovators in the search for efficiency solutions, carbon footprint reduction, and new horizons.',
      visualType: 'jersey'
    },
    {
      id: '03',
      title: 'Sai do Papel | Open Innovation',
      industry: isPt ? 'Hackathons Corporativos' : 'Corporate Hackathons',
      type: isPt ? 'Aquisição de Clientes B2B' : 'B2B Client Acquisition',
      location: 'Rio de Janeiro, Brasil',
      target: '#project-monorail',
      tag: 'Official LP',
      previewText: isPt ? 'Conectando corporações e startups.' : 'Connecting corporations and startups.',
      description: isPt
        ? 'Landing page de alta conversão desenvolvida para atrair startups e novos clientes corporativos para o hub de inovação e investimentos Sai do Papel.'
        : 'High-conversion Landing Page developed to attract startups and new corporate clients to the Sai do Papel innovation and investment hub.',
      visualType: 'ledger'
    },
    {
      id: '04',
      title: 'Evento Instituto Empresariar',
      industry: isPt ? 'Empresas Familiares & Governança' : 'Family Business & Governance',
      type: isPt ? 'Evento, Autoridade & Conselhos' : 'Event, Authority & Boards',
      location: 'Fortaleza, Brasil',
      target: '#project-charity',
      tag: 'Official LP',
      previewText: isPt ? 'Consultorias e Conselhos Familiares.' : 'Family Consulting & Boards.',
      description: isPt
        ? 'Landing Page institucional projetada para o Instituto Empresariar, focado em consultoria estratégica avançada de empresas familiares, sucessão de legado e formação de conselheiros.'
        : 'Institutional Landing Page designed for the Empresariar Institute, focused on advanced strategic consulting for family businesses, legacy succession, and advisory board training.',
      visualType: 'charity'
    },
    {
      id: '05',
      title: 'Empreendimento Solo BLVD',
      industry: isPt ? 'Imobiliário de Alto Padrão' : 'High-End Real Estate',
      type: isPt ? 'Lead Qualificado & Posicionamento Premium' : 'Qualified Leads & Premium Positioning',
      location: 'Florianópolis, Brasil',
      target: '#project-soloblv',
      tag: 'Official LP',
      previewText: isPt ? 'Viva com sofisticação e design.' : 'Live with sophistication and design.',
      description: isPt
        ? 'Landing page de alta conversão desenvolvida para o empreendimento imobiliário premium Solo BLVD, com foco estético sofisticado, imagens ricas e CTAs inteligentes.'
        : 'High-conversion Landing Page built for the premium real estate project Solo BLVD, featuring a sophisticated aesthetic, rich imagery, and smart CTAs.',
      visualType: 'boutique'
    }
  ];

  return (
    <div className="flex flex-col space-y-16 md:space-y-24">
      <PageIntro
        lang={lang}
        onBack={onBack}
        eyebrow={isPt ? '[Portfólio · Landing Pages]' : '[Portfolio · Landing Pages]'}
        title="Landing Pages"
        description={isPt
          ? 'Páginas de alta conversão para eventos, hackathons, inovação aberta e mercado imobiliário — do posicionamento à interface final.'
          : 'High-conversion pages for events, hackathons, open innovation and real estate — from positioning to the final interface.'}
        count={accordionProjects.length}
        countLabel={isPt ? 'projetos' : 'projects'}
      />

        {/* PROJECTS COVER GALLERY CATALOG */}
        <section className="space-y-6 text-left pt-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 text-left">
            <div>
              <div className="flex items-center gap-3 mb-2 text-teal-500 dark:text-teal-300 font-mono tracking-widest text-[11px] font-bold">
                <span>01.</span>
                <span className="h-px w-8 bg-orange-500"></span>
                <span className="text-black dark:text-white uppercase font-bold text-xs">
                  {isPt ? '[Índice]' : '[Index]'}
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-normal text-black dark:text-white tracking-tight leading-[1.08] mt-1">
                {isPt ? 'Casos Selecionados' : 'Selected Work Cases'}
              </h3>
            </div>
            <span className="text-xs font-mono text-white bg-orange-500 px-3 py-1.5 rounded-full border border-white/20 select-none font-bold shadow-lg shadow-orange-500/20">
              {isPt ? '[Clique no projeto para navegar]' : '[Click on project to navigate]'}
            </span>
          </div>

          <div className="flex flex-col gap-5 mt-6 w-full">
            {accordionProjects.map((project) => {
              return (
                <button
                  key={project.id}
                  onClick={() => handleScrollToSegment(project.target)}
                  className={`w-full group text-left cursor-pointer rounded-[24px] border overflow-hidden flex flex-col md:flex-row items-stretch transition-all duration-300 relative shadow-sm active:scale-99 ${
                    darkMode 
                      ? 'bg-white/[0.045] hover:bg-white/[0.075] border-white/10 hover:border-orange-500/55' 
                      : 'bg-white/85 hover:bg-white border-[#e7dccf] hover:border-orange-500/45'
                  }`}
                  id={`project-nav-${project.id}`}
                >
                  {/* Decorative glowing gradient overlay on hover */}
                  <div className="absolute right-0 bottom-0 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/15 transition-all duration-300 pointer-events-none" />

                  {/* Left big block number, reminiscent of the accordion header block */}
                  <div className="bg-[#f4eadc] dark:bg-black/30 py-4 px-6 md:py-0 border-b md:border-b-0 md:border-r border-[#e7dccf] dark:border-white/10 flex flex-row md:flex-col items-center justify-center min-w-[85px] relative select-none gap-2.5 shrink-0">
                    <span className="text-[#374741] dark:text-neutral-300 font-mono text-3xl md:text-4xl font-normal tracking-tight leading-none group-hover:text-teal-500 dark:group-hover:text-teal-300 transition-colors duration-200">
                      {project.id}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500/30 group-hover:bg-orange-500 scale-100 group-hover:scale-125 transition-all duration-200" />
                  </div>

                  {/* Middle area */}
                  <div className="flex-1 p-5 md:p-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-[0.72fr_1.25fr_1.15fr] gap-3 md:gap-6 md:items-center text-left">
                      <span className="text-[11px] font-mono font-bold text-neutral-700 dark:text-neutral-300 tracking-widest uppercase">
                        {project.location.split(',')[0]}
                      </span>

                      <h4 className="text-xl md:text-[1.35rem] font-display font-medium text-[#102321] dark:text-white tracking-tight leading-tight transition-colors duration-200">
                        {project.title}
                      </h4>

                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {[project.industry, project.type].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#e6d8c9] dark:border-white/10 bg-white/80 dark:bg-white/[0.045] px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 transition-colors group-hover:border-orange-500/45 group-hover:text-teal-500 dark:group-hover:text-teal-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* 01. TIMESHARE REDESIGN MAIN MODULE */}
        <ProjectTimeshare lang={lang} />

        {/* 02. APPAREL CUSTOMIZATION CORE MODULE (WITH WORKING WRITER PREVIEW & TOOLBARS) */}
        <ProjectApparel lang={lang} />

        {/* 03. MONORAIL FINTECH SYSTEM MAIN MODULE (WITH SWITCHAROO PREVIEWS) */}
        <ProjectMonorail lang={lang} />

        {/* 04. INSTITUTO EMPRESARIAR */}
        <ProjectCharity lang={lang} />

        {/* 05. SOLO BLV BOUTIQUE LIVING */}
        <ProjectSoloBLV lang={lang} />

    </div>
  );
}
