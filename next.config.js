/** @type {import('next').NextConfig} */
const nextConfig = {
  // To pole informuje Next.js 15, aby nie tykał biblioteki lepiej-sqlite3 [cite: 505]
  serverExternalPackages: ['better-sqlite3'],
};

module.exports = nextConfig;