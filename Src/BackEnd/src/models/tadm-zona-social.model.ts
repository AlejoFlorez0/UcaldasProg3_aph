import {Entity, model, property} from '@loopback/repository';

@model()
export class TadmZonaSocial extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idZonaSocial: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  rutaFotografica?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'number',
    required: true,
  })
  costoAlquiler: number;

  @property({
    type: 'string',
    required: true,
  })
  horaAcceso: string;


  constructor(data?: Partial<TadmZonaSocial>) {
    super(data);
  }
}

export interface TadmZonaSocialRelations {
  // describe navigational properties here
}

export type TadmZonaSocialWithRelations = TadmZonaSocial & TadmZonaSocialRelations;
