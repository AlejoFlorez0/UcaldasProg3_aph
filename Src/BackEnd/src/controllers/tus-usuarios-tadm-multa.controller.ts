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
TadmMultaUsuario,
TadmMulta,
} from '../models';
import {TusUsuariosRepository} from '../repositories';

export class TusUsuariosTadmMultaController {
  constructor(
    @repository(TusUsuariosRepository) protected tusUsuariosRepository: TusUsuariosRepository,
  ) { }

  @get('/tus-usuarios/{id}/tadm-multas', {
    responses: {
      '200': {
        description: 'Array of TusUsuarios has many TadmMulta through TadmMultaUsuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TadmMulta)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<TadmMulta>,
  ): Promise<TadmMulta[]> {
    return this.tusUsuariosRepository.tusMultas(id).find(filter);
  }

  @post('/tus-usuarios/{id}/tadm-multas', {
    responses: {
      '200': {
        description: 'create a TadmMulta model instance',
        content: {'application/json': {schema: getModelSchemaRef(TadmMulta)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TusUsuarios.prototype.nroDocumento,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmMulta, {
            title: 'NewTadmMultaInTusUsuarios',
            exclude: ['idMulta'],
          }),
        },
      },
    }) tadmMulta: Omit<TadmMulta, 'idMulta'>,
  ): Promise<TadmMulta> {
    return this.tusUsuariosRepository.tusMultas(id).create(tadmMulta);
  }

  @patch('/tus-usuarios/{id}/tadm-multas', {
    responses: {
      '200': {
        description: 'TusUsuarios.TadmMulta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmMulta, {partial: true}),
        },
      },
    })
    tadmMulta: Partial<TadmMulta>,
    @param.query.object('where', getWhereSchemaFor(TadmMulta)) where?: Where<TadmMulta>,
  ): Promise<Count> {
    return this.tusUsuariosRepository.tusMultas(id).patch(tadmMulta, where);
  }

  @del('/tus-usuarios/{id}/tadm-multas', {
    responses: {
      '200': {
        description: 'TusUsuarios.TadmMulta DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(TadmMulta)) where?: Where<TadmMulta>,
  ): Promise<Count> {
    return this.tusUsuariosRepository.tusMultas(id).delete(where);
  }
}
