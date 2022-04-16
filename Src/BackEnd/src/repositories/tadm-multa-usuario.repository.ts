import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TadmMultaUsuario, TadmMultaUsuarioRelations} from '../models';

export class TadmMultaUsuarioRepository extends DefaultCrudRepository<
  TadmMultaUsuario,
  typeof TadmMultaUsuario.prototype.id,
  TadmMultaUsuarioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TadmMultaUsuario, dataSource);
  }
}
