import type { Knex } from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: process.env.NEXT_PUBLIC_DATABASE_URL,
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
};

export default config;
