import {Entity, model, property} from '@loopback/repository';

@model()
export class Tusrol extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idRol?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<Tusrol>) {
    super(data);
  }
}

export interface TusrolRelations {
  // describe navigational properties here
}

export type TusrolWithRelations = Tusrol & TusrolRelations;
