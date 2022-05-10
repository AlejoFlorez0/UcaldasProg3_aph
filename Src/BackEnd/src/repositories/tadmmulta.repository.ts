import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadmmulta, TadmmultaRelations} from '../models';

export class TadmmultaRepository extends DefaultCrudRepository<
  Tadmmulta,
  typeof Tadmmulta.prototype.idMulta,
  TadmmultaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tadmmulta, dataSource);
  }
}
