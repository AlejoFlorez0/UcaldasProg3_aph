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
import { Tfaccreditoinmuebles } from '../models';
import { TfaccreditoinmueblesRepository } from '../repositories';
import { authenticate } from '@loopback/authentication';

export class TfaccreditoinmueblesController {
  constructor(
    @repository(TfaccreditoinmueblesRepository)
    public tfaccreditoinmueblesRepository: TfaccreditoinmueblesRepository,
  ) { }

  @authenticate('Administrator')
  @post('/tfaccreditoinmuebles')
  @response(200, {
    description: 'Tfaccreditoinmuebles model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Tfaccreditoinmuebles) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tfaccreditoinmuebles, {
            title: 'NewTfaccreditoinmuebles',
            exclude: ['idCreditoInmueble'],
          }),
        },
      },
    })
    tfaccreditoinmuebles: Omit<Tfaccreditoinmuebles, 'idCreditoInmueble'>,
  ): Promise<Tfaccreditoinmuebles> {
    return this.tfaccreditoinmueblesRepository.create(tfaccreditoinmuebles);
  }

  @authenticate('Administrator', 'Accountant', 'Owner', 'Auditor')
  @get('/tfaccreditoinmuebles/count')
  @response(200, {
    description: 'Tfaccreditoinmuebles model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Tfaccreditoinmuebles) where?: Where<Tfaccreditoinmuebles>,
  ): Promise<Count> {
    return this.tfaccreditoinmueblesRepository.count(where);
  }

  @authenticate('Administrator', 'Accountant', 'Owner', 'Auditor')
  @get('/tfaccreditoinmuebles')
  @response(200, {
    description: 'Array of Tfaccreditoinmuebles model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tfaccreditoinmuebles, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Tfaccreditoinmuebles) filter?: Filter<Tfaccreditoinmuebles>,
  ): Promise<Tfaccreditoinmuebles[]> {
    return this.tfaccreditoinmueblesRepository.find(filter);
  }

  @authenticate('Administrator', 'Accountant', 'Owner', 'Auditor')
  @patch('/tfaccreditoinmuebles')
  @response(200, {
    description: 'Tfaccreditoinmuebles PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tfaccreditoinmuebles, { partial: true }),
        },
      },
    })
    tfaccreditoinmuebles: Tfaccreditoinmuebles,
    @param.where(Tfaccreditoinmuebles) where?: Where<Tfaccreditoinmuebles>,
  ): Promise<Count> {
    return this.tfaccreditoinmueblesRepository.updateAll(tfaccreditoinmuebles, where);
  }

  @authenticate('Administrator', 'Accountant', 'Owner', 'Auditor')
  @get('/tfaccreditoinmuebles/{id}')
  @response(200, {
    description: 'Tfaccreditoinmuebles model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tfaccreditoinmuebles, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tfaccreditoinmuebles, { exclude: 'where' }) filter?: FilterExcludingWhere<Tfaccreditoinmuebles>
  ): Promise<Tfaccreditoinmuebles> {
    return this.tfaccreditoinmueblesRepository.findById(id, filter);
  }

  @authenticate('Administrator')
  @patch('/tfaccreditoinmuebles/{id}')
  @response(204, {
    description: 'Tfaccreditoinmuebles PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tfaccreditoinmuebles, { partial: true }),
        },
      },
    })
    tfaccreditoinmuebles: Tfaccreditoinmuebles,
  ): Promise<void> {
    await this.tfaccreditoinmueblesRepository.updateById(id, tfaccreditoinmuebles);
  }

  @authenticate('Administrator')
  @put('/tfaccreditoinmuebles/{id}')
  @response(204, {
    description: 'Tfaccreditoinmuebles PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tfaccreditoinmuebles: Tfaccreditoinmuebles,
  ): Promise<void> {
    await this.tfaccreditoinmueblesRepository.replaceById(id, tfaccreditoinmuebles);
  }

  @authenticate('Administrator')
  @del('/tfaccreditoinmuebles/{id}')
  @response(204, {
    description: 'Tfaccreditoinmuebles DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tfaccreditoinmueblesRepository.deleteById(id);
  }
}
