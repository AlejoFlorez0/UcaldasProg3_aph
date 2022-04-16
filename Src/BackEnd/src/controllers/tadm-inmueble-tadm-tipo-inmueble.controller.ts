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
  TadmTipoInmueble,
} from '../models';
import {TadmInmuebleRepository} from '../repositories';

export class TadmInmuebleTadmTipoInmuebleController {
  constructor(
    @repository(TadmInmuebleRepository)
    public tadmInmuebleRepository: TadmInmuebleRepository,
  ) { }

  @get('/tadm-inmuebles/{id}/tadm-tipo-inmueble', {
    responses: {
      '200': {
        description: 'TadmTipoInmueble belonging to TadmInmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TadmTipoInmueble)},
          },
        },
      },
    },
  })
  async getTadmTipoInmueble(
    @param.path.number('id') id: typeof TadmInmueble.prototype.idInmueble,
  ): Promise<TadmTipoInmueble> {
    return this.tadmInmuebleRepository.id_TipoInmueble(id);
  }
}
