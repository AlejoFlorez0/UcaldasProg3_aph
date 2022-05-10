import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tusrol, TusrolRelations} from '../models';

export class TusrolRepository extends DefaultCrudRepository<
  Tusrol,
  typeof Tusrol.prototype.idRol,
  TusrolRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tusrol, dataSource);
  }
}
