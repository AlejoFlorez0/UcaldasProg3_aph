import {Entity, model, property} from '@loopback/repository';

@model()
export class TgeParametros extends Entity {
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
  etiqueta: string;

  @property({
    type: 'string',
    required: true,
  })
  valor: string;


  constructor(data?: Partial<TgeParametros>) {
    super(data);
  }
}

export interface TgeParametrosRelations {
  // describe navigational properties here
}

export type TgeParametrosWithRelations = TgeParametros & TgeParametrosRelations;
