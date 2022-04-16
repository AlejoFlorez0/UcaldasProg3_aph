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
import {TusUsuarios} from '../models';
import {TusUsuariosRepository} from '../repositories';

export class TusUsuariosController {
  constructor(
    @repository(TusUsuariosRepository)
    public tusUsuariosRepository : TusUsuariosRepository,
  ) {}

  @post('/tus-usuarios')
  @response(200, {
    description: 'TusUsuarios model instance',
    content: {'application/json': {schema: getModelSchemaRef(TusUsuarios)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusUsuarios, {
            title: 'NewTusUsuarios',
            
          }),
        },
      },
    })
    tusUsuarios: TusUsuarios,
  ): Promise<TusUsuarios> {
    return this.tusUsuariosRepository.create(tusUsuarios);
  }

  @get('/tus-usuarios/count')
  @response(200, {
    description: 'TusUsuarios model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TusUsuarios) where?: Where<TusUsuarios>,
  ): Promise<Count> {
    return this.tusUsuariosRepository.count(where);
  }

  @get('/tus-usuarios')
  @response(200, {
    description: 'Array of TusUsuarios model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TusUsuarios, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TusUsuarios) filter?: Filter<TusUsuarios>,
  ): Promise<TusUsuarios[]> {
    return this.tusUsuariosRepository.find(filter);
  }

  @patch('/tus-usuarios')
  @response(200, {
    description: 'TusUsuarios PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusUsuarios, {partial: true}),
        },
      },
    })
    tusUsuarios: TusUsuarios,
    @param.where(TusUsuarios) where?: Where<TusUsuarios>,
  ): Promise<Count> {
    return this.tusUsuariosRepository.updateAll(tusUsuarios, where);
  }

  @get('/tus-usuarios/{id}')
  @response(200, {
    description: 'TusUsuarios model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TusUsuarios, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TusUsuarios, {exclude: 'where'}) filter?: FilterExcludingWhere<TusUsuarios>
  ): Promise<TusUsuarios> {
    return this.tusUsuariosRepository.findById(id, filter);
  }

  @patch('/tus-usuarios/{id}')
  @response(204, {
    description: 'TusUsuarios PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusUsuarios, {partial: true}),
        },
      },
    })
    tusUsuarios: TusUsuarios,
  ): Promise<void> {
    await this.tusUsuariosRepository.updateById(id, tusUsuarios);
  }

  @put('/tus-usuarios/{id}')
  @response(204, {
    description: 'TusUsuarios PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tusUsuarios: TusUsuarios,
  ): Promise<void> {
    await this.tusUsuariosRepository.replaceById(id, tusUsuarios);
  }

  @del('/tus-usuarios/{id}')
  @response(204, {
    description: 'TusUsuarios DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tusUsuariosRepository.deleteById(id);
  }
}
