import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TadmMulta, TadmMultaRelations} from '../models';

export class TadmMultaRepository extends DefaultCrudRepository<
  TadmMulta,
  typeof TadmMulta.prototype.idMulta,
  TadmMultaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TadmMulta, dataSource);
  }
}
