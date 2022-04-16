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
import {TfacDebitoInmueble} from '../models';
import {TfacDebitoInmuebleRepository} from '../repositories';

export class TfacDebitoInmuebleController {
  constructor(
    @repository(TfacDebitoInmuebleRepository)
    public tfacDebitoInmuebleRepository : TfacDebitoInmuebleRepository,
  ) {}

  @post('/tfac-debito-inmuebles')
  @response(200, {
    description: 'TfacDebitoInmueble model instance',
    content: {'application/json': {schema: getModelSchemaRef(TfacDebitoInmueble)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TfacDebitoInmueble, {
            title: 'NewTfacDebitoInmueble',
            
          }),
        },
      },
    })
    tfacDebitoInmueble: TfacDebitoInmueble,
  ): Promise<TfacDebitoInmueble> {
    return this.tfacDebitoInmuebleRepository.create(tfacDebitoInmueble);
  }

  @get('/tfac-debito-inmuebles/count')
  @response(200, {
    description: 'TfacDebitoInmueble model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TfacDebitoInmueble) where?: Where<TfacDebitoInmueble>,
  ): Promise<Count> {
    return this.tfacDebitoInmuebleRepository.count(where);
  }

  @get('/tfac-debito-inmuebles')
  @response(200, {
    description: 'Array of TfacDebitoInmueble model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TfacDebitoInmueble, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TfacDebitoInmueble) filter?: Filter<TfacDebitoInmueble>,
  ): Promise<TfacDebitoInmueble[]> {
    return this.tfacDebitoInmuebleRepository.find(filter);
  }

  @patch('/tfac-debito-inmuebles')
  @response(200, {
    description: 'TfacDebitoInmueble PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TfacDebitoInmueble, {partial: true}),
        },
      },
    })
    tfacDebitoInmueble: TfacDebitoInmueble,
    @param.where(TfacDebitoInmueble) where?: Where<TfacDebitoInmueble>,
  ): Promise<Count> {
    return this.tfacDebitoInmuebleRepository.updateAll(tfacDebitoInmueble, where);
  }

  @get('/tfac-debito-inmuebles/{id}')
  @response(200, {
    description: 'TfacDebitoInmueble model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TfacDebitoInmueble, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TfacDebitoInmueble, {exclude: 'where'}) filter?: FilterExcludingWhere<TfacDebitoInmueble>
  ): Promise<TfacDebitoInmueble> {
    return this.tfacDebitoInmuebleRepository.findById(id, filter);
  }

  @patch('/tfac-debito-inmuebles/{id}')
  @response(204, {
    description: 'TfacDebitoInmueble PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TfacDebitoInmueble, {partial: true}),
        },
      },
    })
    tfacDebitoInmueble: TfacDebitoInmueble,
  ): Promise<void> {
    await this.tfacDebitoInmuebleRepository.updateById(id, tfacDebitoInmueble);
  }

  @put('/tfac-debito-inmuebles/{id}')
  @response(204, {
    description: 'TfacDebitoInmueble PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tfacDebitoInmueble: TfacDebitoInmueble,
  ): Promise<void> {
    await this.tfacDebitoInmuebleRepository.replaceById(id, tfacDebitoInmueble);
  }

  @del('/tfac-debito-inmuebles/{id}')
  @response(204, {
    description: 'TfacDebitoInmueble DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tfacDebitoInmuebleRepository.deleteById(id);
  }
}
