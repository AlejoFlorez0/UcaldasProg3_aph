import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TadmZonaSocialUsuario, TadmZonaSocialUsuarioRelations} from '../models';

export class TadmZonaSocialUsuarioRepository extends DefaultCrudRepository<
  TadmZonaSocialUsuario,
  typeof TadmZonaSocialUsuario.prototype.id,
  TadmZonaSocialUsuarioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TadmZonaSocialUsuario, dataSource);
  }
}
