import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  TusUsuarios,
  TusUsuarioRol,
} from '../models';
import {TusUsuariosRepository} from '../repositories';

export class TusUsuariosTusUsuarioRolController {
  constructor(
    @repository(TusUsuariosRepository) protected tusUsuariosRepository: TusUsuariosRepository,
  ) { }

  @get('/tus-usuarios/{id}/tus-usuario-rols', {
    responses: {
      '200': {
        description: 'Array of TusUsuarios has many TusUsuarioRol',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TusUsuarioRol)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<TusUsuarioRol>,
  ): Promise<TusUsuarioRol[]> {
    return this.tusUsuariosRepository.nroDocumento(id).find(filter);
  }

  @post('/tus-usuarios/{id}/tus-usuario-rols', {
    responses: {
      '200': {
        description: 'TusUsuarios model instance',
        content: {'application/json': {schema: getModelSchemaRef(TusUsuarioRol)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TusUsuarios.prototype.nroDocumento,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusUsuarioRol, {
            title: 'NewTusUsuarioRolInTusUsuarios',
            exclude: ['id'],
            optional: ['tusUsersDocument']
          }),
        },
      },
    }) tusUsuarioRol: Omit<TusUsuarioRol, 'id'>,
  ): Promise<TusUsuarioRol> {
    return this.tusUsuariosRepository.nroDocumento(id).create(tusUsuarioRol);
  }

  @patch('/tus-usuarios/{id}/tus-usuario-rols', {
    responses: {
      '200': {
        description: 'TusUsuarios.TusUsuarioRol PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusUsuarioRol, {partial: true}),
        },
      },
    })
    tusUsuarioRol: Partial<TusUsuarioRol>,
    @param.query.object('where', getWhereSchemaFor(TusUsuarioRol)) where?: Where<TusUsuarioRol>,
  ): Promise<Count> {
    return this.tusUsuariosRepository.nroDocumento(id).patch(tusUsuarioRol, where);
  }

  @del('/tus-usuarios/{id}/tus-usuario-rols', {
    responses: {
      '200': {
        description: 'TusUsuarios.TusUsuarioRol DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(TusUsuarioRol)) where?: Where<TusUsuarioRol>,
  ): Promise<Count> {
    return this.tusUsuariosRepository.nroDocumento(id).delete(where);
  }
}
