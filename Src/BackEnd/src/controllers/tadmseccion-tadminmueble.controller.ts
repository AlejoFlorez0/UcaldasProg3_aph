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
  Tadmseccion,
  Tadminmueble,
} from '../models';
import {TadmseccionRepository} from '../repositories';

export class TadmseccionTadminmuebleController {
  constructor(
    @repository(TadmseccionRepository) protected tadmseccionRepository: TadmseccionRepository,
  ) { }

  @get('/tadmseccions/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Array of Tadmseccion has many Tadminmueble',
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
    return this.tadmseccionRepository.fk_tadm_inmueble_idSeccion(id).find(filter);
  }

  @post('/tadmseccions/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Tadmseccion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tadminmueble)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tadmseccion.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueble, {
            title: 'NewTadminmuebleInTadmseccion',
            exclude: ['idInmueble'],
            optional: ['idSeccion']
          }),
        },
      },
    }) tadminmueble: Omit<Tadminmueble, 'idInmueble'>,
  ): Promise<Tadminmueble> {
    return this.tadmseccionRepository.fk_tadm_inmueble_idSeccion(id).create(tadminmueble);
  }

  @patch('/tadmseccions/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Tadmseccion.Tadminmueble PATCH success count',
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
    return this.tadmseccionRepository.fk_tadm_inmueble_idSeccion(id).patch(tadminmueble, where);
  }

  @del('/tadmseccions/{id}/tadminmuebles', {
    responses: {
      '200': {
        description: 'Tadmseccion.Tadminmueble DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tadminmueble)) where?: Where<Tadminmueble>,
  ): Promise<Count> {
    return this.tadmseccionRepository.fk_tadm_inmueble_idSeccion(id).delete(where);
  }
}
