import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tfacdebitoinmuebles, TfacdebitoinmueblesRelations} from '../models';

export class TfacdebitoinmueblesRepository extends DefaultCrudRepository<
  Tfacdebitoinmuebles,
  typeof Tfacdebitoinmuebles.prototype.idDebitoInmueble,
  TfacdebitoinmueblesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tfacdebitoinmuebles, dataSource);
  }
}
