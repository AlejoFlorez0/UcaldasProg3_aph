import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TadmInmueble, TadmInmuebleRelations, TadmSeccion, TadmTipoInmueble, TusUsuarios} from '../models';
import {TadmSeccionRepository} from './tadm-seccion.repository';
import {TadmTipoInmuebleRepository} from './tadm-tipo-inmueble.repository';
import {TusUsuariosRepository} from './tus-usuarios.repository';

export class TadmInmuebleRepository extends DefaultCrudRepository<
  TadmInmueble,
  typeof TadmInmueble.prototype.idInmueble,
  TadmInmuebleRelations
> {

  public readonly idSeccions: BelongsToAccessor<TadmSeccion, typeof TadmInmueble.prototype.idInmueble>;

  public readonly id_TipoInmueble: BelongsToAccessor<TadmTipoInmueble, typeof TadmInmueble.prototype.idInmueble>;

  public readonly idPropiedario: BelongsToAccessor<TusUsuarios, typeof TadmInmueble.prototype.idInmueble>;

  public readonly idHabitante: BelongsToAccessor<TusUsuarios, typeof TadmInmueble.prototype.idInmueble>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadmSeccionRepository') protected tadmSeccionRepositoryGetter: Getter<TadmSeccionRepository>, @repository.getter('TadmTipoInmuebleRepository') protected tadmTipoInmuebleRepositoryGetter: Getter<TadmTipoInmuebleRepository>, @repository.getter('TusUsuariosRepository') protected tusUsuariosRepositoryGetter: Getter<TusUsuariosRepository>,
  ) {
    super(TadmInmueble, dataSource);
    this.idHabitante = this.createBelongsToAccessorFor('idHabitante', tusUsuariosRepositoryGetter,);
    this.registerInclusionResolver('idHabitante', this.idHabitante.inclusionResolver);
    this.idPropiedario = this.createBelongsToAccessorFor('idPropiedario', tusUsuariosRepositoryGetter,);
    this.registerInclusionResolver('idPropiedario', this.idPropiedario.inclusionResolver);
    this.id_TipoInmueble = this.createBelongsToAccessorFor('id_TipoInmueble', tadmTipoInmuebleRepositoryGetter,);
    this.registerInclusionResolver('id_TipoInmueble', this.id_TipoInmueble.inclusionResolver);
    this.idSeccions = this.createBelongsToAccessorFor('idSeccions', tadmSeccionRepositoryGetter,);
    this.registerInclusionResolver('idSeccions', this.idSeccions.inclusionResolver);
  }
}
