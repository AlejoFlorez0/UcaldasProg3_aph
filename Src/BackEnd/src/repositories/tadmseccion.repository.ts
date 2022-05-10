import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadmseccion, TadmseccionRelations} from '../models';

export class TadmseccionRepository extends DefaultCrudRepository<
  Tadmseccion,
  typeof Tadmseccion.prototype.id,
  TadmseccionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tadmseccion, dataSource);
  }
}
