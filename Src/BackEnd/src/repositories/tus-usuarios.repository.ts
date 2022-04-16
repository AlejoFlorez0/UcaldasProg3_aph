import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TusUsuarios, TusUsuariosRelations, TusUsuarioRol, TusRol, TadmMulta, TadmMultaUsuario, TadmZonaSocial, TadmZonaSocialUsuario} from '../models';
import {TusUsuarioRolRepository} from './tus-usuario-rol.repository';
import {TusRolRepository} from './tus-rol.repository';
import {TadmMultaUsuarioRepository} from './tadm-multa-usuario.repository';
import {TadmMultaRepository} from './tadm-multa.repository';
import {TadmZonaSocialUsuarioRepository} from './tadm-zona-social-usuario.repository';
import {TadmZonaSocialRepository} from './tadm-zona-social.repository';

export class TusUsuariosRepository extends DefaultCrudRepository<
  TusUsuarios,
  typeof TusUsuarios.prototype.nroDocumento,
  TusUsuariosRelations
> {

  public readonly nroDocumento: HasManyRepositoryFactory<TusUsuarioRol, typeof TusUsuarios.prototype.nroDocumento>;

  public readonly tusRols: HasManyThroughRepositoryFactory<TusRol, typeof TusRol.prototype.idRol,
          TusUsuarioRol,
          typeof TusUsuarios.prototype.nroDocumento
        >;

  public readonly tusMultas: HasManyThroughRepositoryFactory<TadmMulta, typeof TadmMulta.prototype.idMulta,
          TadmMultaUsuario,
          typeof TusUsuarios.prototype.nroDocumento
        >;

  public readonly ZonaSociales: HasManyThroughRepositoryFactory<TadmZonaSocial, typeof TadmZonaSocial.prototype.idZonaSocial,
          TadmZonaSocialUsuario,
          typeof TusUsuarios.prototype.nroDocumento
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TusUsuarioRolRepository') protected tusUsuarioRolRepositoryGetter: Getter<TusUsuarioRolRepository>, @repository.getter('TusRolRepository') protected tusRolRepositoryGetter: Getter<TusRolRepository>, @repository.getter('TadmMultaUsuarioRepository') protected tadmMultaUsuarioRepositoryGetter: Getter<TadmMultaUsuarioRepository>, @repository.getter('TadmMultaRepository') protected tadmMultaRepositoryGetter: Getter<TadmMultaRepository>, @repository.getter('TadmZonaSocialUsuarioRepository') protected tadmZonaSocialUsuarioRepositoryGetter: Getter<TadmZonaSocialUsuarioRepository>, @repository.getter('TadmZonaSocialRepository') protected tadmZonaSocialRepositoryGetter: Getter<TadmZonaSocialRepository>,
  ) {
    super(TusUsuarios, dataSource);
    this.ZonaSociales = this.createHasManyThroughRepositoryFactoryFor('ZonaSociales', tadmZonaSocialRepositoryGetter, tadmZonaSocialUsuarioRepositoryGetter,);
    this.registerInclusionResolver('ZonaSociales', this.ZonaSociales.inclusionResolver);
    this.tusMultas = this.createHasManyThroughRepositoryFactoryFor('tusMultas', tadmMultaRepositoryGetter, tadmMultaUsuarioRepositoryGetter,);
    this.registerInclusionResolver('tusMultas', this.tusMultas.inclusionResolver);
    this.tusRols = this.createHasManyThroughRepositoryFactoryFor('tusRols', tusRolRepositoryGetter, tusUsuarioRolRepositoryGetter,);
    this.registerInclusionResolver('tusRols', this.tusRols.inclusionResolver);
    this.nroDocumento = this.createHasManyRepositoryFactoryFor('nroDocumento', tusUsuarioRolRepositoryGetter,);
    this.registerInclusionResolver('nroDocumento', this.nroDocumento.inclusionResolver);
  }
}
