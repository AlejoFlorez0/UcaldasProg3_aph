import { Model, model, property } from '@loopback/repository';

@model()
export class PasswordChangeCredentials extends Model {
  @property({
    type: 'number',
    required: true,
  })
  nroDocumento: number;

  @property({
    type: 'string',
    required: true,
  })
  currentPassword: string;

  @property({
    type: 'string',
    required: true,
  })
  newPassword: string;


  constructor(data?: Partial<PasswordChangeCredentials>) {
    super(data);
  }
}

export interface PasswordChangeCredentialsRelations {
  // describe navigational properties here
}

export type PasswordChangeCredentialsWithRelations = PasswordChangeCredentials & PasswordChangeCredentialsRelations;
