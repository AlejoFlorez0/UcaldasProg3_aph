import {Entity, model, property} from '@loopback/repository';

@model()
export class TusRol extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idRol: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<TusRol>) {
    super(data);
  }
}

export interface TusRolRelations {
  // describe navigational properties here
}

export type TusRolWithRelations = TusRol & TusRolRelations;
