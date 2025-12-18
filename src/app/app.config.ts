import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AngularRouterWrapper } from '../router/angular-router.wrapper';
import { ROUTER_TOKEN } from '../router/router.wrapper';
import { LocalStorageWrapper } from '../storage/local-storage.wrapper';
import { STORAGE_TOKEN } from '../storage/storage.wrapper';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: ROUTER_TOKEN,
      useClass: AngularRouterWrapper
    },
    {
      provide: STORAGE_TOKEN,
      useClass: LocalStorageWrapper
    }
  ]
};
