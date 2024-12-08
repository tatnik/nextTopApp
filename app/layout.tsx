import type { Metadata } from 'next';
import localFont from 'next/font/local';
import styles from './layout.module.css';
import './globals.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Footer } from './components';

const notoSansLight = localFont({
  src: './fonts/NotoSans-Light.ttf',
  variable: '--font-noto-sans-light',
  weight: '300',
});

const notoSansRegular = localFont({
  src: './fonts/NotoSans-Regular.ttf',
  variable: '--font-noto-sans-regular',
  weight: '400',
});

const notoSansMedium = localFont({
  src: './fonts/NotoSans-Medium.ttf',
  variable: '--font-noto-sans-medium',
  weight: '500',
});

const notoSansBold = localFont({
  src: './fonts/NotoSans-Bold.ttf',
  variable: '--font-noto-sans-bold',
  weight: '600',
});

const notoSansSemiBold = localFont({
  src: './fonts/NotoSans-SemiBold.ttf',
  variable: '--font-noto-sans-semibold',
  weight: '700',
});

export const metadata: Metadata = {
  title: 'top-app',
  description: 'топ, просто топ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${notoSansLight.variable} ${notoSansRegular.variable} ${notoSansMedium.variable} ${notoSansBold.variable} ${notoSansSemiBold.variable} `}
      >
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar} />
          <main className={styles.main}>{children}</main>
          <Footer className={styles.footer} />
        </div>
      </body>
    </html>
  );
}
