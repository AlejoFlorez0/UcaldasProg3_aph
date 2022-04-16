import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TadmSeccion, TadmSeccionRelations} from '../models';

export class TadmSeccionRepository extends DefaultCrudRepository<
  TadmSeccion,
  typeof TadmSeccion.prototype.id,
  TadmSeccionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TadmSeccion, dataSource);
  }
}
