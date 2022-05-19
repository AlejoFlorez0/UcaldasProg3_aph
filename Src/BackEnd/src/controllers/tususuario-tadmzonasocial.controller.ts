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
Tadmzonasocialusuario,
Tadmzonasocial,
} from '../models';
import {TususuarioRepository} from '../repositories';

export class TususuarioTadmzonasocialController {
  constructor(
    @repository(TususuarioRepository) protected tususuarioRepository: TususuarioRepository,
  ) { }

  @get('/tususuarios/{id}/tadmzonasocials', {
    responses: {
      '200': {
        description: 'Array of Tususuario has many Tadmzonasocial through Tadmzonasocialusuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tadmzonasocial)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Tadmzonasocial>,
  ): Promise<Tadmzonasocial[]> {
    return this.tususuarioRepository.usuarioXzonasocial(id).find(filter);
  }

  @post('/tususuarios/{id}/tadmzonasocials', {
    responses: {
      '200': {
        description: 'create a Tadmzonasocial model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tadmzonasocial)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tususuario.prototype.nroDocumento,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmzonasocial, {
            title: 'NewTadmzonasocialInTususuario',
            exclude: ['idZonaSocial'],
          }),
        },
      },
    }) tadmzonasocial: Omit<Tadmzonasocial, 'idZonaSocial'>,
  ): Promise<Tadmzonasocial> {
    return this.tususuarioRepository.usuarioXzonasocial(id).create(tadmzonasocial);
  }

  @patch('/tususuarios/{id}/tadmzonasocials', {
    responses: {
      '200': {
        description: 'Tususuario.Tadmzonasocial PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadmzonasocial, {partial: true}),
        },
      },
    })
    tadmzonasocial: Partial<Tadmzonasocial>,
    @param.query.object('where', getWhereSchemaFor(Tadmzonasocial)) where?: Where<Tadmzonasocial>,
  ): Promise<Count> {
    return this.tususuarioRepository.usuarioXzonasocial(id).patch(tadmzonasocial, where);
  }

  @del('/tususuarios/{id}/tadmzonasocials', {
    responses: {
      '200': {
        description: 'Tususuario.Tadmzonasocial DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tadmzonasocial)) where?: Where<Tadmzonasocial>,
  ): Promise<Count> {
    return this.tususuarioRepository.usuarioXzonasocial(id).delete(where);
  }
}
