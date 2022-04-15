import {Entity, model, property} from '@loopback/repository';

@model()
export class TadmZonaSocialUsuario extends Entity {
  @property({
    type: 'date',
  })
  fechaUso?: string;


  constructor(data?: Partial<TadmZonaSocialUsuario>) {
    super(data);
  }
}

export interface TadmZonaSocialUsuarioRelations {
  // describe navigational properties here
}

export type TadmZonaSocialUsuarioWithRelations = TadmZonaSocialUsuario & TadmZonaSocialUsuarioRelations;
