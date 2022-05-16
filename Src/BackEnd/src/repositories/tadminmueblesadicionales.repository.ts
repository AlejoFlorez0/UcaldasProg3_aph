import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadminmueblesadicionales, TadminmueblesadicionalesRelations, Tadminmueble} from '../models';
import {TadminmuebleRepository} from './tadminmueble.repository';

export class TadminmueblesadicionalesRepository extends DefaultCrudRepository<
  Tadminmueblesadicionales,
  typeof Tadminmueblesadicionales.prototype.id,
  TadminmueblesadicionalesRelations
> {

  public readonly fk_tadm_inmueblesAdicionales_idInmueble: BelongsToAccessor<Tadminmueble, typeof Tadminmueblesadicionales.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadminmuebleRepository') protected tadminmuebleRepositoryGetter: Getter<TadminmuebleRepository>,
  ) {
    super(Tadminmueblesadicionales, dataSource);
    this.fk_tadm_inmueblesAdicionales_idInmueble = this.createBelongsToAccessorFor('fk_tadm_inmueblesAdicionales_idInmueble', tadminmuebleRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueblesAdicionales_idInmueble', this.fk_tadm_inmueblesAdicionales_idInmueble.inclusionResolver);
  }
}
