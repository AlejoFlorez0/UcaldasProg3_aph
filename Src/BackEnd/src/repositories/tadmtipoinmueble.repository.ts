import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadmtipoinmueble, TadmtipoinmuebleRelations, Tadminmueble} from '../models';
import {TadminmuebleRepository} from './tadminmueble.repository';

export class TadmtipoinmuebleRepository extends DefaultCrudRepository<
  Tadmtipoinmueble,
  typeof Tadmtipoinmueble.prototype.idTipoInmueble,
  TadmtipoinmuebleRelations
> {

  public readonly fk_tadm_inmueble_idTipoInmueble: HasManyRepositoryFactory<Tadminmueble, typeof Tadmtipoinmueble.prototype.idTipoInmueble>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadminmuebleRepository') protected tadminmuebleRepositoryGetter: Getter<TadminmuebleRepository>,
  ) {
    super(Tadmtipoinmueble, dataSource);
    this.fk_tadm_inmueble_idTipoInmueble = this.createHasManyRepositoryFactoryFor('fk_tadm_inmueble_idTipoInmueble', tadminmuebleRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueble_idTipoInmueble', this.fk_tadm_inmueble_idTipoInmueble.inclusionResolver);
  }
}
