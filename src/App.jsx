import { useEffect, useEffectEvent, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BrainCircuit,
  ChevronDown,
  CirclePlay,
  Clock3,
  Languages,
  MessageCircleMore,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Zap,
  Users,
  MessageCircle,
  TrendingUp,
  Award,
  Play,
  CheckCircle2,
  Timer,
  Instagram,
  Youtube,
} from "lucide-react";

const hotmartLink =
  "https://hotmart.com/pt-br/club/easy-inglish-now?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn-1TvCYeRoFCQ5GIfOJkqhdoV_0MUnbgEoEejL0is7mBJPTE3pM4vIUK7Arc_aem_i5f4FaIWG8RySxSck0P9lw";

const rotatingWords = ["real", "leve", "simples", "possível"];

const tickerItems = [
  "ingles sem enrolacao",
  "metodo visual",
  "aprendizado mais leve",
  "feito para destravar",
  "acesso digital",
  "easy english now",
];

const testimonials = [
  {
    name: "Ana Carolina",
    role: "Marketing Digital",
    text: "Finalmente entendi inglês de um jeito que faz sentido. Em 2 semanas já estava entendendo podcasts!",
    avatar: "AC",
  },
  {
    name: "Bruno Silva",
    role: "Desenvolvedor",
    text: "O método visual mudou tudo. Não é mais aquela coisa chata de ficar decorando regras.",
    avatar: "BS",
  },
  {
    name: "Carla Mendes",
    role: "Empreendedora",
    text: "Consegui fazer minha primeira reunião em inglês depois de anos travada. Incrível!",
    avatar: "CM",
  },
];

const offerBonuses = [
  "Acesso imediato ao ebook completo Easy English Now",
  "Metodo visual pensado para destravar sem sobrecarga",
  "Material digital facil de consumir no seu ritmo",
  "Garantia de 30 dias para comprar com seguranca",
];

const offerSecurityItems = [
  "Compra segura",
  "Checkout Hotmart",
  "Acesso digital imediato",
];

const footerLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: Youtube,
  },
];

const partnerLogos = [
  "Teacher Kilane",
  "Hotmart",
  "Visual English",
  "Aulas Online",
  "Metodo Leve",
];

const resultCarouselItems = [
  "Primeira reuniao em ingles sem travar",
  "Mais clareza para estudar todos os dias",
  "Metodo visual que deixa o aprendizado leve",
  "Compra segura com acesso imediato",
];

const socialProofMetrics = [
  { value: 2500, suffix: "+", label: "alunos destravaram" },
  { value: 7800, suffix: "+", label: "downloads do material" },
  { value: 98, suffix: "%", label: "avaliacao positiva" },
];

const painCards = [
  {
    icon: Clock3,
    title: "Estuda e esquece",
    text: "Voce consome conteudo, mas na hora de usar o ingles parece que nada fica.",
  },
  {
    icon: MessageCircleMore,
    title: "Trava para falar",
    text: "A inseguranca cresce porque falta um caminho claro para praticar com confianca.",
  },
  {
    icon: BrainCircuit,
    title: "Sente tudo confuso",
    text: "Muito conteudo solto, pouca direcao e quase nenhum estimulo para continuar.",
  },
];

const featureCards = [
  {
    icon: BookOpenText,
    title: "Conteudo com cara de caminho",
    text: "Nada de sensacao de bagunca. O material foi pensado para fazer voce enxergar o proximo passo.",
  },
  {
    icon: Languages,
    title: "Ingles explicado de forma leve",
    text: "Voce entende melhor quando a comunicacao nao parece aula complicada demais.",
  },
  {
    icon: Zap,
    title: "Visual que prende mais",
    text: "A experiencia conversa com o olhar e com a atencao, o que aumenta o desejo de continuar.",
  },
  {
    icon: Target,
    title: "Foco em destravar",
    text: "A proposta e tirar voce da paralisia e aproximar o ingles da sua rotina real.",
  },
];

const transformationPoints = [
  "Mais clareza sobre o que estudar primeiro",
  "Mais leveza para continuar sem abandonar",
  "Mais proximidade com o ingles do dia a dia",
  "Menos confusao e menos excesso de conteudo",
];

const proofItems = [
  "Criado a partir da identidade e da autoridade visual da Teacher Kilane.",
  "Usa os mesmos assets reais da marca para manter reconhecimento imediato.",
  "Organiza a oferta em uma narrativa que segura atencao e empurra para a decisao.",
];

const journeySteps = [
  {
    step: "1",
    title: "Entenda com mais clareza",
    text: "Voce entra no material sem aquela sensacao de bagunca e ja sabe melhor por onde comecar.",
  },
  {
    step: "2",
    title: "Pratique com mais confianca",
    text: "A proposta aproxima o ingles da sua realidade e reduz a trava que bloqueia tanta gente.",
  },
  {
    step: "3",
    title: "Sinta evolucao mais rapido",
    text: "Quando o estudo parece mais leve e mais organizado, a vontade de continuar aumenta.",
  },
];

const faqItems = [
  {
    question: "Esse produto e para quem esta comecando?",
    answer:
      "Sim. A pagina foi escrita para conversar com quem ainda trava, se sente inseguro e quer um jeito mais leve de aprender ingles.",
  },
  {
    question: "O acesso e digital?",
    answer:
      "Sim. O fluxo da landing leva direto para a pagina de compra na Hotmart para o usuario garantir o acesso ao produto digital.",
  },
  {
    question: "Essa pagina foi pensada para mobile?",
    answer:
      "Sim. O visual continua forte no celular, com CTA fixo, contraste alto e composicao adaptada para telas menores.",
  },
  {
    question: "Da para ajustar mais a copy depois?",
    answer:
      "Sim. A estrutura ficou modular para refinar promessa, bonus, precos ou novas secoes sem retrabalho grande.",
  },
];

/* ─── Scroll reveal hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  return prefersReducedMotion;
}

function useCountUp(target, duration = 1800) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(prefersReducedMotion ? target : 0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(target);
      return undefined;
    }

    let frameId = 0;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [duration, prefersReducedMotion, target]);

  return value;
}

function getOfferCountdown() {
  const now = new Date();
  const deadline = new Date(now);

  deadline.setHours(23, 59, 59, 999);

  return Math.max(0, Math.floor((deadline.getTime() - now.getTime()) / 1000));
}

function formatCountdown(totalSeconds) {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

function CtaLink({
  children,
  className,
  href,
  onToast,
  toastMessage = "Abrindo checkout seguro...",
  ...props
}) {
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(0);

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    onToast?.(toastMessage);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setIsLoading(false), 1200);
  };

  return (
    <a
      {...props}
      href={href}
      className={`${className}${isLoading ? " is-loading" : ""}`}
      onClick={handleClick}
    >
      <span className="button-ripple" aria-hidden="true" />
      <span className="button-label">
        {isLoading ? "Abrindo..." : children}
      </span>
    </a>
  );
}

function Toast({ message, visible }) {
  return (
    <div
      aria-live="polite"
      className={`toast${visible ? " toast-visible" : ""}`}
    >
      <BadgeCheck size={18} />
      <span>{message}</span>
    </div>
  );
}

function SocialProofMetric({ value, suffix, label }) {
  const animatedValue = useCountUp(value);
  const displayValue =
    suffix === "%"
      ? `${animatedValue}${suffix}`
      : `${suffix}${animatedValue.toLocaleString("pt-BR")}`;

  return (
    <div className="social-proof-stat">
      <strong>{displayValue}</strong>
      <span>{label}</span>
    </div>
  );
}

/* ── Reveal wrapper ── */
function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Splash Screen ─── */
function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState("enter");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("exit"), 1200);
    const t2 = window.setTimeout(() => onDone(), 1600);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <div className={`splash splash-${phase}`} aria-hidden="true">
      <div className="splash-content">
        <img
          src="/assets/LOGO-EASY-ENGLISH-NOW.png"
          alt="Easy English Now"
          className="splash-logo"
        />
        <div className="splash-text">
          <strong>Easy English Now</strong>
        </div>
      </div>
    </div>
  );
}

/* ─── App ─── */
function App() {
  const [wordIndex, setWordIndex] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [splashDone, setSplashDone] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState("");

  const rotateWord = useEffectEvent(() => {
    setWordIndex((current) => current + 1);
  });

  useEffect(() => {
    if (!splashDone) return undefined;

    const intervalId = window.setInterval(() => {
      rotateWord();
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, [splashDone]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowStickyCta(scrollTop > 520);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!toastMessage) return undefined;

    const timeoutId = window.setTimeout(() => {
      setToastMessage("");
    }, 2200);

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  return (
    <>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      <div
        className={`page-shell ${splashDone ? "page-ready" : "page-hidden"}`}
      >
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
        
        <div className="ambient ambient-blue" />
        <div className="ambient ambient-red" />
        <div className="ambient ambient-gold" />

        <TopBar onCtaClick={setToastMessage} />

        <main>
          <Hero
            currentWord={rotatingWords[wordIndex % rotatingWords.length]}
            onCtaClick={setToastMessage}
          />
          <Ticker />
          <PainSection />
          <FeaturesSection />
          <ProofSection onCtaClick={setToastMessage} />
          <TestimonialsSection />
          <JourneySection />
          <OfferSection onCtaClick={setToastMessage} />
          <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
        </main>

        <Footer />
        <StickyCta visible={showStickyCta} onCtaClick={setToastMessage} />
        <WhatsAppButton />
        <Toast message={toastMessage} visible={Boolean(toastMessage)} />
      </div>
    </>
  );
}

function TopBar({ onCtaClick }) {
  return (
    <div className="topbar">
      <div className="topbar-copy">
        <Sparkles size={16} />
        <span className="topbar-title">Easy English Now</span>
        <small>
          Ebook e material digital para destravar o ingles com mais leveza.
        </small>
        <span className="topbar-status">Novas vagas abertas</span>
      </div>
      <CtaLink
        href={hotmartLink}
        target="_blank"
        rel="noreferrer"
        onToast={onCtaClick}
        className="button-ghost-link"
      >
        Garantir acesso
        <ArrowRight size={16} />
      </CtaLink>
    </div>
  );
}

function Hero({ currentWord, onCtaClick }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const studentCount = useCountUp(2500);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setParallaxOffset(0);
      return undefined;
    }

    const onScroll = () => {
      setParallaxOffset(Math.min(window.scrollY, 360));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReducedMotion]);

  const heroStats = [
    {
      value: `+${studentCount.toLocaleString("pt-BR")}`,
      label: "alunos destravaram",
      icon: Users,
    },
    { value: "98%", label: "avaliacao positiva", icon: Award },
    { value: "30 dias", label: "garantia total", icon: ShieldCheck },
  ];

  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-particles" aria-hidden="true">
            {Array.from({ length: 7 }).map((_, index) => (
              <span key={index} className={`hero-particle hero-particle-${index + 1}`} />
            ))}
          </div>

          <Reveal>
            <div className="eyebrow">
              <Sparkles size={16} />
              Metodo visual para destravar o ingles
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1>
              Destravar seu ingles
              <span className="hero-word">{currentWord}</span>
              nunca foi tao possivel
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-description">
              Se estudar virou uma frustracao com excesso de conteudo e pouca
              confianca para falar, o <strong>Easy English Now</strong> foi
              criado para deixar o caminho mais leve, visual e muito mais facil
              de seguir.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="hero-proof-strip">
              <div className="hero-proof-pill hero-proof-pill-highlight">
                <TrendingUp size={16} />
                <span>
                  <strong>+{studentCount.toLocaleString("pt-BR")}</strong> alunos
                  destravaram
                </span>
              </div>

              <div className="hero-proof-pill">
                <div className="hero-rating-stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                </div>
                <span>5 estrelas em satisfacao</span>
              </div>

              <div className="hero-proof-pill">
                <ShieldCheck size={16} />
                <span>Garantia de 30 dias</span>
              </div>

              <div className="hero-proof-pill hero-proof-pill-hotmart">
                <span className="hotmart-mark" aria-hidden="true">
                  <Play size={12} fill="currentColor" />
                </span>
                <span>Compra segura via Hotmart</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="hero-actions">
              <CtaLink
                className="button button-primary pulse-glow"
                href={hotmartLink}
                target="_blank"
                rel="noreferrer"
                onToast={onCtaClick}
              >
                Quero meu acesso agora
                <ArrowRight size={18} />
              </CtaLink>
              <a className="button button-secondary" href="#oferta">
                Ver a oferta
                <CirclePlay size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="hero-features-list">
              <div className="hero-feature-item">
                <BadgeCheck size={20} />
                <span>Mais clareza para estudar com constancia</span>
              </div>
              <div className="hero-feature-item">
                <BadgeCheck size={20} />
                <span>Mais confianca para praticar e falar</span>
              </div>
              <div className="hero-feature-item">
                <BadgeCheck size={20} />
                <span>Acesso imediato e 100% digital</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="hero-stats">
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="hero-stat"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <stat.icon size={20} />
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="hero-stage">
            <div className="hero-stage-glow" />
            <div className="hero-stage-shell">
              <img
                src="/assets/SEO-EASY-ENGLISH-NOW.jpg"
                alt="Capa visual Easy English Now com Teacher Kilane"
                className="hero-stage-cover"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            <div
              className="hero-floating-shell hero-floating-shell-top"
              style={{ transform: `translate3d(0, ${parallaxOffset * -0.12}px, 0)` }}
            >
              <div className="hero-floating-badge top-badge">
                <img
                  src="/assets/LOGO-EASY-ENGLISH-NOW.png"
                  alt="Logo Easy English Now"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div
              className="hero-floating-shell hero-floating-shell-bottom"
              style={{ transform: `translate3d(0, ${parallaxOffset * 0.08}px, 0)` }}
            >
              <div className="hero-floating-badge bottom-badge">
                <div className="badge-icon-wrap">
                  <Star fill="currentColor" size={16} />
                </div>
                <div className="badge-text-wrap">
                  <strong>Teacher Kilane</strong>
                  <span>Especialista</span>
                </div>
              </div>
            </div>

            <div
              className="hero-floating-shell hero-floating-shell-seal"
              style={{ transform: `translate3d(0, ${parallaxOffset * -0.06}px, 0)` }}
            >
              <img
                src="/assets/Group-40.png"
                alt="Selo visual Easy English Now"
                className="hero-floating-seal"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <section className="ticker-section">
      <div className="ticker-track">
        {items.map((item, index) => (
          <div className="ticker-item" key={`${item}-${index}`}>
            <Star size={14} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="section-heading section-heading-tight">
            <span className="section-kicker">Para quem vive travando</span>
            <h2>
              O problema nunca foi falta de vontade. Foi falta de uma
              experiencia que puxasse voce para frente.
            </h2>
            <p>
              Se voce estuda, estuda e mesmo assim sente que o ingles continua
              longe, a dificuldade nao esta em voce. Falta um jeito mais claro,
              visual e motivador de aprender.
            </p>
          </div>
        </Reveal>

        <div className="pain-grid">
          {painCards.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <article className="pain-card">
                <div className="pain-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="section section-split">
      <div className="container split-layout">
        <Reveal>
          <div className="split-copy">
            <span className="section-kicker">
              O que voce encontra no Easy English Now
            </span>
            <h2>
              Um material digital pensado para deixar o ingles menos pesado e
              muito mais acessivel.
            </h2>
            <p>
              A proposta aqui e fazer voce sentir que aprender pode ser mais
              leve, mais bonito de acompanhar e muito menos confuso do que a
              maioria das pessoas imagina.
            </p>

            <div className="split-points">
              {transformationPoints.map((point) => (
                <div className="split-point" key={point}>
                  <BadgeCheck size={18} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="feature-grid">
          {featureCards.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="feature-card">
                <div className="feature-card-top">
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>
                  <span className="feature-card-glow" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection({ onCtaClick }) {
  return (
    <section className="section section-dark">
      <div className="container proof-layout">
        <Reveal>
          <div className="proof-visual">
            <div className="proof-visual-main">
              <img
                src="/assets/foto-4-dobra.png"
                alt="Teacher Kilane em destaque"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="proof-floating proof-floating-circle">
              <img
                src="/assets/Group-4.png"
                alt="Selo circular Easy English Now"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="proof-floating proof-floating-class">
              <img
                src="/assets/FOTO-03a-DOBRA.png"
                alt="Registro de aulas online"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="proof-copy">
            <span className="section-kicker section-kicker-dark">
              Autoridade e prova visual
            </span>
            <h2>
              Teacher Kilane no centro da narrativa, com uma pagina que
              finalmente faz jus a marca.
            </h2>
            <p>
              A sensacao agora e de uma oferta mais viva, mais segura e mais
              desejavel. O lead nao entra em uma pagina comum: ele entra em uma
              experiencia visual que parece valiosa.
            </p>

            <div className="proof-list">
              {proofItems.map((item) => (
                <div key={item}>
                  <BadgeCheck size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <CtaLink
              className="button button-light"
              href={hotmartLink}
              target="_blank"
              rel="noreferrer"
              onToast={onCtaClick}
            >
              Quero acessar o produto
              <ArrowRight size={18} />
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="section-heading section-heading-centered">
            <span className="section-kicker">
              Como a transformacao acontece
            </span>
            <h2>
              O foco nao e despejar conteudo. E fazer voce sentir que falar
              ingles volta a ser possivel.
            </h2>
          </div>
        </Reveal>

        <div className="journey-grid">
          {journeySteps.map((item, i) => (
            <Reveal key={item.step} delay={i * 120}>
              <article className="journey-card">
                <span className="journey-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="comparison-panel">
          <Reveal>
            <div className="comparison-card comparison-card-muted">
              <span className="comparison-label">Sem direcao</span>
              <h3>
                Voce tenta sozinho, junta conteudo demais e continua com a
                sensacao de trava.
              </h3>
              <ul>
                <li>Falta clareza sobre por onde comecar</li>
                <li>Estudo cansativo e pouco motivador</li>
                <li>Vergonha ou inseguranca para usar o ingles</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="comparison-card comparison-card-strong">
              <span className="comparison-label">Com Easy English Now</span>
              <h3>
                Voce enxerga um caminho mais leve, mais visual e muito mais
                facil de seguir.
              </h3>
              <ul>
                <li>Mais clareza para estudar com constancia</li>
                <li>Mais proximidade com o ingles do dia a dia</li>
                <li>Mais seguranca para evoluir sem se travar tanto</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function OfferSection({ onCtaClick }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [timeLeft, setTimeLeft] = useState(() => getOfferCountdown());

  useEffect(() => {
    const updateTimeLeft = () => setTimeLeft(getOfferCountdown());

    updateTimeLeft();

    const intervalId = window.setInterval(
      updateTimeLeft,
      prefersReducedMotion ? 60000 : 1000,
    );

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <section className="section section-offer" id="oferta">
      <div className="container offer-layout">
        <Reveal>
          <div className="offer-copy">
            <span className="section-kicker">Oferta principal</span>
            <h2>
              Se voce quer destravar seu ingles com um material mais leve e
              direto, essa e a hora.
            </h2>
            <p>
              Garanta agora seu acesso ao Easy English Now e comece com uma
              experiencia mais clara, mais bonita e muito mais amigavel para
              quem cansou de estudar sem sentir avance.
            </p>

            <div className="offer-points">
              <div>
                <MousePointerClick size={18} />
                <span>Compra em poucos cliques</span>
              </div>
              <div>
                <ShieldCheck size={18} />
                <span>Acesso direto pela Hotmart</span>
              </div>
              <div>
                <BadgeCheck size={18} />
                <span>Material digital pensado para quem quer destravar</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="offer-card">
            <div className="offer-card-shine" aria-hidden="true" />
            <div className="offer-card-badge">
              <TrendingUp size={16} />
              <span>Mais vendido</span>
            </div>

            <div className="offer-card-head">
              <div className="offer-chip">Easy English Now</div>
              <div className="offer-chip offer-chip-soft">Acesso digital</div>
            </div>

            <div className="offer-showcase">
              <img
                className="offer-showcase-cover"
                src="/assets/SEO-EASY-ENGLISH-NOW.jpg"
                alt="Capa visual do produto Easy English Now"
                loading="lazy"
                decoding="async"
              />
              <img
                className="offer-showcase-seal"
                src="/assets/Group-40.png"
                alt="Selo visual Easy English Now"
                loading="lazy"
                decoding="async"
              />

              <div className="offer-showcase-trust">
                <div className="offer-security-pill">
                  <ShieldCheck size={16} />
                  <span>Garantia 30 dias</span>
                </div>
                <div className="offer-security-pill offer-security-pill-hotmart">
                  <span className="hotmart-mark" aria-hidden="true">
                    <Play size={12} fill="currentColor" />
                  </span>
                  <span>Hotmart</span>
                </div>
              </div>
            </div>

            <div className="offer-card-body">
              <div className="offer-pricing">
                <span className="offer-price-old">De R$197</span>
                <div className="offer-price-main">
                  <span>Por apenas</span>
                  <strong>R$97</strong>
                </div>
                <span className="offer-price-note">
                  acesso imediato ao material digital
                </span>
              </div>

              <div className="offer-countdown" aria-live="polite">
                <Timer size={18} />
                <span>
                  Condicao especial termina em{" "}
                  <strong>{formatCountdown(timeLeft)}</strong>
                </span>
              </div>

              <h3>
                Garanta agora o seu ebook e material digital Easy English Now.
              </h3>
              <p>
                Clique para acessar a pagina oficial de compra e comece sua
                jornada com muito mais clareza, motivacao e confianca.
              </p>

              <div className="offer-bonus-list">
                {offerBonuses.map((bonus) => (
                  <div key={bonus} className="offer-bonus-item">
                    <CheckCircle2 size={18} />
                    <span>{bonus}</span>
                  </div>
                ))}
              </div>

              <CtaLink
                className="button button-primary button-full"
                href={hotmartLink}
                target="_blank"
                rel="noreferrer"
                onToast={onCtaClick}
              >
                Comprar agora na Hotmart
                <ArrowRight size={18} />
              </CtaLink>

              <div className="offer-security-row">
                {offerSecurityItems.map((item) => (
                  <div key={item} className="offer-security-badge">
                    <ShieldCheck size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <small>Nova aba aberta para a pagina oficial de compra.</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection({ openFaq, setOpenFaq }) {
  return (
    <section className="section">
      <div className="container faq-shell">
        <Reveal>
          <div className="section-heading section-heading-tight">
            <span className="section-kicker">Perguntas frequentes</span>
            <h2>Respostas claras para voce decidir com mais seguranca.</h2>
            <p>
              Antes de comprar, e natural querer confirmar se esse material faz
              sentido para o seu momento. Aqui ficam as respostas mais
              importantes.
            </p>
          </div>
        </Reveal>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = index === openFaq;
            const answerId = `faq-answer-${index}`;

            return (
              <Reveal key={item.question} delay={index * 80}>
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  className={`faq-item${isOpen ? " faq-item-open" : ""}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  type="button"
                >
                  <span className="faq-question">
                    <span>{item.question}</span>
                    <ChevronDown size={18} />
                  </span>
                  <span className="faq-answer" id={answerId}>
                    <span className="faq-answer-copy">{item.answer}</span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StickyCta({ visible, onCtaClick }) {
  return (
    <div className={`sticky-cta${visible ? " sticky-cta-visible" : ""}`}>
      <div>
        <strong>Easy English Now</strong>
        <span>Ebook e material digital para destravar seu ingles.</span>
      </div>

      <CtaLink
        className="button button-primary"
        href={hotmartLink}
        target="_blank"
        rel="noreferrer"
        onToast={onCtaClick}
      >
        Garantir acesso
        <ArrowRight size={18} />
      </CtaLink>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src="/assets/LOGO-EASY-ENGLISH-NOW.png"
            alt="Logo Easy English Now"
          />
          <p>
            Easy English Now: uma forma mais leve, visual e direta de voltar a
            acreditar no seu ingles.
          </p>
          <small>© {currentYear} Easy English Now. Todos os direitos reservados.</small>
        </div>

        <div className="footer-socials">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <Icon size={18} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function TestimonialsSection() {
  const carouselItems = [...resultCarouselItems, ...resultCarouselItems];

  return (
    <section className="testimonials-section">
      <div className="container">
        <Reveal>
          <div className="section-heading section-heading-centered">
            <span className="section-kicker">
              <MessageCircle size={16} />
              O que dizem nossos alunos
            </span>
            <h2>Mais de 2.500 pessoas já destravaram seu inglês</h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="social-proof-stats">
            {socialProofMetrics.map((metric) => (
              <SocialProofMetric
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="partners-strip" aria-label="Parceiros e plataformas">
            <div className="partners-track">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <span key={`${logo}-${index}`} className="partner-logo">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="results-carousel" aria-label="Resultados em destaque">
            <div className="results-track">
              {carouselItems.map((item, index) => (
                <div key={`${item}-${index}`} className="result-chip">
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 150}>
              <article className="testimonial-card">
                <div className="testimonial-topline">
                  <span className="testimonial-quote-mark" aria-hidden="true">
                    "
                  </span>
                  <div className="testimonial-rating" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <span>{t.avatar}</span>
                  </div>
                  <div className="testimonial-meta">
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
                <p className="testimonial-text">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5511999999999?text=Ola!%20Tenho%20interesse%20no%20Easy%20English%20Now"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className={`whatsapp-float${visible ? " whatsapp-visible" : ""}`}
    >
      <MessageCircle size={24} />
      <span>Falar no WhatsApp</span>
    </a>
  );
}

export default App;
