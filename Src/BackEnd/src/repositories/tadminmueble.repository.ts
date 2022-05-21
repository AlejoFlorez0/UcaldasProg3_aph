import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tadminmueble, TadminmuebleRelations, Tadmtipoinmueble, Tadmseccion, Tususuario, Tfaccreditoinmuebles, Tfacdebitoinmuebles, Tadminmueblesadicionales} from '../models';
import {TadmtipoinmuebleRepository} from './tadmtipoinmueble.repository';
import {TadmseccionRepository} from './tadmseccion.repository';
import {TususuarioRepository} from './tususuario.repository';
import {TfaccreditoinmueblesRepository} from './tfaccreditoinmuebles.repository';
import {TfacdebitoinmueblesRepository} from './tfacdebitoinmuebles.repository';
import {TadminmueblesadicionalesRepository} from './tadminmueblesadicionales.repository';

export class TadminmuebleRepository extends DefaultCrudRepository<
  Tadminmueble,
  typeof Tadminmueble.prototype.idInmueble,
  TadminmuebleRelations
> {

  public readonly fk_tadm_inmueble_idTipoInmueble: BelongsToAccessor<Tadmtipoinmueble, typeof Tadminmueble.prototype.idInmueble>;

  public readonly fk_tadm_inmueble_idSeccion: BelongsToAccessor<Tadmseccion, typeof Tadminmueble.prototype.idInmueble>;

  public readonly fk_tadm_inmueble_nroDocumentoPropietario: BelongsToAccessor<Tususuario, typeof Tadminmueble.prototype.idInmueble>;

  public readonly fk_tadm_inmueble_nroDocumentoHabitante: BelongsToAccessor<Tususuario, typeof Tadminmueble.prototype.idInmueble>;

  public readonly fk_tfac_creditoInmuebles_idInmueble: HasManyRepositoryFactory<Tfaccreditoinmuebles, typeof Tadminmueble.prototype.idInmueble>;

  public readonly fk_tfac_debitoInmuebles_idInmueble: HasManyRepositoryFactory<Tfacdebitoinmuebles, typeof Tadminmueble.prototype.idInmueble>;

  public readonly fk_tadm_inmueblesAdicionales_idInmueble: HasManyRepositoryFactory<Tadminmueblesadicionales, typeof Tadminmueble.prototype.idInmueble>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TadmtipoinmuebleRepository') protected tadmtipoinmuebleRepositoryGetter: Getter<TadmtipoinmuebleRepository>, @repository.getter('TadmseccionRepository') protected tadmseccionRepositoryGetter: Getter<TadmseccionRepository>, @repository.getter('TususuarioRepository') protected tususuarioRepositoryGetter: Getter<TususuarioRepository>, @repository.getter('TfaccreditoinmueblesRepository') protected tfaccreditoinmueblesRepositoryGetter: Getter<TfaccreditoinmueblesRepository>, @repository.getter('TfacdebitoinmueblesRepository') protected tfacdebitoinmueblesRepositoryGetter: Getter<TfacdebitoinmueblesRepository>, @repository.getter('TadminmueblesadicionalesRepository') protected tadminmueblesadicionalesRepositoryGetter: Getter<TadminmueblesadicionalesRepository>,
  ) {
    super(Tadminmueble, dataSource);
    this.fk_tadm_inmueblesAdicionales_idInmueble = this.createHasManyRepositoryFactoryFor('fk_tadm_inmueblesAdicionales_idInmueble', tadminmueblesadicionalesRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueblesAdicionales_idInmueble', this.fk_tadm_inmueblesAdicionales_idInmueble.inclusionResolver);
    this.fk_tfac_debitoInmuebles_idInmueble = this.createHasManyRepositoryFactoryFor('fk_tfac_debitoInmuebles_idInmueble', tfacdebitoinmueblesRepositoryGetter,);
    this.registerInclusionResolver('fk_tfac_debitoInmuebles_idInmueble', this.fk_tfac_debitoInmuebles_idInmueble.inclusionResolver);
    this.fk_tfac_creditoInmuebles_idInmueble = this.createHasManyRepositoryFactoryFor('fk_tfac_creditoInmuebles_idInmueble', tfaccreditoinmueblesRepositoryGetter,);
    this.registerInclusionResolver('fk_tfac_creditoInmuebles_idInmueble', this.fk_tfac_creditoInmuebles_idInmueble.inclusionResolver);
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
