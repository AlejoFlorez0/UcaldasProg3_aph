import {Entity, model, property, hasMany} from '@loopback/repository';
import {Tadminmueble} from './tadminmueble.model';

@model()
export class Tadmseccion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @hasMany(() => Tadminmueble, {keyTo: 'idSeccion'})
  fk_tadm_inmueble_idSeccion: Tadminmueble[];

  constructor(data?: Partial<Tadmseccion>) {
    super(data);
  }
}

export interface TadmseccionRelations {
  // describe navigational properties here
}

export type TadmseccionWithRelations = Tadmseccion & TadmseccionRelations;
