import { injectable, /* inject, */ BindingScope } from '@loopback/core';
import { Notification } from '../models';
import fetch from 'node-fetch';

@injectable({ scope: BindingScope.TRANSIENT })
export class NotificationsService {
  constructor(/* Add @inject to inject parameters */) { }

  /**
   * Envio de contraseña
   * @param notification 
   * @returns 
   */
  async sendEmail(notification: Notification): Promise<Boolean> {

    let urlCreateToken = "http://localhost:5001/sendEmail?Addressee=" + notification.Addressee + "&Subject=" + notification.Subject + "&Message=" + notification.Message;
    const response = await fetch(urlCreateToken);

    if (await response.text() == "OK") {
      return true;
    }
    else {

      return false;
    }
  }

  /**
   * 
   * @param notification 
   * @returns 
   */
  async sendSMS(notification: Notification): Promise<Boolean> {

    let urlCreateToken = "http://localhost:5001/sendSms?Addressee=" + notification.Addressee + "&Message=" + notification.Message;
    const response = await fetch(urlCreateToken);

    if (await response.text() == "OK") {
      return true;
    }
    else {

      return false;
    }
  }
}
