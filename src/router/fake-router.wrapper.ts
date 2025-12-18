import { RouterWrapper } from "./router.wrapper";

export class FakeRouterWrapper implements RouterWrapper {
    lastNavigatedPath?: string;

    navigateTo(path: string): void {
        this.lastNavigatedPath = path;
    }
}