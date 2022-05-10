import {Entity, model, property} from '@loopback/repository';

@model()
export class Tgeparametros extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idParametro?: number;

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


  constructor(data?: Partial<Tgeparametros>) {
    super(data);
  }
}

export interface TgeparametrosRelations {
  // describe navigational properties here
}

export type TgeparametrosWithRelations = Tgeparametros & TgeparametrosRelations;
