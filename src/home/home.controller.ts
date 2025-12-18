import { Path } from "../app/app.routes";
import { RouterWrapper } from "../router/router.wrapper";
import { HomeService } from "./home.service";

export interface IHomeController {
    addPlayer(): void;
    removePlayer(): void;
    navigateToGame(): void;
}

export class HomeController implements IHomeController {
    constructor(private readonly homeService: HomeService, private readonly routerWrapper: RouterWrapper) { }

    addPlayer(): void {
        this.homeService.addPlayer();
    }

    removePlayer(): void {
        this.homeService.removePlayer();
    }

    navigateToGame(): void {
        this.routerWrapper.navigateTo(Path.Game);
    }
}

