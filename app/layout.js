import './globals.css';
import MainHeader from './components/main-header';
import MainHeaderBackground from './components/main-header-background';
import styles from './page.module.css';
import ImageSlideshow from '../components/images/image-slideshow';


export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <MainHeaderBackground />

        <MainHeader />

        <main>
        <ImageSlideshow />

          {children}
        </main>
      </body>
    </html>
  );
}
