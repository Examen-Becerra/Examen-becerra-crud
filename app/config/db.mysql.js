import { createPool } from "mysql2/promise";
import { config } from "dotenv";
config();

export const db = createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    port : process.env.MYSQL_PORT,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DB,
})