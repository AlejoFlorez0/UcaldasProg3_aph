import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Tadminmueble,
  Tadmtipoinmueble,
} from '../models';
import {TadminmuebleRepository} from '../repositories';

export class TadminmuebleTadmtipoinmuebleController {
  constructor(
    @repository(TadminmuebleRepository)
    public tadminmuebleRepository: TadminmuebleRepository,
  ) { }

  @get('/tadminmuebles/{id}/tadmtipoinmueble', {
    responses: {
      '200': {
        description: 'Tadmtipoinmueble belonging to Tadminmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tadmtipoinmueble)},
          },
        },
      },
    },
  })
  async getTadmtipoinmueble(
    @param.path.number('id') id: typeof Tadminmueble.prototype.idInmueble,
  ): Promise<Tadmtipoinmueble> {
    return this.tadminmuebleRepository.fk_tadm_inmueble_idTipoInmueble(id);
  }
}
