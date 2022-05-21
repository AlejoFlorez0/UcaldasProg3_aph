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
  Tadminmueble,
} from '../models';
import {TususuarioRepository} from '../repositories';

export class TususuarioTadminmuebleController {
  constructor(
    @repository(TususuarioRepository) protected tususuarioRepository: TususuarioRepository,
  ) { }

  @get('/tususuarios/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Array of Tususuario has many Tadminmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tadminmueble)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Tadminmueble>,
  ): Promise<Tadminmueble[]> {
    return this.tususuarioRepository.fk_tadm_inmueble_nroDocumentoPropietario(id).find(filter);
  }

  @post('/tususuarios/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Tususuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tadminmueble)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tususuario.prototype.nroDocumento,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueble, {
            title: 'NewTadminmuebleInTususuario',
            exclude: ['idInmueble'],
            optional: ['nroDocumentoPropietario']
          }),
        },
      },
    }) tadminmueble: Omit<Tadminmueble, 'idInmueble'>,
  ): Promise<Tadminmueble> {
    return this.tususuarioRepository.fk_tadm_inmueble_nroDocumentoPropietario(id).create(tadminmueble);
  }

  @patch('/tususuarios/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Tususuario.Tadminmueble PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueble, {partial: true}),
        },
      },
    })
    tadminmueble: Partial<Tadminmueble>,
    @param.query.object('where', getWhereSchemaFor(Tadminmueble)) where?: Where<Tadminmueble>,
  ): Promise<Count> {
    return this.tususuarioRepository.fk_tadm_inmueble_nroDocumentoPropietario(id).patch(tadminmueble, where);
  }

  @del('/tususuarios/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Tususuario.Tadminmueble DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tadminmueble)) where?: Where<Tadminmueble>,
  ): Promise<Count> {
    return this.tususuarioRepository.fk_tadm_inmueble_nroDocumentoPropietario(id).delete(where);
  }
}
