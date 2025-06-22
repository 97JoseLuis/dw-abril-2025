import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

export default {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
};