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
TusRol,
} from '../models';
import {TusUsuariosRepository} from '../repositories';

export class TusUsuariosTusRolController {
  constructor(
    @repository(TusUsuariosRepository) protected tusUsuariosRepository: TusUsuariosRepository,
  ) { }

  @get('/tus-usuarios/{id}/tus-rols', {
    responses: {
      '200': {
        description: 'Array of TusUsuarios has many TusRol through TusUsuarioRol',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TusRol)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<TusRol>,
  ): Promise<TusRol[]> {
    return this.tusUsuariosRepository.tusRols(id).find(filter);
  }

  @post('/tus-usuarios/{id}/tus-rols', {
    responses: {
      '200': {
        description: 'create a TusRol model instance',
        content: {'application/json': {schema: getModelSchemaRef(TusRol)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TusUsuarios.prototype.nroDocumento,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusRol, {
            title: 'NewTusRolInTusUsuarios',
            exclude: ['idRol'],
          }),
        },
      },
    }) tusRol: Omit<TusRol, 'idRol'>,
  ): Promise<TusRol> {
    return this.tusUsuariosRepository.tusRols(id).create(tusRol);
  }

  @patch('/tus-usuarios/{id}/tus-rols', {
    responses: {
      '200': {
        description: 'TusUsuarios.TusRol PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusRol, {partial: true}),
        },
      },
    })
    tusRol: Partial<TusRol>,
    @param.query.object('where', getWhereSchemaFor(TusRol)) where?: Where<TusRol>,
  ): Promise<Count> {
    return this.tusUsuariosRepository.tusRols(id).patch(tusRol, where);
  }

  @del('/tus-usuarios/{id}/tus-rols', {
    responses: {
      '200': {
        description: 'TusUsuarios.TusRol DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(TusRol)) where?: Where<TusRol>,
  ): Promise<Count> {
    return this.tusUsuariosRepository.tusRols(id).delete(where);
  }
}
