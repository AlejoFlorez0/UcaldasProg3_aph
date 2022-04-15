import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<TfacCreditoInmueble>) {
    super(data);
  }
}

export interface TfacCreditoInmuebleRelations {
  // describe navigational properties here
}

export type TfacCreditoInmuebleWithRelations = TfacCreditoInmueble & TfacCreditoInmuebleRelations;
