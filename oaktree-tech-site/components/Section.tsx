import { ReactNode } from 'react';

export function Section({
  eyebrow,
  title,
  body,
  children,
  subtle = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: ReactNode;
  subtle?: boolean;
}) {
  return (
    <section className={subtle ? 'section section-subtle' : 'section'}>
      <div className="container">
        <div className="section-copy maxw-3">
          {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
          <h2>{title}</h2>
          {body ? <p className="lead muted">{body}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
