import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadminmueble, TadminmuebleRelations, Tadmtipoinmueble, Tadmseccion, Tususuario} from '../models';
import {TadmtipoinmuebleRepository} from './tadmtipoinmueble.repository';
import {TadmseccionRepository} from './tadmseccion.repository';
import {TususuarioRepository} from './tususuario.repository';

export class TadminmuebleRepository extends DefaultCrudRepository<
  Tadminmueble,
  typeof Tadminmueble.prototype.idInmueble,
  TadminmuebleRelations
> {

  public readonly fk_tadm_inmueble_idTipoInmueble: BelongsToAccessor<Tadmtipoinmueble, typeof Tadminmueble.prototype.idInmueble>;

  public readonly fk_tadm_inmueble_idSeccion: BelongsToAccessor<Tadmseccion, typeof Tadminmueble.prototype.idInmueble>;

  public readonly fk_tadm_inmueble_nroDocumentoPropietario: BelongsToAccessor<Tususuario, typeof Tadminmueble.prototype.idInmueble>;

  public readonly fk_tadm_inmueble_nroDocumentoHabitante: BelongsToAccessor<Tususuario, typeof Tadminmueble.prototype.idInmueble>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadmtipoinmuebleRepository') protected tadmtipoinmuebleRepositoryGetter: Getter<TadmtipoinmuebleRepository>, @repository.getter('TadmseccionRepository') protected tadmseccionRepositoryGetter: Getter<TadmseccionRepository>, @repository.getter('TususuarioRepository') protected tususuarioRepositoryGetter: Getter<TususuarioRepository>,
  ) {
    super(Tadminmueble, dataSource);
    this.fk_tadm_inmueble_nroDocumentoHabitante = this.createBelongsToAccessorFor('fk_tadm_inmueble_nroDocumentoHabitante', tususuarioRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueble_nroDocumentoHabitante', this.fk_tadm_inmueble_nroDocumentoHabitante.inclusionResolver);
    this.fk_tadm_inmueble_nroDocumentoPropietario = this.createBelongsToAccessorFor('fk_tadm_inmueble_nroDocumentoPropietario', tususuarioRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueble_nroDocumentoPropietario', this.fk_tadm_inmueble_nroDocumentoPropietario.inclusionResolver);
    this.fk_tadm_inmueble_idSeccion = this.createBelongsToAccessorFor('fk_tadm_inmueble_idSeccion', tadmseccionRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueble_idSeccion', this.fk_tadm_inmueble_idSeccion.inclusionResolver);
    this.fk_tadm_inmueble_idTipoInmueble = this.createBelongsToAccessorFor('fk_tadm_inmueble_idTipoInmueble', tadmtipoinmuebleRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueble_idTipoInmueble', this.fk_tadm_inmueble_idTipoInmueble.inclusionResolver);
  }
}
