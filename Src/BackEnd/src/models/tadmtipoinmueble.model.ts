import {Entity, model, property, hasMany} from '@loopback/repository';
import {Tadminmueble} from './tadminmueble.model';

@model()
export class Tadmtipoinmueble extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idTipoInmueble?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @hasMany(() => Tadminmueble, {keyTo: 'idTipoInmueble'})
  fk_tadm_inmueble_idTipoInmueble: Tadminmueble[];

  constructor(data?: Partial<Tadmtipoinmueble>) {
    super(data);
  }
}

export interface TadmtipoinmuebleRelations {
  // describe navigational properties here
}

export type TadmtipoinmuebleWithRelations = Tadmtipoinmueble & TadmtipoinmuebleRelations;
