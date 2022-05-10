import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<Tadminmueblesadicionales>) {
    super(data);
  }
}

export interface TadminmueblesadicionalesRelations {
  // describe navigational properties here
}

export type TadminmueblesadicionalesWithRelations = Tadminmueblesadicionales & TadminmueblesadicionalesRelations;
