import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TadmInmueble} from './tadm-inmueble.model';

@model()
export class TadmInmueblesAdicionales extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: false,
  })
  area: number;

  @belongsTo(() => TadmInmueble, {name: 'InmuebleExtra'})
  idInmueble: number;

  constructor(data?: Partial<TadmInmueblesAdicionales>) {
    super(data);
  }
}

export interface TadmInmueblesAdicionalesRelations {
  // describe navigational properties here
}

export type TadmInmueblesAdicionalesWithRelations = TadmInmueblesAdicionales & TadmInmueblesAdicionalesRelations;
