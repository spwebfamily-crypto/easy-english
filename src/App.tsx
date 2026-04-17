import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  ChevronDown,
  CirclePlay,
  Star,
  Sparkles,
  Languages,
  type LucideIcon,
} from "lucide-react";
import Materials from "./pages/Materials";
import ContactForm from "./pages/ContactForm";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useTranslation } from "./contexts/LanguageContext";
import type { Language } from "./constants/translations";
import {
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
  const { t } = useTranslation();
  return (
    <div className="hero-visual">
      <div className="story-stage" data-reveal="right">
        <span className="story-sticker story-sticker--left">{t.ticker[0]}</span>
        <span className="story-sticker story-sticker--right">{t.ticker[2]}</span>
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

function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const langs: { code: Language; label: string; flag: string }[] = [
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
  ];

  return (
    <div className="lang-switcher">
      <button 
        className="button-link button-link--small button-link--secondary" 
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <Languages size={18} />
        <span>{langs.find(l => l.code === language)?.flag}</span>
      </button>
      {isOpen && (
        <div className="lang-dropdown">
          {langs.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${language === lang.code ? "is-active" : ""}`}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              type="button"
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const { t, language } = useTranslation();
  const [activeWord, setActiveWord] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [currentPage, setCurrentPage] = useState<"home" | "materials" | "contact">("home");
  const [showMobileBar, setShowMobileBar] = useState(false);
  const teacherCardRef = useRef<HTMLDivElement | null>(null);

  useScrollReveal([currentPage, language]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentPage]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % t.words.length);
    }, 2200);
    return () => window.clearInterval(intervalId);
  }, [t.words.length]);

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

  const tickerLoop = [...t.ticker, ...t.ticker];

  const handleBackToHome = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setCurrentPage("home");
  };

  const renderContent = () => {
    if (currentPage === "materials") {
      return <Materials onBack={handleBackToHome} />;
    }

    if (currentPage === "contact") {
      return <ContactForm onBack={handleBackToHome} whatsappNumber={whatsappNumber} />;
    }

    return (
      <>
        <section className="section hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="section-label" data-reveal="up">
                <Star aria-hidden="true" size={14} />
                {t.hero.label}
              </span>

              <h1 data-reveal="up" style={revealStyle(90)}>
                {t.hero.title}
                <span className="hero-word-wrap">
                  {" "}
                  <span className="hero-word">{t.words[activeWord]}</span>
                </span>{" "}
                {t.hero.titleSuffix}
              </h1>

              <p className="hero-description" data-reveal="up" style={revealStyle(180)}>
                {t.hero.description}
              </p>

              <div className="hero-actions" data-reveal="up" style={revealStyle(270)}>
                <ActionButton className="button-link--pulse" onClick={() => setCurrentPage("contact")}>
                  {t.hero.ctaStart}
                </ActionButton>
                <ActionButton
                  className="button-link--secondary"
                  onClick={() => setCurrentPage("materials")}
                  icon={BookOpenText}
                >
                  {t.hero.ctaMaterials}
                </ActionButton>
              </div>

              <div className="signal-grid">
                {t.signals.map((signal, index) => (
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
              label={t.pain.label}
              title={t.pain.title}
              description={t.pain.description}
            />
            <div className="card-grid">
              {t.pain.items.map((item, index) => (
                <FeatureCard
                  key={item.title}
                  icon={painPoints[index].icon}
                  {...item}
                  delay={index * 80}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionIntro
              label={t.process.label}
              title={t.process.title}
              description={t.process.description}
            />
            <div className="card-grid card-grid--steps">
              {t.process.items.map((item, index) => (
                <FeatureCard
                  key={item.title}
                  icon={processSteps[index].icon}
                  {...item}
                  tone="step"
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section" data-tone="warm">
          <div className="container proof-layout">
            <div className="proof-media">
              <div className="proof-frame" data-reveal="left">
                <img src="/assets/foto-4-dobra.png" alt="Teacher Kilane" loading="lazy" />
              </div>
              <div className="proof-badges" data-reveal="up" style={revealStyle(120)}>
                <span>reels</span>
                <span>carrosséis</span>
                <span>stories</span>
              </div>
            </div>

            <div className="proof-copy">
              <SectionIntro
                label={t.proof.label}
                title={t.proof.title}
                description={t.proof.description}
              />
              <div className="proof-grid">
                {t.proof.items.map((item, index) => (
                  <ProofCard
                    key={item.title}
                    icon={proofCards[index].icon}
                    tone={proofCards[index].tone}
                    {...item}
                    delay={index * 100}
                  />
                ))}
              </div>
              <p className="section-note" data-reveal="up" style={revealStyle(180)}>
                {t.proof.footer}
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
                <span className="section-label section-label--dark">{t.teacher.label}</span>
                <h2>{t.teacher.name}</h2>
                <p>{t.teacher.description}</p>
                <ul className="teacher-points">
                  {t.teacher.points.map((item) => (
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
                  label={t.offer.label}
                  title={t.offer.title}
                  description={t.offer.description}
                />
                <div className="hero-actions">
                  <ActionButton className="button-link--pulse" onClick={() => setCurrentPage("contact")}>
                    {t.offer.cta}
                  </ActionButton>
                </div>
              </div>
              <aside className="offer-side">
                <h3>{t.offer.benefitsTitle}</h3>
                <ul className="offer-side__list">
                  {t.offer.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="section faq">
          <div className="container">
            <SectionIntro
              label={t.faq.label}
              title={t.faq.title}
              description={t.faq.description}
            />
            <div className="faq-list">
              {t.faq.items.map((item, index) => (
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
      </>
    );
  };

  return (
    <>
      <div className="site-shell">
        <header className="topbar">
          <div className="container topbar__inner">
            <button className="brand-lockup" onClick={handleBackToHome} type="button" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>
              <img src="/assets/LOGO-EASY-ENGLISH-NOW.png" alt="Logo Easy English Now" />
              <div>
                <strong>Easy English Now</strong>
                <span>Teacher Kilane | inglês do zero</span>
              </div>
            </button>

            <div className="topbar__actions">
              <span className="status-pill">
                <Sparkles aria-hidden="true" size={14} />
                {t.topbar.status}
              </span>

              <LanguageSwitcher />

              <button
                className="button-link button-link--small button-link--materials"
                onClick={() => setCurrentPage("materials")}
                type="button"
              >
                <span>{t.topbar.materials}</span>
                <ArrowRight aria-hidden="true" size={18} />
              </button>

              <ActionButton
                className="button-link--small"
                onClick={() => setCurrentPage("contact")}
                icon={CheckCircle2}
              >
                {t.topbar.cta}
              </ActionButton>
            </div>
          </div>
        </header>

        <main>{renderContent()}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer__panel">
              <div className="footer__brand">
                <img src="/assets/LOGO-EASY-ENGLISH-NOW.png" alt="Easy English Now" loading="lazy" />
                <p>{t.footer.brand}</p>
              </div>
              <div className="footer__bottom">
                <p>{t.footer.copy}</p>
                <a href="#top" onClick={(e) => {
                  if (currentPage === 'home') return;
                  e.preventDefault();
                  handleBackToHome();
                }}>{t.footer.top}</a>
              </div>
            </div>
          </div>
        </footer>

        <div className={`mobile-bar ${showMobileBar ? "is-visible" : ""}`}>
          <div className="mobile-bar__copy">
            <strong>{t.mobileBar.title}</strong>
            <span>{t.mobileBar.subtitle}</span>
          </div>
          <ActionButton className="button-link--mobile" onClick={() => setCurrentPage("materials")}>
            {t.mobileBar.cta}
          </ActionButton>
        </div>
      </div>
    </>
  );
}
