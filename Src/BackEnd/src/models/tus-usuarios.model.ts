import {Entity, model, property, hasMany} from '@loopback/repository';
import {TusUsuarioRol} from './tus-usuario-rol.model';

@model()
export class TusUsuarios extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  primerApellido: string;

  @property({
    type: 'string',
    required: true,
  })
  segundoApellido: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @hasMany(() => TusUsuarioRol, {keyTo: 'tusUsersDocument'})
  nroDocumento: TusUsuarioRol[];

  constructor(data?: Partial<TusUsuarios>) {
    super(data);
  }
}

export interface TusUsuariosRelations {
  // describe navigational properties here
}

export type TusUsuariosWithRelations = TusUsuarios & TusUsuariosRelations;
