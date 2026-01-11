// lib/postgres.js
import { Client } from 'pg';

const POSTGRES_URL =
  process.env.NETLIFY_DB_CONNECTION_STRING ||
  process.env.NETLIFY_DATABASE_URL ||
  process.env.NETLIFY_DATABASE_URL_UNPOOLED ||
  process.env.DATABASE_URL ||
  process.env.NEON_DATABASE_URL;

export function getPostgresClient() {
  if (!POSTGRES_URL) {
    throw new Error(
      'Missing Postgres connection string. Set NETLIFY_DATABASE_URL or NETLIFY_DB_CONNECTION_STRING'
    );
  }
  return new Client({ connectionString: POSTGRES_URL });
}
