import {Entity, model, property} from '@loopback/repository';

@model()
export class TadmInmueblesAdicionales extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: false,
  })
  area: number;


  constructor(data?: Partial<TadmInmueblesAdicionales>) {
    super(data);
  }
}

export interface TadmInmueblesAdicionalesRelations {
  // describe navigational properties here
}

export type TadmInmueblesAdicionalesWithRelations = TadmInmueblesAdicionales & TadmInmueblesAdicionalesRelations;
