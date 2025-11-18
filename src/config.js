import { config } from "dotenv";
config();

// General App Configuration
export const PORT = process.env.PORT || 3000;

// Primary Application Database (ferreteria_bd)
export const APP_DB_HOST = process.env.APP_DB_HOST;
export const APP_DB_PORT = process.env.APP_DB_PORT;
export const APP_DB_USER = process.env.APP_DB_USER;
export const APP_DB_PASSWORD = process.env.APP_DB_PASSWORD;
export const APP_DB_DATABASE = process.env.APP_DB_DATABASE;

// Secondary DataMart Database (ferreteria_selva_datamart)
export const DATAMART_DB_HOST = process.env.DATAMART_DB_HOST;
export const DATAMART_DB_PORT = process.env.DATAMART_DB_PORT;
export const DATAMART_DB_USER = process.env.DATAMART_DB_USER;
export const DATAMART_DB_PASSWORD = process.env.DATAMART_DB_PASSWORD;
export const DATAMART_DB_DATABASE = process.env.DATAMART_DB_DATABASE;
