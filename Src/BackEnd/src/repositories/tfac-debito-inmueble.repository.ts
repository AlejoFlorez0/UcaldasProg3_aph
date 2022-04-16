import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TfacDebitoInmueble, TfacDebitoInmuebleRelations, TadmInmueble} from '../models';
import {TadmInmuebleRepository} from './tadm-inmueble.repository';

export class TfacDebitoInmuebleRepository extends DefaultCrudRepository<
  TfacDebitoInmueble,
  typeof TfacDebitoInmueble.prototype.idDebitoInmueble,
  TfacDebitoInmuebleRelations
> {

  public readonly InmuebleDebito: BelongsToAccessor<TadmInmueble, typeof TfacDebitoInmueble.prototype.idDebitoInmueble>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadmInmuebleRepository') protected tadmInmuebleRepositoryGetter: Getter<TadmInmuebleRepository>,
  ) {
    super(TfacDebitoInmueble, dataSource);
    this.InmuebleDebito = this.createBelongsToAccessorFor('InmuebleDebito', tadmInmuebleRepositoryGetter,);
    this.registerInclusionResolver('InmuebleDebito', this.InmuebleDebito.inclusionResolver);
  }
}
