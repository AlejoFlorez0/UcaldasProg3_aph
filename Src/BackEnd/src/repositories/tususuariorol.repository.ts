import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tususuariorol, TususuariorolRelations} from '../models';

export class TususuariorolRepository extends DefaultCrudRepository<
  Tususuariorol,
  typeof Tususuariorol.prototype.id,
  TususuariorolRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tususuariorol, dataSource);
  }
}
