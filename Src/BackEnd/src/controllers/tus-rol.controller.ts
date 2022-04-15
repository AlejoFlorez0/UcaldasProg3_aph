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
import {TusRol} from '../models';
import {TusRolRepository} from '../repositories';

export class TusRolController {
  constructor(
    @repository(TusRolRepository)
    public tusRolRepository : TusRolRepository,
  ) {}

  @post('/tus-rols')
  @response(200, {
    description: 'TusRol model instance',
    content: {'application/json': {schema: getModelSchemaRef(TusRol)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusRol, {
            title: 'NewTusRol',
            
          }),
        },
      },
    })
    tusRol: TusRol,
  ): Promise<TusRol> {
    return this.tusRolRepository.create(tusRol);
  }

  @get('/tus-rols/count')
  @response(200, {
    description: 'TusRol model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TusRol) where?: Where<TusRol>,
  ): Promise<Count> {
    return this.tusRolRepository.count(where);
  }

  @get('/tus-rols')
  @response(200, {
    description: 'Array of TusRol model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TusRol, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TusRol) filter?: Filter<TusRol>,
  ): Promise<TusRol[]> {
    return this.tusRolRepository.find(filter);
  }

  @patch('/tus-rols')
  @response(200, {
    description: 'TusRol PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusRol, {partial: true}),
        },
      },
    })
    tusRol: TusRol,
    @param.where(TusRol) where?: Where<TusRol>,
  ): Promise<Count> {
    return this.tusRolRepository.updateAll(tusRol, where);
  }

  @get('/tus-rols/{id}')
  @response(200, {
    description: 'TusRol model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TusRol, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TusRol, {exclude: 'where'}) filter?: FilterExcludingWhere<TusRol>
  ): Promise<TusRol> {
    return this.tusRolRepository.findById(id, filter);
  }

  @patch('/tus-rols/{id}')
  @response(204, {
    description: 'TusRol PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusRol, {partial: true}),
        },
      },
    })
    tusRol: TusRol,
  ): Promise<void> {
    await this.tusRolRepository.updateById(id, tusRol);
  }

  @put('/tus-rols/{id}')
  @response(204, {
    description: 'TusRol PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tusRol: TusRol,
  ): Promise<void> {
    await this.tusRolRepository.replaceById(id, tusRol);
  }

  @del('/tus-rols/{id}')
  @response(204, {
    description: 'TusRol DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tusRolRepository.deleteById(id);
  }
}
