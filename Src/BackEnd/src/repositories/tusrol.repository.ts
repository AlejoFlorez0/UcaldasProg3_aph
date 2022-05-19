import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tusrol, TusrolRelations, Tususuario, Tususuariorol} from '../models';
import {TususuariorolRepository} from './tususuariorol.repository';
import {TususuarioRepository} from './tususuario.repository';

export class TusrolRepository extends DefaultCrudRepository<
  Tusrol,
  typeof Tusrol.prototype.idRol,
  TusrolRelations
> {

  public readonly fk_usuarioRol_idRol: HasManyThroughRepositoryFactory<Tususuario, typeof Tususuario.prototype.nroDocumento,
          Tususuariorol,
          typeof Tusrol.prototype.idRol
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TususuariorolRepository') protected tususuariorolRepositoryGetter: Getter<TususuariorolRepository>, @repository.getter('TususuarioRepository') protected tususuarioRepositoryGetter: Getter<TususuarioRepository>,
  ) {
    super(Tusrol, dataSource);
    this.fk_usuarioRol_idRol = this.createHasManyThroughRepositoryFactoryFor('fk_usuarioRol_idRol', tususuarioRepositoryGetter, tususuariorolRepositoryGetter,);
    this.registerInclusionResolver('fk_usuarioRol_idRol', this.fk_usuarioRol_idRol.inclusionResolver);
  }
}
