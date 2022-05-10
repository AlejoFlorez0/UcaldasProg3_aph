import {Entity, model, property} from '@loopback/repository';

@model()
export class Tususuariorol extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Tususuariorol>) {
    super(data);
  }
}

export interface TususuariorolRelations {
  // describe navigational properties here
}

export type TususuariorolWithRelations = Tususuariorol & TususuariorolRelations;
