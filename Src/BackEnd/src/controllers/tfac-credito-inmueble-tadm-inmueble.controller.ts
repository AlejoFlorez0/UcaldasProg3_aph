import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  TfacCreditoInmueble,
  TadmInmueble,
} from '../models';
import {TfacCreditoInmuebleRepository} from '../repositories';

export class TfacCreditoInmuebleTadmInmuebleController {
  constructor(
    @repository(TfacCreditoInmuebleRepository)
    public tfacCreditoInmuebleRepository: TfacCreditoInmuebleRepository,
  ) { }

  @get('/tfac-credito-inmuebles/{id}/tadm-inmueble', {
    responses: {
      '200': {
        description: 'TadmInmueble belonging to TfacCreditoInmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TadmInmueble)},
          },
        },
      },
    },
  })
  async getTadmInmueble(
    @param.path.number('id') id: typeof TfacCreditoInmueble.prototype.idCreditoInmueble,
  ): Promise<TadmInmueble> {
    return this.tfacCreditoInmuebleRepository.CreditoInmueble(id);
  }
}
