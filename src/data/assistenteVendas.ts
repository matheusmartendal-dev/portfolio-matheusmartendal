// Conteúdo do case "Assistente de Vendas IA" (workflow n8n "Vendas | Qualificação de Leads com IA").

export type StageIcon = 'inbox' | 'copy' | 'sparkles' | 'user-check' | 'message' | 'filter' | 'book' | 'table' | 'bell';

export interface FlowStage {
  id: string;
  icon: StageIcon;
  title: string;
  text: string;
}

export function getAssistenteVendas(isPt: boolean) {
  const t = (pt: string, en: string) => (isPt ? pt : en);

  const stages: FlowStage[] = [
    {
      id: 'entrada',
      icon: 'inbox',
      title: t('O contato chega', 'Lead arrives'),
      text: t('Os dados do formulário são organizados e conferidos.', 'Form data is tidied up and checked.'),
    },
    {
      id: 'duplicidade',
      icon: 'copy',
      title: t('Sem duplicados', 'No duplicates'),
      text: t('Quem já está na base não é cadastrado de novo.', 'Existing leads aren’t registered twice.'),
    },
    {
      id: 'ia',
      icon: 'sparkles',
      title: t('A IA dá a nota', 'AI scores it'),
      text: t('Nota de 0 a 100: Quente, Morno ou Frio, com mensagem pronta.', '0–100 score: Hot, Warm or Cold, with a ready message.'),
    },
    {
      id: 'aprovacao',
      icon: 'user-check',
      title: t('Equipe aprova', 'Team approves'),
      text: t('Nenhuma mensagem sai sem aprovação humana.', 'No message goes out without human approval.'),
    },
    {
      id: 'whatsapp',
      icon: 'message',
      title: t('Envio no WhatsApp', 'Sent on WhatsApp'),
      text: t('A mensagem aprovada chega ao cliente.', 'The approved message reaches the lead.'),
    },
  ];

  return {
    title: t('Assistente de Vendas IA', 'AI Sales Assistant'),
    tagline: t(
      'Recebe, analisa e prioriza cada contato do site com IA, para o time comercial falar primeiro com quem está pronto para comprar.',
      'Receives, analyses and prioritises every website lead with AI, so the sales team talks first to those ready to buy.'
    ),
    stages,
    extra: t(
      'Todo dia às 18h, um relatório resume o funil e traz recomendações da IA.',
      'Every day at 6 pm, a report sums up the funnel with AI recommendations.'
    ),
    stack: ['n8n', 'OpenAI', 'WhatsApp'],
  };
}
