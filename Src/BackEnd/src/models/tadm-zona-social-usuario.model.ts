import {Entity, model, property} from '@loopback/repository';

@model()
export class TadmZonaSocialUsuario extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  idZonasocial: number;

  @property({
    type: 'number',
    required: true,
  })
  nroDocuemnto: number;

  @property({
    type: 'date',
    required: true,
  })
  FechaUso: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<TadmZonaSocialUsuario>) {
    super(data);
  }
}

export interface TadmZonaSocialUsuarioRelations {
  // describe navigational properties here
}

export type TadmZonaSocialUsuarioWithRelations = TadmZonaSocialUsuario & TadmZonaSocialUsuarioRelations;
