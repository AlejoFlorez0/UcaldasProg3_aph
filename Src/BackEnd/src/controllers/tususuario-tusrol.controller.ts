import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Tususuario,
Tususuariorol,
Tusrol,
} from '../models';
import {TususuarioRepository} from '../repositories';

export class TususuarioTusrolController {
  constructor(
    @repository(TususuarioRepository) protected tususuarioRepository: TususuarioRepository,
  ) { }

  @get('/tususuarios/{id}/tusrols', {
    responses: {
      '200': {
        description: 'Array of Tususuario has many Tusrol through Tususuariorol',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tusrol)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Tusrol>,
  ): Promise<Tusrol[]> {
    return this.tususuarioRepository.usuariosXrol(id).find(filter);
  }

  @post('/tususuarios/{id}/tusrols', {
    responses: {
      '200': {
        description: 'create a Tusrol model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tusrol)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tususuario.prototype.nroDocumento,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tusrol, {
            title: 'NewTusrolInTususuario',
            exclude: ['idRol'],
          }),
        },
      },
    }) tusrol: Omit<Tusrol, 'idRol'>,
  ): Promise<Tusrol> {
    return this.tususuarioRepository.usuariosXrol(id).create(tusrol);
  }

  @patch('/tususuarios/{id}/tusrols', {
    responses: {
      '200': {
        description: 'Tususuario.Tusrol PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tusrol, {partial: true}),
        },
      },
    })
    tusrol: Partial<Tusrol>,
    @param.query.object('where', getWhereSchemaFor(Tusrol)) where?: Where<Tusrol>,
  ): Promise<Count> {
    return this.tususuarioRepository.usuariosXrol(id).patch(tusrol, where);
  }

  @del('/tususuarios/{id}/tusrols', {
    responses: {
      '200': {
        description: 'Tususuario.Tusrol DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tusrol)) where?: Where<Tusrol>,
  ): Promise<Count> {
    return this.tususuarioRepository.usuariosXrol(id).delete(where);
  }
}
