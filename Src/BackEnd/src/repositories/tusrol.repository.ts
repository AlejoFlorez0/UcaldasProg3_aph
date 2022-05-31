import { inject, Getter } from '@loopback/core';
import { DefaultCrudRepository, repository, HasManyThroughRepositoryFactory } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Tusrol, TusrolRelations, Tususuario } from '../models';
import { TususuarioRepository } from './tususuario.repository';

export class TusrolRepository extends DefaultCrudRepository<
  Tusrol,
  typeof Tusrol.prototype.idRol,
  TusrolRelations
> {

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tusrol, dataSource);
  }
}
