import styles from './page.module.css';
import ImageSlideshow from '../components/images/image-slideshow';

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageSlideshow />

      <h1 style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>
        Lab 7 – strona o jedzeniu
      </h1>
    </main>
  );
}
