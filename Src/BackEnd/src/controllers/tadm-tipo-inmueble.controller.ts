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
import {TadmTipoInmueble} from '../models';
import {TadmTipoInmuebleRepository} from '../repositories';

export class TadmTipoInmuebleController {
  constructor(
    @repository(TadmTipoInmuebleRepository)
    public tadmTipoInmuebleRepository : TadmTipoInmuebleRepository,
  ) {}

  @post('/tadm-tipo-inmuebles')
  @response(200, {
    description: 'TadmTipoInmueble model instance',
    content: {'application/json': {schema: getModelSchemaRef(TadmTipoInmueble)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmTipoInmueble, {
            title: 'NewTadmTipoInmueble',
            
          }),
        },
      },
    })
    tadmTipoInmueble: TadmTipoInmueble,
  ): Promise<TadmTipoInmueble> {
    return this.tadmTipoInmuebleRepository.create(tadmTipoInmueble);
  }

  @get('/tadm-tipo-inmuebles/count')
  @response(200, {
    description: 'TadmTipoInmueble model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TadmTipoInmueble) where?: Where<TadmTipoInmueble>,
  ): Promise<Count> {
    return this.tadmTipoInmuebleRepository.count(where);
  }

  @get('/tadm-tipo-inmuebles')
  @response(200, {
    description: 'Array of TadmTipoInmueble model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TadmTipoInmueble, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TadmTipoInmueble) filter?: Filter<TadmTipoInmueble>,
  ): Promise<TadmTipoInmueble[]> {
    return this.tadmTipoInmuebleRepository.find(filter);
  }

  @patch('/tadm-tipo-inmuebles')
  @response(200, {
    description: 'TadmTipoInmueble PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmTipoInmueble, {partial: true}),
        },
      },
    })
    tadmTipoInmueble: TadmTipoInmueble,
    @param.where(TadmTipoInmueble) where?: Where<TadmTipoInmueble>,
  ): Promise<Count> {
    return this.tadmTipoInmuebleRepository.updateAll(tadmTipoInmueble, where);
  }

  @get('/tadm-tipo-inmuebles/{id}')
  @response(200, {
    description: 'TadmTipoInmueble model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TadmTipoInmueble, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TadmTipoInmueble, {exclude: 'where'}) filter?: FilterExcludingWhere<TadmTipoInmueble>
  ): Promise<TadmTipoInmueble> {
    return this.tadmTipoInmuebleRepository.findById(id, filter);
  }

  @patch('/tadm-tipo-inmuebles/{id}')
  @response(204, {
    description: 'TadmTipoInmueble PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmTipoInmueble, {partial: true}),
        },
      },
    })
    tadmTipoInmueble: TadmTipoInmueble,
  ): Promise<void> {
    await this.tadmTipoInmuebleRepository.updateById(id, tadmTipoInmueble);
  }

  @put('/tadm-tipo-inmuebles/{id}')
  @response(204, {
    description: 'TadmTipoInmueble PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmTipoInmueble: TadmTipoInmueble,
  ): Promise<void> {
    await this.tadmTipoInmuebleRepository.replaceById(id, tadmTipoInmueble);
  }

  @del('/tadm-tipo-inmuebles/{id}')
  @response(204, {
    description: 'TadmTipoInmueble DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmTipoInmuebleRepository.deleteById(id);
  }
}
