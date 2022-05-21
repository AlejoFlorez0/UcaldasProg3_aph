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
import {Tadmtipoinmueble} from '../models';
import {TadmtipoinmuebleRepository} from '../repositories';

export class TadmtipoinmuebleController {
  constructor(
    @repository(TadmtipoinmuebleRepository)
    public tadmtipoinmuebleRepository : TadmtipoinmuebleRepository,
  ) {}

  @post('/tadmtipoinmuebles')
  @response(200, {
    description: 'Tadmtipoinmueble model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tadmtipoinmueble)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmtipoinmueble, {
            title: 'NewTadmtipoinmueble',
            exclude: ['idTipoInmueble'],
          }),
        },
      },
    })
    tadmtipoinmueble: Omit<Tadmtipoinmueble, 'idTipoInmueble'>,
  ): Promise<Tadmtipoinmueble> {
    return this.tadmtipoinmuebleRepository.create(tadmtipoinmueble);
  }

  @get('/tadmtipoinmuebles/count')
  @response(200, {
    description: 'Tadmtipoinmueble model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tadmtipoinmueble) where?: Where<Tadmtipoinmueble>,
  ): Promise<Count> {
    return this.tadmtipoinmuebleRepository.count(where);
  }

  @get('/tadmtipoinmuebles')
  @response(200, {
    description: 'Array of Tadmtipoinmueble model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tadmtipoinmueble, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tadmtipoinmueble) filter?: Filter<Tadmtipoinmueble>,
  ): Promise<Tadmtipoinmueble[]> {
    return this.tadmtipoinmuebleRepository.find(filter);
  }

  @patch('/tadmtipoinmuebles')
  @response(200, {
    description: 'Tadmtipoinmueble PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmtipoinmueble, {partial: true}),
        },
      },
    })
    tadmtipoinmueble: Tadmtipoinmueble,
    @param.where(Tadmtipoinmueble) where?: Where<Tadmtipoinmueble>,
  ): Promise<Count> {
    return this.tadmtipoinmuebleRepository.updateAll(tadmtipoinmueble, where);
  }

  @get('/tadmtipoinmuebles/{id}')
  @response(200, {
    description: 'Tadmtipoinmueble model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tadmtipoinmueble, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tadmtipoinmueble, {exclude: 'where'}) filter?: FilterExcludingWhere<Tadmtipoinmueble>
  ): Promise<Tadmtipoinmueble> {
    return this.tadmtipoinmuebleRepository.findById(id, filter);
  }

  @patch('/tadmtipoinmuebles/{id}')
  @response(204, {
    description: 'Tadmtipoinmueble PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmtipoinmueble, {partial: true}),
        },
      },
    })
    tadmtipoinmueble: Tadmtipoinmueble,
  ): Promise<void> {
    await this.tadmtipoinmuebleRepository.updateById(id, tadmtipoinmueble);
  }

  @put('/tadmtipoinmuebles/{id}')
  @response(204, {
    description: 'Tadmtipoinmueble PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmtipoinmueble: Tadmtipoinmueble,
  ): Promise<void> {
    await this.tadmtipoinmuebleRepository.replaceById(id, tadmtipoinmueble);
  }

  @del('/tadmtipoinmuebles/{id}')
  @response(204, {
    description: 'Tadmtipoinmueble DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmtipoinmuebleRepository.deleteById(id);
  }
}
