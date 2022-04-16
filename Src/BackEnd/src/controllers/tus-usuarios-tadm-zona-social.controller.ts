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
TusUsuarios,
TadmZonaSocialUsuario,
TadmZonaSocial,
} from '../models';
import {TusUsuariosRepository} from '../repositories';

export class TusUsuariosTadmZonaSocialController {
  constructor(
    @repository(TusUsuariosRepository) protected tusUsuariosRepository: TusUsuariosRepository,
  ) { }

  @get('/tus-usuarios/{id}/tadm-zona-socials', {
    responses: {
      '200': {
        description: 'Array of TusUsuarios has many TadmZonaSocial through TadmZonaSocialUsuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TadmZonaSocial)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<TadmZonaSocial>,
  ): Promise<TadmZonaSocial[]> {
    return this.tusUsuariosRepository.ZonaSociales(id).find(filter);
  }

  @post('/tus-usuarios/{id}/tadm-zona-socials', {
    responses: {
      '200': {
        description: 'create a TadmZonaSocial model instance',
        content: {'application/json': {schema: getModelSchemaRef(TadmZonaSocial)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TusUsuarios.prototype.nroDocumento,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmZonaSocial, {
            title: 'NewTadmZonaSocialInTusUsuarios',
            exclude: ['idZonaSocial'],
          }),
        },
      },
    }) tadmZonaSocial: Omit<TadmZonaSocial, 'idZonaSocial'>,
  ): Promise<TadmZonaSocial> {
    return this.tusUsuariosRepository.ZonaSociales(id).create(tadmZonaSocial);
  }

  @patch('/tus-usuarios/{id}/tadm-zona-socials', {
    responses: {
      '200': {
        description: 'TusUsuarios.TadmZonaSocial PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TadmZonaSocial, {partial: true}),
        },
      },
    })
    tadmZonaSocial: Partial<TadmZonaSocial>,
    @param.query.object('where', getWhereSchemaFor(TadmZonaSocial)) where?: Where<TadmZonaSocial>,
  ): Promise<Count> {
    return this.tusUsuariosRepository.ZonaSociales(id).patch(tadmZonaSocial, where);
  }

  @del('/tus-usuarios/{id}/tadm-zona-socials', {
    responses: {
      '200': {
        description: 'TusUsuarios.TadmZonaSocial DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(TadmZonaSocial)) where?: Where<TadmZonaSocial>,
  ): Promise<Count> {
    return this.tusUsuariosRepository.ZonaSociales(id).delete(where);
  }
}
