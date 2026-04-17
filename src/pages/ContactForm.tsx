import { ArrowLeft, MessageSquare, Send, User } from "lucide-react";
import { useState, type CSSProperties, type FormEvent } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type ContactFormProps = {
  onBack: () => void;
  whatsappNumber: string;
};

function revealStyle(delay = 0): CSSProperties {
  return { "--reveal-delay": `${delay}ms` };
}

export default function ContactForm({
  onBack,
  whatsappNumber,
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(0);
  const [isHumanChecked, setIsHumanChecked] = useState(false);

  useScrollReveal();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Rate Limiting
    const now = Date.now();
    if (now - lastSubmission < 10000) {
      alert("Por favor, aguarde alguns segundos.");
      return;
    }

    if (honeypot) return;

    // Verificação da Checkbox
    if (!isHumanChecked) {
      alert("Por favor, marque a caixa 'Eu não sou um robô'.");
      return;
    }

    // Validação estrita de Nome (apenas letras e espaços)
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;
    if (!nameRegex.test(name.trim())) {
      alert("Por favor, insira um nome válido (apenas letras).");
      return;
    }

    setIsSending(true);
    setLastSubmission(now);

    const sanitizedName = name.replace(/<[^>]*>?/gm, "").trim();
    const sanitizedMessage = message.replace(/<[^>]*>?/gm, "").trim();

    const formattedMessage = `Olá, me chamo ${sanitizedName}. ${sanitizedMessage}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSending(false);
    }, 600);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <button
          className="back-button is-visible"
          onClick={onBack}
          type="button"
          data-reveal="left"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </button>

        <div className="contact-shell">
          <section
            className="contact-hero"
            data-reveal="up"
            style={revealStyle(80)}
          >
            <span className="section-label">
              <MessageSquare size={14} />
              Atendimento Direto
            </span>
            <h1>Inicie sua jornada agora</h1>
            <p>
              Preencha os dados abaixo para falar diretamente com a Teacher
              Kilane e começar suas aulas de inglês.
            </p>

            <div className="contact-info" style={{ marginTop: "24px" }}>
              <div className="contact-info__item">
                <strong
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    opacity: 0.8,
                  }}
                >
                  WhatsApp Oficial
                </strong>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  +
                  {whatsappNumber.replace(
                    /(\d{3})(\d{3})(\d{3})(\d{3})/,
                    "$1 $2 $3 $4",
                  )}
                </span>
              </div>
            </div>
          </section>

          <section
            className="contact-form"
            data-reveal="up"
            style={revealStyle(160)}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "grid", gap: "20px" }}
            >
              {/* Honeypot field (hidden from users) */}
              <input
                type="text"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />

              <div className="form-field">
                <label htmlFor="user-name">Seu nome completo</label>
                <div style={{ position: "relative" }}>
                  <User
                    size={18}
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      opacity: 0.5,
                      pointerEvents: "none",
                    }}
                  />
                  <input
                    id="user-name"
                    type="text"
                    placeholder="Ex: Rodrigo Lima"
                    required
                    style={{
                      paddingLeft: "44px",
                      height: "54px",
                      borderRadius: "18px",
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="user-message">Sua mensagem</label>
                <div style={{ position: "relative" }}>
                  <MessageSquare
                    size={18}
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "18px",
                      opacity: 0.5,
                      pointerEvents: "none",
                    }}
                  />
                  <textarea
                    id="user-message"
                    placeholder="Olá, tenho interesse em participar das aulas online..."
                    required
                    style={{
                      paddingLeft: "44px",
                      paddingTop: "16px",
                      borderRadius: "18px",
                      minHeight: "120px",
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>
              </div>

              {/* Checkbox Anti-Robô */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px",
                  background: "rgba(22, 118, 210, 0.05)",
                  borderRadius: "18px",
                  border: "1px solid rgba(22, 118, 210, 0.12)",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onClick={() => setIsHumanChecked(!isHumanChecked)}
              >
                <input
                  id="robot-checkbox"
                  type="checkbox"
                  checked={isHumanChecked}
                  onChange={(e) => setIsHumanChecked(e.target.checked)}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    accentColor: "var(--blue)",
                  }}
                />
                <label
                  htmlFor="robot-checkbox"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    color: "var(--blue-deep)",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  Eu não sou um robô 🤖
                </label>
              </div>

              <button
                className={`button-link button-link--pulse ${isSending ? "is-loading" : ""}`}
                type="submit"
                disabled={isSending}
                style={{ marginTop: "10px" }}
              >
                <span>
                  {isSending ? "Enviando..." : "Quero me matricular NOW🎓"}
                </span>
                <Send size={18} />
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
