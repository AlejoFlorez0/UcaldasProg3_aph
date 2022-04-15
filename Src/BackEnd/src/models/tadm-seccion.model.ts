import {Entity, model, property} from '@loopback/repository';

@model()
export class TadmSeccion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<TadmSeccion>) {
    super(data);
  }
}

export interface TadmSeccionRelations {
  // describe navigational properties here
}

export type TadmSeccionWithRelations = TadmSeccion & TadmSeccionRelations;
