import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadminmueble, TadminmuebleRelations, Tadmtipoinmueble} from '../models';
import {TadmtipoinmuebleRepository} from './tadmtipoinmueble.repository';

export class TadminmuebleRepository extends DefaultCrudRepository<
  Tadminmueble,
  typeof Tadminmueble.prototype.idInmueble,
  TadminmuebleRelations
> {

  public readonly fk_tadm_inmueble_idTipoInmueble: BelongsToAccessor<Tadmtipoinmueble, typeof Tadminmueble.prototype.idInmueble>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadmtipoinmuebleRepository') protected tadmtipoinmuebleRepositoryGetter: Getter<TadmtipoinmuebleRepository>,
  ) {
    super(Tadminmueble, dataSource);
    this.fk_tadm_inmueble_idTipoInmueble = this.createBelongsToAccessorFor('fk_tadm_inmueble_idTipoInmueble', tadmtipoinmuebleRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueble_idTipoInmueble', this.fk_tadm_inmueble_idTipoInmueble.inclusionResolver);
  }
}
