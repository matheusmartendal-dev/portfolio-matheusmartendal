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
          <div className="lg:hidden relative w-full max-w-[245px] h-[330px] mt-6 mb-8 rounded-[28px] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl bg-[#ead5c1] dark:bg-[#102321]">
            <img
              src="https://i.imgur.com/nl92NXC.png"
              alt="Matheus Martendal Portrait piece"
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
              <p>
                Sou um designer e desenvolvedor front-end que gosta de criar páginas que fazem sentido para quem visita e para quem vende. Nos últimos 6 anos, trabalhei principalmente com sites, landing pages e experiências digitais focadas em conversão.
              </p>
              <p>
                Gosto de participar do projeto de ponta a ponta. Entender o problema, organizar a narrativa, desenhar no Figma, pensar em CRO, implementar no front-end e depois olhar os dados para ajustar o que precisa melhorar. Para mim, uma boa interface não é só bonita. Ela precisa carregar bem, ser fácil de entender e ajudar a pessoa certa a tomar uma decisão.
              </p>
              <p>
                Boa parte da minha experiência veio trabalhando perto de times de marketing, tráfego pago e vendas. Isso me ensinou a olhar para uma página como parte de um funil real, onde design, copy, anúncios, comportamento do usuário e atendimento comercial precisam conversar entre si.
              </p>
              <p>
                Também sou bem curioso por tecnologia e inteligência artificial aplicada ao design de produtos. Gosto de testar ferramentas, criar processos mais rápidos e encontrar jeitos de transformar boas ideias em experiências digitais mais claras, úteis e bonitas.
              </p>
              <p>
                Fora do computador, como todo brasileiro, sou apaixonado por futebol, churrasco e tecnologia. Também adoro conhecer culturas diferentes, então minha cabeça já costuma estar pensando na próxima viagem.
              </p>
              <p>
                No fim, eu gosto de trabalhar com pessoas que querem construir algo com intenção. Quando estratégia, design, tecnologia e marketing caminham juntos, o projeto fica mais leve de executar e muito mais forte para gerar resultado.
              </p>
            </>
          ) : (
            <>
              <p>
                I am a designer and front-end developer who enjoys creating pages that make sense for both the visitor and the business behind them. Over the last 6 years, I have worked mostly with websites, landing pages, and conversion-focused digital experiences.
              </p>
              <p>
                I like being involved from beginning to end. Understanding the problem, shaping the narrative, designing in Figma, thinking through CRO, building the front end, and then looking at the data to improve what needs attention. To me, a good interface is not only beautiful. It needs to load well, feel clear, and help the right person make a decision.
              </p>
              <p>
                A lot of my experience came from working closely with marketing, paid traffic, and sales teams. That taught me to see a page as part of a real funnel, where design, copy, ads, user behavior, and commercial follow-up all need to work together.
              </p>
              <p>
                I am also deeply curious about technology and artificial intelligence applied to product design. I like testing tools, improving workflows, and finding ways to turn good ideas into clearer, more useful, and better-looking digital experiences.
              </p>
              <p>
                Away from the computer, like a good Brazilian, I love football, barbecue, and technology. I also love getting to know different cultures, so my mind is usually already thinking about the next trip.
              </p>
              <p>
                In the end, I enjoy working with people who want to build with intention. When strategy, design, technology, and marketing move together, the work feels lighter to execute and much stronger in results.
              </p>
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
