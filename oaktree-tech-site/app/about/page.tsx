import { Section } from '@/components/Section';
import { site } from '@/content/site';

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="Research-driven manufacturing consulting with an eco-focused mission."
        body="Oaktree Tech LLC helps organizations solve practical production and innovation challenges through 3D printing, CNC machining, advanced recycling methodologies, and R&D in advanced organic and inorganic technologies."
      >
        <div className="grid grid-2" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3>Mission</h3>
            <p style={{ marginTop: '1rem' }}>{site.mission}</p>
          </div>
          <div className="card">
            <h3>Positioning</h3>
            <p style={{ marginTop: '1rem' }}>
              We are positioned as an advanced manufacturing and R&D partner serving
              aerospace, housing, medical, energy, custom applications, and public,
              private, and military sectors.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
