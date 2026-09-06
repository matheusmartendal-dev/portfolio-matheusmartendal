import React from 'react';
import { Linkedin, Github, Award, Mail } from 'lucide-react';

interface AboutProps {
  lang: 'pt' | 'en';
}

export default function About({ lang }: AboutProps) {
  const isPt = lang === 'pt';
  const whatsappIcon = new URL('../assets/whatsapp-icon.svg', import.meta.url).href;

  return (
    <section id="about" className="pt-24 border-t border-[#e7dccf] dark:border-white/10 pb-12 md:pb-16 text-left">
      {/* Narrative & biography */}
      <div className="max-w-4xl space-y-9">
        <div>
          <div className="flex items-center gap-3 mb-2 text-teal-500 dark:text-teal-300 font-mono tracking-widest text-[11px] font-bold">
            <span>06.</span>
            <span className="h-px w-8 bg-orange-500"></span>
            <span className="text-black dark:text-white uppercase font-bold text-xs">
              {isPt ? '[Sobre mim]' : '[About me]'}
            </span>
          </div>
          <div className="relative w-full max-w-[245px] h-[330px] mt-6 mb-8 rounded-[28px] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl bg-[#ead5c1] dark:bg-[#102321]">
            <img
              src="https://i.imgur.com/nl92NXC.png"
              alt={isPt ? "Retrato de Matheus Martendal" : "Portrait of Matheus Martendal"}
              width="896"
              height="1195"
              className="w-full h-full object-cover object-top grayscale brightness-90 dark:brightness-75"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#102321] dark:text-white tracking-tight leading-[1.08] mt-1 mb-5 max-w-4xl">
            {isPt 
              ? '+6 Anos Desenvolvendo Experiências Digitais Focadas em Conversão' 
              : '+6 Years Developing Digital Experiences Focused on Conversion'}
          </h3>
        </div>

        <div className="space-y-6 copy-text">
          {isPt ? (
            <>
              <p>Sou Matheus Martendal, Web Designer e Desenvolvedor Frontend, com mais de 6 anos de experiência e mais de 40 projetos digitais entregues. Crio sites, landing pages e interfaces responsivas que conectam os objetivos do negócio às necessidades de quem navega.</p>
              <p>Participo de cada etapa do projeto, do briefing à publicação: organizo a informação, desenvolvo wireframes e protótipos no Figma e implemento as interfaces com WordPress, HTML, CSS e JavaScript. Meu foco é unir clareza visual, usabilidade e conversão.</p>
              <p>Minha trajetória passa por agências, produtos educacionais premium e projetos para mais de 20 clientes como freelancer. Trabalhando junto a equipes de marketing, produto e liderança, transformo ideias e requisitos de negócio em experiências digitais consistentes.</p>
              <p>Sou formado em Design pela UNICESUSC e estou em Florianópolis, com disponibilidade para trabalho remoto. Fora do computador, gosto de futebol, churrasco, tecnologia e de conhecer novas culturas.</p>
            </>
          ) : (
            <>
              <p>I’m Matheus Martendal, a Web Designer and Frontend Developer with over 6 years of experience and more than 40 digital projects delivered. I create websites, landing pages, and responsive interfaces that connect business goals with the needs of the people using them.</p>
              <p>I work across every stage of a project, from brief to launch: structuring information, developing wireframes and prototypes in Figma, and implementing interfaces with WordPress, HTML, CSS, and JavaScript. My focus is on visual clarity, usability, and conversion.</p>
              <p>My experience spans agencies, premium educational products, and freelance projects for over 20 clients. Working alongside marketing, product, and leadership teams, I turn ideas and business requirements into consistent digital experiences.</p>
              <p>I hold a bachelor’s degree in Design from UNICESUSC and am based in Florianópolis, available for remote work. Away from the computer, I enjoy football, barbecue, technology, and discovering new cultures.</p>
            </>
          )}
        </div>

        {/* Social Channels List with elegant hover outlines */}
        <div className="space-y-3 pt-4">
          <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider block">
            {isPt ? 'Encontre-me na web:' : 'Find me across the web:'}
          </span>
          <div className="flex flex-wrap gap-3">
            <a 
              href="https://www.linkedin.com/in/matheus-martendal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/75 dark:bg-white/[0.045] border border-[#e7dccf] dark:border-white/10 text-[#4f625d] dark:text-neutral-300 hover:border-orange-500 dark:hover:border-orange-500 rounded-xl text-xs font-mono transition-all uppercase cursor-pointer"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a 
              href="https://www.behance.net/matheusmartend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/75 dark:bg-white/[0.045] border border-[#e7dccf] dark:border-white/10 text-[#4f625d] dark:text-neutral-300 hover:border-orange-500 dark:hover:border-orange-500 rounded-xl text-xs font-mono transition-all uppercase cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" /> Behance
            </a>
            <a 
              href="https://github.com/matheusmartendal-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/75 dark:bg-white/[0.045] border border-[#e7dccf] dark:border-white/10 text-[#4f625d] dark:text-neutral-300 hover:border-orange-500 dark:hover:border-orange-500 rounded-xl text-xs font-mono transition-all uppercase cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* CONTACT DESK - REPLACED WITH FUNNY PORTUGUESE CTA */}
      <div className="mt-14 md:mt-16 border-t border-[#e7dccf] dark:border-white/10 pt-10 md:pt-12 max-w-3xl mx-auto text-center space-y-5">
        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
          {isPt ? '[ CONTATO ]' : '[ CONTACT DESK ]'}
        </span>
        
        <div className="premium-card bg-white/85 dark:bg-white/[0.045] border border-[#e7dccf] dark:border-white/10 rounded-[28px] p-8 md:p-12 relative overflow-hidden backdrop-blur">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/12 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-300/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-display font-normal text-[#102321] dark:text-white tracking-tight leading-snug">
              {isPt 
                ? 'Fique à vontade para entrar em contato e marcar uma reunião.' 
                : 'Feel free to get in touch and schedule a quick meeting.'}
            </h4>
            
            <div className="pt-4 flex flex-col items-center justify-center gap-4">
              <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:matheus.martendal@gmail.com"
                  className="w-full sm:w-[210px] px-8 py-4 bg-orange-500 hover:bg-teal-300 text-white hover:text-[#102321] text-xs font-mono font-bold uppercase tracking-wider rounded-full transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" /> {isPt ? 'Enviar e-mail' : 'Send email'}
                </a>
                <a
                  href="https://wa.me/5548988025100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-[210px] px-8 py-4 bg-[#102321] hover:bg-teal-300 text-white hover:text-[#102321] dark:bg-white/10 dark:hover:bg-teal-300 text-xs font-mono font-bold uppercase tracking-wider rounded-full transition-all shadow-lg hover:shadow-teal-300/20 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 border border-white/10"
                >
                  <img src={whatsappIcon} alt="" className="w-4 h-4 invert" aria-hidden="true" /> WhatsApp
                </a>
              </div>
              <span className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                {isPt ? 'ou direto para:' : 'or directly to:'}{' '}
                <b className="text-neutral-800 dark:text-neutral-200">matheus.martendal@gmail.com</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
