import { SectorPage } from '@/components/SectorPage';
import { sectors } from '@/content/site';

const sector = sectors.find((item) => item.slug === 'military-defense')!;

export const metadata = {
  title: 'Military & Defense',
};

export default function MilitaryDefensePage() {
  return <SectorPage sector={sector} />;
}
