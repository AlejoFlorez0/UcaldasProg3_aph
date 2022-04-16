import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TadmInmueblesAdicionales, TadmInmueblesAdicionalesRelations} from '../models';

export class TadmInmueblesAdicionalesRepository extends DefaultCrudRepository<
  TadmInmueblesAdicionales,
  typeof TadmInmueblesAdicionales.prototype.id,
  TadmInmueblesAdicionalesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TadmInmueblesAdicionales, dataSource);
  }
}
