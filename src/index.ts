import { MikroORM } from "@mikro-orm/core"
import * as dotenv from 'dotenv';
import { Post } from "./entities/Post";
dotenv.config();

const main = async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        port: Number(process.env.PORT),
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME,
        type: 'postgresql',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        debug: process.env.NODE_ENV !== 'prod',
    })
    const emFork = orm.em.fork()
    const singlePost = emFork.create(Post,{title: 'My first post'} as Post)
    await emFork.persistAndFlush(singlePost)
}

main().catch((e) => {
    console.error(e, 'Error in orm')
})