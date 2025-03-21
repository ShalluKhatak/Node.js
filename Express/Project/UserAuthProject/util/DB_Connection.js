import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const db_cont = mysql2.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10,
});

export default db_cont.promise();
