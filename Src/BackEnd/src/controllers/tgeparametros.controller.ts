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
import { Tgeparametros } from '../models';
import { TgeparametrosRepository } from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('Administrator')
export class TgeparametrosController {
  constructor(
    @repository(TgeparametrosRepository)
    public tgeparametrosRepository: TgeparametrosRepository,
  ) { }

  @post('/tgeparametros')
  @response(200, {
    description: 'Tgeparametros model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Tgeparametros) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tgeparametros, {
            title: 'NewTgeparametros',
            exclude: ['idParametro'],
          }),
        },
      },
    })
    tgeparametros: Omit<Tgeparametros, 'idParametro'>,
  ): Promise<Tgeparametros> {
    return this.tgeparametrosRepository.create(tgeparametros);
  }

  @get('/tgeparametros/count')
  @response(200, {
    description: 'Tgeparametros model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Tgeparametros) where?: Where<Tgeparametros>,
  ): Promise<Count> {
    return this.tgeparametrosRepository.count(where);
  }

  @get('/tgeparametros')
  @response(200, {
    description: 'Array of Tgeparametros model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tgeparametros, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Tgeparametros) filter?: Filter<Tgeparametros>,
  ): Promise<Tgeparametros[]> {
    return this.tgeparametrosRepository.find(filter);
  }

  @patch('/tgeparametros')
  @response(200, {
    description: 'Tgeparametros PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tgeparametros, { partial: true }),
        },
      },
    })
    tgeparametros: Tgeparametros,
    @param.where(Tgeparametros) where?: Where<Tgeparametros>,
  ): Promise<Count> {
    return this.tgeparametrosRepository.updateAll(tgeparametros, where);
  }

  @get('/tgeparametros/{id}')
  @response(200, {
    description: 'Tgeparametros model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tgeparametros, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tgeparametros, { exclude: 'where' }) filter?: FilterExcludingWhere<Tgeparametros>
  ): Promise<Tgeparametros> {
    return this.tgeparametrosRepository.findById(id, filter);
  }

  @patch('/tgeparametros/{id}')
  @response(204, {
    description: 'Tgeparametros PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tgeparametros, { partial: true }),
        },
      },
    })
    tgeparametros: Tgeparametros,
  ): Promise<void> {
    await this.tgeparametrosRepository.updateById(id, tgeparametros);
  }

  @put('/tgeparametros/{id}')
  @response(204, {
    description: 'Tgeparametros PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tgeparametros: Tgeparametros,
  ): Promise<void> {
    await this.tgeparametrosRepository.replaceById(id, tgeparametros);
  }

  @del('/tgeparametros/{id}')
  @response(204, {
    description: 'Tgeparametros DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tgeparametrosRepository.deleteById(id);
  }
}
