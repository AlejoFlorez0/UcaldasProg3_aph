import {Entity, model, property} from '@loopback/repository';

@model()
export class TadmMultaUsuario extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  idMulta: number;

  @property({
    type: 'number',
    required: true,
  })
  nroDocumento: number;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<TadmMultaUsuario>) {
    super(data);
  }
}

export interface TadmMultaUsuarioRelations {
  // describe navigational properties here
}

export type TadmMultaUsuarioWithRelations = TadmMultaUsuario & TadmMultaUsuarioRelations;
