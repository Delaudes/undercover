import { InjectionToken } from "@angular/core";

export interface RouterWrapper {
    navigateTo(path: string): void;
}

export const ROUTER_TOKEN = new InjectionToken<RouterWrapper>('ROUTER');
