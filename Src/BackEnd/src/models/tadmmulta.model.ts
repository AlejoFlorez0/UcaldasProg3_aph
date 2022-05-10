import {Entity, model, property} from '@loopback/repository';

@model()
export class Tadmmulta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idMulta?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<Tadmmulta>) {
    super(data);
  }
}

export interface TadmmultaRelations {
  // describe navigational properties here
}

export type TadmmultaWithRelations = Tadmmulta & TadmmultaRelations;
