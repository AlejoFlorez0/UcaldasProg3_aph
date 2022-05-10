import {Entity, model, property} from '@loopback/repository';

@model()
export class Tfaccreditoinmuebles extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCreditoInmueble?: number;

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


  constructor(data?: Partial<Tfaccreditoinmuebles>) {
    super(data);
  }
}

export interface TfaccreditoinmueblesRelations {
  // describe navigational properties here
}

export type TfaccreditoinmueblesWithRelations = Tfaccreditoinmuebles & TfaccreditoinmueblesRelations;
