import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TusUsuarios, TusUsuariosRelations, TusUsuarioRol} from '../models';
import {TusUsuarioRolRepository} from './tus-usuario-rol.repository';

export class TusUsuariosRepository extends DefaultCrudRepository<
  TusUsuarios,
  typeof TusUsuarios.prototype.nroDocumento,
  TusUsuariosRelations
> {

  public readonly nroDocumento: HasManyRepositoryFactory<TusUsuarioRol, typeof TusUsuarios.prototype.nroDocumento>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TusUsuarioRolRepository') protected tusUsuarioRolRepositoryGetter: Getter<TusUsuarioRolRepository>,
  ) {
    super(TusUsuarios, dataSource);
    this.nroDocumento = this.createHasManyRepositoryFactoryFor('nroDocumento', tusUsuarioRolRepositoryGetter,);
    this.registerInclusionResolver('nroDocumento', this.nroDocumento.inclusionResolver);
  }
}
