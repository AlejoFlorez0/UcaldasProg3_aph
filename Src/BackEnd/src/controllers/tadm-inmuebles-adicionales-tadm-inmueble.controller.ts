import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  TadmInmueblesAdicionales,
  TadmInmueble,
} from '../models';
import {TadmInmueblesAdicionalesRepository} from '../repositories';

export class TadmInmueblesAdicionalesTadmInmuebleController {
  constructor(
    @repository(TadmInmueblesAdicionalesRepository)
    public tadmInmueblesAdicionalesRepository: TadmInmueblesAdicionalesRepository,
  ) { }

  @get('/tadm-inmuebles-adicionales/{id}/tadm-inmueble', {
    responses: {
      '200': {
        description: 'TadmInmueble belonging to TadmInmueblesAdicionales',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TadmInmueble)},
          },
        },
      },
    },
  })
  async getTadmInmueble(
    @param.path.number('id') id: typeof TadmInmueblesAdicionales.prototype.id,
  ): Promise<TadmInmueble> {
    return this.tadmInmueblesAdicionalesRepository.InmuebleExtra(id);
  }
}
