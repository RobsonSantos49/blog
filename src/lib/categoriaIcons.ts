import IconChama from '../components/icons/IconChama.astro';
import IconOndas from '../components/icons/IconOndas.astro';
import IconEstrela from '../components/icons/IconEstrela.astro';

export const categoriaIcons: Record<string, typeof IconChama> = {
  Codificação: IconChama,
  Mediunidade: IconOndas,
  'Vida espiritual': IconEstrela,
};
