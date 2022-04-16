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
import {TadmSeccion} from '../models';
import {TadmSeccionRepository} from '../repositories';

export class TadmSeccionController {
  constructor(
    @repository(TadmSeccionRepository)
    public tadmSeccionRepository : TadmSeccionRepository,
  ) {}

  @post('/tadm-seccions')
  @response(200, {
    description: 'TadmSeccion model instance',
    content: {'application/json': {schema: getModelSchemaRef(TadmSeccion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmSeccion, {
            title: 'NewTadmSeccion',
            
          }),
        },
      },
    })
    tadmSeccion: TadmSeccion,
  ): Promise<TadmSeccion> {
    return this.tadmSeccionRepository.create(tadmSeccion);
  }

  @get('/tadm-seccions/count')
  @response(200, {
    description: 'TadmSeccion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TadmSeccion) where?: Where<TadmSeccion>,
  ): Promise<Count> {
    return this.tadmSeccionRepository.count(where);
  }

  @get('/tadm-seccions')
  @response(200, {
    description: 'Array of TadmSeccion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TadmSeccion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TadmSeccion) filter?: Filter<TadmSeccion>,
  ): Promise<TadmSeccion[]> {
    return this.tadmSeccionRepository.find(filter);
  }

  @patch('/tadm-seccions')
  @response(200, {
    description: 'TadmSeccion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmSeccion, {partial: true}),
        },
      },
    })
    tadmSeccion: TadmSeccion,
    @param.where(TadmSeccion) where?: Where<TadmSeccion>,
  ): Promise<Count> {
    return this.tadmSeccionRepository.updateAll(tadmSeccion, where);
  }

  @get('/tadm-seccions/{id}')
  @response(200, {
    description: 'TadmSeccion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TadmSeccion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TadmSeccion, {exclude: 'where'}) filter?: FilterExcludingWhere<TadmSeccion>
  ): Promise<TadmSeccion> {
    return this.tadmSeccionRepository.findById(id, filter);
  }

  @patch('/tadm-seccions/{id}')
  @response(204, {
    description: 'TadmSeccion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmSeccion, {partial: true}),
        },
      },
    })
    tadmSeccion: TadmSeccion,
  ): Promise<void> {
    await this.tadmSeccionRepository.updateById(id, tadmSeccion);
  }

  @put('/tadm-seccions/{id}')
  @response(204, {
    description: 'TadmSeccion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmSeccion: TadmSeccion,
  ): Promise<void> {
    await this.tadmSeccionRepository.replaceById(id, tadmSeccion);
  }

  @del('/tadm-seccions/{id}')
  @response(204, {
    description: 'TadmSeccion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmSeccionRepository.deleteById(id);
  }
}
