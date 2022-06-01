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
import { Tfacdebitoinmuebles } from '../models';
import { TfacdebitoinmueblesRepository } from '../repositories';
import { authenticate } from '@loopback/authentication';

export class TfacdebitoinmueblesController {
  constructor(
    @repository(TfacdebitoinmueblesRepository)
    public tfacdebitoinmueblesRepository: TfacdebitoinmueblesRepository,
  ) { }

  @authenticate('Administrator')
  @post('/tfacdebitoinmuebles')
  @response(200, {
    description: 'Tfacdebitoinmuebles model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Tfacdebitoinmuebles) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tfacdebitoinmuebles, {
            title: 'NewTfacdebitoinmuebles',
            exclude: ['idDebitoInmueble'],
          }),
        },
      },
    })
    tfacdebitoinmuebles: Omit<Tfacdebitoinmuebles, 'idDebitoInmueble'>,
  ): Promise<Tfacdebitoinmuebles> {
    return this.tfacdebitoinmueblesRepository.create(tfacdebitoinmuebles);
  }

  @authenticate('Administrator', 'Accountant', 'Owner', 'Auditor')
  @get('/tfacdebitoinmuebles/count')
  @response(200, {
    description: 'Tfacdebitoinmuebles model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Tfacdebitoinmuebles) where?: Where<Tfacdebitoinmuebles>,
  ): Promise<Count> {
    return this.tfacdebitoinmueblesRepository.count(where);
  }

  @authenticate('Administrator', 'Accountant', 'Owner', 'Auditor')
  @get('/tfacdebitoinmuebles')
  @response(200, {
    description: 'Array of Tfacdebitoinmuebles model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tfacdebitoinmuebles, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Tfacdebitoinmuebles) filter?: Filter<Tfacdebitoinmuebles>,
  ): Promise<Tfacdebitoinmuebles[]> {
    return this.tfacdebitoinmueblesRepository.find(filter);
  }

  @authenticate('Administrator')
  @patch('/tfacdebitoinmuebles')
  @response(200, {
    description: 'Tfacdebitoinmuebles PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tfacdebitoinmuebles, { partial: true }),
        },
      },
    })
    tfacdebitoinmuebles: Tfacdebitoinmuebles,
    @param.where(Tfacdebitoinmuebles) where?: Where<Tfacdebitoinmuebles>,
  ): Promise<Count> {
    return this.tfacdebitoinmueblesRepository.updateAll(tfacdebitoinmuebles, where);
  }

  @authenticate('Administrator')
  @get('/tfacdebitoinmuebles/{id}')
  @response(200, {
    description: 'Tfacdebitoinmuebles model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tfacdebitoinmuebles, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tfacdebitoinmuebles, { exclude: 'where' }) filter?: FilterExcludingWhere<Tfacdebitoinmuebles>
  ): Promise<Tfacdebitoinmuebles> {
    return this.tfacdebitoinmueblesRepository.findById(id, filter);
  }

  @authenticate('Administrator')
  @patch('/tfacdebitoinmuebles/{id}')
  @response(204, {
    description: 'Tfacdebitoinmuebles PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tfacdebitoinmuebles, { partial: true }),
        },
      },
    })
    tfacdebitoinmuebles: Tfacdebitoinmuebles,
  ): Promise<void> {
    await this.tfacdebitoinmueblesRepository.updateById(id, tfacdebitoinmuebles);
  }

  @authenticate('Administrator')
  @put('/tfacdebitoinmuebles/{id}')
  @response(204, {
    description: 'Tfacdebitoinmuebles PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tfacdebitoinmuebles: Tfacdebitoinmuebles,
  ): Promise<void> {
    await this.tfacdebitoinmueblesRepository.replaceById(id, tfacdebitoinmuebles);
  }

  @authenticate('Administrator')
  @del('/tfacdebitoinmuebles/{id}')
  @response(204, {
    description: 'Tfacdebitoinmuebles DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tfacdebitoinmueblesRepository.deleteById(id);
  }
}
