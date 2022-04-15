import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TadmZonaSocial, TadmZonaSocialRelations} from '../models';

export class TadmZonaSocialRepository extends DefaultCrudRepository<
  TadmZonaSocial,
  typeof TadmZonaSocial.prototype.idZonaSocial,
  TadmZonaSocialRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TadmZonaSocial, dataSource);
  }
}
