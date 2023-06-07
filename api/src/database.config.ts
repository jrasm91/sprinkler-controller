import { config } from 'dotenv';
import { join } from 'path';
import { DataSource } from 'typeorm';
import { BetterSqlite3ConnectionOptions } from 'typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions';

config();

const APP_DATA = process.env.APP_DATA || '/data';
const APP_DATABASE =
  process.env.APP_DATABASE || join(APP_DATA, 'sprinklers.db');

export const dbConfig: BetterSqlite3ConnectionOptions = {
  type: 'better-sqlite3',
  database: APP_DATABASE,
  entities: [__dirname + '/entities/*.entity.{js,ts}'],
  // migrations: [__dirname + '/migrations/**/*.{ts,js}'],
  // migrationsRun: true,
  synchronize: true,
};

export const dataSource = new DataSource(dbConfig);
