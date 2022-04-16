import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TadmInmueble} from './tadm-inmueble.model';

@model()
export class TfacDebitoInmueble extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idDebitoInmueble?: number;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  motivo: string;

  @belongsTo(() => TadmInmueble, {name: 'InmuebleDebito'})
  idInmueble: number;

  constructor(data?: Partial<TfacDebitoInmueble>) {
    super(data);
  }
}

export interface TfacDebitoInmuebleRelations {
  // describe navigational properties here
}

export type TfacDebitoInmuebleWithRelations = TfacDebitoInmueble & TfacDebitoInmuebleRelations;
