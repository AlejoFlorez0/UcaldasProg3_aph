import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadmzonasocial, TadmzonasocialRelations} from '../models';

export class TadmzonasocialRepository extends DefaultCrudRepository<
  Tadmzonasocial,
  typeof Tadmzonasocial.prototype.idZonaSocial,
  TadmzonasocialRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tadmzonasocial, dataSource);
  }
}
