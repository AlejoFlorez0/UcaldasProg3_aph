import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import { AuthenticationComponent, registerAuthenticationStrategy } from '@loopback/authentication';

import path from 'path';
import { MySequence } from './sequence';
import { administratorStrategy } from './strategies/administrator';
import { ownerStrategy } from './strategies/owner';
import { accountantStrategy } from './strategies/accountant';
import { auditorStrategy } from './strategies/auditor';
import { watchmenStrategy } from './strategies/watchmen';
import { residentsStrategy } from './strategies/residents';
import { housekeeperStrategy } from './strategies/housekeeper';

export { ApplicationConfig };

export class App extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    // Mount authentication system
    registerAuthenticationStrategy(this, administratorStrategy);
    registerAuthenticationStrategy(this, ownerStrategy);
    registerAuthenticationStrategy(this, accountantStrategy);
    registerAuthenticationStrategy(this, auditorStrategy);
    registerAuthenticationStrategy(this, watchmenStrategy);
    registerAuthenticationStrategy(this, residentsStrategy);
    registerAuthenticationStrategy(this, housekeeperStrategy);

    this.component(AuthenticationComponent);

  }
}
