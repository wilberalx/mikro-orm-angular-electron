
import { Cascade, Collection, Entity, ManyToMany, ManyToOne, Property } from 'mikro-orm';
import BaseEntity from './BaseEntity';
// import { Author, BookTag, Publisher } from './index';

@Entity({ tableName: 'common.book' })
export class Book extends BaseEntity {

    @Property()
    title: string;

    @Property()
    testName: string;



    constructor(title: string) {
        super();
        this.title = title;
    }

}