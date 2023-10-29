import { MikroORM } from "@mikro-orm/core"
// import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig)
    await orm.getMigrator().up()
    // const emFork = orm.em.fork()
    // const singlePost = emFork.create(Post,{title: 'My first post'} as Post)
    // await emFork.persistAndFlush(singlePost)
}

main().catch((e) => {
    console.error(e, 'Error in orm')
})