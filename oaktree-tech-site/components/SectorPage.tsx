import { CTA } from '@/components/CTA';
import { Section } from '@/components/Section';

export type SectorData = {
  title: string;
  summary: string;
  priorities: readonly string[];
  applications: readonly string[];
};

export function SectorPage({ sector }: { sector: SectorData }) {
  return (
    <>
      <Section eyebrow="Industry" title={sector.title} body={sector.summary}>
        <div className="grid grid-2" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3>Key Priorities</h3>
            <ul className="list">
              {sector.priorities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Example Applications</h3>
            <ul className="list">
              {sector.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <CTA />
    </>
  );
}
