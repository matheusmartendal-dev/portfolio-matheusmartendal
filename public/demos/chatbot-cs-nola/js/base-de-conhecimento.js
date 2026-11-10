/*
  BASE DE CONHECIMENTO (equivale à aba "FAQ" da planilha "Base de Conhecimento CS Nola")

  CONTEÚDO DE EXEMPLO: as 5 perguntas mais comuns, como num chatbot no início da operação.
  O time vai acrescentando novas perguntas conforme os chamados se repetem.

  Para acrescentar uma pergunta, copie um bloco e mude os textos:
    {
      pergunta: "...",
      resposta: "...",
      categoria: "Pedidos" | "Financeiro" | "Cadastro" | "Suporte",
      palavrasChave: ["...", "..."]   // outras formas de a pessoa perguntar
    }
  As perguntas daqui também viram os botões de opção do chat.
*/

window.BASE_DE_CONHECIMENTO = [
  {
    pergunta: "Como cancelo um pedido?",
    resposta: "Para cancelar, abra o pedido na tela Pedidos e clique em Cancelar. O cancelamento só é possível enquanto o pedido ainda não saiu para entrega.",
    categoria: "Pedidos",
    palavrasChave: ["cancelar", "cancelamento", "desistir do pedido", "estornar pedido"]
  },
  {
    pergunta: "Quando recebo o repasse das vendas?",
    resposta: "O repasse das vendas online é feito toda quarta-feira, na conta bancária cadastrada no sistema.",
    categoria: "Financeiro",
    palavrasChave: ["repasse", "recebo as vendas", "dinheiro das vendas", "pagamento das vendas", "deposito"]
  },
  {
    pergunta: "Como adiciono um item ao cardápio?",
    resposta: "Vá em Cardápio > Novo item, preencha nome, preço e foto e clique em Salvar. O item aparece para os clientes na hora.",
    categoria: "Cadastro",
    palavrasChave: ["cardapio", "adicionar item", "novo produto", "cadastrar prato", "incluir item"]
  },
  {
    pergunta: "Como altero o horário de funcionamento?",
    resposta: "Acesse Configurações > Horários, ajuste os dias e horários e clique em Salvar.",
    categoria: "Cadastro",
    palavrasChave: ["horario", "funcionamento", "horario de abertura", "expediente"]
  },
  {
    pergunta: "Esqueci minha senha, o que faço?",
    resposta: "Na tela de login, clique em Esqueci minha senha e siga o link que vai chegar no seu e-mail.",
    categoria: "Suporte",
    palavrasChave: ["senha", "esqueci", "redefinir", "nao consigo entrar", "login"]
  }
];
