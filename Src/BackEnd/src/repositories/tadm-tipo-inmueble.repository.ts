import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TadmTipoInmueble, TadmTipoInmuebleRelations} from '../models';

export class TadmTipoInmuebleRepository extends DefaultCrudRepository<
  TadmTipoInmueble,
  typeof TadmTipoInmueble.prototype.idTipoInmueble,
  TadmTipoInmuebleRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TadmTipoInmueble, dataSource);
  }
}
