import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Tadmtipoinmueble } from './tadmtipoinmueble.model';
import { Tususuario } from './tususuario.model';
import {Tadmseccion} from './tadmseccion.model';

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

  constructor(data?: Partial<Tadminmueble>) {
    super(data);
  }
}

export interface TadminmuebleRelations {
  // describe navigational properties here
}

