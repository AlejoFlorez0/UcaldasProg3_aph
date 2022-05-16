import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Tadminmueble} from './tadminmueble.model';

@model()
export class Tadminmueblesadicionales extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  area?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoInmuebleAdicional: string;

  @belongsTo(() => Tadminmueble, {name: 'fk_tadm_inmueblesAdicionales_idInmueble'})
  idInmueble: number;

  constructor(data?: Partial<Tadminmueblesadicionales>) {
    super(data);
  }
}

export interface TadminmueblesadicionalesRelations {
  // describe navigational properties here
}

export type TadminmueblesadicionalesWithRelations = Tadminmueblesadicionales & TadminmueblesadicionalesRelations;
