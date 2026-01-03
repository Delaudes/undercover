import { RouterWrapper } from "./router.wrapper";

export class FakeRouterWrapper implements RouterWrapper {
    lastNavigatedPath?: string;
    params: Record<string, string> = {};

    navigate(path: string): void {
        this.lastNavigatedPath = path;
    }

    getParamValue(paramName: string): string | undefined {
        return this.params[paramName];
    }
}