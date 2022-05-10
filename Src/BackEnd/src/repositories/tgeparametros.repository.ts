import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tgeparametros, TgeparametrosRelations} from '../models';

export class TgeparametrosRepository extends DefaultCrudRepository<
  Tgeparametros,
  typeof Tgeparametros.prototype.idParametro,
  TgeparametrosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tgeparametros, dataSource);
  }
}
