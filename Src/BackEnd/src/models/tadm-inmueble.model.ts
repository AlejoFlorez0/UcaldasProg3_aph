import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<TadmInmueble>) {
    super(data);
  }
}

export interface TadmInmuebleRelations {
  // describe navigational properties here
}

export type TadmInmuebleWithRelations = TadmInmueble & TadmInmuebleRelations;
