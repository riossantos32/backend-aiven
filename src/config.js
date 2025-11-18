import {config} from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || 'recurso-educativo-30-riossantos340-26b4.f.aivencloud.com';
export const DB_PORT = process.env.DB_PORT || 14212;
export const DB_USER = process.env.DB_USER || 'avnadmin';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'AVNS_e7cr0y18tNWImo3Y3_4';
export const DB_DATABASE = process.env.DB_DATABASE || 'ferreteria_bd';

export const PORT2 = process.env.PORT2 || 3000;
export const DB_HOST2 = process.env.DB_HOST2 || 'localhost';
export const DB_PORT2 = process.env.DB_PORT2 || 3306;
export const DB_USER2 = process.env.DB_USER2 || 'yosmar';
export const DB_PASSWORD2 = process.env.DB_PASSWORD2 || 'Ungrandia34!';
export const DB_DATABASE2 = process.env.DB_DATABASE2 || 'ferreteria_selva_datamart';



//export const PORT = process.env.PORT;
//export const DB_HOST = process.env.DB_HOST;
//export const DB_PORT = process.env.DB_PORT;
//export const DB_USER = process.env.DB_USER;
//export const DB_PASSWORD = process.env.DB_PASSWORD;
//export const DB_DATABASE = process.env.DB_DATABASE;