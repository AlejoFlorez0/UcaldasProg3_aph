import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TusRol, TusRolRelations} from '../models';

export class TusRolRepository extends DefaultCrudRepository<
  TusRol,
  typeof TusRol.prototype.idRol,
  TusRolRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TusRol, dataSource);
  }
}
