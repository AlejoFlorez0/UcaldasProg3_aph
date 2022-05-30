import { injectable, /* inject, */ BindingScope } from '@loopback/core';
import { repository } from '@loopback/repository';
import { Credentials } from '../models';
import { Tususuario } from '../models';
import { TususuarioRepository } from '../repositories';
import fetch from 'node-fetch';


@injectable({ scope: BindingScope.TRANSIENT })
export class sessionManagerService {
  constructor(
    @repository(TususuarioRepository)
    private tususuarioRepository: TususuarioRepository) { }

  /**
   * 
   * @param credentials 
   */
  async credentialsValidator(credentials: Credentials): Promise<Tususuario | null> {

    let user = await this.tususuarioRepository.findOne({
      where: {
        email: credentials.email,
        password: credentials.password
      }
    });

    return user;
  }

  async createToken(user: Tususuario): Promise<string> {

    let urlCreateToken = "http://localhost:5001/createToken?name=" + user.primerNombre + "&nroDocument=" + user.nroDocumento + "&rolId=" + user.rolId;
    let _token = "";

    const response = await fetch(urlCreateToken);
    _token = await response.text();

    return _token;
  }

}
