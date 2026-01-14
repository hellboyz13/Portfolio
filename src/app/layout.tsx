import type { Metadata } from 'next';
import { Instrument_Serif, Sora, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
});

const sora = Sora({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Jeremy Ng | IT Support Specialist',
  description: 'IT Support Specialist ensuring smooth operations across APAC. Turning complexity into clarity.',
  authors: [{ name: 'Jeremy Ng Kai Yong' }],
  openGraph: {
    title: 'Jeremy Ng | IT Support Specialist',
    description: 'Keeping IT systems running effortlessly.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${instrumentSerif.variable} ${sora.variable} ${jakarta.variable} font-body antialiased`}>
        {/* Gradient mesh background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="gradient-orb gradient-orb-1" />
          <div className="gradient-orb gradient-orb-2" />
          <div className="gradient-orb gradient-orb-3" />
          <div className="noise-overlay" />
        </div>
        {children}
      </body>
    </html>
  );
}
