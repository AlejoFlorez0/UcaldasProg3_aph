import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tususuario, TususuarioRelations, Tusrol, Tususuariorol, Tadmzonasocial, Tadmzonasocialusuario, Tadmmulta, Tadmmultausuario, Tadminmueble} from '../models';
import {TususuariorolRepository} from './tususuariorol.repository';
import {TusrolRepository} from './tusrol.repository';
import {TadmzonasocialusuarioRepository} from './tadmzonasocialusuario.repository';
import {TadmzonasocialRepository} from './tadmzonasocial.repository';
import {TadmmultausuarioRepository} from './tadmmultausuario.repository';
import {TadmmultaRepository} from './tadmmulta.repository';
import {TadminmuebleRepository} from './tadminmueble.repository';

export class TususuarioRepository extends DefaultCrudRepository<
  Tususuario,
  typeof Tususuario.prototype.nroDocumento,
  TususuarioRelations
> {

  public readonly usuariosXrol: HasManyThroughRepositoryFactory<Tusrol, typeof Tusrol.prototype.idRol,
          Tususuariorol,
          typeof Tususuario.prototype.nroDocumento
        >;

  public readonly usuarioXzonasocial: HasManyThroughRepositoryFactory<Tadmzonasocial, typeof Tadmzonasocial.prototype.idZonaSocial,
          Tadmzonasocialusuario,
          typeof Tususuario.prototype.nroDocumento
        >;

  public readonly usuarioXidmulta: HasManyThroughRepositoryFactory<Tadmmulta, typeof Tadmmulta.prototype.idMulta,
          Tadmmultausuario,
          typeof Tususuario.prototype.nroDocumento
        >;

  public readonly fk_tadm_inmueble_nroDocumentoPropietario: HasManyRepositoryFactory<Tadminmueble, typeof Tususuario.prototype.nroDocumento>;

  public readonly fk_tadm_inmueble_nroDocumentoHabitante: HasManyRepositoryFactory<Tadminmueble, typeof Tususuario.prototype.nroDocumento>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TususuariorolRepository') protected tususuariorolRepositoryGetter: Getter<TususuariorolRepository>, @repository.getter('TusrolRepository') protected tusrolRepositoryGetter: Getter<TusrolRepository>, @repository.getter('TadmzonasocialusuarioRepository') protected tadmzonasocialusuarioRepositoryGetter: Getter<TadmzonasocialusuarioRepository>, @repository.getter('TadmzonasocialRepository') protected tadmzonasocialRepositoryGetter: Getter<TadmzonasocialRepository>, @repository.getter('TadmmultausuarioRepository') protected tadmmultausuarioRepositoryGetter: Getter<TadmmultausuarioRepository>, @repository.getter('TadmmultaRepository') protected tadmmultaRepositoryGetter: Getter<TadmmultaRepository>, @repository.getter('TadminmuebleRepository') protected tadminmuebleRepositoryGetter: Getter<TadminmuebleRepository>,
  ) {
    super(Tususuario, dataSource);
    this.fk_tadm_inmueble_nroDocumentoHabitante = this.createHasManyRepositoryFactoryFor('fk_tadm_inmueble_nroDocumentoHabitante', tadminmuebleRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueble_nroDocumentoHabitante', this.fk_tadm_inmueble_nroDocumentoHabitante.inclusionResolver);
    this.fk_tadm_inmueble_nroDocumentoPropietario = this.createHasManyRepositoryFactoryFor('fk_tadm_inmueble_nroDocumentoPropietario', tadminmuebleRepositoryGetter,);
    this.registerInclusionResolver('fk_tadm_inmueble_nroDocumentoPropietario', this.fk_tadm_inmueble_nroDocumentoPropietario.inclusionResolver);
    this.usuarioXidmulta = this.createHasManyThroughRepositoryFactoryFor('usuarioXidmulta', tadmmultaRepositoryGetter, tadmmultausuarioRepositoryGetter,);
    this.registerInclusionResolver('usuarioXidmulta', this.usuarioXidmulta.inclusionResolver);
    this.usuarioXzonasocial = this.createHasManyThroughRepositoryFactoryFor('usuarioXzonasocial', tadmzonasocialRepositoryGetter, tadmzonasocialusuarioRepositoryGetter,);
    this.registerInclusionResolver('usuarioXzonasocial', this.usuarioXzonasocial.inclusionResolver);
    this.usuariosXrol = this.createHasManyThroughRepositoryFactoryFor('usuariosXrol', tusrolRepositoryGetter, tususuariorolRepositoryGetter,);
    this.registerInclusionResolver('usuariosXrol', this.usuariosXrol.inclusionResolver);
  }
}
