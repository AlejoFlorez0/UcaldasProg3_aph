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
import {TadmZonaSocialUsuario} from '../models';
import {TadmZonaSocialUsuarioRepository} from '../repositories';

export class TadmZonaSocialUsuarioController {
  constructor(
    @repository(TadmZonaSocialUsuarioRepository)
    public tadmZonaSocialUsuarioRepository : TadmZonaSocialUsuarioRepository,
  ) {}

  @post('/tadm-zona-social-usuarios')
  @response(200, {
    description: 'TadmZonaSocialUsuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(TadmZonaSocialUsuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmZonaSocialUsuario, {
            title: 'NewTadmZonaSocialUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    tadmZonaSocialUsuario: Omit<TadmZonaSocialUsuario, 'id'>,
  ): Promise<TadmZonaSocialUsuario> {
    return this.tadmZonaSocialUsuarioRepository.create(tadmZonaSocialUsuario);
  }

  @get('/tadm-zona-social-usuarios/count')
  @response(200, {
    description: 'TadmZonaSocialUsuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TadmZonaSocialUsuario) where?: Where<TadmZonaSocialUsuario>,
  ): Promise<Count> {
    return this.tadmZonaSocialUsuarioRepository.count(where);
  }

  @get('/tadm-zona-social-usuarios')
  @response(200, {
    description: 'Array of TadmZonaSocialUsuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TadmZonaSocialUsuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TadmZonaSocialUsuario) filter?: Filter<TadmZonaSocialUsuario>,
  ): Promise<TadmZonaSocialUsuario[]> {
    return this.tadmZonaSocialUsuarioRepository.find(filter);
  }

  @patch('/tadm-zona-social-usuarios')
  @response(200, {
    description: 'TadmZonaSocialUsuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmZonaSocialUsuario, {partial: true}),
        },
      },
    })
    tadmZonaSocialUsuario: TadmZonaSocialUsuario,
    @param.where(TadmZonaSocialUsuario) where?: Where<TadmZonaSocialUsuario>,
  ): Promise<Count> {
    return this.tadmZonaSocialUsuarioRepository.updateAll(tadmZonaSocialUsuario, where);
  }

  @get('/tadm-zona-social-usuarios/{id}')
  @response(200, {
    description: 'TadmZonaSocialUsuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TadmZonaSocialUsuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TadmZonaSocialUsuario, {exclude: 'where'}) filter?: FilterExcludingWhere<TadmZonaSocialUsuario>
  ): Promise<TadmZonaSocialUsuario> {
    return this.tadmZonaSocialUsuarioRepository.findById(id, filter);
  }

  @patch('/tadm-zona-social-usuarios/{id}')
  @response(204, {
    description: 'TadmZonaSocialUsuario PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmZonaSocialUsuario, {partial: true}),
        },
      },
    })
    tadmZonaSocialUsuario: TadmZonaSocialUsuario,
  ): Promise<void> {
    await this.tadmZonaSocialUsuarioRepository.updateById(id, tadmZonaSocialUsuario);
  }

  @put('/tadm-zona-social-usuarios/{id}')
  @response(204, {
    description: 'TadmZonaSocialUsuario PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmZonaSocialUsuario: TadmZonaSocialUsuario,
  ): Promise<void> {
    await this.tadmZonaSocialUsuarioRepository.replaceById(id, tadmZonaSocialUsuario);
  }

  @del('/tadm-zona-social-usuarios/{id}')
  @response(204, {
    description: 'TadmZonaSocialUsuario DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmZonaSocialUsuarioRepository.deleteById(id);
  }
}
