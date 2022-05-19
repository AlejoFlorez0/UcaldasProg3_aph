import {Entity, model, property} from '@loopback/repository';

@model()
export class Tadmzonasocialusuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaUso: string;

  @property({
    type: 'number',
  })
  nroDocumento?: number;

  @property({
    type: 'number',
  })
  idZonaSocial?: number;

  constructor(data?: Partial<Tadmzonasocialusuario>) {
    super(data);
  }
}

export interface TadmzonasocialusuarioRelations {
  // describe navigational properties here
}

export type TadmzonasocialusuarioWithRelations = Tadmzonasocialusuario & TadmzonasocialusuarioRelations;
