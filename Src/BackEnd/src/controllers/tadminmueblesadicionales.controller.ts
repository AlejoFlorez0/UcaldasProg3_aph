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
import {Tadminmueblesadicionales} from '../models';
import {TadminmueblesadicionalesRepository} from '../repositories';

export class TadminmueblesadicionalesController {
  constructor(
    @repository(TadminmueblesadicionalesRepository)
    public tadminmueblesadicionalesRepository : TadminmueblesadicionalesRepository,
  ) {}

  @post('/tadminmueblesadicionales')
  @response(200, {
    description: 'Tadminmueblesadicionales model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tadminmueblesadicionales)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueblesadicionales, {
            title: 'NewTadminmueblesadicionales',
            exclude: ['id'],
          }),
        },
      },
    })
    tadminmueblesadicionales: Omit<Tadminmueblesadicionales, 'id'>,
  ): Promise<Tadminmueblesadicionales> {
    return this.tadminmueblesadicionalesRepository.create(tadminmueblesadicionales);
  }

  @get('/tadminmueblesadicionales/count')
  @response(200, {
    description: 'Tadminmueblesadicionales model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tadminmueblesadicionales) where?: Where<Tadminmueblesadicionales>,
  ): Promise<Count> {
    return this.tadminmueblesadicionalesRepository.count(where);
  }

  @get('/tadminmueblesadicionales')
  @response(200, {
    description: 'Array of Tadminmueblesadicionales model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tadminmueblesadicionales, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tadminmueblesadicionales) filter?: Filter<Tadminmueblesadicionales>,
  ): Promise<Tadminmueblesadicionales[]> {
    return this.tadminmueblesadicionalesRepository.find(filter);
  }

  @patch('/tadminmueblesadicionales')
  @response(200, {
    description: 'Tadminmueblesadicionales PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueblesadicionales, {partial: true}),
        },
      },
    })
    tadminmueblesadicionales: Tadminmueblesadicionales,
    @param.where(Tadminmueblesadicionales) where?: Where<Tadminmueblesadicionales>,
  ): Promise<Count> {
    return this.tadminmueblesadicionalesRepository.updateAll(tadminmueblesadicionales, where);
  }

  @get('/tadminmueblesadicionales/{id}')
  @response(200, {
    description: 'Tadminmueblesadicionales model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tadminmueblesadicionales, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tadminmueblesadicionales, {exclude: 'where'}) filter?: FilterExcludingWhere<Tadminmueblesadicionales>
  ): Promise<Tadminmueblesadicionales> {
    return this.tadminmueblesadicionalesRepository.findById(id, filter);
  }

  @patch('/tadminmueblesadicionales/{id}')
  @response(204, {
    description: 'Tadminmueblesadicionales PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueblesadicionales, {partial: true}),
        },
      },
    })
    tadminmueblesadicionales: Tadminmueblesadicionales,
  ): Promise<void> {
    await this.tadminmueblesadicionalesRepository.updateById(id, tadminmueblesadicionales);
  }

  @put('/tadminmueblesadicionales/{id}')
  @response(204, {
    description: 'Tadminmueblesadicionales PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadminmueblesadicionales: Tadminmueblesadicionales,
  ): Promise<void> {
    await this.tadminmueblesadicionalesRepository.replaceById(id, tadminmueblesadicionales);
  }

  @del('/tadminmueblesadicionales/{id}')
  @response(204, {
    description: 'Tadminmueblesadicionales DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadminmueblesadicionalesRepository.deleteById(id);
  }
}
