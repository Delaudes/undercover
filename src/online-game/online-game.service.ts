import { OnlineGameGateway } from "./online-game.gateway";
import { OnlineGamePresenter } from "./online-game.presenter";

export class OnlineGameService {
    constructor(private readonly onlineGamePresenter: OnlineGamePresenter, private readonly onlineGameGateway: OnlineGameGateway) { }

    async loadOnlineGame(idGame: string): Promise<void> {
        try {
            const onlineGame = await this.onlineGameGateway.fetchOnlineGame(idGame);
            this.onlineGamePresenter.presentOnlineGame(onlineGame);
        } catch {
            this.onlineGamePresenter.presentError();
        } finally {
            this.onlineGamePresenter.stopLoading();
        }
    }
}
