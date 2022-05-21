import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadmseccion, TadmseccionRelations, Tadminmueble} from '../models';
import {TadminmuebleRepository} from './tadminmueble.repository';

export class TadmseccionRepository extends DefaultCrudRepository<
  Tadmseccion,
  typeof Tadmseccion.prototype.id,
  TadmseccionRelations
> {

  public readonly fk_tadm_inmueble_idSeccion: HasManyRepositoryFactory<Tadminmueble, typeof Tadmseccion.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadminmuebleRepository') protected tadminmuebleRepositoryGetter: Getter<TadminmuebleRepository>,
  ) {
    super(Tadmseccion, dataSource);
    this.fk_tadm_inmueble_idSeccion = this.createHasManyRepositoryFactoryFor('fk_tadm_inmueble_idSeccion', tadminmuebleRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueble_idSeccion', this.fk_tadm_inmueble_idSeccion.inclusionResolver);
  }
}
