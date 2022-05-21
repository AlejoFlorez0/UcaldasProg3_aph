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
  Tadminmueblesadicionales,
} from '../models';
import {TadminmuebleRepository} from '../repositories';

export class TadminmuebleTadminmueblesadicionalesController {
  constructor(
    @repository(TadminmuebleRepository) protected tadminmuebleRepository: TadminmuebleRepository,
  ) { }

  @get('/tadminmuebles/{id}/tadminmueblesadicionales', {
    responses: {
      '200': {
        description: 'Array of Tadminmueble has many Tadminmueblesadicionales',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tadminmueblesadicionales)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Tadminmueblesadicionales>,
  ): Promise<Tadminmueblesadicionales[]> {
    return this.tadminmuebleRepository.fk_tadm_inmueblesAdicionales_idInmueble(id).find(filter);
  }

  @post('/tadminmuebles/{id}/tadminmueblesadicionales', {
    responses: {
      '200': {
        description: 'Tadminmueble model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tadminmueblesadicionales)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tadminmueble.prototype.idInmueble,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueblesadicionales, {
            title: 'NewTadminmueblesadicionalesInTadminmueble',
            exclude: ['id'],
            optional: ['idInmueble']
          }),
        },
      },
    }) tadminmueblesadicionales: Omit<Tadminmueblesadicionales, 'id'>,
  ): Promise<Tadminmueblesadicionales> {
    return this.tadminmuebleRepository.fk_tadm_inmueblesAdicionales_idInmueble(id).create(tadminmueblesadicionales);
  }

  @patch('/tadminmuebles/{id}/tadminmueblesadicionales', {
    responses: {
      '200': {
        description: 'Tadminmueble.Tadminmueblesadicionales PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tadminmueblesadicionales, {partial: true}),
        },
      },
    })
    tadminmueblesadicionales: Partial<Tadminmueblesadicionales>,
    @param.query.object('where', getWhereSchemaFor(Tadminmueblesadicionales)) where?: Where<Tadminmueblesadicionales>,
  ): Promise<Count> {
    return this.tadminmuebleRepository.fk_tadm_inmueblesAdicionales_idInmueble(id).patch(tadminmueblesadicionales, where);
  }

  @del('/tadminmuebles/{id}/tadminmueblesadicionales', {
    responses: {
      '200': {
        description: 'Tadminmueble.Tadminmueblesadicionales DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tadminmueblesadicionales)) where?: Where<Tadminmueblesadicionales>,
  ): Promise<Count> {
    return this.tadminmuebleRepository.fk_tadm_inmueblesAdicionales_idInmueble(id).delete(where);
  }
}
