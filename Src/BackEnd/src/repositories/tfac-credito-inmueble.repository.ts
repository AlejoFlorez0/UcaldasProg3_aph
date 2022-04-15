import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TfacCreditoInmueble, TfacCreditoInmuebleRelations} from '../models';

export class TfacCreditoInmuebleRepository extends DefaultCrudRepository<
  TfacCreditoInmueble,
  typeof TfacCreditoInmueble.prototype.idCreditoInmueble,
  TfacCreditoInmuebleRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TfacCreditoInmueble, dataSource);
  }
}
