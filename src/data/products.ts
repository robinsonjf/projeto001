export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  status: string;
  tagLeft: string;
  tagRight: string;
  desc: string;
  mainImage: string;
  gallery: string[];
  specs: { label: string; value: string }[];
  cardSpecs: { pena: string; material: string; recarga: string };
  highlights: { icon: string; title: string; desc: string }[];
}

export const products: Product[] = [
  {
    id: 'titanium-stealth',
    name: 'Titanium Stealth Minimalist',
    subtitle: 'Titanium Aero G5 Edition',
    price: 'Sob Consulta',
    status: 'EDIÇÃO LIMITADA • EM BREVE',
    tagLeft: 'EDIÇÃO LIMITADA',
    tagRight: 'ESGOTADO',
    desc: 'Design ultra-leve de precisão usinado em titânio aeroespacial Grau 5 com equilíbrio de peso milimétrico. Desenvolvida para máxima estabilidade em traços técnicos de longa duração.',
    mainImage: '/assets/raw_files/pen_silver.jpg',
    gallery: [
      '/assets/raw_files/pen_silver.jpg',
      '/assets/raw_files/pen_black.jpg',
      '/assets/raw_files/pen_gold.jpg'
    ],
    cardSpecs: { pena: 'Ouro 18k Fine', material: 'Titânio G5', recarga: 'Tinteiro / Pistão' },
    specs: [
      { label: 'Pena', value: 'Ouro 18k Fine Usinado' },
      { label: 'Corpo', value: 'Titânio Aeroespacial Grau 5' },
      { label: 'Peso', value: '14.2 gramas (Balanço Neutro)' },
      { label: 'Mecanismo', value: 'Trava Magnética Neodímo' },
      { label: 'Sistema de Tinta', value: 'Pistão Hidráulico Contínuo' },
      { label: 'Resistência', value: 'IPX8 (À prova d\'água)' }
    ],
    highlights: [
      { icon: 'solar:shield-check-bold-duotone', title: 'Garantia Vitalícia', desc: 'Estrutura indestrutível em titânio Grau 5 testada sob condições extremas de pressão.' },
      { icon: 'solar:tuning-bold-duotone', title: 'Equilíbrio Micrométrico', desc: 'Centro de gravidade ajustado a 45% da ponta para redução de fadiga ao escrever.' },
      { icon: 'solar:stars-bold-duotone', title: 'Edição Numerada', desc: 'Cada peça possui seu número de série exclusivo gravado a laser no clipe.' }
    ]
  },
  {
    id: 'precision-ceramic',
    name: 'Precision Ceramic Matte',
    subtitle: 'Zirconia Black Matte Edition',
    price: 'Sob Consulta',
    status: 'NOVO LANÇAMENTO • EM BREVE',
    tagLeft: 'NOVO LANÇAMENTO',
    tagRight: 'EM BREVE',
    desc: 'Revestimento cerâmico de zircônia de alta resistência com acabamento fosco aveludado anti-impressão digital e mecanismo retrátil hidráulico suave.',
    mainImage: '/assets/raw_files/pen_black.jpg',
    gallery: [
      '/assets/raw_files/pen_black.jpg',
      '/assets/raw_files/pen_carbon.jpg',
      '/assets/raw_files/pen_blue.jpg'
    ],
    cardSpecs: { pena: 'Aço Inox M', material: 'Cerâmica Zircônia', recarga: 'Rollerball G2' },
    specs: [
      { label: 'Pena', value: 'Aço Inoxidável Polido M' },
      { label: 'Corpo', value: 'Cerâmica de Zircônia Negra' },
      { label: 'Peso', value: '18.5 gramas' },
      { label: 'Mecanismo', value: 'Retrátil Hidráulico' },
      { label: 'Sistema de Tinta', value: 'Refil Rollerball G2 ISO' },
      { label: 'Resistência', value: 'Anti-risco & Térmico' }
    ],
    highlights: [
      { icon: 'solar:shield-check-bold-duotone', title: 'Cerâmica Zircônia', desc: 'Material ultra-resistente à abrasão e quedas, mantendo o acabamento fosco impecável.' },
      { icon: 'solar:tuning-bold-duotone', title: 'Mecanismo Hidráulico', desc: 'Avanço de ponta silencioso amortecido por óleo sintético de alta viscosidade.' },
      { icon: 'solar:stars-bold-duotone', title: 'Sensação Aveludada', desc: 'Textura acetinada que proporciona empunhadura firme e confortável.' }
    ]
  },
  {
    id: 'obsidian-gold',
    name: 'Obsidian Vintage Gold',
    subtitle: 'Brushed Brass Heritage Edition',
    price: 'Sob Consulta',
    status: 'COLEÇÃO 2026 • ESGOTADO',
    tagLeft: 'COLEÇÃO 2026',
    tagRight: 'ESGOTADO',
    desc: 'Acabamento de latão maciço usinado antireflexo com gravura ornamental clássica e sistema de amortecimento tátil ao escrever.',
    mainImage: '/assets/raw_files/pen_gold.jpg',
    gallery: [
      '/assets/raw_files/pen_gold.jpg',
      '/assets/raw_files/pen_bronze.jpg',
      '/assets/raw_files/pen_rosegold.jpg'
    ],
    cardSpecs: { pena: 'Carbon EF', material: 'Latão Escovado', recarga: 'Esferográfica' },
    specs: [
      { label: 'Pena', value: 'Carbon Extra Fine (EF)' },
      { label: 'Corpo', value: 'Latão Maciço Usinado' },
      { label: 'Peso', value: '26.8 gramas (Sensação Substancial)' },
      { label: 'Mecanismo', value: 'Tampa Rosqueada de Alinhamento' },
      { label: 'Sistema de Tinta', value: 'Conversor Esferográfico' },
      { label: 'Resistência', value: 'Pátina Natural' }
    ],
    highlights: [
      { icon: 'solar:shield-check-bold-duotone', title: 'Latão Nobre', desc: 'Desenvolve uma pátina única com o tempo de uso, tornando cada caneta exclusiva.' },
      { icon: 'solar:tuning-bold-duotone', title: 'Gravura Ornamental', desc: 'Detalhes entalhados à mão por mestres joalheiros com precisão microscópica.' },
      { icon: 'solar:stars-bold-duotone', title: 'Pena Carbon EF', desc: 'Ponta de alta densidade para assinaturas marcantes e caligrafia artística.' }
    ]
  },
  {
    id: 'pearl-white',
    name: 'CAROLINE Pearl White',
    subtitle: 'White Silk Ceramic Edition',
    price: 'Sob Consulta',
    status: 'EXCLUSIVO • DISPONÍVEL',
    tagLeft: 'EXCLUSIVO',
    tagRight: 'DISPONÍVEL',
    desc: 'Corpo de cerâmica branca perolada com brilho acetinado e clipe cromado. Proporciona suavidade máxima ao deslizar em papéis nobres.',
    mainImage: '/assets/raw_files/pen_pearl.jpg',
    gallery: [
      '/assets/raw_files/pen_pearl.jpg',
      '/assets/raw_files/pen_silver.jpg',
      '/assets/raw_files/pen_rosegold.jpg'
    ],
    cardSpecs: { pena: 'Titânio F', material: 'Cerâmica Pérola', recarga: 'Pistão Direto' },
    specs: [
      { label: 'Pena', value: 'Titânio F (Fine)' },
      { label: 'Corpo', value: 'Cerâmica Pérola Maciça' },
      { label: 'Peso', value: '16.0 gramas' },
      { label: 'Mecanismo', value: 'Encaixe Magnético' },
      { label: 'Sistema de Tinta', value: 'Pistão Direto' },
      { label: 'Resistência', value: 'Resistente a U.V.' }
    ],
    highlights: [
      { icon: 'solar:shield-check-bold-duotone', title: 'Cerâmica Pérola', desc: 'Brilho acetinado e acabamento sedoso imune a manchas e desbotamento.' },
      { icon: 'solar:tuning-bold-duotone', title: 'Deslize Fluido', desc: 'Pena de titânio calibrada para fricção mínima na superfície do papel.' },
      { icon: 'solar:stars-bold-duotone', title: 'Design Atemporal', desc: 'Estética minimalista inspirada nas mais renomadas casas de design suíças.' }
    ]
  },
  {
    id: 'rose-copper',
    name: 'CAROLINE Rose Copper',
    subtitle: 'Anodized Rose Gold Edition',
    price: 'Sob Consulta',
    status: 'SÉRIE ESPECIAL • EM BREVE',
    tagLeft: 'SÉRIE ESPECIAL',
    tagRight: 'EM BREVE',
    desc: 'Liga refinada de cobre e ouro rosa com ranhuras táteis na empunhadura para controle cirúrgico do traço.',
    mainImage: '/assets/raw_files/pen_rosegold.jpg',
    gallery: [
      '/assets/raw_files/pen_rosegold.jpg',
      '/assets/raw_files/pen_gold.jpg',
      '/assets/raw_files/pen_pearl.jpg'
    ],
    cardSpecs: { pena: 'Ouro Rosa 18k', material: 'Cobre Anodizado', recarga: 'Cartucho Padrão' },
    specs: [
      { label: 'Pena', value: 'Ouro Rosa 18k' },
      { label: 'Corpo', value: 'Liga Cobre-Ouro Anodizada' },
      { label: 'Peso', value: '21.4 gramas' },
      { label: 'Mecanismo', value: 'Rosca de Precisão' },
      { label: 'Sistema de Tinta', value: 'Cartucho / Conversor' },
      { label: 'Resistência', value: 'Tratamento Anódico' }
    ],
    highlights: [
      { icon: 'solar:shield-check-bold-duotone', title: 'Ouro Rosa 18k', desc: 'Pena banhada em liga especial de ouro rosa de alto quilate.' },
      { icon: 'solar:tuning-bold-duotone', title: 'Empunhadura Ranhurada', desc: 'Micro-sulcos na zona de pega para estabilidade absoluta durante o uso.' },
      { icon: 'solar:stars-bold-duotone', title: 'Série Limitada', desc: 'Produção restrita a poucas unidades numeradas por lote.' }
    ]
  },
  {
    id: 'carbon-stealth',
    name: 'CAROLINE Carbon Stealth',
    subtitle: '3K Carbon Fiber Edition',
    price: 'Sob Consulta',
    status: 'EDIÇÃO LIMITADA • ESGOTADO',
    tagLeft: 'EDIÇÃO LIMITADA',
    tagRight: 'ESGOTADO',
    desc: 'Trama bidirecional em fibra de carbono real 3K com detalhes em aço usinado. Pesa surpreendentes 11.8 gramas.',
    mainImage: '/assets/raw_files/pen_carbon.jpg',
    gallery: [
      '/assets/raw_files/pen_carbon.jpg',
      '/assets/raw_files/pen_black.jpg',
      '/assets/raw_files/pen_silver.jpg'
    ],
    cardSpecs: { pena: 'Carbono F', material: 'Fibra 3K', recarga: 'Rollerball Tech' },
    specs: [
      { label: 'Pena', value: 'Liga Carbono F' },
      { label: 'Corpo', value: 'Fibra de Carbono 3K' },
      { label: 'Peso', value: '11.8 gramas (Ultra Leve)' },
      { label: 'Mecanismo', value: 'Click Ultrassônico' },
      { label: 'Sistema de Tinta', value: 'Rollerball Hi-Tech' },
      { label: 'Resistência', value: 'Ultra Rígido' }
    ],
    highlights: [
      { icon: 'solar:shield-check-bold-duotone', title: 'Carbono 3K', desc: 'Mesmo material utilizado em supercarros e aeronaves de alto desempenho.' },
      { icon: 'solar:tuning-bold-duotone', title: 'Ultra Leveza', desc: 'Apenas 11.8 gramas para uma escrita sem nenhum esforço.' },
      { icon: 'solar:stars-bold-duotone', title: 'Visual Tecnológico', desc: 'Trama entrelaçada visível sob camada protetora transparente.' }
    ]
  },
  {
    id: 'bronze-heritage',
    name: 'CAROLINE Bronze Heritage',
    subtitle: 'Aged Bronze Collector Edition',
    price: 'Sob Consulta',
    status: 'HERITAGE • ESGOTADO',
    tagLeft: 'HERITAGE',
    tagRight: 'ESGOTADO',
    desc: 'Pena de ouro maciço com corpo pesado usinado em bronze escuro envelhecido com textura rústica e colecionável.',
    mainImage: '/assets/raw_files/pen_bronze.jpg',
    gallery: [
      '/assets/raw_files/pen_bronze.jpg',
      '/assets/raw_files/pen_gold.jpg',
      '/assets/raw_files/pen_green.jpg'
    ],
    cardSpecs: { pena: 'Ouro 24k Flex', material: 'Bronze Antigo', recarga: 'Conversor Deluxe' },
    specs: [
      { label: 'Pena', value: 'Ouro 24k Flexível' },
      { label: 'Corpo', value: 'Bronze Patinado Antigo' },
      { label: 'Peso', value: '29.5 gramas' },
      { label: 'Mecanismo', value: 'Tampa de Encaixe Firme' },
      { label: 'Sistema de Tinta', value: 'Conversor Deluxe de Vidro' },
      { label: 'Resistência', value: 'Tratamento Vintage' }
    ],
    highlights: [
      { icon: 'solar:shield-check-bold-duotone', title: 'Ouro 24k Flex', desc: 'Pena maleável que varia a espessura da linha conforme a pressão do traço.' },
      { icon: 'solar:tuning-bold-duotone', title: 'Textura Antiga', desc: 'Acabamento artesanal envelhecido com pátina escura de alto valor estético.' },
      { icon: 'solar:stars-bold-duotone', title: 'Item de Colecionador', desc: 'Peça rara para apreciadores da alta caligrafia clássica.' }
    ]
  },
  {
    id: 'midnight-navy',
    name: 'CAROLINE Midnight Navy',
    subtitle: 'Deep Navy Anodized Edition',
    price: 'Sob Consulta',
    status: 'LANÇAMENTO • EM BREVE',
    tagLeft: 'LANÇAMENTO',
    tagRight: 'EM BREVE',
    desc: 'Acabamento metálico azul noturno fosco com anel central serrilhado em aço inoxidável cirúrgico.',
    mainImage: '/assets/raw_files/pen_blue.jpg',
    gallery: [
      '/assets/raw_files/pen_blue.jpg',
      '/assets/raw_files/pen_black.jpg',
      '/assets/raw_files/pen_carbon.jpg'
    ],
    cardSpecs: { pena: 'Cobalto EF', material: 'Alumínio Azul', recarga: 'Gel Hi-Tech' },
    specs: [
      { label: 'Pena', value: 'Cobalto Extra Fine' },
      { label: 'Corpo', value: 'Alumínio Anodizado Azul' },
      { label: 'Peso', value: '15.3 gramas' },
      { label: 'Mecanismo', value: 'Torção Suave' },
      { label: 'Sistema de Tinta', value: 'Gel Fluido Secagem Rápida' },
      { label: 'Resistência', value: 'Resistente a Risco' }
    ],
    highlights: [
      { icon: 'solar:shield-check-bold-duotone', title: 'Azul Noturno Metálico', desc: 'Tom azul profundo com brilho acetinado sob iluminação direta.' },
      { icon: 'solar:tuning-bold-duotone', title: 'Tinta Gel Rápida', desc: 'Secagem instantânea que impede borrões em escrita rápida.' },
      { icon: 'solar:stars-bold-duotone', title: 'Anel Serrilhado', desc: 'Detalhes usinados com precisão mecânica para contraste de cor.' }
    ]
  },
  {
    id: 'emerald-sovereign',
    name: 'CAROLINE Emerald Sovereign',
    subtitle: 'Deep Emerald Lacquer Edition',
    price: 'Sob Consulta',
    status: 'EXCLUSIVO • EM BREVE',
    tagLeft: 'EXCLUSIVO',
    tagRight: 'EM BREVE',
    desc: 'Corpo laqueado em verde esmeralda profundo com detalhes banhados em ouro 18k e alimentador por capilaridade.',
    mainImage: '/assets/raw_files/pen_green.jpg',
    gallery: [
      '/assets/raw_files/pen_green.jpg',
      '/assets/raw_files/pen_gold.jpg',
      '/assets/raw_files/pen_bronze.jpg'
    ],
    cardSpecs: { pena: 'Ouro 18k Broad', material: 'Laca Esmeralda', recarga: 'Tinteiro Premium' },
    specs: [
      { label: 'Pena', value: 'Ouro 18k Broad (B)' },
      { label: 'Corpo', value: 'Laca Verde Esmeralda' },
      { label: 'Peso', value: '23.0 gramas' },
      { label: 'Mecanismo', value: 'Tampa com Rosca Tripla' },
      { label: 'Sistema de Tinta', value: 'Alimentador Capilar Premium' },
      { label: 'Resistência', value: 'Laca Multicamadas' }
    ],
    highlights: [
      { icon: 'solar:shield-check-bold-duotone', title: 'Laca Esmeralda', desc: 'Múltiplas camadas de laca vegetal polidas até atingir espelhamento.' },
      { icon: 'solar:tuning-bold-duotone', title: 'Pena Broad 18k', desc: 'Fluxo abundante de tinta ideal para assinaturas solenes e documentos.' },
      { icon: 'solar:stars-bold-duotone', title: 'Detalhes em Ouro', desc: 'Anéis e clipe folheados a ouro 18k de alta resistência.' }
    ]
  }
];
