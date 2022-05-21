import { Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import { Tadmtipoinmueble } from './tadmtipoinmueble.model';
import { Tususuario } from './tususuario.model';
import {Tadmseccion} from './tadmseccion.model';
import {Tfaccreditoinmuebles} from './tfaccreditoinmuebles.model';
import {Tfacdebitoinmuebles} from './tfacdebitoinmuebles.model';
import {Tadminmueblesadicionales} from './tadminmueblesadicionales.model';

@model()
export class Tadminmueble extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idInmueble?: number;

  @property({
    type: 'string',
  })
  area?: string;

  @belongsTo(() => Tadmtipoinmueble, {name: 'fk_tadm_inmueble_idTipoInmueble'})
  idTipoInmueble: number;

  @belongsTo(() => Tadmseccion, {name: 'fk_tadm_inmueble_idSeccion'})
  idSeccion: number;

  @belongsTo(() => Tususuario, {name: 'fk_tadm_inmueble_nroDocumentoPropietario'})
  nroDocumentoPropietario: number;

  @belongsTo(() => Tususuario, {name: 'fk_tadm_inmueble_nroDocumentoHabitante'})
  nroDocumentoHabitante: number;

  @hasMany(() => Tfaccreditoinmuebles, {keyTo: 'idInmueble'})
  fk_tfac_creditoInmuebles_idInmueble: Tfaccreditoinmuebles[];

  @hasMany(() => Tfacdebitoinmuebles, {keyTo: 'idInmueble'})
  fk_tfac_debitoInmuebles_idInmueble: Tfacdebitoinmuebles[];

  @hasMany(() => Tadminmueblesadicionales, {keyTo: 'idInmueble'})
  fk_tadm_inmueblesAdicionales_idInmueble: Tadminmueblesadicionales[];

  constructor(data?: Partial<Tadminmueble>) {
    super(data);
  }
}

export interface TadminmuebleRelations {
  // describe navigational properties here
}

