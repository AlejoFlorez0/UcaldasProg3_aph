import {Entity, model, property} from '@loopback/repository';

@model()
export class TadmTipoInmueble extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idTipoInmueble: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<TadmTipoInmueble>) {
    super(data);
  }
}

export interface TadmTipoInmuebleRelations {
  // describe navigational properties here
}

export type TadmTipoInmuebleWithRelations = TadmTipoInmueble & TadmTipoInmuebleRelations;
