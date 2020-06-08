import { Options } from 'mikro-orm';
import { Book } from './entities/Book';
import BaseEntity from './entities/BaseEntity';


export default {
    entities: [Book, BaseEntity],
    discovery: { disableDynamicFileAccess: true },
    dbName: 'test',
    type: 'postgresql',
    host: 'localhost',
    port: 5432,
    user: 'test',
    password: 'test',
    debug: true,
    //logger: console.log.bind(console)
};

 