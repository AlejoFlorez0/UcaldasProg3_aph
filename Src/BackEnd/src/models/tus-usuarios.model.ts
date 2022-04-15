import {Entity, model, property} from '@loopback/repository';

@model()
export class TusUsuarios extends Entity {
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
  nombre: string;

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


  constructor(data?: Partial<TusUsuarios>) {
    super(data);
  }
}

export interface TusUsuariosRelations {
  // describe navigational properties here
}

export type TusUsuariosWithRelations = TusUsuarios & TusUsuariosRelations;
