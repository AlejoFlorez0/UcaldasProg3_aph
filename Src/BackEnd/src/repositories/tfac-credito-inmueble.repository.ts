import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TfacCreditoInmueble, TfacCreditoInmuebleRelations, TadmInmueble} from '../models';
import {TadmInmuebleRepository} from './tadm-inmueble.repository';

export class TfacCreditoInmuebleRepository extends DefaultCrudRepository<
  TfacCreditoInmueble,
  typeof TfacCreditoInmueble.prototype.idCreditoInmueble,
  TfacCreditoInmuebleRelations
> {

  public readonly CreditoInmueble: BelongsToAccessor<TadmInmueble, typeof TfacCreditoInmueble.prototype.idCreditoInmueble>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadmInmuebleRepository') protected tadmInmuebleRepositoryGetter: Getter<TadmInmuebleRepository>,
  ) {
    super(TfacCreditoInmueble, dataSource);
    this.CreditoInmueble = this.createBelongsToAccessorFor('CreditoInmueble', tadmInmuebleRepositoryGetter,);
    this.registerInclusionResolver('CreditoInmueble', this.CreditoInmueble.inclusionResolver);
  }
}
