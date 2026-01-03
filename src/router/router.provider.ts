import { InjectionToken } from "@angular/core";
import { AngularRouterWrapper } from "./angular-router.wrapper";
import { RouterWrapper } from "./router.wrapper";

export const ROUTER_TOKEN = new InjectionToken<RouterWrapper>('ROUTER_TOKEN');

export const ROUTER_PROVIDERS = [
    {
        provide: ROUTER_TOKEN,
        useClass: AngularRouterWrapper
    },
]