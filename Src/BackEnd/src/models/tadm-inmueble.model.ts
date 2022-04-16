import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TadmSeccion} from './tadm-seccion.model';
import {TadmTipoInmueble} from './tadm-tipo-inmueble.model';
import {TusUsuarios} from './tus-usuarios.model';

@model()
export class TadmInmueble extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idInmueble?: number;

  @property({
    type: 'number',
    required: false,
  })
  area: number;

  @property({
    type: 'number',
  })
  idseccion?: number;

  @belongsTo(() => TadmSeccion, {name: 'idSeccions'})
  idSeccion: number;

  @belongsTo(() => TadmTipoInmueble, {name: 'id_TipoInmueble'})
  idTipoInmueble: number;

  @belongsTo(() => TusUsuarios, {name: 'idPropiedario'})
  nroDocumentoPropietario: number;

  @belongsTo(() => TusUsuarios, {name: 'idHabitante'})
  nroDocumentoHabitante: number;

  constructor(data?: Partial<TadmInmueble>) {
    super(data);
  }
}

export interface TadmInmuebleRelations {
  // describe navigational properties here
}

export type TadmInmuebleWithRelations = TadmInmueble & TadmInmuebleRelations;
