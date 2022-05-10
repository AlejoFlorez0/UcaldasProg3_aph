import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadmzonasocialusuario, TadmzonasocialusuarioRelations} from '../models';

export class TadmzonasocialusuarioRepository extends DefaultCrudRepository<
  Tadmzonasocialusuario,
  typeof Tadmzonasocialusuario.prototype.id,
  TadmzonasocialusuarioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tadmzonasocialusuario, dataSource);
  }
}
