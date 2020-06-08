import { IdEntity, PrimaryKey, Property } from 'mikro-orm';

export default class BaseEntity implements IdEntity<BaseEntity> {

  @PrimaryKey({ type: 'number' })
  id: number;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

}