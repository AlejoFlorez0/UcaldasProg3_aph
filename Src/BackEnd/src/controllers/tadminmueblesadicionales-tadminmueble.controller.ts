import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Tadminmueblesadicionales,
  Tadminmueble,
} from '../models';
import {TadminmueblesadicionalesRepository} from '../repositories';

export class TadminmueblesadicionalesTadminmuebleController {
  constructor(
    @repository(TadminmueblesadicionalesRepository)
    public tadminmueblesadicionalesRepository: TadminmueblesadicionalesRepository,
  ) { }

  @get('/tadminmueblesadicionales/{id}/tadminmueble', {
    responses: {
      '200': {
        description: 'Tadminmueble belonging to Tadminmueblesadicionales',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tadminmueble)},
          },
        },
      },
    },
  })
  async getTadminmueble(
    @param.path.number('id') id: typeof Tadminmueblesadicionales.prototype.id,
  ): Promise<Tadminmueble> {
    return this.tadminmueblesadicionalesRepository.fk_tadm_inmueblesAdicionales_idInmueble(id);
  }
}
