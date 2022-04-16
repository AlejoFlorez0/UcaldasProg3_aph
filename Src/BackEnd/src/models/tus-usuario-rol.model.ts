import {Entity, model, property} from '@loopback/repository';

@model()
export class TusUsuarioRol extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  idRol: number;

  @property({
    type: 'number',
    required: true,
  })
  nroDocumento: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<TusUsuarioRol>) {
    super(data);
  }
}

export interface TusUsuarioRolRelations {
  // describe navigational properties here
}

export type TusUsuarioRolWithRelations = TusUsuarioRol & TusUsuarioRolRelations;
