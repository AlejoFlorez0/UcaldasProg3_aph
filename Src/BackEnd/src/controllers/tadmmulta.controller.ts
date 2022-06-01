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
import { Tadmmulta } from '../models';
import { TadmmultaRepository } from '../repositories';
import { authenticate } from '@loopback/authentication';

export class TadmmultaController {
  constructor(
    @repository(TadmmultaRepository)
    public tadmmultaRepository: TadmmultaRepository,
  ) { }

  @authenticate('Administrator', 'Owner')
  @post('/tadmmultas')
  @response(200, {
    description: 'Tadmmulta model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Tadmmulta) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmmulta, {
            title: 'NewTadmmulta',
            exclude: ['idMulta'],
          }),
        },
      },
    })
    tadmmulta: Omit<Tadmmulta, 'idMulta'>,
  ): Promise<Tadmmulta> {
    return this.tadmmultaRepository.create(tadmmulta);
  }

  @authenticate('Administrator', 'Accountant')
  @get('/tadmmultas/count')
  @response(200, {
    description: 'Tadmmulta model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Tadmmulta) where?: Where<Tadmmulta>,
  ): Promise<Count> {
    return this.tadmmultaRepository.count(where);
  }

  @authenticate('Administrator', 'Accountant')
  @get('/tadmmultas')
  @response(200, {
    description: 'Array of Tadmmulta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tadmmulta, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Tadmmulta) filter?: Filter<Tadmmulta>,
  ): Promise<Tadmmulta[]> {
    return this.tadmmultaRepository.find(filter);
  }

  @authenticate('Administrator')
  @patch('/tadmmultas')
  @response(200, {
    description: 'Tadmmulta PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmmulta, { partial: true }),
        },
      },
    })
    tadmmulta: Tadmmulta,
    @param.where(Tadmmulta) where?: Where<Tadmmulta>,
  ): Promise<Count> {
    return this.tadmmultaRepository.updateAll(tadmmulta, where);
  }

  @authenticate('Administrator', 'Owner', 'Residents', 'Accountant')
  @get('/tadmmultas/{id}')
  @response(200, {
    description: 'Tadmmulta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tadmmulta, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tadmmulta, { exclude: 'where' }) filter?: FilterExcludingWhere<Tadmmulta>
  ): Promise<Tadmmulta> {
    return this.tadmmultaRepository.findById(id, filter);
  }

  @authenticate('Administrator')
  @patch('/tadmmultas/{id}')
  @response(204, {
    description: 'Tadmmulta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmmulta, { partial: true }),
        },
      },
    })
    tadmmulta: Tadmmulta,
  ): Promise<void> {
    await this.tadmmultaRepository.updateById(id, tadmmulta);
  }

  @authenticate('Administrator')
  @put('/tadmmultas/{id}')
  @response(204, {
    description: 'Tadmmulta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tadmmulta: Tadmmulta,
  ): Promise<void> {
    await this.tadmmultaRepository.replaceById(id, tadmmulta);
  }

  @authenticate('Administrator')
  @del('/tadmmultas/{id}')
  @response(204, {
    description: 'Tadmmulta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tadmmultaRepository.deleteById(id);
  }
}
