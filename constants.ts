import { Layers, Zap, PenTool, Box, Hexagon, ShieldCheck, Leaf, Flame, Waves } from 'lucide-react';
import { CatalogItem, Material, PriceRow, Testimonial, Feature, Category } from './types';

export const WHATSAPP_NUMBER = "5511999999999"; // Replace with real number
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento na Imagine4Create.`;

export const FEATURES: Feature[] = [
  {
    title: "Alta Precisão",
    description: "Camadas de até 0.10mm para detalhes microscópicos e acabamento liso.",
    icon: Layers,
  },
  {
    title: "Qualidade Garantida",
    description: "Inspeção rigorosa de resistência e acabamento em cada peça produzida.",
    icon: ShieldCheck,
  },
  {
    title: "Modelagem Personalizada",
    description: "Trabalhamos com modelos personalizados. Nossa equipe transforma sua ideia em realidade.",
    icon: PenTool,
  },
];

export const CATEGORIES: Category[] = ["Todos", "Brinquedos", "Decorativos", "Utilidades", "Action Figures", "Cosplay", "Protótipos"];

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "2",
    title: "Engrenagem Helicoidal",
    description: "Peça técnica de reposição com alta resistência mecânica.",
    longDescription: "Engrenagem projetada para suportar alto torque e atrito. Impressa em ABS ou Nylon com preenchimento sólido (100% infill) para garantir durabilidade industrial.",
    priceStart: "R$ 30,00",
    images: [
      "https://picsum.photos/id/250/600/600",
      "https://picsum.photos/id/251/600/600"
    ],
    tags: ["Mecânica", "Peça Técnica"],
    category: "Utilidades",
    featured: true,
    isPromotional: false,
    weight: "25g",
    dimensions: "2A x 5L x 5P",
    materialType: "ABS",
    variations: [
      { size: "Pequeno", dimensions: "2A x 5L x 5P", price: "R$ 30,00" },
      { size: "Personalizado", dimensions: "Sob Medida", price: "Sob Consulta" }
    ]
  },
  {
    id: "3",
    title: "Vaso Low Poly",
    description: "Design moderno geométrico para decoração de interiores.",
    longDescription: "Vaso decorativo com estilo Low Poly moderno. Ideal para suculentas e plantas pequenas. O acabamento fosco do PLA Matte confere um visual de cerâmica sofisticada.",
    priceStart: "R$ 60,00",
    images: [
      "https://picsum.photos/id/106/600/600",
      "https://picsum.photos/id/107/600/600"
    ],
    tags: ["Decor", "Interiores"],
    category: "Decorativos",
    featured: true,
    isPromotional: true,
    weight: "120g",
    dimensions: "15A x 12D",
    materialType: "PLA",
    variations: [
      { size: "Pequeno", dimensions: "10A x 8D", price: "R$ 35,00" },
      { size: "Médio", dimensions: "15A x 12D", price: "R$ 60,00" },
      { size: "Grande", dimensions: "22A x 18D", price: "R$ 95,00" }
    ]
  },
  {
    id: "4",
    title: "Capacete Mandaloriano",
    description: "Réplica escala 1:1 para cosplay, pronto para pintura.",
    longDescription: "Capacete impresso em tamanho real, dividido em partes estrategicamente para montagem fácil. Feito em PLA resistente, lixável e pronto para receber primer e pintura.",
    priceStart: "R$ 350,00",
    images: [
      "https://picsum.photos/id/48/600/600",
      "https://picsum.photos/id/49/600/600"
    ],
    tags: ["Cosplay", "Star Wars"],
    category: "Cosplay",
    featured: false,
    isPromotional: false,
    weight: "800g",
    dimensions: "28A x 26L x 24P",
    materialType: "PLA",
    variations: [
      { size: "Médio", dimensions: "28A x 26L x 24P (Ref 58)", price: "R$ 350,00" },
      { size: "Grande", dimensions: "30A x 28L x 26P (Ref 62)", price: "R$ 400,00" }
    ]
  },
  {
    id: "5",
    title: "Suporte Headset Gamer",
    description: "Organize seu setup com este suporte robusto e estiloso.",
    longDescription: "Suporte de mesa para fones de ouvido. Design geométrico que distribui o peso para não marcar a espuma do fone. Disponível em cores neon.",
    priceStart: "R$ 45,00",
    images: [
      "https://picsum.photos/id/3/600/600"
    ],
    tags: ["Setup", "Gamer"],
    category: "Utilidades",
    featured: false,
    isPromotional: true,
    weight: "150g",
    dimensions: "22A x 15L",
    materialType: "PETG",
    variations: [
        { size: "Médio", dimensions: "22A x 15L", price: "R$ 45,00" }
    ]
  },
  {
    id: "6",
    title: "Dino Flexi Articulado",
    description: "Brinquedo articulado impresso em uma única peça.",
    longDescription: "O famoso T-Rex articulado! Imprime-se já montado, super flexível e divertido. Ótimo presente para crianças e adultos. Disponível em cores vibrantes.",
    priceStart: "R$ 25,00",
    images: [
      "https://picsum.photos/id/88/600/600"
    ],
    tags: ["Brinquedo", "Articulado"],
    category: "Brinquedos",
    featured: false,
    isPromotional: true,
    weight: "60g",
    dimensions: "15L",
    materialType: "PLA",
    variations: [
        { size: "Pequeno", dimensions: "10L", price: "R$ 15,00" },
        { size: "Médio", dimensions: "15L", price: "R$ 25,00" },
        { size: "Grande", dimensions: "25L", price: "R$ 45,00" }
    ]
  },
  {
    id: "7",
    title: "Peças Sob Medida",
    description: "Traga seu projeto e nós imprimimos.",
    longDescription: "Serviço exclusivo de impressão sob demanda. Envie seu arquivo .STL ou descreva sua ideia para modelagem. Orçamento baseado em tempo de máquina e material gasto.",
    priceStart: "Sob Consulta",
    images: [
      "https://picsum.photos/id/201/600/600"
    ],
    tags: ["Personalizado", "Serviço"],
    category: "Protótipos",
    featured: true,
    isPromotional: false,
    weight: "N/A",
    dimensions: "Sob Medida",
    materialType: "PLA",
    variations: []
  },
  {
    id: "8",
    title: "Luminária Lithophane",
    description: "Sua foto transformada em relevo iluminado.",
    longDescription: "Transforme suas memórias em luz. A técnica lithophane cria uma imagem em relevo que se revela ao ser iluminada por trás. Acompanha base com LED.",
    priceStart: "R$ 90,00",
    images: [
      "https://picsum.photos/id/338/600/600"
    ],
    tags: ["Presente", "Foto"],
    category: "Decorativos",
    featured: true,
    isPromotional: false,
    weight: "200g",
    dimensions: "15A x 12L",
    materialType: "PLA",
    variations: [
      { size: "Médio", dimensions: "15A x 12L", price: "R$ 90,00" },
      { size: "Grande", dimensions: "20A x 15L", price: "R$ 130,00" }
    ]
  },
  {
    id: "9",
    title: "Case Raspberry Pi",
    description: "Proteção ventilada para sua placa de desenvolvimento.",
    longDescription: "Case robusto com aberturas para ventilação e acesso a todas as portas (USB, HDMI, GPIO). Encaixe perfeito sem parafusos (snap-fit).",
    priceStart: "R$ 35,00",
    images: [
        "https://picsum.photos/id/403/600/600"
    ],
    tags: ["Eletrônica", "Maker"],
    category: "Utilidades",
    featured: false,
    isPromotional: false,
    weight: "40g",
    dimensions: "3A x 9.5L x 6.5P",
    materialType: "ABS",
    variations: [
        { size: "Médio", dimensions: "3A x 9.5L x 6.5P", price: "R$ 35,00" }
    ]
  }
];

export const MATERIALS: Material[] = [
  {
    name: "PLA Premium",
    description: "Biodegradável, fácil impressão e ótimo acabamento visual. Ideal para protótipos e decorativos.",
    durability: 6,
    detail: 8,
    color: "bg-cyan-500",
    icon: Leaf
  },
  {
    name: "PETG Resistente",
    description: "O equilíbrio perfeito entre a facilidade do PLA e a resistência do ABS. Suporta impactos e umidade.",
    durability: 8,
    detail: 7,
    color: "bg-green-500",
    icon: ShieldCheck
  },
  {
    name: "ABS Industrial",
    description: "Alta resistência térmica e mecânica. Perfeito para peças que sofrem estresse ou calor.",
    durability: 9,
    detail: 6,
    color: "bg-purple-500",
    icon: Flame
  },
  {
    name: "TPU Flexível",
    description: "Material emborrachado e elástico. Ideal para capas, vedações e amortecedores.",
    durability: 8,
    detail: 5,
    color: "bg-yellow-400",
    icon: Waves
  }
];

export const PRICING_ROWS: PriceRow[] = [
  { service: "Impressão PLA", unit: "por grama", price: "R$ 0,70", details: "Padrão / Biodegradável" },
  { service: "Impressão PETG", unit: "por grama", price: "R$ 0,80", details: "Resistência / Mecânico" },
  { service: "Impressão ABS", unit: "por grama", price: "R$ 0,85", details: "Alta Resistência Térmica" },
  { service: "Impressão TPU", unit: "por grama", price: "R$ 1,20", details: "Flexível / Emborrachado" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ricardo Silva",
    role: "Arquiteto",
    content: "A qualidade da maquete impressa superou minhas expectativas. Os detalhes das janelas ficaram incríveis.",
    avatar: "https://picsum.photos/id/1005/100/100"
  },
  {
    id: "t2",
    name: "Mariana Costa",
    role: "Cosplayer",
    content: "As peças do meu armor chegaram perfeitas e no prazo. O acabamento facilitou muito a pintura.",
    avatar: "https://picsum.photos/id/338/100/100"
  },
  {
    id: "t3",
    name: "Tech Solutions",
    role: "Empresa",
    content: "Prototipamos nosso case de IoT com a Imagine4Create e economizamos semanas de desenvolvimento.",
    avatar: "https://picsum.photos/id/1011/100/100"
  }
];