import {Entity, model, property} from '@loopback/repository';

@model()
export class Tadmmultausuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
  })
  nroDocumento?: number;

  @property({
    type: 'number',
  })
  idMulta?: number;

  constructor(data?: Partial<Tadmmultausuario>) {
    super(data);
  }
}

export interface TadmmultausuarioRelations {
  // describe navigational properties here
}

export type TadmmultausuarioWithRelations = Tadmmultausuario & TadmmultausuarioRelations;
