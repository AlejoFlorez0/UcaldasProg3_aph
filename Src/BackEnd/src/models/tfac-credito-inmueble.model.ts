import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TadmInmueble} from './tadm-inmueble.model';

@model()
export class TfacCreditoInmueble extends Entity {
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
  saldo: number;

  @belongsTo(() => TadmInmueble, {name: 'CreditoInmueble'})
  idInmueble: number;

  constructor(data?: Partial<TfacCreditoInmueble>) {
    super(data);
  }
}

export interface TfacCreditoInmuebleRelations {
  // describe navigational properties here
}

export type TfacCreditoInmuebleWithRelations = TfacCreditoInmueble & TfacCreditoInmuebleRelations;
