import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
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
import Materials from "./pages/Materials";
import ContactForm from "./pages/ContactForm";
import { useScrollReveal } from "./hooks/useScrollReveal";

const instagramLink = "https://www.instagram.com/_easyenglishnow/";
const hotmartLink = "https://hotmart.com/pt-br/club/easy-inglish-now";
const whatsappNumber = "351936680657";

const heroWords = ["rápido", "prático", "eficaz", "definitivo"];

const tickerItems = [
  "🔥 vagas limitadas",
  "✅ aprovado por +1000 alunos",
  "⚡ resultados em semanas",
  "🎯 método exclusivo",
  "💎 acesso vitalício",
  "🚀 comece hoje mesmo",
];

type HeroSignal = {
  value: string;
  label: string;
};

type FeatureCardData = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type ProofCardData = {
  icon: LucideIcon;
  tone: "blue" | "gold" | "coral";
  kicker: string;
  value: string;
  title: string;
  text: string;
};

type FaqItemData = {
  question: string;
  answer: string;
};

type TeacherPoint = {
  label: string;
};

type HeroPanelData = {
  icon: LucideIcon;
  kicker: string;
  title: string;
  description?: string;
  items?: string[];
  accent?: boolean;
};

const heroSignals: HeroSignal[] = [
  {
    value: "+1.000",
    label: "alunos transformados",
  },
  {
    value: "97%",
    label: "taxa de satisfação",
  },
  {
    value: "100%",
    label: "garantia de 7 dias",
  },
];

const painPoints: FeatureCardData[] = [
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

const processSteps: FeatureCardData[] = [
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

const proofCards: ProofCardData[] = [
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

const deliverables: FeatureCardData[] = [
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

const faqItems: FaqItemData[] = [
  {
    question: "Funciona mesmo para quem está começando do zero?",
    answer:
      "Sim. O método foi criado especialmente para iniciantes. Você não precisa saber nada de inglês para começar, porque as aulas são progressivas e explicadas em português.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "A maioria dos alunos consegue manter conversas básicas em 4 a 6 semanas estudando apenas 20 minutos por dia. Quanto mais você pratica, mais rápido evolui.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer:
      "Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro sem burocracia.",
  },
  {
    question: "Como funciona o acesso ao conteúdo?",
    answer:
      "Após a compra, você recebe login e senha por e-mail em até 2 minutos. O acesso é vitalício e você pode estudar no seu ritmo.",
  },
  {
    question: "Preciso de muito tempo livre para estudar?",
    answer:
      "Não. O método foi criado para pessoas ocupadas. Com apenas 20 minutos por dia já é possível evoluir de forma consistente.",
  },
  {
    question: "A compra é segura?",
    answer:
      "Sim. A compra é processada pela Hotmart, uma das maiores plataformas de produtos digitais da América Latina.",
  },
];

const teacherPoints: TeacherPoint[] = [
  { label: "🎯 +10 anos ensinando inglês" },
  { label: "✅ +1.000 alunos satisfeitos" },
  { label: "🚀 Método exclusivo e comprovado" },
];

const heroPanels: HeroPanelData[] = [
  {
    icon: Instagram,
    kicker: "@_easyenglishnow",
    title: "Mais de 1.000 alunos já transformaram seu inglês",
    items: [
      "Aprenda do zero ao avançado",
      "Resultados em semanas",
      "Acesso vitalício garantido",
    ],
  },
  {
    icon: ShieldCheck,
    kicker: "Checkout oficial",
    title: "Garantia incondicional de 7 dias",
    description:
      "Não gostou? Devolvemos 100% do seu dinheiro. Sem perguntas e sem burocracia. Risco zero.",
    accent: true,
  },
];

function revealStyle(delay = 0): CSSProperties {
  return { "--reveal-delay": `${delay}ms` };
}

type ButtonLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  icon?: LucideIcon;
};

function ButtonLink({
  href,
  className = "",
  children,
  icon: Icon = ArrowRight,
}: ButtonLinkProps) {
  return (
    <a className={`button-link ${className}`.trim()} href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <Icon aria-hidden="true" size={18} />
    </a>
  );
}

type ActionButtonProps = {
  onClick: () => void;
  className?: string;
  children: ReactNode;
  icon?: LucideIcon;
};

function ActionButton({
  onClick,
  className = "",
  children,
  icon: Icon = ArrowRight,
}: ActionButtonProps) {
  return (
    <button className={`button-link ${className}`.trim()} onClick={onClick} type="button">
      <span>{children}</span>
      <Icon aria-hidden="true" size={18} />
    </button>
  );
}

type SectionIntroProps = {
  label: ReactNode;
  title: string;
  description: string;
};

function SectionIntro({ label, title, description }: SectionIntroProps) {
  return (
    <div className="section-head" data-reveal="up">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

type HeroPanelProps = HeroPanelData & {
  delay?: number;
};

function HeroPanel({ icon: Icon, kicker, title, description, items, accent, delay = 0 }: HeroPanelProps) {
  return (
    <article
      className={`hero-panel ${accent ? "hero-panel--accent" : ""}`.trim()}
      data-reveal="up"
      style={revealStyle(delay)}
    >
      <div className="hero-panel__header">
        <div className="hero-panel__kicker">
          <Icon aria-hidden="true" size={16} />
          <span>{kicker}</span>
        </div>
        <h3>{title}</h3>
      </div>

      {items ? (
        <ul className="hero-panel__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {description ? <p>{description}</p> : null}
    </article>
  );
}

function HeroPreview() {
  return (
    <div className="hero-visual">
      <div className="story-stage" data-reveal="right">
        <span className="story-sticker story-sticker--left">🔥 vagas limitadas</span>
        <span className="story-sticker story-sticker--right">⚡ começa hoje</span>
        <picture className="story-frame">
          <source media="(max-width: 820px)" srcSet="/assets/1a-DOBRA-MOBILE-EASY-ENGLISH-NOW.jpg" />
          <img
            src="/assets/1a-DOBRA-EASY-ENGLISH-NOW.jpg"
            alt="Teacher Kilane apresentando o Easy English Now"
          />
        </picture>
      </div>

      <div className="hero-panels">
        {heroPanels.map((panel, index) => (
          <HeroPanel key={panel.title} {...panel} delay={120 + index * 100} />
        ))}
      </div>
    </div>
  );
}

type MetricCardProps = HeroSignal & {
  delay?: number;
};

function MetricCard({ value, label, delay = 0 }: MetricCardProps) {
  return (
    <article className="metric-card" data-reveal="up" style={revealStyle(delay)}>
      <span className="metric-card__value">{value}</span>
      <span className="metric-card__label">{label}</span>
    </article>
  );
}

type FeatureCardProps = FeatureCardData & {
  delay?: number;
  tone?: "default" | "step" | "deliverable";
};

function FeatureCard({ icon: Icon, title, text, delay = 0, tone = "default" }: FeatureCardProps) {
  return (
    <article
      className={`feature-card feature-card--${tone}`.trim()}
      data-reveal="up"
      style={revealStyle(delay)}
    >
      <div className="feature-card__media">
        <div className={`card-icon ${tone === "step" ? "card-icon--blue" : "card-icon--red"}`.trim()}>
          <Icon aria-hidden="true" size={22} />
        </div>
      </div>
      <div className="feature-card__body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

type ProofCardProps = ProofCardData & {
  delay?: number;
};

function ProofCard({ icon: Icon, tone, kicker, value, title, text, delay = 0 }: ProofCardProps) {
  return (
    <article className={`proof-card proof-card--${tone}`.trim()} data-reveal="up" style={revealStyle(delay)}>
      <div className="proof-card__header">
        <div className="card-icon card-icon--soft proof-card__icon">
          <Icon aria-hidden="true" size={20} />
        </div>
        <span className="proof-card__kicker">{kicker}</span>
      </div>
      <div className="proof-card__body">
        <div className="proof-card__headline">
          <strong>{value}</strong>
          <h3>{title}</h3>
        </div>
        <p>{text}</p>
      </div>
    </article>
  );
}

type FaqCardProps = {
  id: string;
  item: FaqItemData;
  open: boolean;
  onToggle: () => void;
};

function FaqCard({ id, item, open, onToggle }: FaqCardProps) {
  const questionId = `${id}-question`;
  const answerId = `${id}-answer`;

  return (
    <article className={`faq-card ${open ? "is-open" : ""}`.trim()}>
      <button
        className="faq-card__question"
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={answerId}
        id={questionId}
      >
        <span>{item.question}</span>
        <ChevronDown aria-hidden="true" size={18} />
      </button>
      <div className="faq-card__answer-wrap" id={answerId} role="region" aria-labelledby={questionId}>
        <p className="faq-card__answer">{item.answer}</p>
      </div>
    </article>
  );
}

export default function App() {
  const [activeWord, setActiveWord] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [currentPage, setCurrentPage] = useState<"home" | "materials" | "contact">("home");
  const [showMobileBar, setShowMobileBar] = useState(false);
  const teacherCardRef = useRef<HTMLDivElement | null>(null);

  useScrollReveal([currentPage]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [currentPage]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % heroWords.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (currentPage !== "home") {
      setShowMobileBar(false);
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 959px)");

    const updateMobileBarVisibility = () => {
      const teacherCard = teacherCardRef.current;

      if (!mediaQuery.matches || !teacherCard) {
        setShowMobileBar(false);
        return;
      }

      const rect = teacherCard.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const isNearTeacherSection = rect.top <= viewportHeight * 0.88 && rect.bottom >= viewportHeight * 0.18;

      setShowMobileBar(isNearTeacherSection);
    };

    const handleViewportChange = () => {
      updateMobileBarVisibility();
    };

    updateMobileBarVisibility();
    window.addEventListener("scroll", updateMobileBarVisibility, { passive: true });
    window.addEventListener("resize", updateMobileBarVisibility);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleViewportChange);
    } else {
      mediaQuery.addListener(handleViewportChange);
    }

    return () => {
      window.removeEventListener("scroll", updateMobileBarVisibility);
      window.removeEventListener("resize", updateMobileBarVisibility);

      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.removeEventListener("change", handleViewportChange);
      } else {
        mediaQuery.removeListener(handleViewportChange);
      }
    };
  }, [currentPage]);

  const tickerLoop = [...tickerItems, ...tickerItems];

  const handleBackToHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setCurrentPage("home");
  };

  if (currentPage === "materials") {
    return <Materials onBack={handleBackToHome} contactLink={instagramLink} />;
  }

  if (currentPage === "contact") {
    return <ContactForm onBack={handleBackToHome} whatsappNumber={whatsappNumber} />;
  }

  return (
    <>
      <div className="site-shell">
        <header className="topbar">
          <div className="container topbar__inner">
            <a className="brand-lockup" href="#top">
              <img src="/assets/LOGO-EASY-ENGLISH-NOW.png" alt="Logo Easy English Now" />
              <div>
                <strong>Easy English Now</strong>
                <span>Teacher Kilane | inglês do zero</span>
              </div>
            </a>

            <div className="topbar__actions">
              <span className="status-pill">
                <Sparkles aria-hidden="true" size={14} />
                matrículas abertas
              </span>

              <button
                className="button-link button-link--small button-link--materials"
                onClick={() => setCurrentPage("materials")}
                type="button"
              >
                <span>Materiais🎒</span>
                <ArrowRight aria-hidden="true" size={18} />
              </button>

              <ButtonLink href={hotmartLink} className="button-link--small">
                garantir vaga agora
              </ButtonLink>
            </div>
          </div>
        </header>

        <main>
          <section className="section hero" id="top">
            <div className="container hero-grid">
              <div className="hero-copy">
                <span className="section-label" data-reveal="up">
                  <Star aria-hidden="true" size={14} />
                  🎯 Método exclusivo Teacher Kilane
                </span>

                <h1 data-reveal="up" style={revealStyle(90)}>
                  Fale inglês fluente
                  <span className="hero-word-wrap">
                    de forma <span className="hero-word">{heroWords[activeWord]}</span>
                  </span>
                  em apenas semanas
                </h1>

                <p className="hero-description" data-reveal="up" style={revealStyle(180)}>
                  Descubra o método que já ajudou +1.000 pessoas a saírem do zero e falarem inglês
                  com confiança. Aulas práticas, diretas e sem enrolação. Começa hoje mesmo.
                </p>

                <div className="hero-actions" data-reveal="up" style={revealStyle(270)}>
                  <ActionButton className="button-link--pulse" onClick={() => setCurrentPage("contact")}>
                    quero começar agora 🚀
                  </ActionButton>
                  <ActionButton className="button-link--secondary" onClick={() => setCurrentPage("materials")} icon={BookOpenText}>
                    ver materiais 📚
                  </ActionButton>
                </div>

                <div className="signal-grid">
                  {heroSignals.map((signal, index) => (
                    <MetricCard
                      key={signal.label}
                      value={signal.value}
                      label={signal.label}
                      delay={260 + index * 80}
                    />
                  ))}
                </div>
              </div>

              <HeroPreview />
            </div>
          </section>

          <section className="ticker" aria-hidden="true">
            <div className="ticker__track">
              {tickerLoop.map((item, index) => (
                <span className="ticker__item" key={`${item}-${index}`}>
                  <CirclePlay aria-hidden="true" size={15} />
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="section" data-tone="panel">
            <div className="container">
              <SectionIntro
                label="🔥 Sua dor"
                title="Você já tentou aprender inglês e não conseguiu?"
                description="Sabemos exatamente como você se sente. Milhares de pessoas passam pelos mesmos problemas todos os dias. Mas isso acaba agora."
              />

              <div className="card-grid">
                {painPoints.map((item, index) => (
                  <FeatureCard key={item.title} {...item} delay={index * 80} />
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <SectionIntro
                label="✅ Como funciona"
                title="3 passos simples para você falar inglês fluente"
                description="Nosso método é direto, prático e comprovado. Veja como é fácil começar sua transformação hoje mesmo."
              />

              <div className="card-grid card-grid--steps">
                {processSteps.map((item, index) => (
                  <FeatureCard key={item.title} {...item} tone="step" delay={index * 100} />
                ))}
              </div>
            </div>
          </section>

          <section className="section" data-tone="warm">
            <div className="container proof-layout">
              <div className="proof-media">
                <div className="proof-frame" data-reveal="left">
                  <img
                    src="/assets/foto-4-dobra.png"
                    alt="Teacher Kilane em destaque na comunicação da Easy English Now"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="proof-badges" data-reveal="up" style={revealStyle(120)}>
                  <span>reels</span>
                  <span>carrosséis</span>
                  <span>stories</span>
                </div>
              </div>

              <div className="proof-copy">
                <SectionIntro
                  label="🏆 Prova social"
                  title="Mais de 1.000 alunos já transformaram suas vidas"
                  description="Não é promessa vazia. Veja os resultados reais de quem já investiu no Easy English Now e hoje fala inglês com confiança."
                />

                <div className="proof-grid">
                  {proofCards.map((item, index) => (
                    <ProofCard key={item.title} {...item} delay={index * 100} />
                  ))}
                </div>

                <p className="section-note" data-reveal="up" style={revealStyle(180)}>
                  🛡️ Compra 100% segura pela Hotmart | ✅ Garantia incondicional de 7 dias |
                  💎 Acesso vitalício
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="teacher-card" data-reveal="up" ref={teacherCardRef}>
                <div className="teacher-card__media" data-reveal="left">
                  <img
                    src="/assets/FOTO-03a-DOBRA.png"
                    alt="Teacher Kilane na identidade visual da Easy English Now"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="teacher-card__copy">
                  <span className="section-label section-label--dark" data-reveal="up">
                    <Users aria-hidden="true" size={14} />
                    👩‍🏫 Sua professora
                  </span>

                  <h2 data-reveal="up" style={revealStyle(90)}>
                    Conheça a Teacher Kilane
                  </h2>

                  <p data-reveal="up" style={revealStyle(160)}>
                    Professora de inglês há mais de 10 anos, a Teacher Kilane já ajudou milhares de
                    pessoas a realizarem o sonho de falar inglês fluente com um método prático e
                    direto.
                  </p>

                  <p data-reveal="up" style={revealStyle(230)}>
                    Com uma linguagem simples e didática, ela ensina o inglês que você usa no dia a
                    dia, em viagens, no trabalho e na vida real. Sem decoreba. Só prática e
                    resultado.
                  </p>

                  <ul className="teacher-points" data-reveal="up" style={revealStyle(300)}>
                    {teacherPoints.map((item) => (
                      <li key={item.label}>
                        <CheckCircle2 aria-hidden="true" size={18} />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>

                  <ButtonLink href={instagramLink} className="button-link--secondary" icon={Instagram}>
                    acompanhar no Instagram
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>

          <section className="section" data-tone="panel">
            <div className="container">
              <SectionIntro
                label="📦 O que você recebe"
                title="Tudo que você precisa para falar inglês fluente"
                description="Acesso completo e vitalício a todo conteúdo do Easy English Now. Pague uma vez e estude para sempre."
              />

              <div className="card-grid">
                {deliverables.map((item, index) => (
                  <FeatureCard key={item.title} {...item} tone="deliverable" delay={index * 70} />
                ))}
              </div>
            </div>
          </section>

          <section className="section offer" id="checkout">
            <div className="container">
              <div className="offer-card" data-reveal="up">
                <div className="offer-main">
                  <SectionIntro
                    label="🔥 Oferta especial"
                    title="Garanta sua vaga agora com condições exclusivas"
                    description="Milhares de pessoas já estão transformando suas vidas. Chegou a sua vez de falar inglês fluente."
                  />

                  <ul className="offer-list" data-reveal="up" style={revealStyle(110)}>
                    <li>
                      <ShieldCheck aria-hidden="true" size={18} />
                      <span>🛡️ Compra 100% segura pela Hotmart</span>
                    </li>
                    <li>
                      <BookOpenText aria-hidden="true" size={18} />
                      <span>💎 Acesso vitalício a todo conteúdo</span>
                    </li>
                    <li>
                      <Target aria-hidden="true" size={18} />
                      <span>✅ Garantia incondicional de 7 dias</span>
                    </li>
                    <li>
                      <Instagram aria-hidden="true" size={18} />
                      <span>🚀 Comece a estudar em 2 minutos</span>
                    </li>
                  </ul>

                  <div className="hero-actions" data-reveal="up" style={revealStyle(200)}>
                    <ActionButton className="button-link--pulse" onClick={() => setCurrentPage("contact")}>
                      sim, quero garantir minha vaga! 🔥
                    </ActionButton>
                    <ButtonLink
                      href={instagramLink}
                      className="button-link--secondary button-link--on-dark"
                      icon={Instagram}
                    >
                      falar pelo Instagram
                    </ButtonLink>
                  </div>
                </div>

                <aside className="offer-side" data-reveal="left" style={revealStyle(140)}>
                  <h3>🎯 Por que escolher o Easy English Now?</h3>
                  <ul className="offer-side__list">
                    <li>✅ +1.000 alunos satisfeitos</li>
                    <li>🚀 Resultados em poucas semanas</li>
                    <li>💎 Acesso vitalício sem mensalidades</li>
                    <li>🛡️ Garantia de 7 dias com risco zero</li>
                    <li>🎯 Método exclusivo e comprovado</li>
                    <li>📱 Estude de qualquer lugar</li>
                  </ul>
                  <p>
                    Não deixe para depois. Cada dia que passa é uma oportunidade perdida de
                    transformar sua vida com o inglês.
                  </p>
                </aside>
              </div>
            </div>
          </section>

          <section className="section faq">
            <div className="container">
              <SectionIntro
                label="❓ Dúvidas frequentes"
                title="Tire suas dúvidas antes de começar"
                description="Separamos as perguntas mais comuns para você tomar a melhor decisão. Se tiver outras dúvidas, fale conosco no Instagram."
              />

              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <FaqCard
                    key={item.question}
                    id={`faq-item-${index}`}
                    item={item}
                    open={openFaq === index}
                    onToggle={() => setOpenFaq((current) => (current === index ? -1 : index))}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer__panel">
              <div className="footer__inner">
                <div className="footer__brand">
                  <img
                    src="/assets/LOGO-EASY-ENGLISH-NOW.png"
                    alt="Easy English Now"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="footer__eyebrow">Teacher Kilane | inglês prático para a vida real</span>
                  <p>
                    Easy English Now - Teacher Kilane. Transforme seu inglês e abra portas para novas
                    oportunidades com um método comprovado e orientado a resultado.
                  </p>
                </div>

                <div className="footer__aside">
                  <div className="footer__highlights" aria-label="Destaques do programa">
                    <span>
                      <BadgeCheck aria-hidden="true" size={16} />
                      +1.000 alunos satisfeitos
                    </span>
                    <span>
                      <ShieldCheck aria-hidden="true" size={16} />
                      7 dias de garantia
                    </span>
                    <span>
                      <Sparkles aria-hidden="true" size={16} />
                      Acesso vitalício
                    </span>
                  </div>

                  <div className="footer__links">
                    <a
                      className="footer__link footer__link--social"
                      href={instagramLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Instagram aria-hidden="true" size={16} />
                      Acompanhar no Instagram
                    </a>
                    <a
                      className="footer__link footer__link--cta"
                      href={hotmartLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ShieldCheck aria-hidden="true" size={16} />
                      Garantir acesso agora
                    </a>
                  </div>
                </div>
              </div>

              <div className="footer__bottom">
                <p>Compra segura pela Hotmart, liberação rápida e atualizações inclusas.</p>
                <a href="#checkout">ver oferta completa</a>
              </div>
            </div>
          </div>
        </footer>

        <div className={`mobile-bar ${showMobileBar ? "is-visible" : ""}`}>
          <div className="mobile-bar__copy">
            <strong>🔥 Materiais que faz a mudança no seu ingles</strong>
            <span>Garanta seu acesso com 7 dias de garantia</span>
          </div>
          <ActionButton
            className="button-link--mobile button-link--materials"
            onClick={() => setCurrentPage("materials")}
          >
            Quero meu material NOW📚
          </ActionButton>
        </div>
      </div>
    </>
  );
}
