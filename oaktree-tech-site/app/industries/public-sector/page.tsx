import { SectorPage } from '@/components/SectorPage';
import { sectors } from '@/content/site';

const sector = sectors.find((item) => item.slug === 'public-sector')!;

export const metadata = {
  title: 'Public Sector',
};

export default function PublicSectorPage() {
  return <SectorPage sector={sector} />;
}
