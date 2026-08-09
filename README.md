# Conhecendo o Espiritismo

Blog sobre a Doutrina Espírita, construído com [Astro](https://astro.build) e Tailwind CSS.

## Estrutura de conteúdo

O site usa Content Collections do Astro, definidas em [`src/content.config.ts`](src/content.config.ts):

- `src/content/artigos/` — posts do blog (Markdown).
- `src/content/obras-basicas/` — as 5 obras fundamentais de Allan Kardec.
- `src/content/obras-complementares/` — metadados de obras complementares. Cada entrada aponta para um PDF via o campo `arquivoPdf`.

### Como adicionar um novo artigo

Crie um arquivo `.md` em `src/content/artigos/` com o frontmatter:

```md
---
title: "Título do artigo"
description: "Resumo curto para listagens e SEO."
pubDate: 2026-08-07
tags: ["tag1", "tag2"]
---

Conteúdo em Markdown...
```

### Como adicionar uma obra complementar (PDF)

1. Coloque o arquivo PDF em `public/obras-complementares/nome-do-arquivo.pdf`.
2. Crie um arquivo `.md` em `src/content/obras-complementares/` com:

```md
---
title: "Título da obra"
autor: "Nome do autor"
anoPublicacao: 1950
categoria: "Categoria opcional"
resumo: "Resumo da obra."
arquivoPdf: "nome-do-arquivo.pdf"
---
```

## Comandos

| Comando           | Ação                                         |
| ------------------ | --------------------------------------------- |
| `npm install`       | Instala as dependências                       |
| `npm run dev`       | Inicia o servidor local em `localhost:4321`   |
| `npm run build`     | Gera o build de produção em `./dist/`         |
| `npm run preview`   | Faz preview do build localmente               |

## Deploy

Projeto configurado como site 100% estático — pode ser publicado em Netlify, Vercel, GitHub Pages ou qualquer host de arquivos estáticos.
