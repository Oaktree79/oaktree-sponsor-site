import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { Section } from '@/components/Section';
import {
  caseStudies,
  faqs,
  industries,
  processSteps,
  sectors,
  services,
  site,
  stats,
  valueProps,
} from '@/content/site';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">{site.heroEyebrow}</div>
            <h1>{site.heroTitle}</h1>
            <p className="lead muted">{site.heroBody}</p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-light">
                Discuss Your Project
              </Link>
              <Link href="/services" className="button button-dark">
                View Services
              </Link>
            </div>
            <div className="kicker-grid">
              {['3D Printing', 'CNC Machining', 'Advanced Recycling', 'R&D Leadership'].map((item) => (
                <div key={item} className="badge">{item}</div>
              ))}
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-large">
              <div className="eyebrow">Primary Mission</div>
              <h3>Eco-friendly manufacturing consulting built on advanced fabrication and recycling-driven innovation.</h3>
              <p className="lead muted" style={{ marginTop: '1rem' }}>
                We combine additive manufacturing, precision machining, and sustainable process development to help organizations move from concept to production responsibly.
              </p>
            </div>
            <div className="panel-grid">
              <div className="card">
                <div className="eyebrow" style={{ color: '#f3b25f' }}>Capabilities</div>
                <ul className="list">
                  <li>Advanced additive manufacturing</li>
                  <li>Precision CNC workflows</li>
                  <li>Materials and process R&D</li>
                  <li>Prototype to production support</li>
                </ul>
              </div>
              <div className="card">
                <div className="eyebrow" style={{ color: '#f3b25f' }}>Focus</div>
                <ul className="list">
                  <li>Organic and inorganic technologies</li>
                  <li>Waste reduction methodologies</li>
                  <li>Cross-industry applications</li>
                  <li>Scalable innovation strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-subtle">
        <div className="container grid grid-4">
          {stats.map((item) => (
            <div key={item} className="card">{item}</div>
          ))}
        </div>
      </section>

      <Section
        eyebrow="About Oaktree Tech LLC"
        title="A manufacturing consulting firm focused on sustainability, precision, and innovation."
        body="Oaktree Tech LLC is positioned as an eco-friendly manufacturing consulting firm with a core focus on 3D printing, CNC machining, and advanced recycling methodologies. We support a wide range of industries—from personalized applications to aerospace, housing, medical, new energy resources, and public, private, and military sectors."
      >
        <div className="grid grid-2" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3>Mission</h3>
            <p style={{ marginTop: '1rem' }}>{site.mission}</p>
          </div>
          <div className="card">
            <h3>Differentiators</h3>
            <ul className="list">
              <li>Eco-friendly manufacturing methodologies</li>
              <li>Advanced recycling integration into production</li>
              <li>Strong R&D in organic and inorganic technologies</li>
              <li>Support across public, private, and military sectors</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Why Oaktree Tech LLC"
        title="Built for organizations that need innovation, precision, and sustainability in the same partner."
        body="We position advanced manufacturing as a practical business advantage—combining fabrication capability, process development, and environmentally responsible thinking to help clients move forward with confidence."
      >
        <div className="grid grid-4" style={{ marginTop: '2rem' }}>
          {valueProps.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p style={{ marginTop: '1rem' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="Technical services built for modern, sustainable manufacturing."
        body="From advanced fabrication and precision machining to recycling integration and process development, Oaktree Tech LLC helps organizations build better products and smarter production systems."
        subtle
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

      <Section
        eyebrow="Industries Served"
        title="Supporting innovation across diverse and demanding sectors."
        body="Our capabilities adapt to both highly specialized and broad commercial applications, with a flexible and technically grounded approach."
      >
        <div className="grid grid-3" style={{ marginTop: '2rem' }}>
          {industries.map((industry) => (
            <div key={industry} className="card">
              <h3>{industry}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Sector Pages"
        title="Targeted solutions for public, private, and military sectors."
        body="Rather than redirecting visitors elsewhere, Oaktree Tech LLC can serve each sector with dedicated messaging, stronger relevance, and clearer pathways for engagement on the same domain."
        subtle
      >
        <div className="grid grid-3" style={{ marginTop: '2rem' }}>
          {sectors.map((sector) => (
            <div key={sector.slug} className="card">
              <h3>{sector.title}</h3>
              <p style={{ marginTop: '1rem' }}>{sector.summary}</p>
              <p className="small-note" style={{ marginTop: '1rem' }}>
                Suggested URL: /industries/{sector.slug}
              </p>
              <Link href={`/industries/${sector.slug}`} className="button button-dark" style={{ marginTop: '1rem' }}>
                View Sector Page
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Work"
        title="Real-world applications for advanced manufacturing and R&D."
        body="Example engagement areas showing how Oaktree Tech LLC can support development, fabrication, and process innovation across industries."
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

      <Section
        eyebrow="Process"
        title="A clear path from concept to sustainable execution."
      >
        <div className="grid grid-4" style={{ marginTop: '2rem' }}>
          {processSteps.map((item) => (
            <div key={item.step} className="card">
              <div className="eyebrow" style={{ color: '#f3b25f' }}>{item.step}</div>
              <h3>{item.title}</h3>
              <p style={{ marginTop: '1rem' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Common questions."
        subtle
      >
        <div className="grid" style={{ marginTop: '2rem' }}>
          {faqs.map((faq) => (
            <div key={faq.q} className="card">
              <h3>{faq.q}</h3>
              <p style={{ marginTop: '1rem' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
