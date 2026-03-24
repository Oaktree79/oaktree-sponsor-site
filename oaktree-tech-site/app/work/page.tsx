import { CTA } from '@/components/CTA';
import { Section } from '@/components/Section';
import { caseStudies } from '@/content/site';

export const metadata = {
  title: 'Work',
};

export default function WorkPage() {
  return (
    <>
      <Section
        eyebrow="Work"
        title="Example applications and engagement types."
        body="These sample entries show how Oaktree Tech LLC can present fabrication, process innovation, and R&D capabilities to prospective clients and partners."
      >
        <div className="grid grid-3" style={{ marginTop: '2rem' }}>
          {caseStudies.map((item) => (
            <div key={item.title} className="card">
              <div className="eyebrow" style={{ color: '#f3b25f' }}>{item.industry}</div>
              <h3>{item.title}</h3>
              <p style={{ marginTop: '1rem' }}>{item.summary}</p>
              <div className="badge" style={{ marginTop: '1rem' }}>
                <strong>Example outcome:</strong> {item.outcome}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
