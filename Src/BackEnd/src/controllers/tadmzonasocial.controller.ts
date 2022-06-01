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
import { Tadmzonasocial } from '../models';
import { TadmzonasocialRepository } from '../repositories';
import { authenticate } from '@loopback/authentication';

export class TadmzonasocialController {
  constructor(
    @repository(TadmzonasocialRepository)
    public tadmzonasocialRepository: TadmzonasocialRepository,
  ) { }

  @authenticate('Administrator')
  @post('/tadmzonasocials')
  @response(200, {
    description: 'Tadmzonasocial model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Tadmzonasocial) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmzonasocial, {
            title: 'NewTadmzonasocial',
            exclude: ['idZonaSocial'],
          }),
        },
      },
    })
    tadmzonasocial: Omit<Tadmzonasocial, 'idZonaSocial'>,
  ): Promise<Tadmzonasocial> {
    return this.tadmzonasocialRepository.create(tadmzonasocial);
  }

  @get('/tadmzonasocials/count')
  @response(200, {
    description: 'Tadmzonasocial model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Tadmzonasocial) where?: Where<Tadmzonasocial>,
  ): Promise<Count> {
    return this.tadmzonasocialRepository.count(where);
  }

  @get('/tadmzonasocials')
  @response(200, {
    description: 'Array of Tadmzonasocial model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tadmzonasocial, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Tadmzonasocial) filter?: Filter<Tadmzonasocial>,
  ): Promise<Tadmzonasocial[]> {
    return this.tadmzonasocialRepository.find(filter);
  }

  @authenticate('Administrator')
  @patch('/tadmzonasocials')
  @response(200, {
    description: 'Tadmzonasocial PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmzonasocial, { partial: true }),
        },
      },
    })
    tadmzonasocial: Tadmzonasocial,
    @param.where(Tadmzonasocial) where?: Where<Tadmzonasocial>,
  ): Promise<Count> {
    return this.tadmzonasocialRepository.updateAll(tadmzonasocial, where);
  }

  @get('/tadmzonasocials/{id}')
  @response(200, {
    description: 'Tadmzonasocial model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tadmzonasocial, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tadmzonasocial, { exclude: 'where' }) filter?: FilterExcludingWhere<Tadmzonasocial>
  ): Promise<Tadmzonasocial> {
    return this.tadmzonasocialRepository.findById(id, filter);
  }

  @authenticate('Administrator')
  @patch('/tadmzonasocials/{id}')
  @response(204, {
    description: 'Tadmzonasocial PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmzonasocial, { partial: true }),
        },
      },
    })
    tadmzonasocial: Tadmzonasocial,
  ): Promise<void> {
    await this.tadmzonasocialRepository.updateById(id, tadmzonasocial);
  }

  @authenticate('Administrator')
  @put('/tadmzonasocials/{id}')
  @response(204, {
    description: 'Tadmzonasocial PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmzonasocial: Tadmzonasocial,
  ): Promise<void> {
    await this.tadmzonasocialRepository.replaceById(id, tadmzonasocial);
  }

  @authenticate('Administrator')
  @del('/tadmzonasocials/{id}')
  @response(204, {
    description: 'Tadmzonasocial DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmzonasocialRepository.deleteById(id);
  }
}
