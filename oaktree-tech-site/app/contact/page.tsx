import { ContactForm } from '@/components/ContactForm';
import { Section } from '@/components/Section';
import { site } from '@/content/site';

export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let’s talk about your project."
      body="Tell us what you are building, the challenge you are trying to solve, or where your current manufacturing or R&D process needs improvement."
    >
      <div className="contact-box" style={{ marginTop: '2rem' }}>
        <div className="card">
          <div className="badge" style={{ marginBottom: '1rem' }}>
            Sector-specific inquiries are welcome for public sector, private sector,
            and military & defense-related manufacturing and R&D opportunities.
          </div>
          <div className="footer-links muted">
            <div><strong>Business:</strong> {site.companyName}</div>
            <a href={site.phoneHref} className="footer-link"><strong>Phone:</strong> {site.phoneDisplay}</a>
            <div><strong>Website:</strong> {site.domain}</div>
            <a href={`mailto:${site.email}`} className="footer-link"><strong>Email:</strong> {site.email}</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
