import './globals.css';
import { Funnel_Display } from 'next/font/google';
import type { Metadata } from 'next';

const funnelDisplay = Funnel_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-funnel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Guilherme Davi',
  description: 'Meu Portfólio Profissional',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${funnelDisplay.variable} scroll-smooth`}>
      <body className="scroll-smooth">{children}</body>
    </html>
  );
}
