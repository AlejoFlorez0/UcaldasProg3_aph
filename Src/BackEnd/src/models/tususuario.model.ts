import { Entity, model, property } from '@loopback/repository';

@model()
export class Tususuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  nroDocumento: number;

  @property({
    type: 'string',
    required: true,
  })
  primerNombre: string;

  @property({
    type: 'string',
  })
  segundoNombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  primerApellido: string;

  @property({
    type: 'string',
    required: true,
  })
  segundoApellido: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;


  constructor(data?: Partial<Tususuario>) {
    super(data);
  }
}

export interface TususuarioRelations {
  // describe navigational properties here
}

export type TusUsuarioWithRelations = Tususuario & TususuarioRelations;
