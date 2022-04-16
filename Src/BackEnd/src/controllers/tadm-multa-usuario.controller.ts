import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TadmMultaUsuario} from '../models';
import {TadmMultaUsuarioRepository} from '../repositories';

export class TadmMultaUsuarioController {
  constructor(
    @repository(TadmMultaUsuarioRepository)
    public tadmMultaUsuarioRepository : TadmMultaUsuarioRepository,
  ) {}

  @post('/tadm-multa-usuarios')
  @response(200, {
    description: 'TadmMultaUsuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(TadmMultaUsuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmMultaUsuario, {
            title: 'NewTadmMultaUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    tadmMultaUsuario: Omit<TadmMultaUsuario, 'id'>,
  ): Promise<TadmMultaUsuario> {
    return this.tadmMultaUsuarioRepository.create(tadmMultaUsuario);
  }

  @get('/tadm-multa-usuarios/count')
  @response(200, {
    description: 'TadmMultaUsuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TadmMultaUsuario) where?: Where<TadmMultaUsuario>,
  ): Promise<Count> {
    return this.tadmMultaUsuarioRepository.count(where);
  }

  @get('/tadm-multa-usuarios')
  @response(200, {
    description: 'Array of TadmMultaUsuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TadmMultaUsuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TadmMultaUsuario) filter?: Filter<TadmMultaUsuario>,
  ): Promise<TadmMultaUsuario[]> {
    return this.tadmMultaUsuarioRepository.find(filter);
  }

  @patch('/tadm-multa-usuarios')
  @response(200, {
    description: 'TadmMultaUsuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmMultaUsuario, {partial: true}),
        },
      },
    })
    tadmMultaUsuario: TadmMultaUsuario,
    @param.where(TadmMultaUsuario) where?: Where<TadmMultaUsuario>,
  ): Promise<Count> {
    return this.tadmMultaUsuarioRepository.updateAll(tadmMultaUsuario, where);
  }

  @get('/tadm-multa-usuarios/{id}')
  @response(200, {
    description: 'TadmMultaUsuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TadmMultaUsuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TadmMultaUsuario, {exclude: 'where'}) filter?: FilterExcludingWhere<TadmMultaUsuario>
  ): Promise<TadmMultaUsuario> {
    return this.tadmMultaUsuarioRepository.findById(id, filter);
  }

  @patch('/tadm-multa-usuarios/{id}')
  @response(204, {
    description: 'TadmMultaUsuario PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmMultaUsuario, {partial: true}),
        },
      },
    })
    tadmMultaUsuario: TadmMultaUsuario,
  ): Promise<void> {
    await this.tadmMultaUsuarioRepository.updateById(id, tadmMultaUsuario);
  }

  @put('/tadm-multa-usuarios/{id}')
  @response(204, {
    description: 'TadmMultaUsuario PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmMultaUsuario: TadmMultaUsuario,
  ): Promise<void> {
    await this.tadmMultaUsuarioRepository.replaceById(id, tadmMultaUsuario);
  }

  @del('/tadm-multa-usuarios/{id}')
  @response(204, {
    description: 'TadmMultaUsuario DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmMultaUsuarioRepository.deleteById(id);
  }
}
