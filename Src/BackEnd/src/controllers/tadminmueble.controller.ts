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
import {Tadminmueble} from '../models';
import {TadminmuebleRepository} from '../repositories';

export class TadminmuebleController {
  constructor(
    @repository(TadminmuebleRepository)
    public tadminmuebleRepository : TadminmuebleRepository,
  ) {}

  @post('/tadminmuebles')
  @response(200, {
    description: 'Tadminmueble model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tadminmueble)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueble, {
            title: 'NewTadminmueble',
            exclude: ['idInmueble'],
          }),
        },
      },
    })
    tadminmueble: Omit<Tadminmueble, 'idInmueble'>,
  ): Promise<Tadminmueble> {
    return this.tadminmuebleRepository.create(tadminmueble);
  }

  @get('/tadminmuebles/count')
  @response(200, {
    description: 'Tadminmueble model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tadminmueble) where?: Where<Tadminmueble>,
  ): Promise<Count> {
    return this.tadminmuebleRepository.count(where);
  }

  @get('/tadminmuebles')
  @response(200, {
    description: 'Array of Tadminmueble model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tadminmueble, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tadminmueble) filter?: Filter<Tadminmueble>,
  ): Promise<Tadminmueble[]> {
    return this.tadminmuebleRepository.find(filter);
  }

  @patch('/tadminmuebles')
  @response(200, {
    description: 'Tadminmueble PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueble, {partial: true}),
        },
      },
    })
    tadminmueble: Tadminmueble,
    @param.where(Tadminmueble) where?: Where<Tadminmueble>,
  ): Promise<Count> {
    return this.tadminmuebleRepository.updateAll(tadminmueble, where);
  }

  @get('/tadminmuebles/{id}')
  @response(200, {
    description: 'Tadminmueble model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tadminmueble, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tadminmueble, {exclude: 'where'}) filter?: FilterExcludingWhere<Tadminmueble>
  ): Promise<Tadminmueble> {
    return this.tadminmuebleRepository.findById(id, filter);
  }

  @patch('/tadminmuebles/{id}')
  @response(204, {
    description: 'Tadminmueble PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueble, {partial: true}),
        },
      },
    })
    tadminmueble: Tadminmueble,
  ): Promise<void> {
    await this.tadminmuebleRepository.updateById(id, tadminmueble);
  }

  @put('/tadminmuebles/{id}')
  @response(204, {
    description: 'Tadminmueble PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadminmueble: Tadminmueble,
  ): Promise<void> {
    await this.tadminmuebleRepository.replaceById(id, tadminmueble);
  }

  @del('/tadminmuebles/{id}')
  @response(204, {
    description: 'Tadminmueble DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadminmuebleRepository.deleteById(id);
  }
}
