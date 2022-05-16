import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Tfaccreditoinmuebles,
  Tadminmueble,
} from '../models';
import {TfaccreditoinmueblesRepository} from '../repositories';

export class TfaccreditoinmueblesTadminmuebleController {
  constructor(
    @repository(TfaccreditoinmueblesRepository)
    public tfaccreditoinmueblesRepository: TfaccreditoinmueblesRepository,
  ) { }

  @get('/tfaccreditoinmuebles/{id}/tadminmueble', {
    responses: {
      '200': {
        description: 'Tadminmueble belonging to Tfaccreditoinmuebles',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tadminmueble)},
          },
        },
      },
    },
  })
  async getTadminmueble(
    @param.path.number('id') id: typeof Tfaccreditoinmuebles.prototype.idCreditoInmueble,
  ): Promise<Tadminmueble> {
    return this.tfaccreditoinmueblesRepository.fk_tfac_creditoInmuebles_idInmueble(id);
  }
}
