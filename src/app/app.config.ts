import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HOME_PROVIDER } from '../home/home.provider';
import { ONLINE_GAME_PROVIDER } from '../online-game/online-game.provider';
import { ROUTER_PROVIDERS } from '../router/router.provider';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    HOME_PROVIDER,
    ROUTER_PROVIDERS,
    ONLINE_GAME_PROVIDER
  ]
};
