import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tfacdebitoinmuebles, TfacdebitoinmueblesRelations, Tadminmueble} from '../models';
import {TadminmuebleRepository} from './tadminmueble.repository';

export class TfacdebitoinmueblesRepository extends DefaultCrudRepository<
  Tfacdebitoinmuebles,
  typeof Tfacdebitoinmuebles.prototype.idDebitoInmueble,
  TfacdebitoinmueblesRelations
> {

  public readonly fk_tfac_debitoInmuebles_idInmueble: BelongsToAccessor<Tadminmueble, typeof Tfacdebitoinmuebles.prototype.idDebitoInmueble>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadminmuebleRepository') protected tadminmuebleRepositoryGetter: Getter<TadminmuebleRepository>,
  ) {
    super(Tfacdebitoinmuebles, dataSource);
    this.fk_tfac_debitoInmuebles_idInmueble = this.createBelongsToAccessorFor('fk_tfac_debitoInmuebles_idInmueble', tadminmuebleRepositoryGetter,);
    this.registerInclusionResolver('fk_tfac_debitoInmuebles_idInmueble', this.fk_tfac_debitoInmuebles_idInmueble.inclusionResolver);
  }
}
