import {Entity, model, property} from '@loopback/repository';

@model()
export class TusUsuarioRol extends Entity {

  constructor(data?: Partial<TusUsuarioRol>) {
    super(data);
  }
}

export interface TusUsuarioRolRelations {
  // describe navigational properties here
}

export type TusUsuarioRolWithRelations = TusUsuarioRol & TusUsuarioRolRelations;
