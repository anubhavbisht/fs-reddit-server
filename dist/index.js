"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const dotenv = __importStar(require("dotenv"));
const Post_1 = require("./entities/Post");
dotenv.config();
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: [Post_1.Post],
        port: Number(process.env.PORT),
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME,
        type: 'postgresql',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        debug: process.env.NODE_ENV !== 'prod',
    });
    const emFork = orm.em.fork();
    const singlePost = emFork.create(Post_1.Post, { title: 'My first post' });
    await emFork.persistAndFlush(singlePost);
};
main().catch((e) => {
    console.error(e, 'Error in orm');
});
//# sourceMappingURL=index.js.map