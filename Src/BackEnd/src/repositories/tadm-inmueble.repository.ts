import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TadmInmueble, TadmInmuebleRelations} from '../models';

export class TadmInmuebleRepository extends DefaultCrudRepository<
  TadmInmueble,
  typeof TadmInmueble.prototype.idInmueble,
  TadmInmuebleRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TadmInmueble, dataSource);
  }
}
