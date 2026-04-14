# Easy English Now

Landing page premium para promocao do produto digital `Easy English Now`, desenvolvida com `React + Vite` e pensada para conversao direta via Hotmart.

![Preview da landing](./public/assets/SEO-EASY-ENGLISH-NOW.jpg)

## Sobre o Projeto

Este projeto e uma single-page landing page com narrativa comercial forte, visual marcante e varios elementos de conversao para apresentar a oferta do `Easy English Now`.

O foco da pagina e:

- capturar atencao logo no primeiro bloco
- reduzir objecoes com prova social e FAQs
- reforcar autoridade visual da marca
- conduzir o usuario para o checkout externo

## O Que Esta Implementado

### Experiencia de interface

- splash screen de entrada com identidade da marca
- hero com headline dinamica e CTA principal
- efeitos de reveal no scroll
- barra de progresso de leitura
- botao flutuante de WhatsApp
- CTA fixo no rodape em scroll
- toast visual ao abrir checkout

### Conversao e copy

- secao de dores e beneficios
- prova visual com imagens do produto e da marca
- depoimentos com prova social
- metricas animadas
- card de oferta com preco ancorado
- contador regressivo de urgencia
- FAQ com acordeao

### Qualidade tecnica

- layout responsivo para desktop, tablet e mobile
- suporte a `prefers-reduced-motion`
- assets organizados em `public/assets`
- metadados SEO, Open Graph e Twitter Card em `index.html`
- build estatica pronta para deploy

## Stack

- `React 19`
- `Vite 6`
- `lucide-react`
- CSS puro em `src/styles.css`

## Estrutura do Projeto

```text
.
|-- public/
|   `-- assets/                   # imagens, capas, logo, selos e favicon
|-- src/
|   |-- App.jsx                   # estrutura da landing, dados e comportamento
|   |-- main.jsx                  # ponto de entrada do React
|   `-- styles.css                # identidade visual, layout, motion e responsividade
|-- dist/                         # build final para publicacao
|-- _reference/                   # referencias visuais originais do projeto
|-- index.html                    # meta tags, SEO e bootstrap do app
|-- package.json
`-- vite.config.js
```

## Como Rodar Localmente

### Requisitos

- `Node.js` 18 ou superior
- `npm`

### Instalacao

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Gerar build de producao

```bash
npm run build
```

### Visualizar build localmente

```bash
npm run preview
```

## Scripts Disponiveis

| Script | Funcao |
| --- | --- |
| `npm run dev` | inicia o servidor local com hot reload |
| `npm run build` | gera a versao de producao em `dist/` |
| `npm run preview` | sobe uma visualizacao local da build final |

## Onde Editar Cada Parte

### Conteudo principal

O arquivo `src/App.jsx` concentra quase toda a customizacao da landing:

- `hotmartLink`: link principal de checkout
- `rotatingWords`: palavra rotativa do hero
- `testimonials`: depoimentos
- `socialProofMetrics`: numeros de prova social
- `offerBonuses`: bonuses da oferta
- `faqItems`: perguntas frequentes
- `footerLinks`: links sociais do rodape

### Identidade visual

O arquivo `src/styles.css` concentra:

- paleta de cores
- tipografia
- espacamentos
- animacoes
- layout responsivo
- estilos dos componentes da landing

### SEO e compartilhamento

O arquivo `index.html` concentra:

- `title`
- `description`
- `keywords`
- metadados Open Graph
- metadados Twitter Card
- favicon

### Imagens e assets

Todos os arquivos visuais usados pela pagina ficam em:

```text
public/assets/
```

## Fluxo de Conversao da Pagina

1. O usuario entra e recebe impacto visual inicial com splash + hero.
2. A pagina apresenta dor, clareza de proposta e beneficios.
3. A prova social reforca confianca com numeros e depoimentos.
4. A secao de oferta concentra preco, bonus, seguranca e urgencia.
5. O CTA leva para checkout externo na Hotmart.

## Publicacao

Como o projeto e estatico, a publicacao e simples. Depois do build:

```bash
npm run build
```

publique o conteudo da pasta `dist/` em qualquer plataforma de hosting estatico, como:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- hospedagem estatica tradicional

## Checklist Antes de Publicar

- revisar `hotmartLink`
- trocar o numero do WhatsApp por um numero real
- revisar links de Instagram e YouTube
- validar copy, preco e bonuses
- revisar depoimentos e metricas
- revisar metadados SEO em `index.html`
- confirmar se todos os assets finais estao em `public/assets`

## Limitacoes Atuais

- nao existe backend
- nao existe CMS para editar conteudo sem alterar codigo
- os textos estao hardcoded em `src/App.jsx`
- o countdown usa o fim do dia local do navegador
- o botao de WhatsApp usa numero placeholder

## Proximos Passos Sugeridos

- integrar analytics
- adicionar evento de conversao nos CTAs
- conectar pixel do Meta e Google Ads
- externalizar conteudo para JSON ou CMS
- adicionar testes basicos de renderizacao
- criar variante A/B da headline e da oferta

## Resumo

O projeto entrega uma landing page visualmente forte, pronta para campanhas, facil de editar e simples de publicar. A base esta organizada para ajustes rapidos de copy, oferta, links e identidade visual sem precisar reestruturar a aplicacao.
