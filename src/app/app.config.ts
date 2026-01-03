import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HOME_PROVIDER } from '../home/home.provider';
import { ROUTER_PROVIDERS } from '../router/router.provider';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    HOME_PROVIDER,
    ROUTER_PROVIDERS,
  ]
};
