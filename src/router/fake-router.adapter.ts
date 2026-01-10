import { RouterGateway } from "./router.gateway";

export class FakeRouterAdapter implements RouterGateway {
    lastNavigatedPath?: string;
    params: Record<string, string> = {};

    navigate(path: string): void {
        this.lastNavigatedPath = path;
    }

    getParamValue(paramName: string): string | undefined {
        return this.params[paramName];
    }
}