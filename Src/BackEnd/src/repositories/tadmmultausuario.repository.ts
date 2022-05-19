import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadmmultausuario, TadmmultausuarioRelations} from '../models';

export class TadmmultausuarioRepository extends DefaultCrudRepository<
  Tadmmultausuario,
  typeof Tadmmultausuario.prototype.id,
  TadmmultausuarioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tadmmultausuario, dataSource);
  }
}
