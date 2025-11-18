import { createPool } from "mysql2/promise";
import {
  APP_DB_HOST,
  APP_DB_PORT,
  APP_DB_USER,
  APP_DB_PASSWORD,
  APP_DB_DATABASE,
  DATAMART_DB_HOST,
  DATAMART_DB_PORT,
  DATAMART_DB_USER,
  DATAMART_DB_PASSWORD,
  DATAMART_DB_DATABASE
} from './config.js';

// Connection pool for the primary application database
export const pool = createPool({
  host: APP_DB_HOST,
  user: APP_DB_USER,
  password: APP_DB_PASSWORD,
  port: APP_DB_PORT,
  database: APP_DB_DATABASE
});

// Connection pool for the datamart database
export const pool2 = createPool({
  host: DATAMART_DB_HOST,
  user: DATAMART_DB_USER,
  password: DATAMART_DB_PASSWORD,
  port: DATAMART_DB_PORT,
  database: DATAMART_DB_DATABASE
});