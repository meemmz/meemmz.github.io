import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maryam Zaman — UX/UI + Multimedia Designer',
  description: 'Designing bold, human, slightly weird digital experiences — interfaces, motion, and everything in between.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
