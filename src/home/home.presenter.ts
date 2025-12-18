import { HomeView } from "./home.view";

const MAX_PLAYERS = 20;
const MIN_PLAYERS = 3;

export class HomePresenter {
    constructor(private homeView: HomeView) { }

    incrementNumberOfPlayers(): void {
        const currentPlayers = this.homeView.viewModel.get().numberOfPlayers;
        this.homeView.update({
            numberOfPlayers: currentPlayers + 1,
            canAddPlayer: currentPlayers + 1 < MAX_PLAYERS,
            canRemovePlayer: true,
        })
    }

    decrementNumberOfPlayers(): void {
        const currentPlayers = this.homeView.viewModel.get().numberOfPlayers;
        this.homeView.update({
            numberOfPlayers: currentPlayers - 1,
            canRemovePlayer: currentPlayers - 1 > MIN_PLAYERS,
            canAddPlayer: true,
        })
    }

}