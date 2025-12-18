import { HomePresenter } from "./home.presenter";

export class HomeService {
    constructor(private readonly homePresenter: HomePresenter) { }

    addPlayer(): void {
        this.homePresenter.incrementNumberOfPlayers();
    }

    removePlayer(): void {
        this.homePresenter.decrementNumberOfPlayers();
    }
}