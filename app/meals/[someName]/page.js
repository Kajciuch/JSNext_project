import styles from './page.module.css';
import MealGrid from '../../components/meals/meal-grid';

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>Dania</h1>
        <p>Lista dostępnych posiłków</p>
      </header>

      <main className={styles.main}>
        <MealGrid meals={[]} />
      </main>
    </>
  );
}
