import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadminmueblesadicionales, TadminmueblesadicionalesRelations} from '../models';

export class TadminmueblesadicionalesRepository extends DefaultCrudRepository<
  Tadminmueblesadicionales,
  typeof Tadminmueblesadicionales.prototype.id,
  TadminmueblesadicionalesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tadminmueblesadicionales, dataSource);
  }
}
