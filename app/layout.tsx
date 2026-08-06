import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maryam Zaman — UX/UI + Multimedia Designer',
  description: 'Designing bold, human, slightly weird digital experiences — interfaces, motion, and everything in between.',
};

const themeInitScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
