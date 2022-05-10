import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tfaccreditoinmuebles, TfaccreditoinmueblesRelations} from '../models';

export class TfaccreditoinmueblesRepository extends DefaultCrudRepository<
  Tfaccreditoinmuebles,
  typeof Tfaccreditoinmuebles.prototype.idCreditoInmueble,
  TfaccreditoinmueblesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tfaccreditoinmuebles, dataSource);
  }
}
