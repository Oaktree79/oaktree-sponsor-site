import Link from 'next/link';
import { site } from '@/content/site';

export function CTA() {
  return (
    <section className="section section-subtle">
      <div className="container">
        <div className="cta-box">
          <div>
            <div className="eyebrow">Final Call to Action</div>
            <h2>Let’s build the right manufacturing solution for your mission.</h2>
            <p className="lead muted">
              Whether your focus is advanced fabrication, sustainable production
              improvement, precision machining, or R&D in emerging materials and
              processes, {site.companyName} is positioned to support your next step.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="button button-light">
              Start a Project Conversation
            </Link>
            <a href={site.phoneHref} className="button button-outline">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
