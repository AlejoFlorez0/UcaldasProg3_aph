import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadmtipoinmueble, TadmtipoinmuebleRelations} from '../models';

export class TadmtipoinmuebleRepository extends DefaultCrudRepository<
  Tadmtipoinmueble,
  typeof Tadmtipoinmueble.prototype.idTipoInmueble,
  TadmtipoinmuebleRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tadmtipoinmueble, dataSource);
  }
}
