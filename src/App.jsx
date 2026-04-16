import { useEffect, useState } from "react";
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
} from "lucide-react";
import Materials from "./pages/Materials";

const instagramLink = "https://www.instagram.com/_easyenglishnow/";
const hotmartLink = "https://hotmart.com/pt-br/club/easy-inglish-now";

const heroWords = ["rápido", "prático", "eficaz", "definitivo"];

const tickerItems = [
  "🔥 vagas limitadas",
  "✅ aprovado por +1000 alunos",
  "⚡ resultados em semanas",
  "🎯 método exclusivo",
  "💎 acesso vitalício",
  "🚀 comece hoje mesmo",
];

const heroSignals = [
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

const painPoints = [
  {
    icon: MessageCircleMore,
    title: "Cansou de estudar e não conseguir falar?",
    text: "Você entende algumas palavras, mas na hora de conversar o inglês simplesmente não sai. É frustrante!",
  },
  {
    icon: BrainCircuit,
    title: "Perdido entre tantos métodos diferentes?",
    text: "Já tentou apps, vídeos no YouTube, cursos caros... mas nada funcionou de verdade. Falta um método claro.",
  },
  {
    icon: Clock3,
    title: "Não tem tempo para estudar horas por dia?",
    text: "Sua rotina é corrida e você precisa de um método que funcione com apenas 20 minutos diários.",
  },
  {
    icon: Target,
    title: "Quer resultados reais em poucas semanas?",
    text: "Chega de enrolação! Você quer um método comprovado que te faça falar inglês de verdade, rápido.",
  },
];

const processSteps = [
  {
    icon: MousePointerClick,
    title: "Garanta sua vaga agora",
    text: "Acesso 100% seguro pela Hotmart. Compra protegida com garantia incondicional de 7 dias.",
  },
  {
    icon: BookOpenText,
    title: "Acesso imediato ao conteúdo completo",
    text: "Receba login e senha na hora. Comece a estudar em menos de 2 minutos após a compra.",
  },
  {
    icon: Languages,
    title: "Aprenda com o método exclusivo da Teacher Kilane",
    text: "Método testado e aprovado por mais de 1.000 alunos. Aulas práticas, diretas e sem enrolação.",
  },
];

const proofCards = [
  {
    icon: BadgeCheck,
    kicker: "Resultados comprovados",
    value: "+1.000",
    title: "alunos satisfeitos",
    text: "Mais de mil pessoas já transformaram seu inglês com o método Easy English Now.",
  },
  {
    icon: Sparkles,
    kicker: "Garantia total",
    value: "7 dias",
    title: "risco zero para você",
    text: "Não gostou? Devolvemos 100% do seu dinheiro sem perguntas. Você não tem nada a perder!",
  },
  {
    icon: ShieldCheck,
    kicker: "Conteúdo premium",
    value: "9",
    title: "produtos inclusos",
    text: "Acesso vitalício a todo conteúdo do clube. Atualizações gratuitas sempre que lançarmos novidades.",
  },
];

const deliverables = [
  {
    icon: CheckCircle2,
    title: "Método passo a passo do zero",
    text: "Aulas organizadas em sequência lógica. Você sabe exatamente o que estudar a cada dia.",
  },
  {
    icon: CheckCircle2,
    title: "Aulas práticas e objetivas",
    text: "Sem teoria chata. Você aprende praticando desde a primeira aula com situações reais.",
  },
  {
    icon: CheckCircle2,
    title: "Suporte direto com a Teacher Kilane",
    text: "Tire suas dúvidas diretamente com a professora. Você não fica perdido em nenhum momento.",
  },
  {
    icon: CheckCircle2,
    title: "Acesso vitalício ao conteúdo",
    text: "Pague uma vez e estude para sempre. Sem mensalidades, sem taxas escondidas.",
  },
  {
    icon: CheckCircle2,
    title: "Certificado de conclusão",
    text: "Receba seu certificado digital ao completar o curso. Comprove seu conhecimento.",
  },
  {
    icon: CheckCircle2,
    title: "Estude de qualquer lugar",
    text: "Acesse pelo celular, tablet ou computador. Estude no seu ritmo, onde e quando quiser.",
  },
];

const faqItems = [
  {
    question: "Funciona mesmo para quem está começando do zero?",
    answer:
      "Sim! O método foi criado especialmente para iniciantes. Você não precisa saber nada de inglês para começar. As aulas são progressivas e explicadas em português.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "A maioria dos alunos consegue manter conversas básicas em 4 a 6 semanas estudando apenas 20 minutos por dia. Quanto mais você praticar, mais rápido evolui.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer:
      "Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.",
  },
  {
    question: "Como funciona o acesso ao conteúdo?",
    answer:
      "Após a compra, você recebe login e senha por e-mail em até 2 minutos. O acesso é vitalício - você pode estudar no seu ritmo, sem pressa.",
  },
  {
    question: "Preciso de muito tempo livre para estudar?",
    answer:
      "Não! O método foi criado para pessoas ocupadas. Com apenas 20 minutos por dia você já consegue evoluir. Estude no ônibus, no intervalo do trabalho, quando quiser.",
  },
  {
    question: "A compra é segura?",
    answer:
      "Totalmente segura! A compra é processada pela Hotmart, a maior plataforma de produtos digitais da América Latina. Seus dados estão 100% protegidos.",
  },
];

function ButtonLink({ href, className = "", children, icon: Icon = ArrowRight }) {
  return (
    <a className={`button-link ${className}`.trim()} href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <Icon aria-hidden="true" size={18} />
    </a>
  );
}

function SectionIntro({ label, title, description }) {
  return (
    <div className="section-head">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="hero-visual">
      <div className="story-stage">
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
        <article className="hero-panel">
          <div className="hero-panel__kicker">
            <Instagram aria-hidden="true" size={16} />
            <span>@_easyenglishnow</span>
          </div>
          <h3>Mais de 1.000 alunos já transformaram seu inglês</h3>
          <ul className="hero-panel__list">
            <li>✅ Aprenda do zero ao avançado</li>
            <li>🚀 Resultados em semanas</li>
            <li>💎 Acesso vitalício garantido</li>
          </ul>
        </article>

        <article className="hero-panel hero-panel--accent">
          <div className="hero-panel__kicker">
            <ShieldCheck aria-hidden="true" size={16} />
            <span>Checkout oficial</span>
          </div>
          <h3>Garantia incondicional de 7 dias</h3>
          <p>Não gostou? Devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Risco zero!</p>
        </article>
      </div>
    </div>
  );
}

function FaqItem({ item, open, onToggle }) {
  return (
    <article className={`faq-item ${open ? "is-open" : ""}`}>
      <button className="faq-question" type="button" onClick={onToggle} aria-expanded={open}>
        <span>{item.question}</span>
        <ChevronDown aria-hidden="true" size={18} />
      </button>
      {open ? <p className="faq-answer">{item.answer}</p> : null}
    </article>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeWord, setActiveWord] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const splashTimer = window.setTimeout(() => {
      setShowSplash(false);
    }, 3600);

    return () => window.clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % heroWords.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  const tickerLoop = [...tickerItems, ...tickerItems];

  if (currentPage === "materials") {
    return <Materials onBack={() => setCurrentPage("home")} />;
  }

  return (
    <>
      {showSplash && (
        <div className="splash-screen">
          <img src="/assets/LOGO-EASY-ENGLISH-NOW.png" alt="Easy English Now" className="splash-logo" />
        </div>
      )}
      <div className="site-shell">
      <header className="topbar">
        <div className="container topbar__inner">
          <a className="brand-lockup" href="#top">
            <img src="/assets/LOGO-EASY-ENGLISH-NOW.png" alt="Logo Easy English Now" />
            <div>
              <strong>Easy English Now</strong>
              <span>Teacher Kilane | ingles do zero</span>
            </div>
          </a>

          <div className="topbar__actions">
            <span className="status-pill">
              <Sparkles aria-hidden="true" size={14} />
              matriculas abertas
            </span>
            <button className="button-link button-link--small button-link--materials" onClick={() => setCurrentPage("materials")}>
              <span>MATERIAS</span>
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
              <span className="section-label">
                <Star aria-hidden="true" size={14} />
                🎯 Método exclusivo Teacher Kilane
              </span>

              <h1>
                Fale inglês fluente
                <span className="hero-word-wrap">
                  de forma <span className="hero-word">{heroWords[activeWord]}</span>
                </span>
                em apenas semanas
              </h1>

              <p className="hero-description">
                Descubra o método que já ajudou +1.000 pessoas a saírem do zero e falarem inglês com confiança. 
                Aulas práticas, diretas e sem enrolação. Começa hoje mesmo!
              </p>

              <div className="hero-actions">
                <ButtonLink href={hotmartLink}>quero começar agora 🚀</ButtonLink>
                <ButtonLink href={instagramLink} className="button-link--secondary" icon={Instagram}>
                  ver Instagram oficial
                </ButtonLink>
              </div>

              <div className="signal-grid">
                {heroSignals.map((signal) => (
                  <article className="signal-card signal-card--compact" key={signal.label}>
                    <strong>{signal.value}</strong>
                    <span>{signal.label}</span>
                  </article>
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
              description="Sabemos exatamente como você se sente. Milhares de pessoas passam pelos mesmos problemas todos os dias. Mas isso acaba AGORA!"
            />

            <div className="card-grid">
              {painPoints.map(({ icon: Icon, title, text }) => (
                <article className="editorial-card" key={title}>
                  <div className="card-icon">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionIntro
              label="✅ Como funciona"
              title="3 passos simples para você falar inglês fluente"
              description="Não tem segredo! Nosso método é direto, prático e comprovado. Veja como é fácil começar sua transformação hoje mesmo."
            />

            <div className="card-grid card-grid--steps">
              {processSteps.map(({ icon: Icon, title, text }) => (
                <article className="editorial-card editorial-card--step" key={title}>
                  <div className="card-icon card-icon--blue">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" data-tone="warm">
          <div className="container proof-layout">
            <div className="proof-media">
              <div className="proof-frame">
                <img
                  src="/assets/foto-4-dobra.png"
                  alt="Teacher Kilane em destaque na comunicacao da Easy English Now"
                />
              </div>
              <div className="proof-badges">
                <span>reels</span>
                <span>carrosseis</span>
                <span>stories</span>
              </div>
            </div>

            <div className="proof-copy">
              <SectionIntro
                label="🏆 Prova social"
                title="Mais de 1.000 alunos já transformaram suas vidas"
                description="Não é promessa vazia! Veja os resultados reais de quem já investiu no Easy English Now e hoje fala inglês com confiança."
              />

              <div className="signal-grid">
                {proofCards.map(({ icon: Icon, kicker, value, title, text }) => (
                  <article className="signal-card" key={title}>
                    <div className="signal-card__top">
                      <div className="card-icon card-icon--soft">
                        <Icon aria-hidden="true" size={20} />
                      </div>
                      <span className="signal-card__kicker">{kicker}</span>
                    </div>
                    <strong>{value}</strong>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>

              <p className="section-note">
                🛡️ Compra 100% segura pela Hotmart | ✅ Garantia incondicional de 7 dias | 💎 Acesso vitalício
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="teacher-card">
              <div className="teacher-card__media">
                <img
                  src="/assets/FOTO-03a-DOBRA.png"
                  alt="Teacher Kilane na identidade visual da Easy English Now"
                />
              </div>

              <div className="teacher-card__copy">
                <span className="section-label section-label--dark">
                  <Users aria-hidden="true" size={14} />
                  👩‍🏫 Sua professora
                </span>

                <h2>Conheça a Teacher Kilane</h2>
                <p>
                  Professora de inglês há mais de 10 anos, a Teacher Kilane já ajudou milhares de 
                  pessoas a realizarem o sonho de falar inglês fluente. Seu método exclusivo é 
                  focado em resultados rápidos e práticos.
                </p>
                <p>
                  Com uma linguagem simples e didática, ela ensina inglês de verdade - aquele que 
                  você usa no dia a dia, em viagens, no trabalho e na vida real. Sem decoração, 
                  sem teoria chata. Só prática e resultados!
                </p>

                <ul className="teacher-points">
                  <li>
                    <CheckCircle2 aria-hidden="true" size={18} />
                    <span>🎯 +10 anos ensinando inglês</span>
                  </li>
                  <li>
                    <CheckCircle2 aria-hidden="true" size={18} />
                    <span>✅ +1.000 alunos satisfeitos</span>
                  </li>
                  <li>
                    <CheckCircle2 aria-hidden="true" size={18} />
                    <span>🚀 Método exclusivo e comprovado</span>
                  </li>
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
              description="Acesso completo e vitalício a todo conteúdo do Easy English Now. Pague uma vez e estude para sempre!"
            />

            <div className="card-grid">
              {deliverables.map(({ icon: Icon, title, text }) => (
                <article className="editorial-card editorial-card--tight" key={title}>
                  <div className="card-icon card-icon--red">
                    <Icon aria-hidden="true" size={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section offer" id="checkout">
          <div className="container">
            <div className="offer-card">
              <div className="offer-main">
                <SectionIntro
                  label="🔥 Oferta especial"
                  title="Garanta sua vaga agora com condições exclusivas"
                  description="Não perca tempo! Milhares de pessoas já estão transformando suas vidas. Chegou a sua vez de falar inglês fluente!"
                />

                <ul className="offer-list">
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

                <div className="hero-actions">
                  <ButtonLink href={hotmartLink}>sim, quero garantir minha vaga! 🔥</ButtonLink>
                  <ButtonLink
                    href={instagramLink}
                    className="button-link--secondary button-link--on-dark"
                    icon={Instagram}
                  >
                    falar pelo Instagram
                  </ButtonLink>
                </div>
              </div>

              <aside className="offer-side">
                <h3>🎯 Por que escolher o Easy English Now?</h3>
                <ul className="offer-side__list">
                  <li>✅ +1.000 alunos satisfeitos</li>
                  <li>🚀 Resultados em poucas semanas</li>
                  <li>💎 Acesso vitalício sem mensalidades</li>
                  <li>🛡️ Garantia de 7 dias - risco zero</li>
                  <li>🎯 Método exclusivo e comprovado</li>
                  <li>📱 Estude de qualquer lugar</li>
                </ul>
                <p>
                  Não deixe para depois! Cada dia que passa é uma oportunidade perdida de 
                  transformar sua vida com o inglês. Garanta sua vaga agora!
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
              description="Separamos as perguntas mais comuns para você tomar a melhor decisão. Se tiver outras dúvidas, fale conosco no Instagram!"
            />

            <div className="faq-list">
              {faqItems.map((item, index) => (
                <FaqItem
                  item={item}
                  key={item.question}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq((current) => (current === index ? -1 : index))}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <img src="/assets/LOGO-EASY-ENGLISH-NOW.png" alt="Easy English Now" />
            <p>
              Easy English Now - Teacher Kilane. Transforme seu inglês e abra portas para novas 
              oportunidades. Método comprovado, resultados garantidos!
            </p>
          </div>

          <div className="footer__links">
            <a href={instagramLink} target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" size={16} />
              Siga no Instagram
            </a>
            <a href={hotmartLink} target="_blank" rel="noreferrer">
              <ShieldCheck aria-hidden="true" size={16} />
              Garantir vaga agora
            </a>
          </div>
        </div>
      </footer>

      <div className="mobile-bar">
        <div className="mobile-bar__copy">
          <strong>🔥 Vagas limitadas!</strong>
          <span>Garanta seu acesso com 7 dias de garantia</span>
        </div>
        <ButtonLink href={hotmartLink} className="button-link--mobile">
          quero começar agora 🚀
        </ButtonLink>
      </div>
    </div>
    </>
  );
}
