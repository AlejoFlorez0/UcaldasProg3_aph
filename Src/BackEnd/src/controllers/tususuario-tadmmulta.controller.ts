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
Tadmmultausuario,
Tadmmulta,
} from '../models';
import {TususuarioRepository} from '../repositories';

export class TususuarioTadmmultaController {
  constructor(
    @repository(TususuarioRepository) protected tususuarioRepository: TususuarioRepository,
  ) { }

  @get('/tususuarios/{id}/tadmmultas', {
    responses: {
      '200': {
        description: 'Array of Tususuario has many Tadmmulta through Tadmmultausuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tadmmulta)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Tadmmulta>,
  ): Promise<Tadmmulta[]> {
    return this.tususuarioRepository.usuarioXidmulta(id).find(filter);
  }

  @post('/tususuarios/{id}/tadmmultas', {
    responses: {
      '200': {
        description: 'create a Tadmmulta model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tadmmulta)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tususuario.prototype.nroDocumento,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmmulta, {
            title: 'NewTadmmultaInTususuario',
            exclude: ['idMulta'],
          }),
        },
      },
    }) tadmmulta: Omit<Tadmmulta, 'idMulta'>,
  ): Promise<Tadmmulta> {
    return this.tususuarioRepository.usuarioXidmulta(id).create(tadmmulta);
  }

  @patch('/tususuarios/{id}/tadmmultas', {
    responses: {
      '200': {
        description: 'Tususuario.Tadmmulta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmmulta, {partial: true}),
        },
      },
    })
    tadmmulta: Partial<Tadmmulta>,
    @param.query.object('where', getWhereSchemaFor(Tadmmulta)) where?: Where<Tadmmulta>,
  ): Promise<Count> {
    return this.tususuarioRepository.usuarioXidmulta(id).patch(tadmmulta, where);
  }

  @del('/tususuarios/{id}/tadmmultas', {
    responses: {
      '200': {
        description: 'Tususuario.Tadmmulta DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tadmmulta)) where?: Where<Tadmmulta>,
  ): Promise<Count> {
    return this.tususuarioRepository.usuarioXidmulta(id).delete(where);
  }
}
