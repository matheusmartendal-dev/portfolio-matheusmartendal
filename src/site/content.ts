// Conteúdo do portfólio (PT/EN). Fatos e descrições vêm do portfólio anterior.
export type Lang = 'pt' | 'en';

export interface Work {
  id: string;
  title: string;
  client: string;
  desc: string;
  tags: string[];
  url?: string;      // site no ar
  image?: string;    // capa estática
  cover?: string;    // mockup usado no card (substitui a miniatura ao vivo)
  coverPos?: string; // enquadramento do mockup no card vertical
  caseId?: CaseId;   // abre o modal do case ao clicar
  city: string;
}

export type CaseId = 'bndes' | 'soloblvd' | 'saidopapel' | 'empresariar' | 'eneva';

export interface CaseStudy {
  id: CaseId;
  index: string;
  title: string;
  client: string;
  year: string;
  role: string;
  tags: string[];
  cover: string;
  gallery?: string[];    // mockups extras
  liveUrl?: string;      // site no ar → mockups web + smartphone interativos
  screenshot?: string;   // sem site no ar → página inteira rolável no mockup web
  behanceUrl?: string;
  intro: string;
  metrics: [string, string][];
  sections: { label: string; paragraphs: string[] }[];
}

export function getContent(lang: Lang) {
  const pt = lang === 'pt';
  const t = (a: string, b: string) => (pt ? a : b);

  const B = `${import.meta.env.BASE_URL}cases/`;

  const works: Work[] = [
    {
      id: 'bndes',
      title: 'Hackathon BNDES',
      client: 'BNDES & Sai do Papel',
      desc: t(
        'Landing page de alta performance para a maratona de inovação em microcrédito, engajando desenvolvedores e designers no impacto social.',
        'High-performance landing page for the microcredit innovation marathon, engaging developers and designers in social impact.'
      ),
      tags: t('Web design,Front-end,UX,Conversão', 'Web design,Front-end,UX,Conversion').split(','),
      url: 'https://landingpage-hackathon-bndes.vercel.app/',
      cover: `${B}bndes-browser-mockup.webp`,
      caseId: 'bndes',
      city: 'Rio de Janeiro',
    },
    {
      id: 'soloblvd',
      title: 'Solo BLVD',
      client: t('Imobiliário de alto padrão', 'High-end real estate'),
      desc: t(
        'Landing page premium para empreendimento imobiliário, com estética sofisticada, imagens ricas e CTAs para lead qualificado.',
        'Premium landing page for a real estate development, with a refined aesthetic, rich imagery and CTAs for qualified leads.'
      ),
      tags: t('Web design,Posicionamento,Leads', 'Web design,Positioning,Leads').split(','),
      url: 'https://landingpage-soloblv-x8ot.vercel.app/',
      cover: `${B}soloblvd-mockup.webp`,
      coverPos: '50% 50%',
      caseId: 'soloblvd',
      city: 'Florianópolis',
    },
    {
      id: 'saidopapel',
      title: 'Sai do Papel',
      client: 'Open Innovation',
      desc: t(
        'Landing page de alta conversão para atrair startups e clientes corporativos para o hub de inovação e hackathons.',
        'High-conversion landing page that brings startups and corporate clients to the innovation and hackathon hub.'
      ),
      tags: t('Web design,Aquisição B2B,Front-end', 'Web design,B2B acquisition,Front-end').split(','),
      url: 'https://landingpage-hackathon-saidopapel.vercel.app/',
      cover: `${B}saidopapel-mockup.webp`,
      caseId: 'saidopapel',
      city: 'Rio de Janeiro',
    },
    {
      id: 'empresariar',
      title: 'Instituto Empresariar',
      client: t('Evento institucional', 'Institutional event'),
      desc: t(
        'Landing page institucional para consultoria de empresas familiares, sucessão de legado e formação de conselheiros.',
        'Institutional landing page for family-business consulting, legacy succession and board training.'
      ),
      tags: t('Web design,Evento,Autoridade', 'Web design,Event,Authority').split(','),
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/948496228599275.68557fb39d553.png',
      cover: `${B}empresariar-mockup.webp`,
      coverPos: '58% 50%',
      caseId: 'empresariar',
      city: 'Fortaleza',
    },
    {
      id: 'eneva',
      title: 'Desafio Inova Eneva',
      client: 'Eneva',
      desc: t(
        'Página oficial do desafio de inovação aberta em energia e baixo carbono, conectando pesquisadores a novas soluções para a transição energética.',
        'Official page for the open innovation challenge in energy and low carbon, connecting researchers to new energy-transition solutions.'
      ),
      tags: t('Web design,Front-end,Inovação aberta', 'Web design,Front-end,Open innovation').split(','),
      url: 'https://landingpage-desafioinovaeneva.vercel.app/',
      cover: `${B}eneva-mockup.webp`,
      caseId: 'eneva',
      city: 'Rio de Janeiro',
    },
  ];

  const cases: Record<CaseId, CaseStudy> = {
    bndes: {
      id: 'bndes',
      index: '01/',
      title: 'Hackathon Microcrédito BNDES',
      client: 'BNDES & Sai do Papel',
      year: 'Rio de Janeiro',
      role: t('Web design, front-end e estratégia de aquisição', 'Web design, front-end and acquisition strategy'),
      tags: t('Landing page de alta performance,Responsivo,Analytics', 'High-performance landing page,Responsive,Analytics').split(','),
      cover: `${B}bndes-browser-mockup.webp`,
      gallery: [`${B}bndes-mockup.webp`],
      liveUrl: 'https://landingpage-hackathon-bndes.vercel.app/',
      intro: t(
        'O projeto nasceu de um problema claro: em uma edição anterior, o hackathon enfrentou dificuldade para atingir a marca mínima de inscritos. A página antiga carregava devagar, tinha fricção de usabilidade no mobile e perdia potenciais participantes antes mesmo de explicar o valor da maratona.',
        'This project started from a clear acquisition problem: in a previous edition, the hackathon struggled to reach the minimum registration target. The old landing page loaded slowly, created mobile usability friction, and lost potential participants before the challenge value was fully understood.'
      ),
      metrics: [
        ['-38%', t('abandono no carregamento inicial', 'initial load abandonment')],
        ['+52%', t('conversão em clique para inscrição', 'click-to-registration conversion')],
        ['1.9s', t('tempo médio até a primeira dobra', 'average first-fold load')],
        ['+31%', t('profundidade média de scroll', 'average scroll depth')],
      ],
      sections: [
        {
          label: t('Problema e solução/', 'Problem and solution/'),
          paragraphs: [
            t(
              'Reposicionamos a landing page para falar diretamente com desenvolvedores, designers e especialistas em IA: proposta de valor na primeira dobra, hierarquia visual mais objetiva, blocos de recompensa e critérios técnicos mais claros, além de uma arquitetura mais leve para reduzir abandono no carregamento.',
              'We repositioned the landing page to speak directly to developers, designers, and AI specialists: first-fold value proposition, clearer visual hierarchy, reward and technical criteria blocks, plus a lighter architecture to reduce load abandonment.'
            ),
            t(
              'Também estruturamos parcerias com empresas e comunidades que já possuíam bases qualificadas para hackathons, conectando mídia paga, UTMs, Google Analytics e Hotjar para entender origem do tráfego, profundidade de rolagem, cliques nos CTAs e pontos de desistência.',
              'We also structured partnerships with companies and communities that already had qualified hackathon audiences, connecting paid media, UTMs, Google Analytics, and Hotjar to understand traffic sources, scroll depth, CTA clicks, and drop-off points.'
            ),
          ],
        },
        {
          label: t('Foco no público desenvolvedor/', 'Developer-oriented focus/'),
          paragraphs: [
            t(
              'Diferente de portais corporativos burocráticos, a landing page do Hackathon BNDES foi modelada para estabelecer um diálogo de alto nível técnico. Com diagramação limpa, blocos de especificações detalhados e paleta contrastante, o layout engaja o ecossistema tecnológico desde a primeira dobra.',
              'Unlike complex public-sector portals, the BNDES Hackathon landing page was designed to speak directly to developers. With clean layouts, detailed spec blocks and a high-contrast palette, it engages the tech ecosystem from the very first fold.'
            ),
          ],
        },
        {
          label: t('Impacto social/', 'Social impact/'),
          paragraphs: [
            t(
              'A democratização do crédito no Brasil depende de canais fluidos e inclusivos de ponta a ponta. Através da união entre o BNDES e a aceleradora Sai do Papel, a maratona buscou desvendar desafios de desbancarização e inclusão produtiva, com R$ 30 mil em premiação.',
              'Democratizing credit in Brazil depends on smooth, inclusive end-to-end channels. Through the partnership between BNDES and the Sai do Papel accelerator, the marathon tackled unbanking and productive inclusion challenges, with R$ 30k in prizes.'
            ),
            t(
              'As soluções avaliadas baseiam-se em tecnologias leves e escaláveis, prontas para atingir milhões de microempreendedores informais, autônomos e cooperativas. Todos os prêmios foram pagos aos projetos de destaque após validação direta das equipes do BNDES.',
              'The evaluated solutions rely on lightweight, scalable technologies ready to reach millions of informal micro-entrepreneurs, freelancers and cooperatives. All prizes were paid to the standout projects after direct validation by BNDES teams.'
            ),
          ],
        },
      ],
    },

    soloblvd: {
      id: 'soloblvd',
      index: '02/',
      title: 'Solo BLVD',
      client: 'Zilli Construtora',
      year: 'São José, SC',
      role: t('Direção visual, landing page e criativos de mídia', 'Art direction, landing page and ad creatives'),
      tags: t('Mercado imobiliário premium,Google Ads,Meta Ads', 'Premium real estate,Google Ads,Meta Ads').split(','),
      cover: `${B}soloblvd-mockup.webp`,
      liveUrl: 'https://landingpage-soloblv-x8ot.vercel.app/',
      intro: t(
        'O Solo BLVD já tinha uma boa captação de contatos via formulário, mas o problema estava na qualidade: muitos leads chegavam sem fit real para um empreendimento premium. Os anúncios performavam em volume, mas a comunicação visual transmitia uma percepção mais próxima de um produto de baixo custo.',
        'Solo BLVD already had good form lead volume, but the problem was quality: many leads did not have real fit for a premium real estate product. Ads were generating volume, but the visual communication made the project feel closer to a low-cost offer.'
      ),
      metrics: [
        [t('Volume mantido', 'Volume kept'), t('captação via formulário preservada', 'form acquisition preserved')],
        [t('Lead qualificado', 'Qualified leads'), t('maior aderência ao perfil premium', 'stronger premium-profile fit')],
      ],
      sections: [
        {
          label: t('Solução/', 'Solution/'),
          paragraphs: [
            t(
              'A solução foi alinhar a promessa dos anúncios com a experiência da página. Redesenhamos as artes de Google Ads e Meta Ads, elevamos a direção visual da landing page e deixamos imagem, espaçamento, copy e hierarquia mais compatíveis com um produto imobiliário de alto padrão.',
              'The solution was to align ad promise with landing page experience. We redesigned Google Ads and Meta Ads creatives, elevated the landing page art direction, and made imagery, spacing, copy, and hierarchy feel compatible with a high-end real estate product.'
            ),
            t(
              'O objetivo não era simplesmente aumentar o número bruto de formulários, mas preservar a captação e melhorar a intenção. Os números de volume se mantiveram estáveis, enquanto o time comercial passou a receber conversas mais maduras, com maior percepção de valor e melhor aderência ao perfil de compra.',
              'The goal was not simply increasing raw form volume, but preserving acquisition while improving intent. Lead volume remained stable, while the sales team started receiving more mature conversations, higher perceived value, and better purchase-profile fit.'
            ),
          ],
        },
        {
          label: t('Identidade minimalista e performance/', 'Minimalist identity and performance/'),
          paragraphs: [
            t(
              'A landing page do Solo BLVD foi reposicionada para sustentar uma percepção premium desde o primeiro contato. Cada imagem, transição, espaçamento e bloco de copy passou a trabalhar para qualificar o desejo antes do formulário, filtrando melhor o interesse e reduzindo ruído para o time comercial.',
              'The Solo BLVD landing page was repositioned to sustain a premium perception from the first touchpoint. Every image, transition, spacing decision, and copy block works to qualify desire before the form, improving intent and reducing noise for the sales team.'
            ),
          ],
        },
      ],
    },

    saidopapel: {
      id: 'saidopapel',
      index: '03/',
      title: 'Sai do Papel',
      client: 'Sai do Papel · Open Innovation',
      year: 'Rio de Janeiro',
      role: t('Landing page, funil comercial e growth', 'Landing page, sales funnel and growth'),
      tags: t('Atração de clientes,Hackathon,Inovação aberta', 'Client acquisition,Hackathon,Open innovation').split(','),
      cover: `${B}saidopapel-mockup.webp`,
      liveUrl: 'https://landingpage-hackathon-saidopapel.vercel.app/',
      intro: t(
        'A Sai do Papel precisava gerar novos clientes para projetos de hackathon e inovação aberta. O desafio não era apenas criar uma página bonita: era transformar uma dor comercial em um funil capaz de atrair empresas com verba, urgência e abertura para comprar esse tipo de serviço.',
        'Sai do Papel needed to generate new clients for hackathon and open innovation projects. The challenge was not simply building a good-looking page: it was turning a sales problem into a funnel capable of attracting companies with budget, urgency, and readiness to buy this type of service.'
      ),
      metrics: [
        ['4', t('clientes fechados pelo funil', 'clients closed from the funnel')],
        ['2.8x', t('aumento em reuniões qualificadas', 'qualified meetings lift')],
        ['-34%', t('abandono no formulário', 'form abandonment')],
        ['+63%', t('leads com fit comercial', 'sales-fit leads')],
      ],
      sections: [
        {
          label: t('Funil comercial e timing de mercado/', 'Sales funnel and market timing/'),
          paragraphs: [
            t(
              'Ao pesquisar a própria base de leads de hackathon, encontramos um padrão importante: entre outubro e dezembro, muitas empresas revisam orçamento, encerram planejamento anual e procuram iniciativas rápidas de inovação aberta para usar verba remanescente com impacto visível.',
              'By researching the existing hackathon lead base, we found an important pattern: between October and December, many companies review budgets, close annual planning, and look for fast open innovation initiatives to allocate remaining budget with visible impact.'
            ),
            t(
              'A partir disso, a página foi reposicionada para vender clareza executiva: problema, formato, prazo, entregáveis e prova de capacidade. Em paralelo, ajustamos anúncios, analisamos mapas de calor e pontos de desistência no Hotjar, qualificamos os leads com o time de vendas e refinamos os CTAs para gerar reuniões mais próximas da compra.',
              'From there, the page was repositioned to sell executive clarity: problem, format, timeline, deliverables, and proof of capability. In parallel, we refined ads, analyzed heatmaps and drop-off points in Hotjar, qualified leads with the sales team, and adjusted CTAs to generate meetings closer to purchase intent.'
            ),
          ],
        },
        {
          label: t('Foco em atração e conversão/', 'Focus on acquisition and conversion/'),
          paragraphs: [
            t(
              'Desenvolvido sob rígidos critérios de performance e SEO, o projeto traz uma arquitetura centrada na atração e captação de novos clientes empresariais. Através de CTAs persuasivos, blocos informativos estruturados e total adaptação mobile, a landing page garante taxas superiores de conversão de leads.',
              "Developed under strict performance and SEO metrics, the project features an architecture centered on acquiring corporate clients. Through persuasive CTAs, clear content structure, and mobile responsiveness, the landing page secures higher lead conversion rates."
            ),
          ],
        },
        {
          label: t('Ecossistema integrado de inovação aberta/', 'Integrated open innovation ecosystem/'),
          paragraphs: [
            t(
              'O ecossistema da Sai do Papel une startups em busca de validação, escala e venture capital com médias e grandes corporações em busca de novos canais de receita e eficiência interna. A landing page funciona como ponto focal: um funil claro, regulamentos acessíveis e cronogramas legíveis removem a fricção para a inscrição.',
              'The Sai do Papel ecosystem connects startups seeking validation, scale and venture capital with mid-to-large companies looking for new revenue channels and internal efficiency. The landing page acts as the focal point: a clear funnel, approachable rules and readable timelines remove onboarding friction.'
            ),
            t(
              'Elementos visuais de alta fidelidade e micro-interações responsivas garantem a experiência em qualquer dispositivo, do smartphone ao monitor ultra-wide, acelerando a ideação das startups rumo a mentorias, pilotos de validação e coinvestimento.',
              'High-fidelity visuals and responsive micro-interactions keep the experience consistent on any device, from smartphones to ultra-wide monitors, moving startups from ideation toward mentoring, validation pilots and co-investment.'
            ),
          ],
        },
      ],
    },

    empresariar: {
      id: 'empresariar',
      index: '04/',
      title: 'Instituto Empresariar',
      client: 'Instituto Empresariar',
      year: 'Fortaleza',
      role: t('Posicionamento, design e performance', 'Positioning, design and performance'),
      tags: t('Empresas familiares,Governança,Evento', 'Family business,Governance,Event').split(','),
      cover: `${B}empresariar-mockup.webp`,
      screenshot: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/948496228599275.68557fb39d553.png',
      behanceUrl: 'https://www.behance.net/matheusmartend',
      intro: t(
        'Minha contratação no Instituto Empresariar partiu de um contraste muito claro: Cícero Rocha já era um profissional extremamente forte em gerar resultados fora do digital, com autoridade, relacionamento e reputação no mercado, mas a presença online ainda não traduzia essa força.',
        'My work with Instituto Empresariar started from a clear contrast: Cícero Rocha was already highly effective at generating results outside digital channels, with authority, relationships, and market reputation, but the online presence did not yet translate that strength.'
      ),
      metrics: [
        [t('3 turmas', '3 cohorts'), t('preenchidas rapidamente', 'filled quickly')],
        [t('30 alunos', '30 students'), t('por turma do curso', 'per course cohort')],
        [t('R$ 12 mil', 'R$ 12k'), t('ticket médio por aluno', 'average ticket per student')],
      ],
      sections: [
        {
          label: t('Virada digital/', 'Digital shift/'),
          paragraphs: [
            t(
              'Fui chamado junto com outros integrantes para ajudar nessa virada: melhorar a percepção digital da marca, dar mais visibilidade às filhas e aos familiares que também atuavam na empresa, e ampliar o valor institucional do negócio para além da figura central do fundador.',
              "I was brought in alongside other team members to support that shift: improve the brand's digital perception, give more visibility to his daughters and family members working in the company, and expand the institutional value of the business beyond the founder's individual authority."
            ),
            t(
              'O trabalho combinou posicionamento, design e performance. A página precisava comunicar legado, governança e sucessão familiar sem parecer genérica ou fria. A direção visual deu peso institucional ao Cícero Rocha e abriu espaço para as filhas e demais familiares como parte ativa da autoridade da empresa.',
              "The work combined positioning, design, and performance. The page needed to communicate legacy, governance, and family succession without feeling generic or cold. The visual direction preserved Cícero Rocha's institutional authority while giving his daughters and family members visibility as active parts of the company."
            ),
          ],
        },
        {
          label: t('Processo e resultado/', 'Process and result/'),
          paragraphs: [
            t(
              'O resultado não veio de uma única ação isolada. Começamos pelo básico bem feito: pesquisa com a base, revisão da narrativa, melhoria do design, análise de tráfego em Meta e Google, leitura de comportamento no Google Analytics e Hotjar, além de ajustes na copy e na experiência da landing page.',
              'The result did not come from a single isolated action. We started with the fundamentals: audience research, narrative review, design improvement, Meta and Google traffic analysis, behavior reading through Google Analytics and Hotjar, plus copy and landing page experience adjustments.'
            ),
            t(
              'A landing page do evento foi uma das campanhas que performou bem dentro desse processo. O aprendizado foi aplicado em outro produto da casa, o curso Conselheiro de Resultados, que alcançou turmas de 30 alunos, ticket médio de R$ 12 mil e três turmas preenchidas em pouco tempo.',
              'The event landing page was one of the campaigns that performed well within this process. The learning was applied to another product, the Conselheiro de Resultados course, which reached 30-student cohorts, a R$ 12k average ticket, and three cohorts filled quickly.'
            ),
          ],
        },
      ],
    },

    eneva: {
      id: 'eneva',
      index: '05/',
      title: 'Desafio Inova Eneva',
      client: 'Eneva',
      year: 'Rio de Janeiro',
      role: t('Landing page de inovação aberta e conversão', 'Open innovation landing page and conversion'),
      tags: t('Transição energética,Inovação aberta,Conversão', 'Energy transition,Open innovation,Conversion').split(','),
      cover: `${B}eneva-mockup.webp`,
      liveUrl: 'https://landingpage-desafioinovaeneva.vercel.app/',
      intro: t(
        'O Desafio Inova Eneva precisava transformar um tema técnico em uma chamada simples, confiável e capaz de gerar volume qualificado rapidamente. A meta era clara: alcançar 300 inscritos em 3 semanas, sem depender apenas de tráfego frio.',
        'The Inova Eneva Challenge needed to turn a technical topic into a simple, trustworthy, and high-volume acquisition page. The goal was clear: reach 300 registrations in 3 weeks without relying only on cold traffic.'
      ),
      metrics: [
        ['300', t('inscritos em 3 semanas', 'registrations in 3 weeks')],
        ['+47%', t('taxa de conversão da página', 'page conversion rate')],
        ['-29%', t('desistência antes do formulário', 'pre-form drop-off')],
        ['+41%', t('cliques em CTAs principais', 'main CTA clicks')],
      ],
      sections: [
        {
          label: t('Pesquisa e estratégia/', 'Research and strategy/'),
          paragraphs: [
            t(
              'Antes do layout final, cruzamos pesquisa com a base, benchmarks de desafios de inovação e dúvidas recorrentes de startups e pesquisadores. A leitura foi direta: o público precisava entender rapidamente as áreas de interesse, o nível de maturidade esperado, o prêmio e a credibilidade institucional por trás da chamada.',
              'Before the final layout, we combined audience research, innovation challenge benchmarks, and recurring questions from startups and researchers. The insight was direct: people needed to quickly understand the focus areas, expected maturity level, prize, and institutional credibility behind the call.'
            ),
            t(
              'Com isso, reorganizamos a narrativa da página, aumentamos o destaque do prêmio, deixamos os CTAs mais próximos dos blocos de decisão e criamos uma leitura mais orientada a conversão. O resultado foi uma jornada mais objetiva para transformar interesse técnico em inscrição.',
              'From there, we reorganized the page narrative, increased prize visibility, moved CTAs closer to decision blocks, and created a more conversion-oriented reading flow. The result was a clearer path from technical interest to registration.'
            ),
          ],
        },
        {
          label: t('Foco em transição energética/', 'Focus on energy transition/'),
          paragraphs: [
            t(
              'Diferente de portais corporativos estáticos, a landing page foi concebida para alinhar tecnologia moderna com a urgência da segurança energética e da descarbonização. O portal é o canal direto para inovadores submeterem projetos nas verticais de Gás e Energia do Futuro, Operações Inteligentes e Tecnologias de Emissões Reduzidas.',
              'Unlike static corporate hubs, the landing page was built to pair modern technology with the urgency of energy security and decarbonization. It is the direct channel for innovators to submit projects in Future Gas and Energy, Smart Operations and Low-Emission Technologies.'
            ),
          ],
        },
        {
          label: t('Transformando ideias em matriz eficiente/', 'Turning ideas into an efficient matrix/'),
          paragraphs: [
            t(
              'A página foi estruturada para garantir rápida absorção de termos técnicos e cronogramas claros, engajando da academia ao topo do ecossistema de capital de risco. As ideias de destaque abrem caminho para parcerias com uma das maiores geradoras térmicas independentes do país, acelerando pilotos de descarbonização.',
              "The page was structured for fast reading of technical terms and clear timelines, engaging everyone from academia to venture capital. Standout ideas open the way to partnerships with one of Brazil's largest independent thermal generators, accelerating decarbonization pilots."
            ),
          ],
        },
      ],
    },
  };

  return {
    cases,
    caseUi: {
      liveLabel: t('Site no ar — role dentro das telas', 'Live site — scroll inside the screens'),
      shotLabel: t('Página completa — role dentro da tela', 'Full page — scroll inside the screen'),
      behance: t('Ver no Behance', 'View on Behance'),
      close: t('Fechar', 'Close'),
      live: t('Ver site no ar', 'View live site'),
      results: t('Resultados/', 'Results/'),
      client: t('Cliente/', 'Client/'),
      role: t('Papel/', 'Role/'),
      place: t('Local/', 'Location/'),
      open: t('Ver case', 'View case'),
    },
    nav: [
      { id: 'trabalhos', label: t('Trabalhos', 'Work') },
      { id: 'automacoes', label: t('Automações', 'Automations') },
      { id: 'sobre', label: t('Sobre', 'About') },
      { id: 'contato', label: t('Contato', 'Contact') },
    ],
    hero: {
      tag: 'Florianópolis, SC',
      title: t('Design que conecta pessoas e negócios', 'Design that connects people and business'),
      intro: ['Matheus Martendal'],
      scroll: t('[ Role para baixo ]', '[ Scroll down ]'),
      roles: ['AI Product Designer', 'AI Builder', 'UX UI'],
      availability: t('Remoto, híbrido e presencial', 'Remote, hybrid & on-site'),
    },
    work: {
      title: t('Trabalhos selecionados', 'Selected work'),
      all: t('Ver todos os trabalhos', 'View all work'),
      view: t('Ver projeto', 'View project'),
      items: works,
    },
    statement: {
      text: pt
        ? ['Mais de 6 anos e 40 projetos digitais entregues,', 'unindo design, front-end e IA para transformar', 'objetivos de negócio em experiências que convertem.']
        : ['Over 6 years and 40 digital projects delivered,', 'combining design, front-end and AI to turn', 'business goals into experiences that convert.'],
      cta: t('Vamos conversar', "Let's talk"),
    },
    services: {
      title: pt ? ['Onde', 'eu contribuo'] : ['Where', 'I contribute'],
      items: [
        t('Web e UI Design', 'Web & UI Design'),
        t('Landing pages de alta conversão', 'High-converting landing pages'),
        t('Automações e soluções com IA', 'AI Automation & Solutions'),
        t('AI Product Design e produtos digitais', 'AI Product Design & Digital Products'),
      ],
    },
    process: t(
      'Do briefing à publicação: organizo a informação, desenho no Figma e implemento com código e IA.',
      'From brief to launch: I structure the information, design in Figma and build with code and AI.'
    ),
    automations: {
      title: t('Automações com IA', 'AI automations'),
      sub: t('Fluxos que fazem o trabalho repetitivo pela sua equipe.', 'Flows that do the repetitive work for your team.'),
      open: t('Ver automações', 'View automations'),
      items: [
        {
          id: 'vendas',
          title: t('Assistente de Vendas IA', 'AI Sales Assistant'),
          desc: t(
            'Recebe, analisa e prioriza cada contato do site com IA. Nenhuma mensagem sai sem aprovação humana.',
            'Receives, analyses and prioritises every website lead with AI. No message goes out without human approval.'
          ),
          tags: ['n8n', 'OpenAI', 'WhatsApp'],
          media: 'video' as const,
        },
        {
          id: 'chatbot',
          title: t('Chatbot de Suporte', 'Support Chatbot'),
          desc: t(
            'Responde o que está na base de conhecimento e mostra ao time de CS quais dúvidas mais se repetem.',
            'Answers what is in the knowledge base and shows the CS team which questions repeat the most.'
          ),
          tags: ['n8n', 'Groq', 'Google Sheets'],
          media: 'demo' as const,
        },
      ],
    },
    about: {
      label: t('Sobre/', 'About/'),
      title: t('+6 anos criando produtos e interfaces guiados por pessoas e dados.', '+6 years designing products and interfaces driven by people and data.'),
      paragraphs: pt
        ? [
            'Sou Matheus Martendal, Product Designer e AI Builder com mais de 6 anos de experiência e mais de 40 projetos digitais entregues. Desenho e construo sites, landing pages, produtos digitais e interfaces guiado pelo Design Thinking: entendo as pessoas, defino o problema certo, prototipo e valido antes de escalar. O resultado são experiências claras, consistentes e orientadas a resultado, que conectam os objetivos do negócio às necessidades de quem usa.',
            'Minha trajetória passa por agências, produtos educacionais premium e mais de 20 clientes como freelancer, sempre junto a times de marketing, produto e liderança.',
            'Formado pela UNICESUSC, em Florianópolis, SC. Disponível para trabalho remoto, híbrido e presencial.',
          ]
        : [
            "I'm Matheus Martendal, a Product Designer and AI Builder with over 6 years of experience and more than 40 digital projects delivered. I design and build websites, landing pages, digital products and interfaces guided by Design Thinking: understanding people, framing the right problem, prototyping and validating before scaling. The result is clear, consistent, outcome-driven experiences that connect business goals with the needs of the people who use them.",
            'My path spans agencies, premium educational products and over 20 freelance clients, always alongside marketing, product and leadership teams.',
            'Graduated from UNICESUSC, based in Florianópolis, SC. Available for remote, hybrid and on-site work.',
          ],
      stack: ['Figma', 'React', 'TypeScript', 'WordPress', 'Webflow', 'Framer', 'n8n', 'Claude', 'ChatGPT', 'Gemini'],
      stackLabel: t('Ferramentas/', 'Tools/'),
    },
    contact: {
      title: t('Tem um projeto em mente?', 'Have a project in mind?'),
      email: 'matheus.martendal@gmail.com',
      whatsapp: 'https://wa.me/5548988025100',
    },
    footer: {
      menu: 'Menu/',
      base: t('Base/', 'Based in/'),
      baseText: ['Florianópolis, SC', t('Brasil', 'Brazil')],
      contact: t('Contato/', 'Contact/'),
      socials: t('Redes/', 'Socials/'),
      rights: t('© 2026 Matheus Martendal. Todos os direitos reservados.', '© 2026 Matheus Martendal. All rights reserved.'),
      top: t('Voltar ao topo', 'Back to top'),
    },
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matheus-martendal/' },
      { label: 'Behance', href: 'https://www.behance.net/matheusmartend' },
      { label: 'GitHub', href: 'https://github.com/matheusmartendal-dev' },
    ],
    portrait: 'https://i.imgur.com/nl92NXC.png',
    logo: 'https://i.imgur.com/JRc2tPW.png',
  };
}

export type Content = ReturnType<typeof getContent>;
