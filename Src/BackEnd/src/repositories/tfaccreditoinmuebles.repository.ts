import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tfaccreditoinmuebles, TfaccreditoinmueblesRelations, Tadminmueble} from '../models';
import {TadminmuebleRepository} from './tadminmueble.repository';

export class TfaccreditoinmueblesRepository extends DefaultCrudRepository<
  Tfaccreditoinmuebles,
  typeof Tfaccreditoinmuebles.prototype.idCreditoInmueble,
  TfaccreditoinmueblesRelations
> {

  public readonly fk_tfac_creditoInmuebles_idInmueble: BelongsToAccessor<Tadminmueble, typeof Tfaccreditoinmuebles.prototype.idCreditoInmueble>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadminmuebleRepository') protected tadminmuebleRepositoryGetter: Getter<TadminmuebleRepository>,
  ) {
    super(Tfaccreditoinmuebles, dataSource);
    this.fk_tfac_creditoInmuebles_idInmueble = this.createBelongsToAccessorFor('fk_tfac_creditoInmuebles_idInmueble', tadminmuebleRepositoryGetter,);
    this.registerInclusionResolver('fk_tfac_creditoInmuebles_idInmueble', this.fk_tfac_creditoInmuebles_idInmueble.inclusionResolver);
  }
}
