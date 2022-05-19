import { Entity, model, property, hasMany} from '@loopback/repository';
import {Tusrol} from './tusrol.model';
import {Tususuariorol} from './tususuariorol.model';
import {Tadmzonasocial} from './tadmzonasocial.model';
import {Tadmzonasocialusuario} from './tadmzonasocialusuario.model';
import {Tadmmulta} from './tadmmulta.model';
import {Tadmmultausuario} from './tadmmultausuario.model';

@model()
export class Tususuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  nroDocumento: number;

  @property({
    type: 'string',
    required: true,
  })
  primerNombre: string;

  @property({
    type: 'string',
  })
  segundoNombre?: string;

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

  @hasMany(() => Tusrol, {through: {model: () => Tususuariorol, keyFrom: 'nroDocumento', keyTo: 'idRol'}})
  usuariosXrol: Tusrol[];

  @hasMany(() => Tadmzonasocial, {through: {model: () => Tadmzonasocialusuario, keyFrom: 'nroDocumento', keyTo: 'idZonaSocial'}})
  usuarioXzonasocial: Tadmzonasocial[];

  @hasMany(() => Tadmmulta, {through: {model: () => Tadmmultausuario, keyFrom: 'nroDocumento', keyTo: 'idMulta'}})
  usuarioXidmulta: Tadmmulta[];

  constructor(data?: Partial<Tususuario>) {
    super(data);
  }
}

export interface TususuarioRelations {
  // describe navigational properties here
}

export type TusUsuarioWithRelations = Tususuario & TususuarioRelations;
