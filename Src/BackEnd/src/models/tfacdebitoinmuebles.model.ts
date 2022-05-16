import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Tadminmueble} from './tadminmueble.model';

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

  @belongsTo(() => Tadminmueble, {name: 'fk_tfac_debitoInmuebles_idInmueble'})
  idInmueble: number;

  constructor(data?: Partial<Tfacdebitoinmuebles>) {
    super(data);
  }
}

export interface TfacdebitoinmueblesRelations {
  // describe navigational properties here
}

export type TfacdebitoinmueblesWithRelations = Tfacdebitoinmuebles & TfacdebitoinmueblesRelations;
