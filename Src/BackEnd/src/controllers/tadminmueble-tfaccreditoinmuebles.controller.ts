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
  Tfaccreditoinmuebles,
} from '../models';
import {TadminmuebleRepository} from '../repositories';

export class TadminmuebleTfaccreditoinmueblesController {
  constructor(
    @repository(TadminmuebleRepository) protected tadminmuebleRepository: TadminmuebleRepository,
  ) { }

  @get('/tadminmuebles/{id}/tfaccreditoinmuebles', {
    responses: {
      '200': {
        description: 'Array of Tadminmueble has many Tfaccreditoinmuebles',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tfaccreditoinmuebles)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Tfaccreditoinmuebles>,
  ): Promise<Tfaccreditoinmuebles[]> {
    return this.tadminmuebleRepository.fk_tfac_creditoInmuebles_idInmueble(id).find(filter);
  }

  @post('/tadminmuebles/{id}/tfaccreditoinmuebles', {
    responses: {
      '200': {
        description: 'Tadminmueble model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tfaccreditoinmuebles)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tadminmueble.prototype.idInmueble,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tfaccreditoinmuebles, {
            title: 'NewTfaccreditoinmueblesInTadminmueble',
            exclude: ['idCreditoInmueble'],
            optional: ['idInmueble']
          }),
        },
      },
    }) tfaccreditoinmuebles: Omit<Tfaccreditoinmuebles, 'idCreditoInmueble'>,
  ): Promise<Tfaccreditoinmuebles> {
    return this.tadminmuebleRepository.fk_tfac_creditoInmuebles_idInmueble(id).create(tfaccreditoinmuebles);
  }

  @patch('/tadminmuebles/{id}/tfaccreditoinmuebles', {
    responses: {
      '200': {
        description: 'Tadminmueble.Tfaccreditoinmuebles PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tfaccreditoinmuebles, {partial: true}),
        },
      },
    })
    tfaccreditoinmuebles: Partial<Tfaccreditoinmuebles>,
    @param.query.object('where', getWhereSchemaFor(Tfaccreditoinmuebles)) where?: Where<Tfaccreditoinmuebles>,
  ): Promise<Count> {
    return this.tadminmuebleRepository.fk_tfac_creditoInmuebles_idInmueble(id).patch(tfaccreditoinmuebles, where);
  }

  @del('/tadminmuebles/{id}/tfaccreditoinmuebles', {
    responses: {
      '200': {
        description: 'Tadminmueble.Tfaccreditoinmuebles DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tfaccreditoinmuebles)) where?: Where<Tfaccreditoinmuebles>,
  ): Promise<Count> {
    return this.tadminmuebleRepository.fk_tfac_creditoInmuebles_idInmueble(id).delete(where);
  }
}
