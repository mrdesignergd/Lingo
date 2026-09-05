import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunito = Nunito_Sans({
  variable: '--font-nunito',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LINGO — школа иностранных языков',
  description: 'Английский, корейский, турецкий, итальянский и китайский языки. Живое обучение, вдохновляющие преподаватели и яркие результаты.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={nunito.variable}>{children}</body></html>;
}
