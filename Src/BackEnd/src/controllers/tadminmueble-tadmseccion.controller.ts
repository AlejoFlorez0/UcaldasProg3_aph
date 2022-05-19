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
  Tadmseccion,
} from '../models';
import {TadminmuebleRepository} from '../repositories';

export class TadminmuebleTadmseccionController {
  constructor(
    @repository(TadminmuebleRepository)
    public tadminmuebleRepository: TadminmuebleRepository,
  ) { }

  @get('/tadminmuebles/{id}/tadmseccion', {
    responses: {
      '200': {
        description: 'Tadmseccion belonging to Tadminmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tadmseccion)},
          },
        },
      },
    },
  })
  async getTadmseccion(
    @param.path.number('id') id: typeof Tadminmueble.prototype.idInmueble,
  ): Promise<Tadmseccion> {
    return this.tadminmuebleRepository.fk_tadm_inmueble_idSeccion(id);
  }
}
