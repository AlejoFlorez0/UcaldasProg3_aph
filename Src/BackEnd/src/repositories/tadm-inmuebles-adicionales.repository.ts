import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TadmInmueblesAdicionales, TadmInmueblesAdicionalesRelations, TadmInmueble} from '../models';
import {TadmInmuebleRepository} from './tadm-inmueble.repository';

export class TadmInmueblesAdicionalesRepository extends DefaultCrudRepository<
  TadmInmueblesAdicionales,
  typeof TadmInmueblesAdicionales.prototype.id,
  TadmInmueblesAdicionalesRelations
> {

  public readonly InmuebleExtra: BelongsToAccessor<TadmInmueble, typeof TadmInmueblesAdicionales.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadmInmuebleRepository') protected tadmInmuebleRepositoryGetter: Getter<TadmInmuebleRepository>,
  ) {
    super(TadmInmueblesAdicionales, dataSource);
    this.InmuebleExtra = this.createBelongsToAccessorFor('InmuebleExtra', tadmInmuebleRepositoryGetter,);
    this.registerInclusionResolver('InmuebleExtra', this.InmuebleExtra.inclusionResolver);
  }
}
