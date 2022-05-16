import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Tadmtipoinmueble } from './tadmtipoinmueble.model';
import { Tususuario } from './tususuario.model';

@model()
export class Tadminmueble extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idInmueble?: number;

  @property({
    type: 'string',
  })
  area?: string;

  @belongsTo(() => Tadmtipoinmueble, {name: 'fk_tadm_inmueble_idTipoInmueble'})
  idTipoInmueble: number;

  constructor(data?: Partial<Tadminmueble>) {
    super(data);
  }
}

export interface TadminmuebleRelations {
  // describe navigational properties here
}

