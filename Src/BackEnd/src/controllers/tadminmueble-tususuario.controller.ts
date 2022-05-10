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
  Tususuario,
} from '../models';
import {TadminmuebleRepository} from '../repositories';

export class TadminmuebleTususuarioController {
  constructor(
    @repository(TadminmuebleRepository)
    public tadminmuebleRepository: TadminmuebleRepository,
  ) { }

  @get('/tadminmuebles/{id}/tususuario', {
    responses: {
      '200': {
        description: 'Tususuario belonging to Tadminmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tususuario)},
          },
        },
      },
    },
  })
  async getTususuario(
    @param.path.number('id') id: typeof Tadminmueble.prototype.idInmueble,
  ): Promise<Tususuario> {
    return this.tadminmuebleRepository.fk_tadm_inmueble_nroDocumentoHabitante(id);
  }
}
