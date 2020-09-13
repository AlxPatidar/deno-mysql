import { Client } from "https://deno.land/x/mysql/mod.ts";
import config from './environment.ts'

export const client = await new Client().connect({
    hostname: config.DB_HOST || 'localhost',
    username: config.DB_USER_NAME || 'root',
    db: config.DB_NAME || '',
    password: config.DB_PASSWORD || '',
});
