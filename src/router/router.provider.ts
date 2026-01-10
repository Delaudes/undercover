import { InjectionToken } from "@angular/core";
import { AngularRouterAdapter } from "./angular-router.adapter";
import { RouterGateway } from "./router.gateway";

export const ROUTER_TOKEN = new InjectionToken<RouterGateway>('ROUTER_TOKEN');

export const ROUTER_PROVIDERS = [
    {
        provide: ROUTER_TOKEN,
        useClass: AngularRouterAdapter
    },
]