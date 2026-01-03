import { GamePresenter } from "./game.presenter";
import { PlayerDomainModel, PlayersListDomainModel, StarterInstructionsCollectionDomainModel, WordsCollectionDomainModel, WordsDomainModel } from "./models/game.domain.model";

export class GameService {
    constructor(private readonly gamePresenter: GamePresenter) { }

    initGame(numberOfPlayers: number): void {
        const words = this.pickWords();
        const starterInstructions = this.pickStarterInstructions();
        const numberOfUndercovers = Math.floor(numberOfPlayers / 3)
        const undercovers = Array.from({ length: numberOfUndercovers }, () => new PlayerDomainModel(true, words.undercoverWord));
        const civilians = Array.from({ length: numberOfPlayers - numberOfUndercovers }, () => new PlayerDomainModel(false, words.secretWord));
        const playersList = new PlayersListDomainModel([...undercovers, ...civilians].sort(() => Math.random() - 0.5), starterInstructions);
        this.gamePresenter.presentGame(playersList);
    }

    private pickWords(): WordsDomainModel {
        const randomIndex = Math.floor(Math.random() * WordsCollectionDomainModel.length);
        return WordsCollectionDomainModel[randomIndex];
    }

    private pickStarterInstructions(): string {
        const randomIndex = Math.floor(Math.random() * StarterInstructionsCollectionDomainModel.length);
        return StarterInstructionsCollectionDomainModel[randomIndex];
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
