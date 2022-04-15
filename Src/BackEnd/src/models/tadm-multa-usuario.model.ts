import {Entity, model, property} from '@loopback/repository';

@model()
export class TadmMultaUsuario extends Entity {
  @property({
    type: 'date',
    required: true,
  })
  fecha: string;


  constructor(data?: Partial<TadmMultaUsuario>) {
    super(data);
  }
}

export interface TadmMultaUsuarioRelations {
  // describe navigational properties here
}

export type TadmMultaUsuarioWithRelations = TadmMultaUsuario & TadmMultaUsuarioRelations;
