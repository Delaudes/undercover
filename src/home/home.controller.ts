import { Path } from "../app/app.routes";
import { RouterGateway } from "../router/router.gateway";
import { HomeService } from "./home.service";

export interface IHomeController {
    addPlayer(): void;
    removePlayer(): void;
    navigateToGame(numberOfPlayers: number): void;
}

export class HomeController implements IHomeController {
    constructor(private readonly homeService: HomeService, private readonly routerGateway: RouterGateway) { }

    addPlayer(): void {
        this.homeService.addPlayer();
    }

    removePlayer(): void {
        this.homeService.removePlayer();
    }

    navigateToGame(numberOfPlayers: number): void {
        this.routerGateway.navigate(Path.Game.replace(':numberOfPlayers', numberOfPlayers.toString()));
    }
}

