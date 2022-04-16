import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  TfacDebitoInmueble,
  TadmInmueble,
} from '../models';
import {TfacDebitoInmuebleRepository} from '../repositories';

export class TfacDebitoInmuebleTadmInmuebleController {
  constructor(
    @repository(TfacDebitoInmuebleRepository)
    public tfacDebitoInmuebleRepository: TfacDebitoInmuebleRepository,
  ) { }

  @get('/tfac-debito-inmuebles/{id}/tadm-inmueble', {
    responses: {
      '200': {
        description: 'TadmInmueble belonging to TfacDebitoInmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TadmInmueble)},
          },
        },
      },
    },
  })
  async getTadmInmueble(
    @param.path.number('id') id: typeof TfacDebitoInmueble.prototype.idDebitoInmueble,
  ): Promise<TadmInmueble> {
    return this.tfacDebitoInmuebleRepository.InmuebleDebito(id);
  }
}
