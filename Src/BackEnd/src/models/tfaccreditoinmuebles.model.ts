import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Tadminmueble} from './tadminmueble.model';

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

  @belongsTo(() => Tadminmueble, {name: 'fk_tfac_creditoInmuebles_idInmueble'})
  idInmueble: number;

  constructor(data?: Partial<Tfaccreditoinmuebles>) {
    super(data);
  }
}

export interface TfaccreditoinmueblesRelations {
  // describe navigational properties here
}

export type TfaccreditoinmueblesWithRelations = Tfaccreditoinmuebles & TfaccreditoinmueblesRelations;
