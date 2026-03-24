import Link from 'next/link';
import { nav, site } from '@/content/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-title">{site.companyName}</div>
          <p className="muted">
            Sustainable manufacturing consulting, 3D printing, CNC machining,
            advanced recycling methodologies, and R&D for high-impact industries.
          </p>
        </div>
        <div>
          <div className="footer-title">Quick Links</div>
          <div className="footer-links">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-title">Contact</div>
          <div className="footer-links muted">
            <div>{site.domain}</div>
            <a href={site.phoneHref} className="footer-link">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="footer-link">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
