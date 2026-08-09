import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    autor: z.string().default('Equipe Conhecendo o Espiritismo'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const obrasBasicas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/obras-basicas' }),
  schema: z.object({
    title: z.string(),
    tituloOriginal: z.string().optional(),
    autor: z.string().default('Allan Kardec'),
    anoPublicacao: z.number(),
    ordem: z.number(),
    resumo: z.string(),
    arquivoPdf: z.string().optional(),
  }),
});

const obrasComplementares = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/obras-complementares' }),
  schema: z.object({
    title: z.string(),
    autor: z.string(),
    anoPublicacao: z.number().optional(),
    categoria: z.string().optional(),
    resumo: z.string(),
    arquivoPdf: z.string(),
    serie: z.string().optional(),
    ordemSerie: z.number().optional(),
  }),
});

export const collections = {
  artigos,
  'obras-basicas': obrasBasicas,
  'obras-complementares': obrasComplementares,
};
