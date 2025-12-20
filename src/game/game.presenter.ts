import { GameView } from "./game.view";
import { PlayersListDomainModel } from "./models/game.domain.model";

export class GamePresenter {

    constructor(private gameView: GameView) { }

    presentGame(playersList: PlayersListDomainModel): void {
        const playerViewModels = playersList.players.map((player, index) => ({
            position: `${index + 1}/${playersList.players.length}`,
            isUndercover: player.isUndercover,
            word: player.word
        }));
        this.gameView.update({
            players: playerViewModels,
            currentPlayer: playerViewModels[0],
            isRevealWordButtonDisplayed: true,
            isWordDisplayed: false,
            isGoToNextButtonDisplayed: false,
            isRevealStarterInstructionsButtonDisplayed: false,
            isStarterInstructionsDisplayed: false,
        });
    }

    presentWord(): void {
        const currentViewModel = this.gameView.viewModel.get();
        const currentIndex = currentViewModel.players.indexOf(currentViewModel.currentPlayer);
        if (currentIndex + 1 === currentViewModel.players.length) {
            this.gameView.update({
                isWordDisplayed: true,
                isRevealWordButtonDisplayed: false,
                isRevealStarterInstructionsButtonDisplayed: true
            });
            return;
        }
        this.gameView.update({
            isWordDisplayed: true,
            isRevealWordButtonDisplayed: false,
            isGoToNextButtonDisplayed: true
        });
    }

    presentNextPlayer(): void {
        const currentViewModel = this.gameView.viewModel.get();
        const currentIndex = currentViewModel.players.indexOf(currentViewModel.currentPlayer);
        this.gameView.update({
            isWordDisplayed: false,
            currentPlayer: currentViewModel.players[currentIndex + 1],
            isRevealWordButtonDisplayed: true,
            isGoToNextButtonDisplayed: false
        });
    }

    presentStarterInstructions() {
        this.gameView.update({
            isStarterInstructionsDisplayed: true
        });
    }
}
