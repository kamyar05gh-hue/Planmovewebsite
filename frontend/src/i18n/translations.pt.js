const waUrl = (text) =>
  "https://wa.me/41794880011?text=" + encodeURIComponent(text);

export const pt = {
  whatsapp: {
    url: waUrl(
      "Olá PLANMOVE! Gostaria de saber mais sobre o PLANMOVE KI, o assistente para a minha empresa de mudanças/limpeza."
    ),
  },
  whatsappButton: {
    label: "Tem dúvidas? Escreva-nos no WhatsApp",
  },
  languageSwitcher: {
    ariaLabel: (lang) => `Mudar de idioma — atualmente ${lang}`,
  },
  hero: {
    tagline: "Feito para empresários de mudanças e limpeza",
    flagAria: "Suíça",
    headlines: ["Mais clientes.", "Mais tempo.", "Mais dinheiro."],
    headlineHighlight: "Menos stress.",
    subtitle:
      "O primeiro funcionário de IA para o escritório – feito especificamente para empresas de mudanças e limpeza.",
    videoCaptionA: "Apenas ",
    videoCaptionHl1: "60 segundos",
    videoCaptionB: " e percebe imediatamente como ",
    videoCaptionHl2: "o PlanMove funciona.",
    benefits: [
      "O PLANMOVE KI cria orçamentos, faturas e respostas – simplesmente por voz ou WhatsApp.",
      "Fale simplesmente na sua língua materna – o PLANMOVE KI escreve em alemão perfeito ou na língua do seu cliente.",
    ],
    starsAria: "4.9 de 5 estrelas",
    reviews: "Mais de 120 avaliações",
    visualAlt:
      "O assistente PLANMOVE KI responde a pedidos de clientes na secretária de um empresário",
  },
  trustBar: {
    items: [
      "O PLANMOVE KI cria orçamentos, faturas e respostas",
      "Não perder clientes",
      "Mais encomendas",
      "Fale simplesmente na sua língua materna",
      "Mais tempo livre",
      "Mais faturação",
    ],
  },
  problems: {
    headingA: "Reconhece estes ",
    headingHighlight: "7 problemas",
    headingB: " do seu dia a dia?",
    cards: [
      {
        tag: "Tempo de resposta",
        title: [
          "Cada pedido ",
          { b: "sem resposta" },
          " custa-lhe ",
          { b: "clientes" },
          " – e muito dinheiro.",
        ],
        body: [
          { b: "Os clientes não esperam." },
          " Se responder demasiado tarde, eles vão para a ",
          { b: "concorrência" },
          ". O PLANMOVE KI responde ",
          { hl: "em poucos segundos" },
          " – ",
          { b: "24/7" },
          ".",
        ],
        alt: "Chamada perdida no smartphone",
      },
      {
        tag: "Língua materna",
        title: [
          { b: "Alemão" },
          " não é a sua língua materna? Não há problema.",
        ],
        body: [
          { b: "Fale simplesmente na sua língua." },
          " O PLANMOVE KI escreve ",
          { hl: "e-mails, orçamentos e mensagens profissionais" },
          " em ",
          { b: "alemão perfeito" },
          ", francês ou como desejar.",
        ],
        alt: "Comunicação multilingue",
      },
      {
        tag: "Fim do dia",
        title: [
          "Depois de um longo dia de trabalho, espera-o o ",
          { b: "trabalho de escritório" },
          ".",
        ],
        body: [
          "Orçamentos, e-mails, WhatsApp, faturas, planeamento de serviços… Muitos empresários ",
          { b: "ficam acordados até tarde" },
          ", só para ",
          { b: "não perder nenhum pedido" },
          ". O PLANMOVE KI ",
          { hl: "trata de tudo" },
          ".",
        ],
        alt: "Empresário exausto depois do trabalho",
      },
      {
        tag: "Follow-up",
        title: [
          "Envia orçamentos e esquece-se de ",
          { b: "dar seguimento" },
          ".",
        ],
        body: [
          "Muitos empresários ",
          { b: "perdem a noção do que está pendente" },
          " — e com isso também ",
          { b: "clientes e dinheiro" },
          ". O PLANMOVE KI ",
          { hl: "lembra automaticamente" },
          " – por mensagem ou chamada.",
        ],
        alt: "Follow-ups esquecidos",
      },
      {
        tag: "Chamadas",
        title: [
          "O ",
          { b: "telefone toca" },
          " enquanto está a trabalhar.",
        ],
        body: [
          "Não pode atender? Não há problema. O PLANMOVE KI ",
          { hl: "atende as chamadas" },
          ", ",
          { b: "recolhe todas as informações" },
          " e, se desejar, marca ",
          { b: "encontros" },
          ".",
        ],
        alt: "Chamada durante o trabalho",
      },
      {
        tag: "Canais",
        title: ["Tantas mensagens. Tão ", { b: "pouco tempo" }, "."],
        body: [
          "WhatsApp, e-mail, telefone — ",
          { b: "tudo chega ao mesmo tempo" },
          ". O PLANMOVE KI ",
          { hl: "responde, organiza e junta tudo num só lugar" },
          ".",
        ],
        alt: "Todos os canais num ecrã",
      },
    ],
    climax: {
      imageAlt: "O PLANMOVE KI trata da limpeza",
      titleA: "Esqueça a ",
      titleHighlight: "papelada",
      titleB: " e os programas complicados.",
      sub: [
        "Sem notas, sem listas de Excel, sem longas noites ao computador.",
        { b: "Diga simplesmente:" },
      ],
      voiceCommands: [
        "«PLANMOVE KI, cria um orçamento para o Sr. Silva.»",
        "«Envia o orçamento por e-mail à Sra. Martins.»",
        "«Escreve ao cliente no WhatsApp que amanhã chegamos às 08:00.»",
        "«Cria a fatura e envia-a ao cliente.»",
      ],
      momoRestA: "O PLANMOVE KI",
      momoRestB: " trata do resto.",
      services: [
        "O PLANMOVE KI cria orçamentos, faturas e respostas",
        "Mensagens",
        "Encontros",
        "Chamadas",
        "Traduções",
        "e muito mais…",
      ],
      magic: "A magia do PLANMOVE KI",
    },
  },
  testimonials: {
    headingLine1: "Empresas de mudanças e limpeza",
    headingLine2a: "com ",
    headingLine2Highlight: "PLANMOVE.",
    items: [
      {
        name: "Markus H.",
        role: "Empresário de mudanças",
        quote:
          "Antes, duas horas de papelada depois do trabalho. Hoje falo 40 segundos para o telemóvel — está feito. Recuperei o meu fim de dia.",
      },
      {
        name: "Elena B.",
        role: "Empresária de limpeza",
        quote:
          "Cresci em Portugal. O PLANMOVE KI percebe a minha língua materna e escreve um alemão impecável. Os meus clientes notam a diferença.",
      },
      {
        name: "Thomas K.",
        role: "Empresário de transportes",
        quote:
          "O follow-up automático salvou-me três encomendas no mês passado, que de outra forma teria esquecido. O PLANMOVE KI compensa várias vezes.",
      },
      {
        name: "Sara M.",
        role: "Empresária de limpeza",
        quote:
          "O PLANMOVE KI responde a pedidos de noite e ao fim de semana — isso dá-me uma verdadeira tranquilidade.",
      },
      {
        name: "David R.",
        role: "Empresário de mudanças",
        quote:
          "Desde que usamos o PLANMOVE KI, escrevemos orçamentos profissionais em questão de minutos. Poupa tempo e parece muito mais sério aos olhos dos clientes.",
      },
      {
        name: "Equipa Primemove",
        role: "Primemove",
        quote:
          "O PLANMOVE KI mudou completamente o nosso dia a dia no escritório. Mais tempo, menos stress, clientes satisfeitos.",
      },
    ],
  },
  beforeAfter: {
    headingBefore: "Sem o PLANMOVE KI",
    headingAfter: "Com o PLANMOVE KI",
    items: [
      { before: "O alemão era um problema.", after: "Fale simplesmente – o PLANMOVE KI escreve um alemão perfeito." },
      { before: "Os orçamentos custavam muito tempo.", after: "Orçamentos em poucos segundos." },
      { before: "Clientes esquecidos após os orçamentos.", after: "Lembrete automático para os clientes." },
      { before: "Criar faturas manualmente.", after: "Criar faturas automaticamente." },
      { before: "E-mails e cartas eram penosos.", after: "O PLANMOVE KI explica e responde a tudo." },
      { before: "Trabalho de escritório até tarde.", after: "Mais tempo livre, menos escritório." },
      { before: "Pedidos perdidos.", after: "Respostas – mesmo fora do horário de trabalho." },
      { before: "Estava tudo desorganizado.", after: "Tudo num só lugar." },
      { before: "Muitos erros e mal-entendidos.", after: "Comunicação clara e profissional." },
      { before: "Era preciso mais pessoal.", after: "Menos esforço, menos custos." },
    ],
  },
  faq: {
    heading: "Perguntas frequentes",
    items: [
      {
        q: "O que é o PLANMOVE KI?",
        a: "O PLANMOVE KI é o seu assistente pessoal de IA para a sua empresa de mudanças ou limpeza. Responde a pedidos, cria orçamentos e faturas, traduz textos e lembra os clientes automaticamente — simplesmente por voz ou WhatsApp.",
      },
      {
        q: "Preciso de saber alemão?",
        a: "Não. Fale simplesmente na sua língua materna. O PLANMOVE KI compreende-o e cria respostas profissionais em alemão perfeito ou na língua do seu cliente.",
      },
      {
        q: "Quão rápido é o PLANMOVE KI?",
        a: "O PLANMOVE KI responde em segundos. Um orçamento, um e-mail ou um pedido de um cliente — tudo é tratado de imediato, mesmo fora do horário de escritório.",
      },
      {
        q: "O PLANMOVE KI também funciona no telemóvel?",
        a: "Sim. Pode usar o PLANMOVE KI confortavelmente no seu smartphone através do WhatsApp ou de mensagens de voz — no escritório, em viagem ou na obra.",
      },
      {
        q: "Que línguas fala o PLANMOVE KI?",
        a: "O PLANMOVE KI fala consigo na sua língua materna — seja qual for. E escreve respostas profissionais em alemão, francês, italiano ou na língua do seu cliente.",
      },
    ],
  },
  team: {
    kicker: "A nossa equipa",
    heading: "As pessoas por trás da PLANMOVE",
    sub: "Uma pequena equipa com um grande objetivo: menos escritório, mais tempo e mais clientes para as empresas suíças de mudanças e limpeza.",
  },
  finalCta: {
    chipMoving: "Mudanças",
    chipCleaning: "Limpeza",
    headline1: "Menos escritório.",
    headline2: "Mais tempo. Mais clientes.",
    headline3: "Mais faturação.",
    paragraph:
      "Descubra como o PLANMOVE KI torna o seu dia a dia de trabalho mais simples e garante que não perde mais nenhum pedido nem encomenda.",
    subItems: ["Sem compromisso", "Resposta rápida", "Aconselhamento pessoal"],
  },
  footer: {
    kicker: "O seu próximo passo",
    headlineA: "Pronto para ",
    headlineB: "mais ",
    headlineHighlight: "faturação?",
    paragraph:
      "Uma breve conversa no WhatsApp — pessoal, gratuita e sem compromisso. Descubra em cinco minutos como o PLANMOVE KI transforma a sua PME.",
    brandDescription:
      "O PLANMOVE KI trata de orçamentos, faturas e comunicação com clientes para empresas suíças de mudanças e limpeza. Disponível 24/7. Em qualquer língua.",
    contactHeading: "Contacto",
    phone: "+41794880011",
    phoneAria: "Ligar para a PLANMOVE",
    bottomNote: "",
  },
  phoneMockup: {
    newRequest: "Novo pedido",
    headline1: "Fale simplesmente.",
    headline2: "O PLANMOVE KI escreve.",
    recording: "A gravar",
    transcript:
      "«Orçamento para a família Martins, mudança de apartamento T3, de Zurique para Winterthur, sexta-feira às oito…",
    createdIn: "criado em 4.8s",
    quoteNumber: "Orçamento n.º 2049",
    now: "AGORA",
    sendWhatsApp: "Enviar por WhatsApp",
    micAria: "Gravação",
  },
  cardVisuals: {
    reaktion: {
      notifications: [
        "Pedido — Família Martins · Zurique",
        "WhatsApp — Sr. Kaufmann",
        "Correio de voz — Pedido de mudança",
      ],
      chip: "12 pedidos perdidos · esta noite",
    },
    sprache: {
      translated: "Traduzido · Alemão",
      reply: "Bom dia, teremos todo o gosto em enviar-lhe um orçamento.",
    },
    feierabend: {
      chipTop: "23:47 · Ainda à secretária",
      tableHead: "Orçamentos · 47 pendentes",
      overdue: "Em atraso",
      chipBottom: "O fim de dia ficou hoje outra vez sem efeito",
    },
    followUp: {
      autoReminder: "Lembrete automático",
      momoFollowsUp: "O PLANMOVE KI dá seguimento.",
      reminders: [
        { name: "Sr. Silva", detail: "Orçamento · há 3 dias" },
        { name: "Sra. Martins", detail: "Mudança T3,5 · há 5 dias" },
        { name: "Top Umzug AG", detail: "Acordo-quadro B2B · há 7 dias" },
      ],
    },
    anrufe: {
      incoming: "Chamada recebida",
      unknown: "Desconhecido",
      handled: "está a ser atendida pelo PLANMOVE KI…",
    },
  },
};
