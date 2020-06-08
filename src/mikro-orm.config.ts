import { Options } from 'mikro-orm';
import { Book } from './entities/Book';
import BaseEntity from './entities/BaseEntity';


export default {
    entities: [Book, BaseEntity],
    discovery: { disableDynamicFileAccess: true },
    dbName: 'test',
    type: 'postgresql',
    host: 'localhost',
    user: 'test',
    password: 'test',
    port: 5432,
    debug: true,
    //logger: console.log.bind(console)
};

 