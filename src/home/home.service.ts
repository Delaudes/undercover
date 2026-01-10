import { OnlineGameGateway } from "../online-game/online-game.gateway";
import { HomePresenter } from "./home.presenter";

export class HomeService {
    constructor(private readonly homePresenter: HomePresenter, private readonly onlineGameGateway: OnlineGameGateway) { }

    addPlayer(): void {
        this.homePresenter.incrementNumberOfPlayers();
    }

    removePlayer(): void {
        this.homePresenter.decrementNumberOfPlayers();
    }

    async createOnlineGame(idGame: string, numberOfPlayers: number): Promise<boolean> {
        this.homePresenter.startLoadingOnlineGame();
        try {
            await this.onlineGameGateway.createOnlineGame(idGame, numberOfPlayers);
            return true
        } catch {
            this.homePresenter.presentErrorOnlineGame()
            return false;
        } finally {
            this.homePresenter.stopLoadingOnlineGame();
        }
    }
}