# PROMPT PARA CODEX - Landing Page Easy English Now

## 📋 INSTRUÇÕES GERAIS
Você é um desenvolvedor frontend especialista em React e CSS. Sua missão é melhorar significativamente a landing page "Easy English Now", transformando-a em uma página de alta conversão com visual premium.

## 🎯 OBJETIVO PRINCIPAL
Transformar a landing page atual (básica mas funcional) em uma experiência visual de alto valor que transmita credibilidade, desejabilidade e profissionalismo. A página deve parecer um produto que vale R$500+, não R$29.

## 📁 ESTRUTURA DO PROJETO
```
C:\Users\Rodrigo🐐\OneDrive\Desktop\codex english\
├── src/
│   ├── App.jsx          (componentes React - modificar aqui)
│   ├── main.jsx         (ponto de entrada)
│   └── styles.css       (estilos CSS - modificar aqui)
├── index.html
├── package.json
└── public/assets/       (imagens e logos já existem)
```

## 🎨 SISTEMA DE DESIGN (MANTER)

### Cores
- Azul primário: `#1a7fd1` (var(--blue))
- Azul escuro: `#0a4a9c` (var(--blue-deep))
- Vermelho/CTA: `#dc2626` (var(--red))
- Dourado: `#fbbf24` (var(--gold))
- Azul marinho: `#07122a` (var(--navy))
- Background: `#f8faff`

### Fontes
- Plus Jakarta Sans (corpo)
- Space Grotesk (títulos)

### Estilo Visual
- Glassmorphism (blur, transparência)
- Gradientes suaves
- Sombras em camadas
- Bordas arredondadas (border-radius: 14px-32px)

## ✅ MELHORIAS A IMPLEMENTAR

### 1. HERO SECTION - ENHANCED
**Local:** Componente `Hero` no App.jsx

**Tarefas:**
- [ ] Adicionar contador animado de alunos: "+2.500 alunos destravaram"
- [ ] Badge de "Garantia 30 dias" com ícone Shield
- [ ] Estrelas de avaliação (5 estrelas douradas)
- [ ] Logo pequeno de "Hotmart" para credibilidade
- [ ] Headline com typing effect alternativo (opcional)
- [ ] Animação de entrada mais dramática nos elementos

**Referência CSS para stats:**
```css
.hero-stats {
  display: flex;
  gap: 16px;
  margin-top: 32px;
}
.hero-stat {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  background: rgba(255,255,255,0.9);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
```

---

### 2. NOVA SEÇÃO: SOCIAL PROOF / DEPOIMENTOS
**Criar:** Novo componente `TestimonialsSection` após `ProofSection`

**Layout:**
- Grid de 3 cards horizontais
- Cada card: avatar (iniciais), nome, profissão, depoimento em itálico
- Aspas decorativas em dourado
- Background com gradiente sutil

**Dados (fictícios):**
1. Ana Carolina - Marketing - "Finalmente entendi inglês de um jeito que faz sentido"
2. Bruno Silva - Dev - "O método visual mudou tudo"
3. Carla Mendes - Empreendedora - "Consegui fazer minha primeira reunião em inglês"

**CSS necessário:**
```css
.testimonials-section { padding: 100px 0; background: linear-gradient(...); }
.testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.testimonial-card { padding: 28px; border-radius: 20px; ... }
.testimonial-avatar { width: 48px; height: 48px; border-radius: 50%; background: gradient; }
```

---

### 3. OFFER CARD - PREMIUM UPGRADE
**Local:** Componente `OfferSection`

**Melhorias:**
- [ ] Badge "MAIS VENDIDO" em dourado no topo
- [ ] Preço riscado (de R$197) por R$97 (ou similar)
- [ ] Contador regressivo de urgência (opcional)
- [ ] Lista de bônus visuais (checkmarks)
- [ ] Selos de segurança maiores
- [ ] Efeito de "brilho" no card (gradient animado na borda)

---

### 4. WHATSAPP FLOAT BUTTON
**Criar:** Componente `WhatsAppButton`

**Comportamento:**
- Posição: fixed, bottom: 100px, right: 24px
- Cor: gradiente verde WhatsApp (#25d366)
- Ícone: MessageCircle (importar do lucide-react)
- Aparece após scroll de 800px (use useEffect + scroll listener)
- Animação: slide-in da direita

**CSS:**
```css
.whatsapp-float {
  position: fixed;
  right: 24px;
  bottom: 100px;
  padding: 14px 20px;
  background: linear-gradient(135deg, #25d366, #128c7e);
  border-radius: 999px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 300ms ease;
}
```

**Link:** `https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20no%20Easy%20English%20Now`

---

### 5. SCROLL PROGRESS BAR
**Adicionar:** Barra fina no topo da página

**Implementação:**
- Elemento `div` com `position: fixed`, `top: 0`, `left: 0`, `height: 3px`
- Background: gradient azul → dourado
- Width calculado via JS: `(scrollY / (scrollHeight - innerHeight)) * 100`

**Adicionar no App.jsx:**
```jsx
const [progress, setProgress] = useState(0);
useEffect(() => {
  const onScroll = () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    setProgress(pct);
  };
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}, []);

// No JSX:
<div className="scroll-progress" style={{ width: `${progress}%` }} />
```

---

### 6. ANIMAÇÕES AVANÇADAS
**CSS a adicionar:**

**Micro-interações em botões:**
```css
.button {
  transition: all 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.button:hover {
  transform: translateY(-3px) scale(1.02);
}
.button:active {
  transform: translateY(0) scale(0.98);
}
```

**Stagger nas grids:**
- Pain cards, feature cards, journey cards devem ter `transition-delay` progressivo

**Parallax sutil:**
- Badges flutuantes no hero devem ter velocidade de movimento diferente no scroll

---

### 7. COMPONENTES EXISTENTES - REFINAMENTOS

**TopBar:**
- Adicionar badge de "Ao vivo" ou "Novas vagas" se possível

**Pain Cards:**
- Adicionar linha gradiente animada no topo no hover

**Offer Card:**
- Efeito de borda brilhante (gradient border)
- Sombras mais profundas

**Footer:**
- Adicionar links sociais (Instagram, YouTube)
- Copyright atualizado

---

## 📝 CHECKLIST ANTES DE ENTREGAR

- [ ] Todos os imports necessários estão no topo do App.jsx
- [ ] Componentes novos estão exportados e usados
- [ ] CSS adicionado ao final do styles.css
- [ ] Nenhum erro de sintaxe (verificar fechamento de tags)
- [ ] Responsividade mantida (testar mobile mentalmente)
- [ ] Cores seguem o sistema de design existente
- [ ] Animações respeitam `prefers-reduced-motion`

## 🚀 COMANDO PARA TESTAR

Após todas as alterações:
```bash
npm run dev
```

Acesse: http://localhost:5173 (ou outra porta se ocupada)

---

## 💡 DICAS

1. **Mantenha o código limpo** - Use indentação consistente
2. **Reutilize classes CSS** - Não duplique código
3. **Glassmorphism** - Use `backdrop-filter: blur()` e transparências
4. **Gradientes** - Prefira `linear-gradient(135deg, ...)` para ângulo moderno
5. **Mobile-first** - Todas as seções devem funcionar em telas pequenas

## ❌ O QUE NÃO FAZER

- Não alterar a estrutura base do React (hooks, componentes existentes)
- Não remover funcionalidades existentes (FAQ, StickyCTA, Footer)
- Não mudar o esquema de cores principal
- Não adicionar bibliotecas externas (use só React + CSS)

---

Boa sorte! 💪
