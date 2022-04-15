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
import {TfacCreditoInmueble} from '../models';
import {TfacCreditoInmuebleRepository} from '../repositories';

export class TfacCreditoInmuebleController {
  constructor(
    @repository(TfacCreditoInmuebleRepository)
    public tfacCreditoInmuebleRepository : TfacCreditoInmuebleRepository,
  ) {}

  @post('/tfac-credito-inmuebles')
  @response(200, {
    description: 'TfacCreditoInmueble model instance',
    content: {'application/json': {schema: getModelSchemaRef(TfacCreditoInmueble)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TfacCreditoInmueble, {
            title: 'NewTfacCreditoInmueble',
            exclude: ['idCreditoInmueble'],
          }),
        },
      },
    })
    tfacCreditoInmueble: Omit<TfacCreditoInmueble, 'idCreditoInmueble'>,
  ): Promise<TfacCreditoInmueble> {
    return this.tfacCreditoInmuebleRepository.create(tfacCreditoInmueble);
  }

  @get('/tfac-credito-inmuebles/count')
  @response(200, {
    description: 'TfacCreditoInmueble model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TfacCreditoInmueble) where?: Where<TfacCreditoInmueble>,
  ): Promise<Count> {
    return this.tfacCreditoInmuebleRepository.count(where);
  }

  @get('/tfac-credito-inmuebles')
  @response(200, {
    description: 'Array of TfacCreditoInmueble model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TfacCreditoInmueble, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TfacCreditoInmueble) filter?: Filter<TfacCreditoInmueble>,
  ): Promise<TfacCreditoInmueble[]> {
    return this.tfacCreditoInmuebleRepository.find(filter);
  }

  @patch('/tfac-credito-inmuebles')
  @response(200, {
    description: 'TfacCreditoInmueble PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TfacCreditoInmueble, {partial: true}),
        },
      },
    })
    tfacCreditoInmueble: TfacCreditoInmueble,
    @param.where(TfacCreditoInmueble) where?: Where<TfacCreditoInmueble>,
  ): Promise<Count> {
    return this.tfacCreditoInmuebleRepository.updateAll(tfacCreditoInmueble, where);
  }

  @get('/tfac-credito-inmuebles/{id}')
  @response(200, {
    description: 'TfacCreditoInmueble model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TfacCreditoInmueble, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TfacCreditoInmueble, {exclude: 'where'}) filter?: FilterExcludingWhere<TfacCreditoInmueble>
  ): Promise<TfacCreditoInmueble> {
    return this.tfacCreditoInmuebleRepository.findById(id, filter);
  }

  @patch('/tfac-credito-inmuebles/{id}')
  @response(204, {
    description: 'TfacCreditoInmueble PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TfacCreditoInmueble, {partial: true}),
        },
      },
    })
    tfacCreditoInmueble: TfacCreditoInmueble,
  ): Promise<void> {
    await this.tfacCreditoInmuebleRepository.updateById(id, tfacCreditoInmueble);
  }

  @put('/tfac-credito-inmuebles/{id}')
  @response(204, {
    description: 'TfacCreditoInmueble PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tfacCreditoInmueble: TfacCreditoInmueble,
  ): Promise<void> {
    await this.tfacCreditoInmuebleRepository.replaceById(id, tfacCreditoInmueble);
  }

  @del('/tfac-credito-inmuebles/{id}')
  @response(204, {
    description: 'TfacCreditoInmueble DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tfacCreditoInmuebleRepository.deleteById(id);
  }
}
