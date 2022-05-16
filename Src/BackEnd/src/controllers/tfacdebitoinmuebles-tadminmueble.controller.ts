import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Tfacdebitoinmuebles,
  Tadminmueble,
} from '../models';
import {TfacdebitoinmueblesRepository} from '../repositories';

export class TfacdebitoinmueblesTadminmuebleController {
  constructor(
    @repository(TfacdebitoinmueblesRepository)
    public tfacdebitoinmueblesRepository: TfacdebitoinmueblesRepository,
  ) { }

  @get('/tfacdebitoinmuebles/{id}/tadminmueble', {
    responses: {
      '200': {
        description: 'Tadminmueble belonging to Tfacdebitoinmuebles',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tadminmueble)},
          },
        },
      },
    },
  })
  async getTadminmueble(
    @param.path.number('id') id: typeof Tfacdebitoinmuebles.prototype.idDebitoInmueble,
  ): Promise<Tadminmueble> {
    return this.tfacdebitoinmueblesRepository.fk_tfac_debitoInmuebles_idInmueble(id);
  }
}
