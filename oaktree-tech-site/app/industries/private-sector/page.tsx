import { SectorPage } from '@/components/SectorPage';
import { sectors } from '@/content/site';

const sector = sectors.find((item) => item.slug === 'private-sector')!;

export const metadata = {
  title: 'Private Sector',
};

export default function PrivateSectorPage() {
  return <SectorPage sector={sector} />;
}
