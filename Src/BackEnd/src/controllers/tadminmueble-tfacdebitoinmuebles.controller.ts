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
  Tadminmueble,
  Tfacdebitoinmuebles,
} from '../models';
import {TadminmuebleRepository} from '../repositories';

export class TadminmuebleTfacdebitoinmueblesController {
  constructor(
    @repository(TadminmuebleRepository) protected tadminmuebleRepository: TadminmuebleRepository,
  ) { }

  @get('/tadminmuebles/{id}/tfacdebitoinmuebles', {
    responses: {
      '200': {
        description: 'Array of Tadminmueble has many Tfacdebitoinmuebles',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tfacdebitoinmuebles)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Tfacdebitoinmuebles>,
  ): Promise<Tfacdebitoinmuebles[]> {
    return this.tadminmuebleRepository.fk_tfac_debitoInmuebles_idInmueble(id).find(filter);
  }

  @post('/tadminmuebles/{id}/tfacdebitoinmuebles', {
    responses: {
      '200': {
        description: 'Tadminmueble model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tfacdebitoinmuebles)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tadminmueble.prototype.idInmueble,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tfacdebitoinmuebles, {
            title: 'NewTfacdebitoinmueblesInTadminmueble',
            exclude: ['idDebitoInmueble'],
            optional: ['idInmueble']
          }),
        },
      },
    }) tfacdebitoinmuebles: Omit<Tfacdebitoinmuebles, 'idDebitoInmueble'>,
  ): Promise<Tfacdebitoinmuebles> {
    return this.tadminmuebleRepository.fk_tfac_debitoInmuebles_idInmueble(id).create(tfacdebitoinmuebles);
  }

  @patch('/tadminmuebles/{id}/tfacdebitoinmuebles', {
    responses: {
      '200': {
        description: 'Tadminmueble.Tfacdebitoinmuebles PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tfacdebitoinmuebles, {partial: true}),
        },
      },
    })
    tfacdebitoinmuebles: Partial<Tfacdebitoinmuebles>,
    @param.query.object('where', getWhereSchemaFor(Tfacdebitoinmuebles)) where?: Where<Tfacdebitoinmuebles>,
  ): Promise<Count> {
    return this.tadminmuebleRepository.fk_tfac_debitoInmuebles_idInmueble(id).patch(tfacdebitoinmuebles, where);
  }

  @del('/tadminmuebles/{id}/tfacdebitoinmuebles', {
    responses: {
      '200': {
        description: 'Tadminmueble.Tfacdebitoinmuebles DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tfacdebitoinmuebles)) where?: Where<Tfacdebitoinmuebles>,
  ): Promise<Count> {
    return this.tadminmuebleRepository.fk_tfac_debitoInmuebles_idInmueble(id).delete(where);
  }
}
