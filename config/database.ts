import { Client } from "https://deno.land/x/mysql/mod.ts";
import config from './environment.ts'

const db = config.DB_NAME || 'deno_mysql'
export const client = await new Client().connect({
    hostname: config.DB_HOST || 'localhost',
    username: config.DB_USER_NAME || 'root',
    db,
    password: config.DB_PASSWORD || '',
});

const run = async () => {
    // create database if not exists
    await client.execute(`CREATE DATABASE IF NOT EXISTS ${db}`);
    // select db
    await client.execute(`USE ${db}`);
    // create users table if not exists
    await client.execute(`
        CREATE TABLE IF NOT EXISTS  users (
          id int(11) NOT NULL AUTO_INCREMENT,
          name varchar(100) NOT NULL,
          username varchar(100) NOT NULL,
          email varchar(100) NOT NULL,
          phone varchar(100) NOT NULL,
          created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `);
  };
  
  run();
