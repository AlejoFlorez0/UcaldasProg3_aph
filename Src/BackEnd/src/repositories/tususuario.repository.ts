import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Tususuario, TususuarioRelations } from '../models';

export class TususuarioRepository extends DefaultCrudRepository<
  Tususuario,
  typeof Tususuario.prototype.nroDocumento,
  TususuarioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tususuario, dataSource);
  }
}
