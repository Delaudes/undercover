import { Path } from "../app/app.routes";
import { RouterGateway } from "../router/router.gateway";
import { GameService } from "./game.service";

export interface IGameController {
    navigateToHome(): void;
    initGame(): void;
    revealWord(): void;
    goToNextPlayer(): void;
    revealStarterInstructions(): void;
}

export class GameController implements IGameController {
    constructor(
        private readonly gameService: GameService,
        private readonly routerGateway: RouterGateway
    ) {
        this.initGame();
    }

    initGame(): void {
        const numberOfPlayers = this.routerGateway.getParamValue('numberOfPlayers')
            ? Number(this.routerGateway.getParamValue('numberOfPlayers'))
            : 4;
        this.gameService.initGame(numberOfPlayers);
    }

    navigateToHome(): void {
        this.routerGateway.navigate(Path.Home);
    }

    revealWord(): void {
        this.gameService.revealWord();
    }

    goToNextPlayer(): void {
        this.gameService.goToNextPlayer();
    }

    revealStarterInstructions(): void {
        this.gameService.revealStarterInstructions();
    }

}
