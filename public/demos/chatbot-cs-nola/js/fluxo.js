/*
  FLUXO DO CHATBOT — reprodução do workflow "Chatbot CS Nola" do n8n.

  ⛔ NÃO PRECISA MEXER AQUI para mudar o visual.
  Fontes, cores e espaçamentos ficam em css/tema.css e css/estilo.css.

  Os textos abaixo (prompt, mensagem de encaminhamento, dica do time de CS,
  regra de status e limite de 3 chamados) são os mesmos do n8n original.

  Diferença da versão no n8n: aqui a resposta é SIMULADA. Em vez de chamar
  a IA, a página procura a pergunta mais parecida na base de conhecimento.
  Assim a demo é grátis, não precisa de chave de acesso e nunca sai do ar.
*/

(function () {
  "use strict";

  // ===== Textos e regras do n8n (iguais ao original) =====
  const MODELO = "llama-3.3-70b-versatile";
  const CATEGORIAS = ["Pedidos", "Financeiro", "Cadastro", "Suporte"];
  const RESPOSTA_SEM_INFORMACAO =
    "Não encontrei essa informação na base de conhecimento. Vou encaminhar para o suporte.";
  const LIMITE_DICA = 3;

  // Nó "Monta Contexto"
  function montaContexto(pergunta, base) {
    let texto = "";
    for (const item of base) {
      texto += `Pergunta: ${item.pergunta}\n`;
      texto += `Resposta: ${item.resposta}\n\n`;
    }
    return (
      "Você é um assistente de suporte para restaurantes. " +
      "Responda APENAS em formato JSON válido, sem texto adicional, sem markdown, sem blocos de código. " +
      "O JSON deve ter exatamente dois campos: " +
      "'resposta': resposta direta e objetiva para o cliente baseada na base de conhecimento, " +
      "'categoria': categoria da pergunta, escolha uma entre: Pedidos, Financeiro, Cadastro, Suporte. " +
      "Se a pergunta não tiver resposta EXATA ou MUITO SIMILAR na base de conhecimento, responda OBRIGATORIAMENTE com: 'Não encontrei essa informação na base de conhecimento. Vou encaminhar para o suporte.' e categoria 'Suporte'. Não tente adivinhar ou usar respostas parecidas. " +
      "Pergunta do cliente: " +
      pergunta +
      "\n\nBase de conhecimento:\n" +
      texto
    );
  }

  // Coluna "Status" do nó "Append row in sheet"
  function calculaStatus(resposta) {
    return resposta.includes("encaminhar para o suporte") ? "Encaminhado" : "Resolvido";
  }

  // Nó "Code in JavaScript"
  function acrescentaDica(respostaOriginal, categoria, total) {
    let respostaFinal = respostaOriginal;
    if (total >= LIMITE_DICA) {
      respostaFinal += `\n\n💡 *Dica do time de CS:* A categoria "${categoria}" já gerou ${total} chamados. Considere criar um material de apoio sobre esse tema para reduzir o volume de atendimentos.`;
    }
    return respostaFinal;
  }

  // ===== NOVO nó "Filtra Saudação" (não existia no n8n original) =====
  // Cumprimentos e conversa solta recebem uma resposta pronta e NÃO viram chamado.
  const PEDE_OPCAO = "Escolha uma das opções ou digite abaixo.";
  const RESPOSTAS_SAUDACAO = {
    boasVindas: "Oi! Sou o assistente de suporte da Nola. Qual é a sua dúvida? " + PEDE_OPCAO,
    cumprimento: (inicio) => inicio + " Qual é a sua dúvida? " + PEDE_OPCAO,
    insiste: "Preciso saber sua dúvida, por favor. " + PEDE_OPCAO,
    pedeDuvida: "Claro! Qual é a sua dúvida? " + PEDE_OPCAO,
    pedePessoa: "Claro, vou te ajudar! Pra eu direcionar certinho, me conta qual é a sua dúvida. " + PEDE_OPCAO,
    agradecimento: "Por nada! Se tiver outra dúvida, é só mandar."
  };

  const CONVERSA_SOLTA = new Set((
    "oi oie oii ola opa eai e ai hey hello bom boa dia dias tarde tardes noite noites tudo bem td tranquilo " +
    "beleza blz como vai voce vc esta ta vcs voces estao com tal joia certo ok okay sim nao entendi legal " +
    "show massa haha kkk kkkk hm hmm alo alguem ae aqui por favor pf pfv me"
  ).split(" "));
  const AGRADECIMENTO = new Set((
    "obrigado obrigada obg brigado brigada valeu vlw tchau ate mais logo ok beleza blz certo otimo " +
    "legal perfeito entendi muito mt agradeco show"
  ).split(" "));
  const PEDIDO_DE_AJUDA = new Set((
    "tenho uma um duvida duvidas pergunta perguntas ajuda ajudar ajudem me pode posso tirar queria quero " +
    "gostaria preciso de favor voce vc consegue"
  ).split(" "));

  function soPalavrasDe(lista, conjunto) {
    return lista.length > 0 && lista.every((p) => conjunto.has(p) || conjunto.has(p.replace(/(.)\1+$/, "$1")));
  }

  let conversasSoltasSeguidas = 0;

  // Devolve a resposta pronta, ou null quando é uma dúvida de verdade
  function filtraSaudacao(texto) {
    const t = texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    const lista = t ? t.split(" ") : [];

    // "quero falar com alguém", "me passa pra um atendente"...
    const pedePessoa =
      /\b(falar|conversar|atendimento|passa|transfere|chama)\b.*\b(alguem|atendente|humano|pessoa|gente|suporte)\b/.test(t) ||
      /^(atendente|humano|pessoa|suporte)( por favor)?$/.test(t);
    if (pedePessoa && lista.length <= 9) {
      conversasSoltasSeguidas++;
      return { tipo: "pedePessoa", resposta: conversasSoltasSeguidas > 2 ? RESPOSTAS_SAUDACAO.insiste : RESPOSTAS_SAUDACAO.pedePessoa };
    }

    if (soPalavrasDe(lista, AGRADECIMENTO)) return { tipo: "agradecimento", resposta: RESPOSTAS_SAUDACAO.agradecimento };

    if (lista.length === 0 || soPalavrasDe(lista, CONVERSA_SOLTA)) {
      conversasSoltasSeguidas++;
      if (conversasSoltasSeguidas > 1) return { tipo: "insiste", resposta: RESPOSTAS_SAUDACAO.insiste };
      let inicio = "Oi!";
      if (/\bbom dia\b/.test(t)) inicio = "Oi, bom dia!";
      else if (/\bboa tarde\b/.test(t)) inicio = "Oi, boa tarde!";
      else if (/\bboa noite\b/.test(t)) inicio = "Oi, boa noite!";
      if (/\btudo (bem|bom|certo|tranquilo|joia)\b/.test(t)) inicio += " Tudo ótimo por aqui.";
      return { tipo: "cumprimento", resposta: RESPOSTAS_SAUDACAO.cumprimento(inicio) };
    }

    if (soPalavrasDe(lista, new Set([...PEDIDO_DE_AJUDA, ...CONVERSA_SOLTA]))) {
      conversasSoltasSeguidas++;
      return { tipo: "pedeDuvida", resposta: conversasSoltasSeguidas > 2 ? RESPOSTAS_SAUDACAO.insiste : RESPOSTAS_SAUDACAO.pedeDuvida };
    }

    conversasSoltasSeguidas = 0;
    return null;
  }

  // ===== Simulação da IA (substitui o nó "HTTP Request") =====
  const PALAVRAS_IGNORADAS = new Set((
    "a o as os e de da do das dos em no na nos nas um uma uns umas para pra pro por com sem " +
    "que se me eu meu minha meus minhas seu sua voce voces ja nao sim mas mais muito como " +
    "onde quando qual quais quem porque oque isso essa esse esta este tem ter tenho posso pode " +
    "consigo fazer faco faz preciso queria quero gostaria saber sobre ola oi bom boa dia tarde " +
    "noite obrigado obrigada valeu tudo bem tchau ate ai la aqui ao aos ou ser foi vai"
  ).split(" "));

  function palavras(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((p) => p && !PALAVRAS_IGNORADAS.has(p));
  }

  // "cancelo" e "cancelar", "pedido" e "pedidos" contam como a mesma palavra
  function parecidas(a, b) {
    if (a === b) return true;
    if (a.length < 4 || b.length < 4) return false;
    const n = Math.min(5, a.length, b.length);
    return a.slice(0, n) === b.slice(0, n);
  }

  function contem(lista, palavra) {
    return lista.some((p) => parecidas(p, palavra));
  }

  function simulaIA(pergunta, base) {
    const doCliente = palavras(pergunta);
    if (doCliente.length === 0) {
      return { resposta: RESPOSTA_SEM_INFORMACAO, categoria: "Suporte" };
    }

    let melhor = null;
    let melhorNota = 0;

    for (const item of base) {
      let nota = 0;
      // expressões-chave inteiras encontradas na pergunta
      for (const chave of item.palavrasChave || []) {
        const partes = palavras(chave);
        if (partes.length && partes.every((p) => contem(doCliente, p))) nota += 1;
      }
      // quanto da pergunta do cliente bate com a pergunta da base
      const daBase = palavras(item.pergunta);
      const emComum = doCliente.filter((p) => contem(daBase, p)).length;
      nota += emComum / doCliente.length;

      if (nota > melhorNota) {
        melhorNota = nota;
        melhor = item;
      }
    }

    // Só responde se for "EXATA ou MUITO SIMILAR", como pede o prompt
    if (!melhor || melhorNota < 0.6) {
      return { resposta: RESPOSTA_SEM_INFORMACAO, categoria: "Suporte" };
    }
    const categoria = CATEGORIAS.includes(melhor.categoria) ? melhor.categoria : "Suporte";
    return { resposta: melhor.resposta, categoria };
  }

  // ===== Aba "Chamados" (guardada no navegador de quem testa) =====
  const CHAVE = "chatbot-cs-nola:chamados";
  let chamados = [];
  try { chamados = JSON.parse(localStorage.getItem(CHAVE)) || []; } catch (e) { chamados = []; }
  function salvaChamados() {
    try { localStorage.setItem(CHAVE, JSON.stringify(chamados)); } catch (e) { /* sem problema */ }
  }

  // ===== Os nós, na mesma ordem do n8n =====
  const NOS = [
    { id: "trigger",  nome: "When chat message received", descricao: "Recebe a mensagem do chat" },
    { id: "saudacao", nome: "Filtra Saudação",            descricao: "Cumprimento ou conversa solta? Responde e pede a dúvida, sem abrir chamado", novo: true },
    { id: "faq",     nome: "Get row(s) in sheet",        descricao: "Lê a aba FAQ da Base de Conhecimento CS Nola" },
    { id: "contexto", nome: "Monta Contexto",             descricao: "Junta a pergunta e a base num prompt para a IA" },
    { id: "http",     nome: "HTTP Request",               descricao: "Envia para a IA (Groq · " + MODELO + ")" },
    { id: "extrai",   nome: "Extrai Resposta",            descricao: "Separa a resposta e a categoria" },
    { id: "append",   nome: "Append row in sheet",        descricao: "Registra o chamado na aba Chamados" },
    { id: "conta",    nome: "Get row(s) in sheet1",       descricao: "Busca os chamados da mesma categoria" },
    { id: "code",     nome: "Code in JavaScript",         descricao: "Com 3 ou mais chamados na categoria, acrescenta a dica do time de CS" }
  ];

  // ===== Tela =====
  const el = {
    mensagens: document.getElementById("mensagens"),
    form: document.getElementById("form-chat"),
    campo: document.getElementById("campo-mensagem"),
    botao: document.getElementById("botao-enviar"),
    nos: document.getElementById("lista-nos"),
    prompt: document.getElementById("ultimo-prompt"),
    tabela: document.getElementById("tabela-chamados"),
    vazio: document.getElementById("chamados-vazio"),
    contadores: document.getElementById("contadores"),
    limpar: document.getElementById("limpar-chamados"),
    sugestoes: document.getElementById("sugestoes"),
    opcoes: document.getElementById("opcoes"),
    boasVindas: document.getElementById("boas-vindas")
  };

  function escapa(t) {
    return String(t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // *texto* vira negrito e quebras de linha são mantidas, como no chat do n8n
  function formata(t) {
    return escapa(t).replace(/\*([^*\n]+)\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
  }

  function desenhaNos() {
    el.nos.innerHTML = NOS.map((no, i) => `
      <li class="no" id="no-${no.id}">
        <span class="no__numero">${i + 1}</span>
        <div class="no__textos">
          <span class="no__nome">${escapa(no.nome)}${no.novo ? ' <span class="no__novo">novo</span>' : ""}</span>
          <span class="no__descricao">${escapa(no.descricao)}</span>
          <span class="no__saida" id="saida-${no.id}"></span>
        </div>
      </li>`).join("");
  }

  function resetaNos() {
    NOS.forEach((no) => {
      document.getElementById("no-" + no.id).className = "no";
      document.getElementById("saida-" + no.id).textContent = "";
    });
  }

  function marcaNo(id, saida) {
    const atual = document.getElementById("no-" + id);
    document.querySelectorAll(".no--ativo").forEach((n) => n.classList.replace("no--ativo", "no--feito"));
    atual.classList.add("no--ativo");
    if (saida) document.getElementById("saida-" + id).textContent = saida;
  }

  function finalizaNos() {
    document.querySelectorAll(".no--ativo").forEach((n) => n.classList.replace("no--ativo", "no--feito"));
  }

  // apaga os nós que não rodaram (quando a mensagem era só saudação)
  function pulaNosRestantes(aPartirDe) {
    const inicio = NOS.findIndex((n) => n.id === aPartirDe);
    NOS.slice(inicio).forEach((no) => {
      document.getElementById("no-" + no.id).className = "no no--pulado";
      document.getElementById("saida-" + no.id).textContent = "não executado · não registra";
    });
  }

  // botões de opção = perguntas da base de conhecimento
  function desenhaOpcoes() {
    const base = window.BASE_DE_CONHECIMENTO || [];
    el.opcoes.innerHTML = base.map((item) =>
      `<button type="button" data-pergunta="${escapa(item.pergunta)}">${escapa(item.pergunta)}</button>`
    ).join("");
  }

  function adicionaMensagem(texto, quem, etiqueta) {
    const div = document.createElement("div");
    div.className = "mensagem mensagem--" + quem;
    div.innerHTML = `<div class="mensagem__balao">${formata(texto)}</div>` +
      (etiqueta ? `<div class="mensagem__etiqueta">${escapa(etiqueta)}</div>` : "");
    el.mensagens.appendChild(div);
    el.mensagens.scrollTop = el.mensagens.scrollHeight;
    return div;
  }

  function mostraDigitando() {
    const div = document.createElement("div");
    div.className = "mensagem mensagem--bot";
    div.innerHTML = '<div class="mensagem__balao digitando"><span></span><span></span><span></span></div>';
    el.mensagens.appendChild(div);
    el.mensagens.scrollTop = el.mensagens.scrollHeight;
    return div;
  }

  function desenhaChamados() {
    el.vazio.hidden = chamados.length > 0;
    el.tabela.innerHTML = chamados.slice().reverse().map((c) => `
      <tr>
        <td data-rotulo="Data">${escapa(c.Data)}</td>
        <td data-rotulo="Pergunta">${escapa(c.Pergunta)}</td>
        <td data-rotulo="Resposta">${escapa(c.Resposta)}</td>
        <td data-rotulo="Categoria"><span class="etiqueta etiqueta--${escapa(c.Categoria.toLowerCase())}">${escapa(c.Categoria)}</span></td>
        <td data-rotulo="Status"><span class="status status--${c.Status === "Resolvido" ? "ok" : "encaminhado"}">${escapa(c.Status)}</span></td>
      </tr>`).join("");

    el.contadores.innerHTML = CATEGORIAS.map((cat) => {
      const n = chamados.filter((c) => c.Categoria === cat).length;
      return `<div class="contador ${n >= LIMITE_DICA ? "contador--alerta" : ""}">
        <span class="contador__numero">${n}</span><span class="contador__nome">${cat}</span></div>`;
    }).join("");
  }

  const espera = (ms) => new Promise((r) => setTimeout(r, ms));
  const PASSO = 450; // tempo de cada nó acendendo (em milissegundos)
  let ocupado = false;

  async function executaFluxo(entrada) {
    const chatInput = entrada;
    const base = window.BASE_DE_CONHECIMENTO || [];
    resetaNos();

    marcaNo("trigger", "chatInput: \"" + chatInput.trim() + "\"");
    await espera(PASSO);

    const saudacao = filtraSaudacao(chatInput);
    marcaNo("saudacao", saudacao ? "é saudação → resposta pronta" : "é uma dúvida → segue o fluxo");
    await espera(PASSO);
    if (saudacao) {
      finalizaNos();
      pulaNosRestantes("faq");
      return { respostaFinal: saudacao.resposta, etiqueta: "saudação · sem chamado" };
    }

    marcaNo("faq", base.length + " linhas lidas");
    await espera(PASSO);

    const prompt = montaContexto(chatInput, base);
    el.prompt.textContent = prompt;
    marcaNo("contexto", "prompt montado");
    await espera(PASSO);

    marcaNo("http", "aguardando a IA…");
    await espera(PASSO * 2);
    const { resposta, categoria } = simulaIA(chatInput, base);
    document.getElementById("saida-http").textContent = "resposta recebida";

    marcaNo("extrai", "categoria: " + categoria);
    await espera(PASSO);

    const linha = {
      Data: new Date().toLocaleString("pt-BR"),
      Pergunta: chatInput.trim(),
      Resposta: resposta,
      Categoria: categoria,
      Status: calculaStatus(resposta)
    };
    chamados.push(linha);
    salvaChamados();
    desenhaChamados();
    marcaNo("append", "status: " + linha.Status);
    await espera(PASSO);

    const total = chamados.filter((c) => c.Categoria === categoria).length;
    marcaNo("conta", total + (total === 1 ? " chamado" : " chamados") + " em " + categoria);
    await espera(PASSO);

    const respostaFinal = acrescentaDica(resposta, categoria, total);
    marcaNo("code", total >= LIMITE_DICA ? "dica do time de CS acrescentada" : "menos de 3 chamados, sem dica");
    await espera(PASSO);
    finalizaNos();

    return { respostaFinal, etiqueta: categoria + " · " + linha.Status };
  }

  async function envia(texto) {
    texto = (texto || "").trim();
    if (!texto || ocupado) return;
    ocupado = true;
    el.botao.disabled = true;
    el.campo.value = "";
    adicionaMensagem(texto, "cliente");
    const digitando = mostraDigitando();
    const r = await executaFluxo(texto);
    digitando.remove();
    adicionaMensagem(r.respostaFinal, "bot", r.etiqueta);
    ocupado = false;
    el.botao.disabled = false;
    el.campo.focus({ preventScroll: true });
  }

  el.form.addEventListener("submit", (e) => { e.preventDefault(); envia(el.campo.value); });
  el.sugestoes.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-pergunta]");
    if (b) envia(b.dataset.pergunta);
  });
  el.limpar.addEventListener("click", () => {
    chamados = [];
    conversasSoltasSeguidas = 0;
    salvaChamados();
    desenhaChamados();
    resetaNos();
  });

  el.boasVindas.innerHTML = formata(RESPOSTAS_SAUDACAO.boasVindas);
  desenhaOpcoes();
  desenhaNos();
  desenhaChamados();

  // usado só nos testes automáticos
  window.__chatbotNola = {
    simulaIA, filtraSaudacao, calculaStatus, acrescentaDica, montaContexto, RESPOSTA_SEM_INFORMACAO,
    zeraConversa: () => { conversasSoltasSeguidas = 0; }
  };
})();
