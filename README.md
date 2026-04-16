<div align="center">
  <img src="./docs/readme/hero-banner.svg" alt="Easy English Now" width="100%" />
  
  ![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![Status](https://img.shields.io/badge/Status-Production-success?style=for-the-badge)
  ![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Customização](#-customização)
- [Deploy](#-deploy)
- [Contribuindo](#-contribuindo)

---

## 🎯 Sobre o Projeto

**Easy English Now** é uma landing page premium desenvolvida para promover cursos de inglês da Teacher Kilane. O projeto combina design moderno, alta performance e foco em conversão.

### Características Principais

✅ **Landing Page Otimizada** - Hero dinâmico, prova social e CTAs estratégicos  
✅ **Biblioteca de Materiais** - Marketplace integrado com busca e filtros  
✅ **Design Responsivo** - Experiência perfeita em mobile, tablet e desktop  
✅ **Performance** - Carregamento rápido com Vite e React 19  
✅ **SEO Otimizado** - Meta tags, Open Graph e Twitter Cards configurados

---

## ⚡ Funcionalidades

### Landing Page
- Splash screen animado com logo da marca
- Hero section com headline dinâmica e rotação de palavras
- Seções de dor, processo, prova social e autoridade
- FAQ interativo com accordion
- CTA fixo para mobile
- Ticker animado com informações importantes

### Biblioteca de Materiais
- Grid responsivo de produtos estilo e-commerce
- Sistema de busca em tempo real
- Filtros por categoria (Básico, Intermediário, Avançado)
- Cards com imagem, descrição, preço e botão de compra
- Navegação fluida sem reload de página

---

## 🛠 Tecnologias

- **[React 19](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[Vite 6](https://vitejs.dev/)** - Build tool e dev server ultrarrápido
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e customizáveis
- **CSS Puro** - Estilização sem frameworks, totalmente customizável

---

## 📁 Estrutura do Projeto

```
easy-english/
├── public/
│   └── assets/              # Imagens, logos e recursos estáticos
├── src/
│   ├── pages/
│   │   └── Materials.jsx    # Página da biblioteca de materiais
│   ├── App.jsx              # Componente principal e landing page
│   ├── main.jsx             # Entry point do React
│   └── styles.css           # Estilos globais e componentes
├── docs/
│   └── readme/              # Assets do README
├── index.html               # HTML base com SEO
├── package.json             # Dependências e scripts
└── vite.config.js           # Configuração do Vite
```

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ([Download](https://nodejs.org/))
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/easy-english.git
cd easy-english
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

---

## 🚀 Como Usar

### Scripts Disponíveis

| Comando | Descrição |
|---------|----------|
| `npm run dev` | Inicia servidor de desenvolvimento com hot reload |
| `npm run build` | Gera build otimizado para produção em `dist/` |
| `npm run preview` | Preview local da build de produção |

### Navegação

- **Home** - Landing page principal com todas as seções
- **Materiais** - Clique no botão "MATERIAS" no topo para acessar a biblioteca
- **Voltar** - Use o botão "Voltar" na página de materiais para retornar à home

---

## 🎨 Customização

### Editar Conteúdo da Landing Page

Abra `src/App.jsx` e edite:

```javascript
// Links externos
const instagramLink = "https://www.instagram.com/_easyenglishnow/";
const hotmartLink = "https://hotmart.com/pt-br/club/easy-inglish-now";

// Palavras rotativas no hero
const heroWords = ["rápido", "prático", "eficaz", "definitivo"];

// Perguntas frequentes
const faqItems = [
  {
    question: "Sua pergunta aqui?",
    answer: "Sua resposta aqui."
  }
];
```

### Adicionar Materiais

Abra `src/pages/Materials.jsx` e edite o array:

```javascript
const materialsData = [
  {
    id: 1,
    title: "Nome do Material",
    description: "Descrição do material",
    price: "R$ 97,00",
    image: "/assets/imagem.png",
    category: "basico" // basico, intermediario ou avancado
  }
];
```

### Personalizar Cores

Abra `src/styles.css` e edite as variáveis CSS:

```css
:root {
  --blue: #1676d2;
  --red: #e63b2e;
  --gold: #ffc94a;
  /* ... outras variáveis */
}
```

### Trocar Imagens

1. Adicione suas imagens em `public/assets/`
2. Atualize os caminhos em `src/App.jsx` ou `src/pages/Materials.jsx`

---

## 🌐 Deploy

### Build de Produção

```bash
npm run build
```

Isso gera a pasta `dist/` otimizada para produção.

### Opções de Hospedagem

#### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Arraste a pasta dist/ para netlify.com/drop
```

#### GitHub Pages
```bash
npm run build
gh-pages -d dist
```

### Checklist Pré-Deploy

- [ ] Atualizar links do Hotmart e Instagram
- [ ] Revisar todos os textos e preços
- [ ] Testar em mobile e desktop
- [ ] Validar imagens e assets
- [ ] Configurar domínio customizado
- [ ] Adicionar Google Analytics (opcional)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

**Teacher Kilane**  
Instagram: [@_easyenglishnow](https://www.instagram.com/_easyenglishnow/)

---

<div align="center">
  <p>Feito com ❤️ para transformar o ensino de inglês</p>
  <p>⭐ Se este projeto te ajudou, deixe uma estrela!</p>
</div>
