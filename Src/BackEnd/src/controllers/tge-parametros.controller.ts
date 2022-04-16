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
import {TgeParametros} from '../models';
import {TgeParametrosRepository} from '../repositories';

export class TgeParametrosController {
  constructor(
    @repository(TgeParametrosRepository)
    public tgeParametrosRepository : TgeParametrosRepository,
  ) {}

  @post('/tge-parametros')
  @response(200, {
    description: 'TgeParametros model instance',
    content: {'application/json': {schema: getModelSchemaRef(TgeParametros)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TgeParametros, {
            title: 'NewTgeParametros',
            exclude: ['id'],
          }),
        },
      },
    })
    tgeParametros: Omit<TgeParametros, 'id'>,
  ): Promise<TgeParametros> {
    return this.tgeParametrosRepository.create(tgeParametros);
  }

  @get('/tge-parametros/count')
  @response(200, {
    description: 'TgeParametros model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TgeParametros) where?: Where<TgeParametros>,
  ): Promise<Count> {
    return this.tgeParametrosRepository.count(where);
  }

  @get('/tge-parametros')
  @response(200, {
    description: 'Array of TgeParametros model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TgeParametros, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TgeParametros) filter?: Filter<TgeParametros>,
  ): Promise<TgeParametros[]> {
    return this.tgeParametrosRepository.find(filter);
  }

  @patch('/tge-parametros')
  @response(200, {
    description: 'TgeParametros PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TgeParametros, {partial: true}),
        },
      },
    })
    tgeParametros: TgeParametros,
    @param.where(TgeParametros) where?: Where<TgeParametros>,
  ): Promise<Count> {
    return this.tgeParametrosRepository.updateAll(tgeParametros, where);
  }

  @get('/tge-parametros/{id}')
  @response(200, {
    description: 'TgeParametros model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TgeParametros, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TgeParametros, {exclude: 'where'}) filter?: FilterExcludingWhere<TgeParametros>
  ): Promise<TgeParametros> {
    return this.tgeParametrosRepository.findById(id, filter);
  }

  @patch('/tge-parametros/{id}')
  @response(204, {
    description: 'TgeParametros PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TgeParametros, {partial: true}),
        },
      },
    })
    tgeParametros: TgeParametros,
  ): Promise<void> {
    await this.tgeParametrosRepository.updateById(id, tgeParametros);
  }

  @put('/tge-parametros/{id}')
  @response(204, {
    description: 'TgeParametros PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tgeParametros: TgeParametros,
  ): Promise<void> {
    await this.tgeParametrosRepository.replaceById(id, tgeParametros);
  }

  @del('/tge-parametros/{id}')
  @response(204, {
    description: 'TgeParametros DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tgeParametrosRepository.deleteById(id);
  }
}
