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
import {TadmZonaSocial} from '../models';
import {TadmZonaSocialRepository} from '../repositories';

export class TadmZonaSocialController {
  constructor(
    @repository(TadmZonaSocialRepository)
    public tadmZonaSocialRepository : TadmZonaSocialRepository,
  ) {}

  @post('/tadm-zona-socials')
  @response(200, {
    description: 'TadmZonaSocial model instance',
    content: {'application/json': {schema: getModelSchemaRef(TadmZonaSocial)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmZonaSocial, {
            title: 'NewTadmZonaSocial',
            
          }),
        },
      },
    })
    tadmZonaSocial: TadmZonaSocial,
  ): Promise<TadmZonaSocial> {
    return this.tadmZonaSocialRepository.create(tadmZonaSocial);
  }

  @get('/tadm-zona-socials/count')
  @response(200, {
    description: 'TadmZonaSocial model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TadmZonaSocial) where?: Where<TadmZonaSocial>,
  ): Promise<Count> {
    return this.tadmZonaSocialRepository.count(where);
  }

  @get('/tadm-zona-socials')
  @response(200, {
    description: 'Array of TadmZonaSocial model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TadmZonaSocial, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TadmZonaSocial) filter?: Filter<TadmZonaSocial>,
  ): Promise<TadmZonaSocial[]> {
    return this.tadmZonaSocialRepository.find(filter);
  }

  @patch('/tadm-zona-socials')
  @response(200, {
    description: 'TadmZonaSocial PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmZonaSocial, {partial: true}),
        },
      },
    })
    tadmZonaSocial: TadmZonaSocial,
    @param.where(TadmZonaSocial) where?: Where<TadmZonaSocial>,
  ): Promise<Count> {
    return this.tadmZonaSocialRepository.updateAll(tadmZonaSocial, where);
  }

  @get('/tadm-zona-socials/{id}')
  @response(200, {
    description: 'TadmZonaSocial model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TadmZonaSocial, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TadmZonaSocial, {exclude: 'where'}) filter?: FilterExcludingWhere<TadmZonaSocial>
  ): Promise<TadmZonaSocial> {
    return this.tadmZonaSocialRepository.findById(id, filter);
  }

  @patch('/tadm-zona-socials/{id}')
  @response(204, {
    description: 'TadmZonaSocial PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmZonaSocial, {partial: true}),
        },
      },
    })
    tadmZonaSocial: TadmZonaSocial,
  ): Promise<void> {
    await this.tadmZonaSocialRepository.updateById(id, tadmZonaSocial);
  }

  @put('/tadm-zona-socials/{id}')
  @response(204, {
    description: 'TadmZonaSocial PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmZonaSocial: TadmZonaSocial,
  ): Promise<void> {
    await this.tadmZonaSocialRepository.replaceById(id, tadmZonaSocial);
  }

  @del('/tadm-zona-socials/{id}')
  @response(204, {
    description: 'TadmZonaSocial DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmZonaSocialRepository.deleteById(id);
  }
}
