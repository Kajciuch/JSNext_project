import { getPostgresClient } from './postgres.js';

const DB_ENV_VARS = [
  'NETLIFY_DB_CONNECTION_STRING',
  'NETLIFY_DATABASE_URL',
  'NETLIFY_DATABASE_URL_UNPOOLED',
];

function hasDbEnv() {
  return DB_ENV_VARS.some((k) => Boolean(process.env[k]));
}

export async function getMeals() {
  if (!hasDbEnv()) {
    // During static prerender on Netlify there may be no DB creds — return empty list
    return [];
  }

  try {
    const client = getPostgresClient();
    await client.connect();
    const res = await client.query('SELECT * FROM meals');
    await client.end();
    return res.rows;
  } catch (err) {
    console.error('getMeals error:', err?.message || err);
    return [];
  }
}

export async function getMeal(slug) {
  if (!hasDbEnv()) {
    return null;
  }

  try {
    const client = getPostgresClient();
    await client.connect();
    const res = await client.query('SELECT * FROM meals WHERE slug = $1', [slug]);
    await client.end();
    return res.rows[0] || null;
  } catch (err) {
    console.error('getMeal error:', err?.message || err);
    return null;
  }
}
