import {Entity, model, property} from '@loopback/repository';

@model()
export class Tadmzonasocial extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idZonaSocial?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  rutaFotografia?: string;

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
    type: 'date',
    required: true,
  })
  horarioAcceso: string;


  constructor(data?: Partial<Tadmzonasocial>) {
    super(data);
  }
}

export interface TadmzonasocialRelations {
  // describe navigational properties here
}

export type TadmzonasocialWithRelations = Tadmzonasocial & TadmzonasocialRelations;
