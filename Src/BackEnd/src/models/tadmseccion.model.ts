import {Entity, model, property} from '@loopback/repository';

@model()
export class Tadmseccion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<Tadmseccion>) {
    super(data);
  }
}

export interface TadmseccionRelations {
  // describe navigational properties here
}

export type TadmseccionWithRelations = Tadmseccion & TadmseccionRelations;
