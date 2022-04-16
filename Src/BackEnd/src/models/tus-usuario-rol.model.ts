import {Entity, model, property} from '@loopback/repository';

@model()
export class TusUsuarioRol extends Entity {

  @property({
    type: 'number',
  })
  tusUsersDocument?: number;

  constructor(data?: Partial<TusUsuarioRol>) {
    super(data);
  }
}

export interface TusUsuarioRolRelations {
  // describe navigational properties here
}

export type TusUsuarioRolWithRelations = TusUsuarioRol & TusUsuarioRolRelations;
