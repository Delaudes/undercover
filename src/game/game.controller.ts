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
        this.gameService.initGame(5);
    }

    navigateToHome(): void {
        this.routerWrapper.navigateTo(Path.Home);
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
