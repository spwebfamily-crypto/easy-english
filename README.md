# Easy English Now

Landing page promocional do produto digital `Easy English Now`, desenvolvida em `React + Vite`, com foco em conversao, prova social e checkout externo via Hotmart.

## Visao Geral

Este projeto entrega uma pagina unica com identidade visual forte, animacoes leves e varios elementos de conversao:

- hero com headline dinamica e CTA principal
- splash screen de entrada
- secoes de dores, beneficios, prova visual e jornada
- depoimentos e metricas de prova social
- card de oferta com preco, bonuses e countdown
- CTA fixo no scroll, toast de feedback e botao flutuante de WhatsApp
- metadados de SEO e compartilhamento social em `index.html`

## Stack

- `React 19`
- `Vite 6`
- `lucide-react`
- CSS puro em um arquivo central: `src/styles.css`

## Estrutura

```text
.
|-- public/
|   `-- assets/             # imagens e arquivos usados na landing
|-- src/
|   |-- App.jsx             # composicao da pagina e dados mockados
|   |-- main.jsx            # bootstrap do React
|   `-- styles.css          # estilos globais, layout, animacoes e responsividade
|-- dist/                   # build gerada para deploy
|-- _reference/             # referencias visuais e assets originais
|-- index.html              # entrypoint e meta tags SEO
`-- vite.config.js
```

## Como Rodar

### Requisitos

- `Node.js` 18+ recomendado
- `npm`

### Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Pontos Importantes Para Customizacao

Os principais conteudos estao centralizados em `src/App.jsx`. Ali voce encontra:

- link do checkout Hotmart em `hotmartLink`
- palavras rotativas do hero
- depoimentos, FAQs, metricas e textos da oferta
- links do rodape
- numero do WhatsApp do botao flutuante

Os assets visuais ficam em `public/assets/`.

## Deploy

O projeto gera arquivos estaticos em `dist/`, entao pode ser publicado facilmente em plataformas como:

- Vercel
- Netlify
- Cloudflare Pages
- hospedagem estatica tradicional

Fluxo basico:

1. executar `npm run build`
2. publicar o conteudo de `dist/`

## Observacoes

- Nao ha backend neste projeto.
- O conteudo atual esta fortemente orientado para uma landing de venda de ebook/material digital.
- Parte dos textos, links e provas sociais esta hardcoded no front-end, o que facilita edicao rapida mas pede revisao manual antes de publicar novas versoes.
