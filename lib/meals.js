import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  // Symulacja opóźnienia dla testu loading.js [cite: 1970]
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  // Bezpieczne pobieranie pojedynczego wiersza [cite: 2090]
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}