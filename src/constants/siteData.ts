import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BrainCircuit,
  CheckCircle2,
  CirclePlay,
  Clock3,
  Instagram,
  Languages,
  MessageCircleMore,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export type HeroSignal = {
  value: string;
  label: string;
};

export type FeatureCardData = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type ProofCardData = {
  icon: LucideIcon;
  tone: "blue" | "gold" | "coral";
  kicker: string;
  value: string;
  title: string;
  text: string;
};

export type FaqItemData = {
  question: string;
  answer: string;
};

export type TeacherPoint = {
  label: string;
};

export type HeroPanelData = {
  icon: LucideIcon;
  kicker: string;
  title: string;
  description?: string;
  items?: string[];
  accent?: boolean;
};

export const heroWords = ["rápido", "prático", "eficaz", "definitivo"];

export const tickerItems = [
  "🔥 vagas limitadas",
  "✅ aprovado por +1000 alunos",
  "⚡ resultados em semanas",
  "🎯 método exclusivo",
  "💎 acesso vitalício",
  "🚀 comece hoje mesmo",
];

export const heroSignals: HeroSignal[] = [
  { value: "+1.000", label: "alunos transformados" },
  { value: "97%", label: "taxa de satisfação" },
  { value: "100%", label: "garantia de 7 dias" },
];

export const painPoints: FeatureCardData[] = [
  {
    icon: MessageCircleMore,
    title: "Cansou de estudar e não conseguir falar?",
    text: "Você entende algumas palavras, mas na hora de conversar o inglês simplesmente não sai. É frustrante.",
  },
  {
    icon: BrainCircuit,
    title: "Perdido entre tantos métodos diferentes?",
    text: "Já tentou apps, vídeos no YouTube e cursos caros, mas nada funcionou de verdade. Falta um método claro.",
  },
  {
    icon: Clock3,
    title: "Não tem tempo para estudar horas por dia?",
    text: "Sua rotina é corrida e você precisa de um método que funcione com apenas 20 minutos diários.",
  },
  {
    icon: Target,
    title: "Quer resultados reais em poucas semanas?",
    text: "Chega de enrolação. Você quer um método comprovado que te faça falar inglês de verdade, rápido.",
  },
];

export const processSteps: FeatureCardData[] = [
  {
    icon: MousePointerClick,
    title: "Garanta sua vaga agora",
    text: "Acesso 100% seguro pela Hotmart com compra protegida e garantia incondicional de 7 dias.",
  },
  {
    icon: BookOpenText,
    title: "Acesso imediato ao conteúdo completo",
    text: "Receba login e senha na hora e comece a estudar em menos de 2 minutos após a compra.",
  },
  {
    icon: Languages,
    title: "Aprenda com o método exclusivo da Teacher Kilane",
    text: "Método testado e aprovado por mais de 1.000 alunos, com aulas práticas, diretas e sem enrolação.",
  },
];

export const proofCards: ProofCardData[] = [
  {
    icon: BadgeCheck,
    tone: "blue",
    kicker: "Resultados comprovados",
    value: "+1.000",
    title: "alunos satisfeitos",
    text: "Mais de mil pessoas já transformaram seu inglês com o método Easy English Now.",
  },
  {
    icon: Sparkles,
    tone: "gold",
    kicker: "Garantia total",
    value: "7 dias",
    title: "risco zero para você",
    text: "Se não fizer sentido para você, devolvemos 100% do valor. Simples e sem burocracia.",
  },
  {
    icon: ShieldCheck,
    tone: "coral",
    kicker: "Conteúdo premium",
    value: "9",
    title: "produtos inclusos",
    text: "Acesso vitalício ao conteúdo do clube, com atualizações gratuitas sempre que houver novidade.",
  },
];

export const deliverables: FeatureCardData[] = [
  {
    icon: CheckCircle2,
    title: "Método passo a passo do zero",
    text: "Aulas organizadas em sequência lógica para você saber exatamente o que estudar a cada dia.",
  },
  {
    icon: CheckCircle2,
    title: "Aulas práticas e objetivas",
    text: "Sem teoria excessiva. Você aprende praticando desde a primeira aula com situações reais.",
  },
  {
    icon: CheckCircle2,
    title: "Suporte direto com a Teacher Kilane",
    text: "Tire dúvidas com a professora e avance sem ficar travado no processo.",
  },
  {
    icon: CheckCircle2,
    title: "Acesso vitalício ao conteúdo",
    text: "Pague uma vez e estude para sempre, sem mensalidades e sem taxas escondidas.",
  },
  {
    icon: CheckCircle2,
    title: "Certificado de conclusão",
    text: "Receba seu certificado digital ao completar o curso e comprove sua evolução.",
  },
  {
    icon: CheckCircle2,
    title: "Estude de qualquer lugar",
    text: "Acesse pelo celular, tablet ou computador e avance no seu ritmo, onde quiser.",
  },
];

export const faqItems: FaqItemData[] = [
  {
    question: "Funciona mesmo para quem está começando do zero?",
    answer: "Sim. O método foi criado especialmente para iniciantes. Você não precisa saber nada de inglês para começar, porque as aulas são progressivas e explicadas em português.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "A maioria dos alunos consegue manter conversas básicas em 4 a 6 semanas estudando apenas 20 minutos por dia.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro.",
  },
];

export const teacherPoints: TeacherPoint[] = [
  { label: "🎯 +10 anos ensinando inglês" },
  { label: "✅ +1.000 alunos satisfeitos" },
  { label: "🚀 Método exclusivo e comprovado" },
];

export const heroPanels: HeroPanelData[] = [
  {
    icon: Instagram,
    kicker: "@_easyenglishnow",
    title: "Mais de 1.000 alunos já transformaram seu inglês",
    items: ["Aprenda do zero ao avançado", "Resultados em semanas", "Acesso vitalício garantido"],
  },
  {
    icon: ShieldCheck,
    kicker: "Checkout oficial",
    title: "Garantia incondicional de 7 dias",
    description: "Não gostou? Devolvemos 100% do seu dinheiro. Sem perguntas. Risco zero.",
    accent: true,
  },
];
