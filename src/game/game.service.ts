import { GameGateway } from "./game.gateway";
import { GamePresenter } from "./game.presenter";

export class GameService {
    constructor(private readonly gamePresenter: GamePresenter, private readonly gameGateway: GameGateway) { }

    initGame(numberOfPlayers: number): void {
        const playersList = this.gameGateway.getPlayersList(numberOfPlayers);
        this.gamePresenter.presentGame(playersList);
    }

    revealWord(): void {
        this.gamePresenter.presentWord();
    }

    goToNextPlayer(): void {
        this.gamePresenter.presentNextPlayer();
    }

    revealStarterInstructions(): void {
        this.gamePresenter.presentStarterInstructions();
    }
}
