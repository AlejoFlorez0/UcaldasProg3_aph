import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TusUsuarios, TusUsuariosRelations} from '../models';

export class TusUsuariosRepository extends DefaultCrudRepository<
  TusUsuarios,
  typeof TusUsuarios.prototype.nroDocumento,
  TusUsuariosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TusUsuarios, dataSource);
  }
}
