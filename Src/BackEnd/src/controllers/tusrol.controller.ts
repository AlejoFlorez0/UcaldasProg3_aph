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
import {Tusrol} from '../models';
import {TusrolRepository} from '../repositories';

export class TusrolController {
  constructor(
    @repository(TusrolRepository)
    public tusrolRepository : TusrolRepository,
  ) {}

  @post('/tusrols')
  @response(200, {
    description: 'Tusrol model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tusrol)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tusrol, {
            title: 'NewTusrol',
            exclude: ['idRol'],
          }),
        },
      },
    })
    tusrol: Omit<Tusrol, 'idRol'>,
  ): Promise<Tusrol> {
    return this.tusrolRepository.create(tusrol);
  }

  @get('/tusrols/count')
  @response(200, {
    description: 'Tusrol model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tusrol) where?: Where<Tusrol>,
  ): Promise<Count> {
    return this.tusrolRepository.count(where);
  }

  @get('/tusrols')
  @response(200, {
    description: 'Array of Tusrol model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tusrol, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tusrol) filter?: Filter<Tusrol>,
  ): Promise<Tusrol[]> {
    return this.tusrolRepository.find(filter);
  }

  @patch('/tusrols')
  @response(200, {
    description: 'Tusrol PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tusrol, {partial: true}),
        },
      },
    })
    tusrol: Tusrol,
    @param.where(Tusrol) where?: Where<Tusrol>,
  ): Promise<Count> {
    return this.tusrolRepository.updateAll(tusrol, where);
  }

  @get('/tusrols/{id}')
  @response(200, {
    description: 'Tusrol model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tusrol, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tusrol, {exclude: 'where'}) filter?: FilterExcludingWhere<Tusrol>
  ): Promise<Tusrol> {
    return this.tusrolRepository.findById(id, filter);
  }

  @patch('/tusrols/{id}')
  @response(204, {
    description: 'Tusrol PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tusrol, {partial: true}),
        },
      },
    })
    tusrol: Tusrol,
  ): Promise<void> {
    await this.tusrolRepository.updateById(id, tusrol);
  }

  @put('/tusrols/{id}')
  @response(204, {
    description: 'Tusrol PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tusrol: Tusrol,
  ): Promise<void> {
    await this.tusrolRepository.replaceById(id, tusrol);
  }

  @del('/tusrols/{id}')
  @response(204, {
    description: 'Tusrol DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tusrolRepository.deleteById(id);
  }
}
