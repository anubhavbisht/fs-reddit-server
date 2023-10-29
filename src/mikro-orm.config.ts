import * as dotenv from 'dotenv';
import { Post } from "./entities/Post";
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
dotenv.config();

export default {
    migrations: {
        path: path.join(__dirname,'./migrations'), // path to the folder with migrations
        glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
    },
    entities: [Post],
    port: Number(process.env.PORT),
    host: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    type: 'postgresql',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    debug: process.env.NODE_ENV !== 'prod',
} as Parameters<typeof MikroORM.init>[0]