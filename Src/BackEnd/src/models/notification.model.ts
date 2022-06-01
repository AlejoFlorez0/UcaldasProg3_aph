import {Model, model, property} from '@loopback/repository';

@model()
export class Notification extends Model {
  @property({
    type: 'string',
    required: true,
  })
  Addressee: string;

  @property({
    type: 'string',
    required: true,
  })
  Subject: string;

  @property({
    type: 'string',
    required: true,
  })
  Message: string;

  @property({
    type: 'string',
    required: true,
  })
  Attached: string;


  constructor(data?: Partial<Notification>) {
    super(data);
  }
}

export interface NotificationRelations {
  // describe navigational properties here
}

export type NotificationWithRelations = Notification & NotificationRelations;
