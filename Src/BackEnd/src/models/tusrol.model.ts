import {Entity, model, property, hasMany} from '@loopback/repository';
import {Tususuario} from './tususuario.model';
import {Tususuariorol} from './tususuariorol.model';

@model()
export class Tusrol extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idRol?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @hasMany(() => Tususuario, {through: {model: () => Tususuariorol, keyFrom: 'idRol', keyTo: 'nroDocumento'}})
  fk_usuarioRol_idRol: Tususuario[];

  constructor(data?: Partial<Tusrol>) {
    super(data);
  }
}

export interface TusrolRelations {
  // describe navigational properties here
}

export type TusrolWithRelations = Tusrol & TusrolRelations;
