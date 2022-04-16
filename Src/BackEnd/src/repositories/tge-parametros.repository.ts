import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TgeParametros, TgeParametrosRelations} from '../models';

export class TgeParametrosRepository extends DefaultCrudRepository<
  TgeParametros,
  typeof TgeParametros.prototype.id,
  TgeParametrosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TgeParametros, dataSource);
  }
}
