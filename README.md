# Matheus Martendal™ Portfolio

Meu portfólio pessoal como Web Designer e Front-End Developer.

Este projeto nasceu para apresentar meu trabalho de um jeito mais próximo do que eu gosto de construir no dia a dia: interfaces com narrativa, bom acabamento visual, foco em conversão e uma experiência que mistura design, tecnologia e estratégia.

## Sobre o projeto

Aqui eu reuni alguns cases de landing pages, produtos digitais e experiências web que representam bem meu jeito de trabalhar. A ideia não era criar uma página estática simples, mas um portfólio com cara de produto: navegação fluida, troca de idioma, modo claro/escuro, previews interativos e uma apresentação mais imersiva dos projetos.

O site foi construído com React, TypeScript e Vite, usando Tailwind CSS para a base visual, Motion para pequenas interações e Lucide para os ícones.

## O que tem no site

- Apresentação pessoal em português e inglês.
- Modo claro e escuro.
- Seção de stack e ecossistema de ferramentas.
- Lista de projetos com navegação por cards.
- Cases detalhados com contexto, estratégia, resultados e previews.
- Mockups interativos em desktop e mobile usando iframes.
- Seção "Sobre mim" com uma narrativa mais pessoal.
- Links sociais e contato por e-mail.
- Otimizações de carregamento para imagens e iframes.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

## Como rodar localmente

Antes de tudo, instale as dependências:

```bash
npm install
```

Depois rode o servidor de desenvolvimento:

```bash
npm run dev
```

Por padrão, o Vite sobe em:

```bash
http://localhost:3000/
```

## Scripts

```bash
npm run dev
```

Roda o projeto em modo desenvolvimento.

```bash
npm run build
```

Gera a versão de produção dentro da pasta `dist`.

```bash
npm run preview
```

Abre um preview local da versão de produção.

```bash
npm run lint
```

Roda a checagem de TypeScript com `tsc --noEmit`.

## Variáveis de ambiente

Para a versão atual do portfólio, nenhuma variável de ambiente é necessária para rodar a interface.

O arquivo `.env.example` fica no repositório apenas como referência segura para configurações públicas futuras. Arquivos reais como `.env`, `.env.local` e variações locais são ignorados pelo Git.

Antes de publicar qualquer mudança, eu costumo conferir se não existe nenhuma chave, token ou segredo em arquivos versionados.

## Performance

Como o portfólio usa imagens externas e previews vivos de outros sites dentro de iframes, tomei alguns cuidados para manter a experiência mais leve:

- Imagens fora do primeiro impacto usam `loading="lazy"`.
- Iframes dos cases também carregam de forma preguiçosa.
- Imagens principais usam `fetchPriority="high"` quando fazem parte do topo.
- Imagens recebem `width`, `height` e `decoding="async"` para ajudar o navegador a renderizar melhor.
- O domínio do Imgur usa `preconnect` e `dns-prefetch` no `index.html`.

## Estrutura principal

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    Header.tsx
    About.tsx
    ProjectTimeshare.tsx
    ProjectApparel.tsx
    ProjectMonorail.tsx
    ProjectCharity.tsx
    ProjectSoloBLV.tsx
```

## Contato

Se quiser falar comigo sobre design, front-end, landing pages, CRO ou algum projeto novo:

```text
matheus.martendal@gmail.com
(48) 98802-5100
```

Também estou no Behance:

```text
https://www.behance.net/matheusmartend
```

LinkedIn:

```text
https://www.linkedin.com/in/matheus-martendal/
```

GitHub:

```text
https://github.com/matheusmartendal-dev
```
