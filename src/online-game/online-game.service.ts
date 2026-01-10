import { OnlineGameGateway } from "./online-game.gateway";
import { OnlineGamePresenter } from "./online-game.presenter";

export class OnlineGameService {
    constructor(private readonly onlineGamePresenter: OnlineGamePresenter, private readonly onlineGameGateway: OnlineGameGateway) { }
}
