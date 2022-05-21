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
  Tadmtipoinmueble,
  Tadminmueble,
} from '../models';
import {TadmtipoinmuebleRepository} from '../repositories';

export class TadmtipoinmuebleTadminmuebleController {
  constructor(
    @repository(TadmtipoinmuebleRepository) protected tadmtipoinmuebleRepository: TadmtipoinmuebleRepository,
  ) { }

  @get('/tadmtipoinmuebles/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Array of Tadmtipoinmueble has many Tadminmueble',
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
    return this.tadmtipoinmuebleRepository.fk_tadm_inmueble_idTipoInmueble(id).find(filter);
  }

  @post('/tadmtipoinmuebles/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Tadmtipoinmueble model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tadminmueble)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tadmtipoinmueble.prototype.idTipoInmueble,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueble, {
            title: 'NewTadminmuebleInTadmtipoinmueble',
            exclude: ['idInmueble'],
            optional: ['idTipoInmueble']
          }),
        },
      },
    }) tadminmueble: Omit<Tadminmueble, 'idInmueble'>,
  ): Promise<Tadminmueble> {
    return this.tadmtipoinmuebleRepository.fk_tadm_inmueble_idTipoInmueble(id).create(tadminmueble);
  }

  @patch('/tadmtipoinmuebles/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Tadmtipoinmueble.Tadminmueble PATCH success count',
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
    return this.tadmtipoinmuebleRepository.fk_tadm_inmueble_idTipoInmueble(id).patch(tadminmueble, where);
  }

  @del('/tadmtipoinmuebles/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Tadmtipoinmueble.Tadminmueble DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tadminmueble)) where?: Where<Tadminmueble>,
  ): Promise<Count> {
    return this.tadmtipoinmuebleRepository.fk_tadm_inmueble_idTipoInmueble(id).delete(where);
  }
}
