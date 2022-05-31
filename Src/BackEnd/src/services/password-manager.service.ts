import { injectable, /* inject, */ BindingScope } from '@loopback/core';
var generator = require('generate-password');
var cryptoJS = require('crypto-js');

@injectable({ scope: BindingScope.TRANSIENT })
export class PasswordManagerService {
  constructor(/* Add @inject to inject parameters */) { }

  /**
   * Generará una nueva contraseña aleatoria
   * @returns Contraseña Aleatoria
   */
  generateRandomPassword() {

    let randomPassword = generator.generate({
      length: 10,
      numbers: true
    });

    console.log(randomPassword);

    return randomPassword;
  }

  /**
   * Encriptará un texto con MD5 
   * @param text Texto a convertir
   * @returns 
   */
  generateEncryptText(text: string) {

    return cryptoJS.MD5(text).toString();

  }

}
