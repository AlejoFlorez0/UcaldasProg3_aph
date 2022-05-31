import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Tususuario,
  Tusrol,
} from '../models';
import {TususuarioRepository} from '../repositories';

export class TususuarioTusrolController {
  constructor(
    @repository(TususuarioRepository)
    public tususuarioRepository: TususuarioRepository,
  ) { }

  @get('/tususuarios/{id}/tusrol', {
    responses: {
      '200': {
        description: 'Tusrol belonging to Tususuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tusrol)},
          },
        },
      },
    },
  })
  async getTusrol(
    @param.path.number('id') id: typeof Tususuario.prototype.nroDocumento,
  ): Promise<Tusrol> {
    return this.tususuarioRepository.fk_tusrol_rolid(id);
  }
}
