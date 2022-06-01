import { authenticate } from '@loopback/authentication';
import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import { Credentials, PasswordChangeCredentials, Tususuario, Notification } from '../models';
import { TususuarioRepository } from '../repositories';
import { PasswordManagerService, sessionManagerService, NotificationsService } from '../services';

@authenticate('Administrator')
export class TususuarioController {
  constructor(
    @repository(TususuarioRepository)
    public tususuarioRepository: TususuarioRepository,
    @service(PasswordManagerService)
    public passwordManager: PasswordManagerService,
    @service(sessionManagerService)
    public sessionManager: sessionManagerService,
    @service(NotificationsService)
    public notificationsService: NotificationsService,
  ) { }

  @post('/tususuarios')
  @response(200, {
    description: 'Tususuario model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Tususuario) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tususuario, {
            title: 'NewTususuario',
          }),
        },
      },
    })
    tususuario: Tususuario,
  ): Promise<Tususuario> {

    let passwordRandom = this.passwordManager.generateRandomPassword();
    tususuario.password = this.passwordManager.generateEncryptText(passwordRandom);
    let notification = new Notification();
    notification.Addressee = tususuario.email;
    notification.Subject = "Registro Éxitoso";
    notification.Message = "Hola " + tususuario.primerNombre + "<br />" +
      "La clave de acceso que ha sido asignada es " + passwordRandom;

    this.notificationsService.sendEmail(notification);

    notification.Addressee = "57" + tususuario.celular;
    this.notificationsService.sendSMS(notification);

    return this.tususuarioRepository.create(tususuario);
  }

  @get('/tususuarios/count')
  @response(200, {
    description: 'Tususuario model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Tususuario) where?: Where<Tususuario>,
  ): Promise<Count> {
    return this.tususuarioRepository.count(where);
  }

  @get('/tususuarios')
  @response(200, {
    description: 'Array of Tususuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tususuario, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Tususuario) filter?: Filter<Tususuario>,
  ): Promise<Tususuario[]> {
    return this.tususuarioRepository.find(filter);
  }

  @patch('/tususuarios')
  @response(200, {
    description: 'Tususuario PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tususuario, { partial: true }),
        },
      },
    })
    tususuario: Tususuario,
    @param.where(Tususuario) where?: Where<Tususuario>,
  ): Promise<Count> {
    return this.tususuarioRepository.updateAll(tususuario, where);
  }

  @authenticate.skip()
  @get('/tususuarios/{id}')
  @response(200, {
    description: 'Tususuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tususuario, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tususuario, { exclude: 'where' }) filter?: FilterExcludingWhere<Tususuario>
  ): Promise<Tususuario> {
    return this.tususuarioRepository.findById(id, filter);
  }

  @patch('/tususuarios/{id}')
  @response(204, {
    description: 'Tususuario PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tususuario, { partial: true }),
        },
      },
    })
    tususuario: Tususuario,
  ): Promise<void> {
    await this.tususuarioRepository.updateById(id, tususuario);
  }

  @put('/tususuarios/{id}')
  @response(204, {
    description: 'Tususuario PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tususuario: Tususuario,
  ): Promise<void> {
    await this.tususuarioRepository.replaceById(id, tususuario);
  }

  @del('/tususuarios/{id}')
  @response(204, {
    description: 'Tususuario DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tususuarioRepository.deleteById(id);
  }

  /**
   * Obtendrá los datos de un cliente a base de su correo y contraseña
   * @param credentials
   * @returns
   */
  @authenticate.skip()
  @post('/tususuarios/recognize')
  @response(200, {
  })
  async recognize(
    @requestBody() credentials: Credentials): Promise<object | null> {

    let user = await this.sessionManager.credentialsValidator(credentials);
    let token = "";

    if (user) {

      user.password = "";
      token = await this.sessionManager.createToken(user);
    }

    return {
      tk: token,
      user: user
    };
  }

  /**
   * Recuperar una contraseña
   * @param credentials
   * @returns
   */
  @authenticate.skip()
  @post('/tususuarios/restorePassword')
  @response(200, {
    description: "Recuperación de contraseña"
  })
  async restorePassword(
    @requestBody() credentials: Credentials
  ): Promise<boolean> {

    let user = await this.tususuarioRepository.findOne({
      where: {
        email: credentials.email
      }
    });

    if (user) {
      user.password = this.passwordManager.generateEncryptText(this.passwordManager.generateRandomPassword());
      await this.tususuarioRepository.replaceById(user.nroDocumento, user);
      return true;
    }

    return true;
  }

  /**
   * Cambio de contraseña
   * @param credentials
   * @returns
   */
  @authenticate.skip()
  @post('/tususuarios/changePassword')
  @response(200, {
    description: "Cambio de contraseña"
  })
  async changePassword(
    @requestBody() credentials: PasswordChangeCredentials): Promise<boolean> {

    let user = await this.tususuarioRepository.findById(credentials.nroDocumento);

    if (user) {
      if (user.password == credentials.currentPassword) {
        user.password = this.passwordManager.generateEncryptText(credentials.newPassword);
        await this.tususuarioRepository.updateById(credentials.nroDocumento, user);

        let notification = new Notification();
        notification.Addressee = user.email;
        notification.Subject = "Cambio de contraseña";
        notification.Message = "Hola Usuario<br/>" +
          "Se ha modificado su contraseña en el sistema";

        this.notificationsService.sendEmail(notification);

        notification.Addressee = "57" + user.celular;
        this.notificationsService.sendSMS(notification);

        return true;
      }
      else {
        return false;
      }
    }

    return true;
  }

}
