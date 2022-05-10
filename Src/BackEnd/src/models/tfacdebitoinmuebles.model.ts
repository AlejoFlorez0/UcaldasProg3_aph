import {Entity, model, property} from '@loopback/repository';

@model()
export class Tfacdebitoinmuebles extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idDebitoInmueble?: number;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  motivo: string;


  constructor(data?: Partial<Tfacdebitoinmuebles>) {
    super(data);
  }
}

export interface TfacdebitoinmueblesRelations {
  // describe navigational properties here
}

export type TfacdebitoinmueblesWithRelations = Tfacdebitoinmuebles & TfacdebitoinmueblesRelations;
