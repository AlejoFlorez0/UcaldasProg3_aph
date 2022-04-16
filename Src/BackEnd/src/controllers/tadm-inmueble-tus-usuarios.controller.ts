import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  TadmInmueble,
  TusUsuarios,
} from '../models';
import {TadmInmuebleRepository} from '../repositories';

export class TadmInmuebleTusUsuariosController {
  constructor(
    @repository(TadmInmuebleRepository)
    public tadmInmuebleRepository: TadmInmuebleRepository,
  ) { }

  @get('/tadm-inmuebles/{id}/tus-usuarios', {
    responses: {
      '200': {
        description: 'TusUsuarios belonging to TadmInmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TusUsuarios)},
          },
        },
      },
    },
  })
  async getTusUsuarios(
    @param.path.number('id') id: typeof TadmInmueble.prototype.idInmueble,
  ): Promise<TusUsuarios> {
    return this.tadmInmuebleRepository.idPropiedario(id);
  }
}
