// Conteúdo do case "Chatbot de Suporte" (workflow n8n "Chatbot CS Nola").
import type { FlowStage } from './assistenteVendas';

export function getChatbotSuporte(isPt: boolean) {
  const t = (pt: string, en: string) => (isPt ? pt : en);

  const stages: FlowStage[] = [
    {
      id: 'mensagem',
      icon: 'message',
      title: t('A dúvida chega', 'Question arrives'),
      text: t('O cliente do restaurante escreve no chat.', 'The restaurant client writes in the chat.'),
    },
    {
      id: 'saudacao',
      icon: 'filter',
      title: t('Filtra conversa solta', 'Filters small talk'),
      text: t('"Oi, tudo bem?" recebe resposta pronta e não vira chamado.', '"Hi, how are you?" gets a ready reply and opens no ticket.'),
    },
    {
      id: 'base',
      icon: 'book',
      title: t('A IA consulta a base', 'AI checks the FAQ'),
      text: t('Responde só o que está no FAQ. O resto vai para o suporte.', 'Answers only what’s in the FAQ. The rest goes to support.'),
    },
    {
      id: 'registro',
      icon: 'table',
      title: t('Registra o chamado', 'Logs the ticket'),
      text: t('Categoria e status vão para a planilha.', 'Category and status go to the spreadsheet.'),
    },
    {
      id: 'alerta',
      icon: 'bell',
      title: t('Avisa o time de CS', 'Alerts the CS team'),
      text: t('Com 3 chamados no mesmo tema, sugere criar material sobre ele.', 'At 3 tickets on one topic, it suggests creating content about it.'),
    },
  ];

  return {
    title: t('Chatbot de Suporte', 'Support Chatbot'),
    tagline: t(
      'Atende os clientes de um sistema para restaurantes, responde o que está na base de conhecimento e mostra ao time de CS quais dúvidas mais se repetem.',
      'Serves the clients of a restaurant software, answers what’s in the knowledge base and shows the CS team which questions repeat the most.'
    ),
    stages,
    extra: t(
      'Na demo, as respostas são simuladas a partir da base. Na versão real, vêm da IA (Groq · Llama 3.3) e os chamados vão para o Google Sheets.',
      'In the demo, replies are simulated from the knowledge base. In production they come from the AI (Groq · Llama 3.3) and tickets go to Google Sheets.'
    ),
    stack: ['n8n', 'Groq', 'Google Sheets'],
  };
}
