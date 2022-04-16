import {Entity, model, property, hasMany} from '@loopback/repository';
import {TusRol} from './tus-rol.model';
import {TusUsuarioRol} from './tus-usuario-rol.model';
import {TadmMulta} from './tadm-multa.model';
import {TadmMultaUsuario} from './tadm-multa-usuario.model';
import {TadmZonaSocial} from './tadm-zona-social.model';
import {TadmZonaSocialUsuario} from './tadm-zona-social-usuario.model';

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
  PrimerApellido: string;

  @property({
    type: 'string',
  })
  segundoApellido?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  celular?: string;

  @property({
    type: 'string',
    id: true,
    genered: false,
    required: true,
  })
  nroDocumento: number;

  @hasMany(() => TusRol, {through: {model: () => TusUsuarioRol, keyFrom: 'nroDocumento', keyTo: 'idRol'}})
  tusRols: TusRol[];

  @hasMany(() => TadmMulta, {through: {model: () => TadmMultaUsuario, keyFrom: 'nroDocumento', keyTo: 'idMulta'}})
  tusMultas: TadmMulta[];

  @hasMany(() => TadmZonaSocial, {through: {model: () => TadmZonaSocialUsuario, keyFrom: 'nroDocumento', keyTo: 'idZonaSocial'}})
  ZonaSociales: TadmZonaSocial[];

  constructor(data?: Partial<TusUsuarios>) {
    super(data);
  }
}

export interface TusUsuariosRelations {
  // describe navigational properties here
}

export type TusUsuariosWithRelations = TusUsuarios & TusUsuariosRelations;
