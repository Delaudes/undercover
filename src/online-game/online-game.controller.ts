import { Path } from "../app/app.routes";
import { RouterGateway } from "../router/router.gateway";
import { OnlineGameService } from "./online-game.service";

export interface IOnlineGameController {
    navigateToHome(): void;
}

export class OnlineGameController implements IOnlineGameController {
    constructor(
        private readonly onlineGameService: OnlineGameService,
        private readonly routerGateway: RouterGateway
    ) {
    }

    navigateToHome(): void {
        this.routerGateway.navigate(Path.Home);
    }
}
