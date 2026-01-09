import type { Metadata } from 'next';
import { Newsreader, Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Jeremy Ng',
  description: 'IT Support Specialist building efficient systems across APAC.',
  authors: [{ name: 'Jeremy Ng Kai Yong' }],
  openGraph: {
    title: 'Jeremy Ng',
    description: 'Building the world with intention.',
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
      <body className={`${newsreader.variable} ${jakarta.variable} ${inter.variable} font-sans antialiased bg-[#fafafa] text-[#1a1a1a]`}>
        {children}
      </body>
    </html>
  );
}
