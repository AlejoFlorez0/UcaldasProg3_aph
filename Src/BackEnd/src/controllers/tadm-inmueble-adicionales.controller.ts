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
import {TadmInmueblesAdicionales} from '../models';
import {TadmInmueblesAdicionalesRepository} from '../repositories';

export class TadmInmuebleAdicionalesController {
  constructor(
    @repository(TadmInmueblesAdicionalesRepository)
    public tadmInmueblesAdicionalesRepository : TadmInmueblesAdicionalesRepository,
  ) {}

  @post('/tadm-inmuebles-adicionales')
  @response(200, {
    description: 'TadmInmueblesAdicionales model instance',
    content: {'application/json': {schema: getModelSchemaRef(TadmInmueblesAdicionales)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmInmueblesAdicionales, {
            title: 'NewTadmInmueblesAdicionales',
            exclude: ['id'],
          }),
        },
      },
    })
    tadmInmueblesAdicionales: Omit<TadmInmueblesAdicionales, 'id'>,
  ): Promise<TadmInmueblesAdicionales> {
    return this.tadmInmueblesAdicionalesRepository.create(tadmInmueblesAdicionales);
  }

  @get('/tadm-inmuebles-adicionales/count')
  @response(200, {
    description: 'TadmInmueblesAdicionales model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TadmInmueblesAdicionales) where?: Where<TadmInmueblesAdicionales>,
  ): Promise<Count> {
    return this.tadmInmueblesAdicionalesRepository.count(where);
  }

  @get('/tadm-inmuebles-adicionales')
  @response(200, {
    description: 'Array of TadmInmueblesAdicionales model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TadmInmueblesAdicionales, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TadmInmueblesAdicionales) filter?: Filter<TadmInmueblesAdicionales>,
  ): Promise<TadmInmueblesAdicionales[]> {
    return this.tadmInmueblesAdicionalesRepository.find(filter);
  }

  @patch('/tadm-inmuebles-adicionales')
  @response(200, {
    description: 'TadmInmueblesAdicionales PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmInmueblesAdicionales, {partial: true}),
        },
      },
    })
    tadmInmueblesAdicionales: TadmInmueblesAdicionales,
    @param.where(TadmInmueblesAdicionales) where?: Where<TadmInmueblesAdicionales>,
  ): Promise<Count> {
    return this.tadmInmueblesAdicionalesRepository.updateAll(tadmInmueblesAdicionales, where);
  }

  @get('/tadm-inmuebles-adicionales/{id}')
  @response(200, {
    description: 'TadmInmueblesAdicionales model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TadmInmueblesAdicionales, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TadmInmueblesAdicionales, {exclude: 'where'}) filter?: FilterExcludingWhere<TadmInmueblesAdicionales>
  ): Promise<TadmInmueblesAdicionales> {
    return this.tadmInmueblesAdicionalesRepository.findById(id, filter);
  }

  @patch('/tadm-inmuebles-adicionales/{id}')
  @response(204, {
    description: 'TadmInmueblesAdicionales PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmInmueblesAdicionales, {partial: true}),
        },
      },
    })
    tadmInmueblesAdicionales: TadmInmueblesAdicionales,
  ): Promise<void> {
    await this.tadmInmueblesAdicionalesRepository.updateById(id, tadmInmueblesAdicionales);
  }

  @put('/tadm-inmuebles-adicionales/{id}')
  @response(204, {
    description: 'TadmInmueblesAdicionales PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmInmueblesAdicionales: TadmInmueblesAdicionales,
  ): Promise<void> {
    await this.tadmInmueblesAdicionalesRepository.replaceById(id, tadmInmueblesAdicionales);
  }

  @del('/tadm-inmuebles-adicionales/{id}')
  @response(204, {
    description: 'TadmInmueblesAdicionales DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmInmueblesAdicionalesRepository.deleteById(id);
  }
}
