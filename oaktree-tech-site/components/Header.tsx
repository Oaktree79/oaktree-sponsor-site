import Link from 'next/link';
import { nav, site } from '@/content/site';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand-name">{site.companyName}</span>
          <span className="brand-tag">{site.tagline}</span>
        </Link>
        <nav className="nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={site.phoneHref} className="phone-pill">
          {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
