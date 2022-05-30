import { Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import { Tadmzonasocial } from './tadmzonasocial.model';
import { Tadmzonasocialusuario } from './tadmzonasocialusuario.model';
import { Tadmmulta } from './tadmmulta.model';
import { Tadmmultausuario } from './tadmmultausuario.model';
import { Tadminmueble } from './tadminmueble.model';
import {Tusrol} from './tusrol.model';

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
    default: " ",
  })
  segundoNombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  primerApellido: string;

  @property({
    type: 'string',
    default: " "
  })
  segundoApellido?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @hasMany(() => Tadmzonasocial, {through: {model: () => Tadmzonasocialusuario, keyFrom: 'nroDocumento', keyTo: 'idZonaSocial'}})
  usuarioXzonasocial: Tadmzonasocial[];

  @hasMany(() => Tadmmulta, {through: {model: () => Tadmmultausuario, keyFrom: 'nroDocumento', keyTo: 'idMulta'}})
  usuarioXidmulta: Tadmmulta[];

  @hasMany(() => Tadminmueble, {keyTo: 'nroDocumentoPropietario'})
  fk_tadm_inmueble_nroDocumentoPropietario: Tadminmueble[];

  @hasMany(() => Tadminmueble, {keyTo: 'nroDocumentoHabitante'})
  fk_tadm_inmueble_nroDocumentoHabitante: Tadminmueble[];

  @belongsTo(() => Tusrol, {name: 'fk_tusrol_rolid'})
  rolId: number;

  constructor(data?: Partial<Tususuario>) {
    super(data);
  }
}

export interface TususuarioRelations {
  // describe navigational properties here
}

export type TususuarioWithRelations = Tususuario & TususuarioRelations;
