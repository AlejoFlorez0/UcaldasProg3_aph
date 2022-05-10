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
import { Tususuario } from '../models';
import { TususuarioRepository } from '../repositories';

export class UsuariosController {
  constructor(
    @repository(TususuarioRepository)
    public TususuarioRepository: TususuarioRepository,
  ) { }

  @post('/tus-usuarios')
  @response(200, {
    description: 'TusUsuario model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Tususuario) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tususuario, {
            title: 'NewTusUsuario',

          }),
        },
      },
    })
    tusUsuario: Tususuario,
  ): Promise<Tususuario> {
    return this.TususuarioRepository.create(tusUsuario);
  }

  @get('/tus-usuarios/count')
  @response(200, {
    description: 'TusUsuario model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Tususuario) where?: Where<Tususuario>,
  ): Promise<Count> {
    return this.TususuarioRepository.count(where);
  }

  @get('/tus-usuarios')
  @response(200, {
    description: 'Array of TusUsuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tususuario, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Tususuario) filter?: Filter<Tususuario>,
  ): Promise<Tususuario[]> {
    return this.TususuarioRepository.find(filter);
  }

  @patch('/tus-usuarios')
  @response(200, {
    description: 'TusUsuario PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tususuario, { partial: true }),
        },
      },
    })
    tusUsuario: Tususuario,
    @param.where(Tususuario) where?: Where<Tususuario>,
  ): Promise<Count> {
    return this.TususuarioRepository.updateAll(tusUsuario, where);
  }

  @get('/tus-usuarios/{id}')
  @response(200, {
    description: 'Tususuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tususuario, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tususuario, { exclude: 'where' }) filter?: FilterExcludingWhere<Tususuario>
  ): Promise<Tususuario> {
    return this.TususuarioRepository.findById(id, filter);
  }

  @patch('/tus-usuarios/{id}')
  @response(204, {
    description: 'Tususuario PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tususuario, { partial: true }),
        },
      },
    })
    tusUsuario: Tususuario,
  ): Promise<void> {
    await this.TususuarioRepository.updateById(id, tusUsuario);
  }

  @put('/tus-usuarios/{id}')
  @response(204, {
    description: 'Tususuario PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tusUsuario: Tususuario,
  ): Promise<void> {
    await this.TususuarioRepository.replaceById(id, tusUsuario);
  }

  @del('/tus-usuarios/{id}')
  @response(204, {
    description: 'Tususuario DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.TususuarioRepository.deleteById(id);
  }
}
