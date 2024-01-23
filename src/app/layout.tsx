import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });
import 'tailwindcss/tailwind.css';
import Sidebar from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'Kashide for English Study',
  description: '歌詞を通じて楽しく、感動しながら英語を学べるサービスです。',
  icons: "/kashide_app_logo.png"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <div className='flex w-screen'>
          <Sidebar />
          <div className='flex-1'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
