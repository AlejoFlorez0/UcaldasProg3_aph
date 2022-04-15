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
import {TadmInmueble} from '../models';
import {TadmInmuebleRepository} from '../repositories';

export class TadmInmuebleController {
  constructor(
    @repository(TadmInmuebleRepository)
    public tadmInmuebleRepository : TadmInmuebleRepository,
  ) {}

  @post('/tadm-inmuebles')
  @response(200, {
    description: 'TadmInmueble model instance',
    content: {'application/json': {schema: getModelSchemaRef(TadmInmueble)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmInmueble, {
            title: 'NewTadmInmueble',
            exclude: ['idInmueble'],
          }),
        },
      },
    })
    tadmInmueble: Omit<TadmInmueble, 'idInmueble'>,
  ): Promise<TadmInmueble> {
    return this.tadmInmuebleRepository.create(tadmInmueble);
  }

  @get('/tadm-inmuebles/count')
  @response(200, {
    description: 'TadmInmueble model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TadmInmueble) where?: Where<TadmInmueble>,
  ): Promise<Count> {
    return this.tadmInmuebleRepository.count(where);
  }

  @get('/tadm-inmuebles')
  @response(200, {
    description: 'Array of TadmInmueble model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TadmInmueble, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TadmInmueble) filter?: Filter<TadmInmueble>,
  ): Promise<TadmInmueble[]> {
    return this.tadmInmuebleRepository.find(filter);
  }

  @patch('/tadm-inmuebles')
  @response(200, {
    description: 'TadmInmueble PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmInmueble, {partial: true}),
        },
      },
    })
    tadmInmueble: TadmInmueble,
    @param.where(TadmInmueble) where?: Where<TadmInmueble>,
  ): Promise<Count> {
    return this.tadmInmuebleRepository.updateAll(tadmInmueble, where);
  }

  @get('/tadm-inmuebles/{id}')
  @response(200, {
    description: 'TadmInmueble model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TadmInmueble, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TadmInmueble, {exclude: 'where'}) filter?: FilterExcludingWhere<TadmInmueble>
  ): Promise<TadmInmueble> {
    return this.tadmInmuebleRepository.findById(id, filter);
  }

  @patch('/tadm-inmuebles/{id}')
  @response(204, {
    description: 'TadmInmueble PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmInmueble, {partial: true}),
        },
      },
    })
    tadmInmueble: TadmInmueble,
  ): Promise<void> {
    await this.tadmInmuebleRepository.updateById(id, tadmInmueble);
  }

  @put('/tadm-inmuebles/{id}')
  @response(204, {
    description: 'TadmInmueble PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmInmueble: TadmInmueble,
  ): Promise<void> {
    await this.tadmInmuebleRepository.replaceById(id, tadmInmueble);
  }

  @del('/tadm-inmuebles/{id}')
  @response(204, {
    description: 'TadmInmueble DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmInmuebleRepository.deleteById(id);
  }
}
