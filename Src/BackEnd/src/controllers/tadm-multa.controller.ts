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
import {TadmMulta} from '../models';
import {TadmMultaRepository} from '../repositories';

export class TadmMultaController {
  constructor(
    @repository(TadmMultaRepository)
    public tadmMultaRepository : TadmMultaRepository,
  ) {}

  @post('/tadm-multas')
  @response(200, {
    description: 'TadmMulta model instance',
    content: {'application/json': {schema: getModelSchemaRef(TadmMulta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmMulta, {
            title: 'NewTadmMulta',
            exclude: ['idMulta'],
          }),
        },
      },
    })
    tadmMulta: Omit<TadmMulta, 'idMulta'>,
  ): Promise<TadmMulta> {
    return this.tadmMultaRepository.create(tadmMulta);
  }

  @get('/tadm-multas/count')
  @response(200, {
    description: 'TadmMulta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TadmMulta) where?: Where<TadmMulta>,
  ): Promise<Count> {
    return this.tadmMultaRepository.count(where);
  }

  @get('/tadm-multas')
  @response(200, {
    description: 'Array of TadmMulta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TadmMulta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TadmMulta) filter?: Filter<TadmMulta>,
  ): Promise<TadmMulta[]> {
    return this.tadmMultaRepository.find(filter);
  }

  @patch('/tadm-multas')
  @response(200, {
    description: 'TadmMulta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmMulta, {partial: true}),
        },
      },
    })
    tadmMulta: TadmMulta,
    @param.where(TadmMulta) where?: Where<TadmMulta>,
  ): Promise<Count> {
    return this.tadmMultaRepository.updateAll(tadmMulta, where);
  }

  @get('/tadm-multas/{id}')
  @response(200, {
    description: 'TadmMulta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TadmMulta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TadmMulta, {exclude: 'where'}) filter?: FilterExcludingWhere<TadmMulta>
  ): Promise<TadmMulta> {
    return this.tadmMultaRepository.findById(id, filter);
  }

  @patch('/tadm-multas/{id}')
  @response(204, {
    description: 'TadmMulta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmMulta, {partial: true}),
        },
      },
    })
    tadmMulta: TadmMulta,
  ): Promise<void> {
    await this.tadmMultaRepository.updateById(id, tadmMulta);
  }

  @put('/tadm-multas/{id}')
  @response(204, {
    description: 'TadmMulta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmMulta: TadmMulta,
  ): Promise<void> {
    await this.tadmMultaRepository.replaceById(id, tadmMulta);
  }

  @del('/tadm-multas/{id}')
  @response(204, {
    description: 'TadmMulta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmMultaRepository.deleteById(id);
  }
}
