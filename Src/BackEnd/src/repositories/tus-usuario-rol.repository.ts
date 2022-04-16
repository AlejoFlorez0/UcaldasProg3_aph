import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TusUsuarioRol, TusUsuarioRolRelations} from '../models';

export class TusUsuarioRolRepository extends DefaultCrudRepository<
  TusUsuarioRol,
  typeof TusUsuarioRol.prototype.id,
  TusUsuarioRolRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TusUsuarioRol, dataSource);
  }
}
