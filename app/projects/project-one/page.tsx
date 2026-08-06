import type { Metadata } from 'next';
import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Project One — Maryam Zaman',
};

export default function ProjectOne() {
  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Link href="/" className="back-link" style={{ marginBottom: 0 }}>← Back to Home</Link>
        <ThemeToggle />
      </div>
      <h2>Project One</h2>
      <p className="section-sub">Case study coming soon</p>
      <p style={{ opacity: 0.75, maxWidth: '600px' }}>
        This page is a placeholder — swap it out with your real case study: the brief, your process, and the outcome.
      </p>
    </section>
  );
}
