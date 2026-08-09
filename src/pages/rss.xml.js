import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const artigos = (await getCollection('artigos', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Conhecendo o Espiritismo',
    description:
      'Artigos sobre a Doutrina Espírita, as obras básicas de Allan Kardec e obras complementares.',
    site: context.site,
    items: artigos.map((artigo) => ({
      title: artigo.data.title,
      description: artigo.data.description,
      pubDate: artigo.data.pubDate,
      link: `/blog/${artigo.id}/`,
    })),
    customData: '<language>pt-br</language>',
  });
}
