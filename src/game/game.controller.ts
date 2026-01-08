import { Path } from "../app/app.routes";
import { RouterWrapper } from "../router/router.wrapper";
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
        private readonly routerWrapper: RouterWrapper
    ) {
        this.initGame();
    }

    initGame(): void {
        const numberOfPlayers = this.routerWrapper.getParamValue('numberOfPlayers')
            ? Number(this.routerWrapper.getParamValue('numberOfPlayers'))
            : 4;
        this.gameService.initGame(numberOfPlayers);
    }

    navigateToHome(): void {
        this.routerWrapper.navigate(Path.Home);
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
