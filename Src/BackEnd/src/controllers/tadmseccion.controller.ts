import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Tadmseccion} from '../models';
import {TadmseccionRepository} from '../repositories';

export class TadmseccionController {
  constructor(
    @repository(TadmseccionRepository)
    public tadmseccionRepository: TadmseccionRepository,
  ) { }

  //@authenticate('Administrator')
  @authenticate.skip()
  @post('/tadmseccions')
  @response(200, {
    description: 'Tadmseccion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tadmseccion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmseccion, {
            title: 'NewTadmseccion',
            exclude: ['id'],
          }),
        },
      },
    })
    tadmseccion: Omit<Tadmseccion, 'id'>,
  ): Promise<Tadmseccion> {
    return this.tadmseccionRepository.create(tadmseccion);
  }

  @get('/tadmseccions/count')
  @response(200, {
    description: 'Tadmseccion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tadmseccion) where?: Where<Tadmseccion>,
  ): Promise<Count> {
    return this.tadmseccionRepository.count(where);
  }

  @get('/tadmseccions')
  @response(200, {
    description: 'Array of Tadmseccion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tadmseccion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tadmseccion) filter?: Filter<Tadmseccion>,
  ): Promise<Tadmseccion[]> {
    return this.tadmseccionRepository.find(filter);
  }

  @authenticate('Administrator')
  @patch('/tadmseccions')
  @response(200, {
    description: 'Tadmseccion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmseccion, {partial: true}),
        },
      },
    })
    tadmseccion: Tadmseccion,
    @param.where(Tadmseccion) where?: Where<Tadmseccion>,
  ): Promise<Count> {
    return this.tadmseccionRepository.updateAll(tadmseccion, where);
  }

  @get('/tadmseccions/{id}')
  @response(200, {
    description: 'Tadmseccion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tadmseccion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tadmseccion, {exclude: 'where'}) filter?: FilterExcludingWhere<Tadmseccion>
  ): Promise<Tadmseccion> {
    return this.tadmseccionRepository.findById(id, filter);
  }

  @authenticate('Administrator')
  @patch('/tadmseccions/{id}')
  @response(204, {
    description: 'Tadmseccion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmseccion, {partial: true}),
        },
      },
    })
    tadmseccion: Tadmseccion,
  ): Promise<void> {
    await this.tadmseccionRepository.updateById(id, tadmseccion);
  }

  @put('/tadmseccions/{id}')
  @response(204, {
    description: 'Tadmseccion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmseccion: Tadmseccion,
  ): Promise<void> {
    await this.tadmseccionRepository.replaceById(id, tadmseccion);
  }
  //@authenticate('Administrator')
  @authenticate.skip()
  @del('/tadmseccions/{id}')
  @response(204, {
    description: 'Tadmseccion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmseccionRepository.deleteById(id);
  }
}
