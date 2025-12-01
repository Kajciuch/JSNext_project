import './globals.css';
import MainHeader from './components/main-header';
import MainHeaderBackground from './components/main-header-background';

export const metadata = {
  title: 'Jedzenie',
  description: ' ... ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainHeader />

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
