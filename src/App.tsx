import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  ChevronDown,
  CirclePlay,
  Star,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Materials from "./pages/Materials";
import ContactForm from "./pages/ContactForm";
import { useScrollReveal } from "./hooks/useScrollReveal";
import {
  heroWords,
  tickerItems,
  heroSignals,
  painPoints,
  processSteps,
  proofCards,
  faqItems,
  teacherPoints,
  heroPanels,
  type HeroSignal,
  type FeatureCardData,
  type ProofCardData,
  type FaqItemData,
  type HeroPanelData,
} from "./constants/siteData";

// Número ofuscado para dificultar scrapers (351936680657)
const wPart1 = "351";
const wPart2 = "936";
const wPart3 = "680";
const wPart4 = "657";
const whatsappNumber = `${wPart1}${wPart2}${wPart3}${wPart4}`;
const instagramLink = "https://www.instagram.com/_easyenglishnow/";

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
    updateMobileBarVisibility();
    window.addEventListener("scroll", updateMobileBarVisibility, { passive: true });
    window.addEventListener("resize", updateMobileBarVisibility);
    return () => {
      window.removeEventListener("scroll", updateMobileBarVisibility);
      window.removeEventListener("resize", updateMobileBarVisibility);
    };
  }, [currentPage]);

  const tickerLoop = [...tickerItems, ...tickerItems];

  const handleBackToHome = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setCurrentPage("home");
  };

  if (currentPage === "materials") {
    return <Materials onBack={handleBackToHome} />;
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

              <ActionButton
                className="button-link--small"
                onClick={() => setCurrentPage("contact")}
              >
                garantir vaga agora
              </ActionButton>
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
                    alt="Teacher Kilane"
                    loading="lazy"
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
                  description="Não é promessa vazia. Veja os resultados reais de quem já investiu no Easy English Now."
                />
                <div className="proof-grid">
                  {proofCards.map((item, index) => (
                    <ProofCard key={item.title} {...item} delay={index * 100} />
                  ))}
                </div>
                <p className="section-note" data-reveal="up" style={revealStyle(180)}>
                  🛡️ Compra segura | ✅ Garantia 7 dias | 💎 Acesso vitalício
                </p>
              </div>
            </div>
          </section>

          <section className="section" ref={teacherCardRef}>
            <div className="container">
              <div className="teacher-card" data-reveal="up">
                <div className="teacher-card__media" data-reveal="left">
                  <img src="/assets/FOTO-03a-DOBRA.png" alt="Teacher Kilane" loading="lazy" />
                </div>
                <div className="teacher-card__copy">
                  <span className="section-label section-label--dark">👩‍🏫 Sua professora</span>
                  <h2>Conheça a Teacher Kilane</h2>
                  <p>Professora de inglês há mais de 10 anos, a Teacher Kilane já ajudou milhares de pessoas.</p>
                  <ul className="teacher-points">
                    {teacherPoints.map((item) => (
                      <li key={item.label}>
                        <CheckCircle2 aria-hidden="true" size={18} />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href={instagramLink} className="button-link--secondary">
                    Instagram
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>

          <section className="section offer" id="checkout">
            <div className="container">
              <div className="offer-card" data-reveal="up">
                <div className="offer-main">
                  <SectionIntro
                    label="🔥 Oferta especial"
                    title="Garanta sua vaga agora"
                    description="Chegou a sua vez de falar inglês fluente."
                  />
                  <div className="hero-actions">
                    <ActionButton className="button-link--pulse" onClick={() => setCurrentPage("contact")}>
                      quero minha vaga! 🔥
                    </ActionButton>
                  </div>
                </div>
                <aside className="offer-side">
                  <h3>🎯 Benefícios</h3>
                  <ul className="offer-side__list">
                    <li>✅ +1.000 alunos satisfeitos</li>
                    <li>🚀 Resultados rápidos</li>
                    <li>💎 Acesso vitalício</li>
                  </ul>
                </aside>
              </div>
            </div>
          </section>

          <section className="section faq">
            <div className="container">
              <SectionIntro label="❓ FAQ" title="Dúvidas frequentes" description="Respostas rápidas para você." />
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
              <div className="footer__brand">
                <img src="/assets/LOGO-EASY-ENGLISH-NOW.png" alt="Easy English Now" loading="lazy" />
                <p>Easy English Now - Teacher Kilane. Transforme seu inglês hoje.</p>
              </div>
              <div className="footer__bottom">
                <p>© 2026 Easy English Now. Todos os direitos reservados.</p>
                <a href="#top">voltar ao topo</a>
              </div>
            </div>
          </div>
        </footer>

        <div className={`mobile-bar ${showMobileBar ? "is-visible" : ""}`}>
          <div className="mobile-bar__copy">
            <strong>🔥 Materiais exclusivos</strong>
            <span>Garanta seu acesso agora</span>
          </div>
          <ActionButton className="button-link--mobile" onClick={() => setCurrentPage("materials")}>
            Quero meu material NOW📚
          </ActionButton>
        </div>
      </div>
    </>
  );
}
