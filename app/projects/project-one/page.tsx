import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Project One — Maryam Zaman',
};

export default function ProjectOne() {
  return (
    <section>
      <Link href="/" className="back-link">← Back to Home</Link>
      <h2>Project One</h2>
      <p className="section-sub">Case study coming soon</p>
      <p style={{ opacity: 0.75, maxWidth: '600px' }}>
        This page is a placeholder — swap it out with your real case study: the brief, your process, and the outcome.
      </p>
    </section>
  );
}
