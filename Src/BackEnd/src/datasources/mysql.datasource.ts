import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

const bk_config = {
  name: 'mysql',
  connector: 'mysql',
  url: '',
  host: '34.201.68.65',
  port: 3306,
  user: 'usrAdmin',
  password: 'pVBfVWpd',
  database: 'ucaldas_prog3_aph2'
};

const config = {
  name: 'mysql',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '0000',
  database: 'ucaldas_prog3_aph'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MysqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mysql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysql', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
