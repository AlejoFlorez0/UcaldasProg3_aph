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
import {TusUsuarioRol} from '../models';
import {TusUsuarioRolRepository} from '../repositories';

export class TusUsuarioRolController {
  constructor(
    @repository(TusUsuarioRolRepository)
    public tusUsuarioRolRepository : TusUsuarioRolRepository,
  ) {}

  @post('/tus-usuario-rols')
  @response(200, {
    description: 'TusUsuarioRol model instance',
    content: {'application/json': {schema: getModelSchemaRef(TusUsuarioRol)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusUsuarioRol, {
            title: 'NewTusUsuarioRol',
            exclude: ['id'],
          }),
        },
      },
    })
    tusUsuarioRol: Omit<TusUsuarioRol, 'id'>,
  ): Promise<TusUsuarioRol> {
    return this.tusUsuarioRolRepository.create(tusUsuarioRol);
  }

  @get('/tus-usuario-rols/count')
  @response(200, {
    description: 'TusUsuarioRol model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TusUsuarioRol) where?: Where<TusUsuarioRol>,
  ): Promise<Count> {
    return this.tusUsuarioRolRepository.count(where);
  }

  @get('/tus-usuario-rols')
  @response(200, {
    description: 'Array of TusUsuarioRol model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TusUsuarioRol, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TusUsuarioRol) filter?: Filter<TusUsuarioRol>,
  ): Promise<TusUsuarioRol[]> {
    return this.tusUsuarioRolRepository.find(filter);
  }

  @patch('/tus-usuario-rols')
  @response(200, {
    description: 'TusUsuarioRol PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusUsuarioRol, {partial: true}),
        },
      },
    })
    tusUsuarioRol: TusUsuarioRol,
    @param.where(TusUsuarioRol) where?: Where<TusUsuarioRol>,
  ): Promise<Count> {
    return this.tusUsuarioRolRepository.updateAll(tusUsuarioRol, where);
  }

  @get('/tus-usuario-rols/{id}')
  @response(200, {
    description: 'TusUsuarioRol model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TusUsuarioRol, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TusUsuarioRol, {exclude: 'where'}) filter?: FilterExcludingWhere<TusUsuarioRol>
  ): Promise<TusUsuarioRol> {
    return this.tusUsuarioRolRepository.findById(id, filter);
  }

  @patch('/tus-usuario-rols/{id}')
  @response(204, {
    description: 'TusUsuarioRol PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TusUsuarioRol, {partial: true}),
        },
      },
    })
    tusUsuarioRol: TusUsuarioRol,
  ): Promise<void> {
    await this.tusUsuarioRolRepository.updateById(id, tusUsuarioRol);
  }

  @put('/tus-usuario-rols/{id}')
  @response(204, {
    description: 'TusUsuarioRol PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tusUsuarioRol: TusUsuarioRol,
  ): Promise<void> {
    await this.tusUsuarioRolRepository.replaceById(id, tusUsuarioRol);
  }

  @del('/tus-usuario-rols/{id}')
  @response(204, {
    description: 'TusUsuarioRol DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tusUsuarioRolRepository.deleteById(id);
  }
}
