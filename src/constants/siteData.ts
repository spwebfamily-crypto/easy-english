import {
  BadgeCheck,
  BookOpenText,
  BrainCircuit,
  Clock3,
  Instagram,
  Languages,
  MessageCircleMore,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Target,
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

// Apenas os ícones - os textos vêm das traduções
export const painPointIcons = [MessageCircleMore, BrainCircuit, Clock3, Target];
export const processStepIcons = [MousePointerClick, BookOpenText, Languages];
export const proofCardConfig = [
  { icon: BadgeCheck, tone: "blue" as const },
  { icon: Sparkles, tone: "gold" as const },
  { icon: ShieldCheck, tone: "coral" as const },
];
export const heroPanelConfig = [
  { icon: Instagram },
  { icon: ShieldCheck, accent: true },
];
