import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { site } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.companyName} | Sustainable Manufacturing Consulting`,
    template: `%s | ${site.companyName}`,
  },
  description:
    'Eco-friendly manufacturing consulting, 3D printing, CNC machining, advanced recycling methodologies, and R&D solutions across public, private, and military sectors.',
  openGraph: {
    title: `${site.companyName} | Sustainable Manufacturing Consulting`,
    description:
      'Eco-friendly manufacturing consulting, 3D printing, CNC machining, advanced recycling methodologies, and R&D solutions across public, private, and military sectors.',
    url: `https://${site.domain}`,
    siteName: site.companyName,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
