import { CTA } from '@/components/CTA';
import { Section } from '@/components/Section';
import { services } from '@/content/site';

export const metadata = {
  title: 'Services',
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="Technical services that help your organization build better products and systems."
        body="Oaktree Tech LLC provides focused technical services for organizations that need dependable execution, sustainable methods, modern manufacturing workflows, and clear outcomes."
      >
        <div className="grid grid-3" style={{ marginTop: '2rem' }}>
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3>{service.title}</h3>
              <p style={{ marginTop: '1rem' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
