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

export default function ContactForm({ onBack, whatsappNumber }: ContactFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  useScrollReveal();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Format message as requested: "Olá, me chamo [Nome]. [Mensagem]"
    const formattedMessage = `Olá, me chamo ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSending(false);
    }, 600);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <button className="back-button is-visible" onClick={onBack} type="button" data-reveal="left">
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </button>

        <div className="contact-shell">
          <section className="contact-hero" data-reveal="up" style={revealStyle(80)}>
            <span className="section-label">
              <MessageSquare size={14} />
              Atendimento Direto
            </span>
            <h1>Inicie sua jornada agora</h1>
            <p>
              Preencha os dados abaixo para falar diretamente com a Teacher Kilane e começar suas
              aulas de inglês.
            </p>

            <div className="contact-info" style={{ marginTop: "24px" }}>
              <div className="contact-info__item">
                <strong style={{ display: "block", fontSize: "0.8rem", textTransform: "uppercase", opacity: 0.8 }}>WhatsApp Oficial</strong>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>+{whatsappNumber.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4")}</span>
              </div>
            </div>
          </section>

          <section className="contact-form" data-reveal="up" style={revealStyle(160)}>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
              <div className="form-field">
                <label htmlFor="user-name">Seu nome completo</label>
                <div style={{ position: "relative" }}>
                  <User 
                    size={18} 
                    style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", opacity: 0.5, pointerEvents: "none" }} 
                  />
                  <input
                    id="user-name"
                    type="text"
                    placeholder="Ex: Rodrigo Lima"
                    required
                    style={{ paddingLeft: "44px", height: "54px", borderRadius: "18px" }}
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
                    style={{ position: "absolute", left: "16px", top: "18px", opacity: 0.5, pointerEvents: "none" }} 
                  />
                  <textarea
                    id="user-message"
                    placeholder="Olá, tenho interesse em participar das aulas online..."
                    required
                    style={{ paddingLeft: "44px", paddingTop: "16px", borderRadius: "18px", minHeight: "120px" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>
              </div>

              <button
                className={`button-link button-link--pulse ${isSending ? "is-loading" : ""}`}
                type="submit"
                disabled={isSending}
                style={{ marginTop: "10px" }}
              >
                <span>{isSending ? "Enviando..." : "Quero meu material NOW📚"}</span>
                <Send size={18} />
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
