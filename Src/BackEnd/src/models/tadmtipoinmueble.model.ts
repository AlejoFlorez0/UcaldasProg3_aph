import {Entity, model, property} from '@loopback/repository';

@model()
export class Tadmtipoinmueble extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idTipoInmueble?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<Tadmtipoinmueble>) {
    super(data);
  }
}

export interface TadmtipoinmuebleRelations {
  // describe navigational properties here
}

export type TadmtipoinmuebleWithRelations = Tadmtipoinmueble & TadmtipoinmuebleRelations;
