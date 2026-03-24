'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<string>('');
  const [sending, setSending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setSending(true);
    setStatus('');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });

    const data = await response.json();
    setSending(false);
    setStatus(data.message || 'Inquiry submitted.');
  }

  return (
    <form action={handleSubmit} className="card">
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required placeholder="you@company.com" />
        </label>
        <label>
          <span>Company</span>
          <input name="company" placeholder="Company name" />
        </label>
        <label>
          <span>Service Needed</span>
          <select name="service">
            <option>3D Printing</option>
            <option>CNC Machining</option>
            <option>Sustainable Manufacturing Consulting</option>
            <option>Advanced Recycling Integration</option>
            <option>R&D Support</option>
            <option>Prototype to Production</option>
          </select>
        </label>
      </div>
      <label style={{ display: 'block', marginTop: '1rem' }}>
        <span>Project Details</span>
        <textarea name="message" placeholder="Describe your project, application, industry, or manufacturing challenge." />
      </label>
      <button className="button button-light" disabled={sending} style={{ marginTop: '1rem', border: 'none', cursor: 'pointer' }}>
        {sending ? 'Submitting...' : 'Submit Inquiry'}
      </button>
      {status ? <p className="small-note" style={{ marginTop: '1rem' }}>{status}</p> : null}
    </form>
  );
}
