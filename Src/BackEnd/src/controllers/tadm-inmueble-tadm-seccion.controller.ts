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
  TadmSeccion,
} from '../models';
import {TadmInmuebleRepository} from '../repositories';

export class TadmInmuebleTadmSeccionController {
  constructor(
    @repository(TadmInmuebleRepository)
    public tadmInmuebleRepository: TadmInmuebleRepository,
  ) { }

  @get('/tadm-inmuebles/{id}/tadm-seccion', {
    responses: {
      '200': {
        description: 'TadmSeccion belonging to TadmInmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TadmSeccion)},
          },
        },
      },
    },
  })
  async getTadmSeccion(
    @param.path.number('id') id: typeof TadmInmueble.prototype.idInmueble,
  ): Promise<TadmSeccion> {
    return this.tadmInmuebleRepository.idSeccions(id);
  }
}
