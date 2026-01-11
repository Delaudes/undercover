import { OnlineGameDomainModel } from "./models/online-game.domain.model";

export interface OnlineGameGateway {
    createOnlineGame(idGame: string, numberOfPlayers: number): Promise<void>;
    fetchOnlineGame(idGame: string): Promise<OnlineGameDomainModel>;
}
