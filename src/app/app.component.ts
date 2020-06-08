import { Component, OnInit } from '@angular/core';
import { EntityManager, EntityRepository, MikroORM, RequestContext } from 'mikro-orm';
import BaseEntity from 'src/entities/BaseEntity';
import { Book } from 'src/entities/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba3';

  ngOnInit() {

    this.mikroTest();

  }

  async mikroTest() {
    const orm = (await MikroORM.init({
      entities: [Book, BaseEntity],
      discovery: { disableDynamicFileAccess: true },
      dbName: 'test',
      type: 'postgresql',
      host: 'localhost',
      port: 5432,
      user: 'test',
      password: 'test',
      debug: true,
      // logger: console.log.bind(console)
    }));

    orm.isConnected().then(() => console.log("connected")).catch(() => console.log("no connected"));


    const connection = orm.em.getConnection();
    const res = await connection.execute('select 1 as count');


    console.log(res)
  }
}
